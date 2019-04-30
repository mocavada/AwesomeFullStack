package com.mocavada.config.auth;

import com.mocavada.project.tonysecurity.service.TonyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ApplicationSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private TonyUserDetailsService userDetailsService;

    // Setting Username & Password from from User Entity thru TonyUserDetailsService
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

        // Set User Entity Details
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder(11));

        // Prepend ROLE_ to Auth_Group Column
        provider.setAuthoritiesMapper(authoritiesMapper());
        return provider;

    }


    @Bean
    public GrantedAuthoritiesMapper authoritiesMapper() {
        SimpleAuthorityMapper authorityMapper = new SimpleAuthorityMapper();

        // Convert UpperCase coming from DB Auth_Group > Role
        authorityMapper.setConvertToUpperCase(true);
        authorityMapper.setDefaultAuthority("USER");
        return authorityMapper;
    }


    // Add Authentication when fetching TonyUserDetailsService
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    // MARC

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                // Enable Security Authorization
                .authorizeRequests()
                // Allow Access to Specified Pages Below
                .antMatchers("/","/index","/about","/style.js","/script.js").permitAll()
                // Start Setting Up Page Authorization
                .anyRequest().authenticated()
                .and()
                // Uncomment to Not Use Form
//                .httpBasic();

                // Using Form
                .formLogin()
                .loginPage("/tleaf/login").permitAll()
                .and()
                .logout().invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutRequestMatcher(new AntPathRequestMatcher("/tony/logout"))
                .logoutSuccessUrl("/tleaf/login").permitAll();

    }



    // BETTY

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/","/*","/index","/about","/style.js","/script.js").permitAll()
//                .anyRequest().authenticated()
//                .and().addFilter(getAuthenticationFilter());
//
//    }
//    // change the login url to /user/login
//    public AuthenticationFilter getAuthenticationFilter() throws Exception {
//        final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager());
//        filter.setFilterProcessesUrl("/tony/login");
//        return filter;
//    }








    // Example of InMemory User Details


//    @Bean
//    @Override
//    public UserDetailsService userDetailsService() {
//        List<UserDetails> user = new ArrayList<>();
//
//        user.add(User.withDefaultPasswordEncoder().username("marc").password("password").roles("USER", "ADMIN").build());
//        user.add(User.withDefaultPasswordEncoder().username("joe").password("password").roles("USER").build());
//
//        return new InMemoryUserDetailsManager(user);
//
//    }
}
