package com.digitazon.PhoneMart.model.controllers;

import com.digitazon.PhoneMart.model.entities.User;
import com.digitazon.PhoneMart.model.repositories.user.UserRepository;
import com.digitazon.PhoneMart.model.security.auth.AuthRequest;
import com.digitazon.PhoneMart.model.security.auth.AuthResponse;
import com.digitazon.PhoneMart.model.security.auth.JwtTokenUtil;
import com.digitazon.PhoneMart.services.AbstractPhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AbstractPhoneService abstractPhoneService;

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(),
                            authRequest.getPassword()));
            User user = (User) authentication.getPrincipal();
            String accessToken = jwtTokenUtil.generatedAccessToken(user);
            AuthResponse response = new AuthResponse(user.getUserName(), accessToken);
            return ResponseEntity.ok(response);
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    @PostMapping("/newUser")
    public ResponseEntity createUser(@RequestBody User user){
        abstractPhoneService.insertUser(user);
        return ResponseEntity.ok().build();
    }
}
