package com.rc.ecommbackend.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UserLogin {
	  
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String user_email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String user_passwordencrypted;
    
    public UserLogin() {}

	public String getEmail() {
		return user_email;
	}

	public void setEmail(String user_email) {
		this.user_email = user_email;
	}

	public String getPassword() {
		return user_passwordencrypted;
	}

	public void setPassword(String user_passwordencrypted) {
		this.user_passwordencrypted = user_passwordencrypted;
	}
    
   
	  
}