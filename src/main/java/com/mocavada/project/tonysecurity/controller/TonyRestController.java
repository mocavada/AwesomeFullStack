package com.mocavada.project.tonysecurity.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/tony")
public class TonyRestController {

    @RequestMapping("/resource")
    public Map<String, Object> home() {

        Map<String, Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello Marc");
        return model;
    }

//    @RequestMapping("/user")
//    public Map<String, Object> user() {
//
//        Map<String, Object> model = new HashMap<String,Object>();
//        model.put("user", "user");
//        model.put("password", "password");
//        return model;
//    }



    @GetMapping("/user")
    @ResponseBody
    public Principal user(Principal user) {
        return user;
    }

//    @GetMapping(value = "/{path:[^\\.]*}")
//    public String redirect() {
//        return "forward:/";
//    }

}
