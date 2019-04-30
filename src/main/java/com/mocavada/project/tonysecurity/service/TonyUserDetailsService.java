package com.mocavada.project.tonysecurity.service;

import com.mocavada.config.auth.TonyUserPrincipal;
import com.mocavada.project.tonysecurity.model.AuthGroup;
import com.mocavada.project.tonysecurity.model.User;
import com.mocavada.project.tonysecurity.repository.AuthGroupRepository;
import com.mocavada.project.tonysecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TonyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final AuthGroupRepository authGroupRepository;

    public TonyUserDetailsService(UserRepository userRepository, AuthGroupRepository authGroupRepository) {
        this.userRepository = userRepository;
        this.authGroupRepository = authGroupRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        User user = this.userRepository.findByUsername(username);

        // Verify if User is Not Null
        if(null==user){
            throw new UsernameNotFoundException("Cannot Find Username: " + username);
        }

        // Adding Authorization to Users Logging-In
        List<AuthGroup> authGroups = this.authGroupRepository.findByUsername(username);

        return new TonyUserPrincipal(user, authGroups);
    }

}
