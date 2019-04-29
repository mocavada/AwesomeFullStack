package com.mocavada.project.tonysecurity.service;

import com.mocavada.config.auth.UserPrincipal;
import com.mocavada.project.tonysecurity.model.User;
import com.mocavada.project.tonysecurity.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class TonyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public TonyUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        User user = this.userRepository.findByUsername(username);
        if(null==user){
            throw new UsernameNotFoundException("cannot find username: " + username);
        }
        return new UserPrincipal(user);
    }

}
