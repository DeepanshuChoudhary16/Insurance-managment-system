package com.insurance.backend.service;

import com.insurance.backend.dto.AuthRequest;
import com.insurance.backend.entity.User;
import com.insurance.backend.repository.UserRepository;
import com.insurance.backend.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.insurance.backend.security.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
private JwtUtil jwtUtil;

    public String register(User user) {

        if(userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        if(user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("USER");
        }

        userRepository.save(user);

        return "User Registered Successfully";
    }

   public String login(AuthRequest request) {

    User user = userRepository
            .findByEmail(request.getEmail())
            .orElse(null);

    if(user == null) {
        return "User Not Found";
    }

    boolean matches = passwordEncoder.matches(
            request.getPassword(),
            user.getPassword()
    );

    if(matches) {

        return jwtUtil.generateToken(user.getEmail());
    }

    return "Invalid Password";
}
}