package com.company.backend.services;

/**
 * Created by m.taghouti on 13/07/2017.
 */
public class JwtAuthenticationResponse {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;

    public JwtAuthenticationResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}
