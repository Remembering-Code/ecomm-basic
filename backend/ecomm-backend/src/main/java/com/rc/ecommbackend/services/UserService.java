package com.rc.ecommbackend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.rc.ecommbackend.models.NewUser;
import com.rc.ecommbackend.models.UserLogin;
import com.rc.ecommbackend.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public NewUser oneUser(Long user_id) {
		Optional<NewUser> optionalUser = userRepo.findById(user_id);
		if (optionalUser.isPresent()) {
			return optionalUser.get();
		} else {
			return null;
		}
	}

	//// This is the registration method
	public NewUser register(NewUser newUser, BindingResult result) {

		// Checks if the email from a new user is already present in the database
		if (userRepo.findByEmail(newUser.getEmail()).isPresent()) {
			// if that email is in the databse, unique reject value
			result.rejectValue("email", "Unique", "This email is already in use!");
		}

		// if the password is not the same as the confirm, reject value
		if (!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
		}

		// if there are errors in bindingresult, return null - you get nothing.
		if (result.hasErrors()) {
			return null;
		} else {
			// creates a hashed passsword if all checks pass, and the user is saved in
			// database.
			// String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
			newUser.setPassword(newUser.getPassword());
			return userRepo.save(newUser);
		}
	}

	// This is for logging in
	public NewUser login(UserLogin newLogin, BindingResult result) {
		if (result.hasErrors()) {
			return null;
		}

		// Get the user based on their email
		Optional<NewUser> potentialUser = userRepo.findByEmail(newLogin.getEmail());

		// If the email doesn't exist in the database, return error message
		if (!potentialUser.isPresent()) {
			result.rejectValue("email", "Unique", "Unknown email!");
			return null;
		}

		NewUser user = potentialUser.get();

		// Check if the password matches (without using BCrypt)
		if (!newLogin.getPassword().equals(user.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid Password!");
		}

		// If there are any other errors, return null
		if (result.hasErrors()) {
			return null;
		} else {
			// Return the user
			return user;
		}
	}

}