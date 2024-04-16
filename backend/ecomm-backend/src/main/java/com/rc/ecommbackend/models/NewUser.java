package com.rc.ecommbackend.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "t_ecom_users")
public class NewUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;

	@NotEmpty(message = "Email is required!")
	@Email(message = "Please enter a valid email!")
	private String user_email;

	@NotEmpty(message = "Password is required!")
	@Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters")
	private String user_passwordencrypted;

	@Transient
	@NotEmpty(message = "Confirm Password is required!")
	@Size(min = 8, max = 128, message = "Confirm Password must be between 8 and 128 characters")
	private String user_passwordencryptedconfirm;

	@NotNull
	private Boolean user_isremoteauth;

	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private Date user_created_at;

	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private Date user_updated_at;

	public NewUser() {
	}

	public NewUser(Long user_id,
			@NotEmpty(message = "Email is required!") @Email(message = "Please enter a valid email!") String user_email,
			@NotEmpty(message = "Password is required!") @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String user_passwordencrypted,
			@NotEmpty(message = "Confirm Password is required!") @Size(min = 8, max = 128, message = "Confirm Password must be between 8 and 128 characters") String user_passwordencryptedconfirm,
			@NotNull Boolean user_isremoteauth, Date user_created_at, Date user_updated_at) {
		super();
		this.user_id = user_id;
		this.user_email = user_email;
		this.user_passwordencrypted = user_passwordencrypted;
		this.user_passwordencryptedconfirm = user_passwordencryptedconfirm;
		this.user_isremoteauth = user_isremoteauth;
		this.user_created_at = user_created_at;
		this.user_updated_at = user_updated_at;
	}

	public NewUser(
			@NotEmpty(message = "Email is required!") @Email(message = "Please enter a valid email!") String user_email,
			@NotEmpty(message = "Password is required!") @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String user_passwordencrypted) {
		super();
		this.user_email = user_email;
		this.user_passwordencrypted = user_passwordencrypted;
	}

	public Date getuser_created_at() {
		return user_created_at;
	}

	public void setuser_created_at(Date user_created_at) {
		this.user_created_at = user_created_at;
	}

	public Date getuser_updated_at() {
		return user_updated_at;
	}

	public void setuser_updated_at(Date user_updated_at) {
		this.user_updated_at = user_updated_at;
	}

	@PrePersist
	protected void onCreate() {
		this.user_created_at = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.user_updated_at = new Date();
	}

	public Long getId() {
		return user_id;
	}

	public void setId(Long user_id) {
		this.user_id = user_id;
	}

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

	public String getConfirm() {
		return user_passwordencryptedconfirm;
	}

	public void setConfirm(String user_passwordencryptedconfirm) {
		this.user_passwordencryptedconfirm = user_passwordencryptedconfirm;
	}

	public Boolean getUser_isremoteauth() {
		return user_isremoteauth;
	}

	public void setUser_isremoteauth(Boolean user_isremoteauth) {
		this.user_isremoteauth = user_isremoteauth;
	}
	
	
}
