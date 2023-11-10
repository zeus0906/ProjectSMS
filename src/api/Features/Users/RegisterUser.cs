using api.Entities;
using api.Entities.Base;
using api.Entities.ValueObjects;
using api.Features.Users.Errors;
using api.Services.Interfaces;
using api.Utilities;
using FluentResults;
using Microsoft.EntityFrameworkCore;

namespace api.Features.Users;

public partial class UserService
{
    public async Task<Result<UserResponse>> Register(RegisterUserCommand request)
    {
        // Check the uniqueness of the email
        var email = Email.Create(request.Request.Email);
        var exists = await _context.Users.AnyAsync(u => u.Email == email);
        if(exists)
            return Result.Fail(UserErrors.ConflictedEmailsError);

        // Create a new user based on the UserType supplied
        var user = CreateUser(request.Request, _hashGenerator);

        if(user is null)
            return Result.Fail(UserErrors.UserRegistrationError);

        var role = request.Request.UserType switch
        {
            UserType.Admin => Roles.Admin,
            UserType.Secretary => Roles.Secretary,
            UserType.Parent => Roles.Parent,
            _ => Roles.Student
        };

        await _rolesManager.AddToRoleAsync(user, role);

        await _context.AddAsync(user);
        await _context.SaveChangesAsync();

        // Return useful informations about the brand new User
        return new UserResponse(
            user.Id,
            user.FirstName,
            user.LastName,
            user.Email.Value,
            user.Street,
            user.City,
            user.ZipCode,
            user.Province,
            user.Telephone,
            user.PersonalId,
            user.Inactive,
            user.Image);
    }

    private static User? CreateUser(RegisterUserRequest req, IHashGenerator hashGenerator)
    {
        var email = Email.Create(req.Email);
        var pwd = Password.CreateNewPassword(req.Password, hashGenerator);

        if(email is null || pwd is null)
            return null;

        return req.UserType switch
        {
            UserType.Admin => Admin.Create(req.FirstName, req.LastName, email, pwd, req.Street, req.City, req.ZipCode, req.Province, req.Telephone, req.PersonalId, req.Image),
            UserType.Parent => Parent.Create(req.FirstName, req.LastName, email, pwd, req.Street, req.City, req.ZipCode, req.Province, req.Telephone, req.PersonalId, req.Image),
            UserType.Secretary => Secretary.Create(req.FirstName, req.LastName, email, pwd, req.Street, req.City, req.ZipCode, req.Province, req.Telephone, req.PersonalId, req.Image),
            _ => Student.Create(null, req.FirstName, req.LastName, email, pwd, req.Street, req.City, req.ZipCode, req.Province, req.Telephone, req.PersonalId, req.Image)
        };
    }
}

public record UserResponse(
    string Id,
    string FirstName,
    string LastName,
    string Email,
    string Street,
    string City,
    string ZipCode,
    string Province,
    string Telephone,
    string PersonalId,
    bool Inactive,
    string Image);

public record RegisterUserCommand(
    RegisterUserRequest Request
);

public record RegisterUserRequest(
    UserType UserType,
    string FirstName,
    string LastName,
    string Email,
    string Password,
    string Street,
    string City,
    string ZipCode,
    string Province,
    string Telephone,
    string PersonalId,
    string Image
);

public enum UserType
{
    Admin,
    Secretary,
    Parent,
    Student
}
