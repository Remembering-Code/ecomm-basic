package com.rc.ecommbackend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rc.ecommbackend.models.NewUser;

@Repository
public interface UserRepository extends CrudRepository<NewUser, Long> {
	
	@Query("SELECT u FROM NewUser u WHERE u.user_email = :email")
	   Optional<NewUser> findByEmail(String email);
	
//	Optional<NewUser> findByUser_email(String user_email);   
}
