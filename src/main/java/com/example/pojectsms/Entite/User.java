package com.example.pojectsms.Entite;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String street;
    private String city;
    private String zipCode;
    private String province;
    private String telephone;
    private boolean inactive;
    private String personnalID;
    private String image;
    @ManyToOne
    @JoinColumn(name = "roles_id")
    private Roles roles;
}
