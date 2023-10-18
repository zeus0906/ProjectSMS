package com.example.pojectsms.Model;

import com.example.pojectsms.Entite.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, String> {
}
