package com.example.pojectsms.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFilter;

@Configuration
public class SecurityConfig {


    @Bean
    public SecurityFilterChain apiSecurity(HttpSecurity httpSecurity) throws Exception{
        httpSecurity.authorizeHttpRequests((auth) -> auth
                .requestMatchers("/api/Users/{email}/details ", "/api/Users/all")
                .authenticated()
        ).httpBasic();
        return httpSecurity.build();
    }
}
