package com.mocavada.project.tonysecurity.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table( name = "AUTH_GROUP",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})})
public class AuthGroup {
    @Id
    @Column(name="AUTH_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String role;

//    @ManyToOne
//    @JoinColumn(name="AUTHGROUP_USERNAME")
//    private User user;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
