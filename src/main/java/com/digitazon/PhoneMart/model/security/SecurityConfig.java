package com.digitazon.PhoneMart.model.security;

import com.digitazon.PhoneMart.model.repositories.user.UserRepository;
import com.digitazon.PhoneMart.model.security.auth.JwtTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(username -> userRepository.findByUserName(username)
                .orElseThrow(()->new UsernameNotFoundException("User con username "+ username + " non esiste")));
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.exceptionHandling().authenticationEntryPoint(
                (request, response, ex) -> {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
                }
        );
        http.cors().and().authorizeRequests()
                .antMatchers("/users/auth/login")
                .permitAll().antMatchers("/phones/public/**","/users/newUser").permitAll().anyRequest().authenticated();
        http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
