package com.mocavada.project.tonysecurity.model;

public class UserLoginRequestModel {
    private String username;
    private String password;

    public String getUserName() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
