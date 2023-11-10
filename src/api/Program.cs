using api;
using api.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.RegisterServices(builder.Configuration, builder.Environment);

var app = builder.Build();

await app.PrepDatabase();

await app.SeedRolesAsync();

await app.SeedDataAsync();

app.ConfigurePipeline();

await app.RunAsync();
