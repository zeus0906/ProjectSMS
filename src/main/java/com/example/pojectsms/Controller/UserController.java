package com.example.pojectsms.Controller;

import com.example.pojectsms.Entite.User;
import com.example.pojectsms.Exception.UserIntrouvableException;
import com.example.pojectsms.Model.UserDao;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@Api(description = "Controleur des utilisateurs")
@RestController
@RequestMapping("/endpoint")
public class UserController {

    @Autowired
    UserDao userDao;

    @ApiOperation(value = "Affiche la liste des utilisateurs")
    @GetMapping("/api/Users/all")
    public List<User> listeUser(){
        return userDao.findAll();
    }

    /*@GetMapping("/api/Users/active")
    public List<User> listeActive(){
        List<User> actif = userDao.findAllByInactive
    }*/

    @ApiOperation(value = "Affiche un utilisateur en foction de son email")
    @GetMapping("/api/Users/{email}/details")
    public Optional<User> afficherUser(@PathVariable String email) throws UserIntrouvableException {
        Optional<User> user = userDao.findById(email);

        if (user == null) throw new UserIntrouvableException("L'utilisateur avec l'email'" +email+ " est introuvable");

        return user;

    }
}
