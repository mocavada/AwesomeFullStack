package com.mocavada.project.tonysecurity.model;

import javax.persistence.*;

@Entity
@Table(name="ROLE")
public class Role {
    @Id
    @Column(name="ROLE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="ROLE", unique = true)
    private String role;

}