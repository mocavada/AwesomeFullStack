package com.mocavada.project.tonysecurity.controller;


import com.mocavada.config.auth.TonyUserPrincipal;
import com.mocavada.project.tonysecurity.model.AuthGroup;
import com.mocavada.project.tonysecurity.model.User;
import com.mocavada.project.tonysecurity.repository.AuthGroupRepository;
import com.mocavada.project.tonysecurity.service.TonyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/tony")
public class TonyRestController {

    @Autowired
    public TonyUserDetailsService userDetailsService;

    @Autowired
    public AuthGroupRepository authGroupRepository;

    @RequestMapping("/resource")
    @PreAuthorize("hasRole('ROLE_USER')")
    public Map<String, Object> home() {

        Map<String, Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello Marc");
        return model;
    }

    @RequestMapping("/admin")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Map<String, Object> adminPage() {

        Map<String, Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello Admin");
        return model;
    }

    @RequestMapping("/audit")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_AUDIT')")
    public Map<String, Object> auditPage() {

        Map<String, Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello Audit, Admin");
        return model;
    }

    @GetMapping(value="/user")
    public TonyUserDetailsService getLoginPage(User user) {

        this.userDetailsService.loadUserByUsername(user.getUsername());

        return userDetailsService;

    }


    @GetMapping(value="/login")
    public UserDetails loadUserByUsername(User user) {

      this.userDetailsService.loadUserByUsername(user.getUsername());
      List<AuthGroup> authGroups = this.authGroupRepository.findByUsername(user.getUsername());

    return new TonyUserPrincipal(user, authGroups);


    }


    @RequestMapping("/sales")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_AUDIT','ROLE_SALES')")
    public Map<String, Object> salesPage() {
        Map<String, Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello Sales, Audit, Admin");
        return model;
    }



    @RequestMapping("/userdetail")
    @PreAuthorize("hasRole('ROLE_USER')")
    public TonyUserDetailsService userDetail(User user) {

        this.userDetailsService.loadUserByUsername(user.getUsername());

        return userDetailsService;

    }




//    @GetMapping("/user")
//    @ResponseBody
//    public Principal user(Principal user) {
//        return user;
//    }

//    @GetMapping(value = "/{path:[^\\.]*}")
//    public String redirect() {
//        return "forward:/";
//    }

}
