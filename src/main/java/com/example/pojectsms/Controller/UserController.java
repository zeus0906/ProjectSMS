package com.example.pojectsms.Controller;

import com.example.pojectsms.Entite.User;
import com.example.pojectsms.Model.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserDao userDao;
    @GetMapping("/api/Users/all ")
    public List<User> listeUser(){
        return userDao.findAll();
    }
}
