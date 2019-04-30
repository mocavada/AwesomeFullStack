package com.mocavada.config.auth;

import com.mocavada.project.tonysecurity.model.AuthGroup;
import com.mocavada.project.tonysecurity.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

public class TonyUserPrincipal implements UserDetails {

    private User user;
    private List<AuthGroup> authGroups;

    public TonyUserPrincipal(User user, List<AuthGroup> authGroups) {
        this.user = user;
        this.authGroups = authGroups;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Grant Authority to User onlu
//        return Collections.singleton(new SimpleGrantedAuthority("USER"));

        // Return Empty if Group is Null
        if(null==authGroups) {
            return Collections.emptySet();
        }

        // Authorization per User must be Unique
        Set<SimpleGrantedAuthority> grantedAuthorities = new HashSet<>();

        // Add Authorization on Each User with Role Assignment
        authGroups.forEach(group->{
            grantedAuthorities.add(new SimpleGrantedAuthority(group.getRole()));
        });

        return grantedAuthorities;

    }

    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
