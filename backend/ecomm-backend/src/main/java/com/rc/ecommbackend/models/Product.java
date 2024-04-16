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
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="t_ecom_pro_products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long prd_id;
	
	@NotNull
	@Size(min=2, max=255, message="Name must be between 2-255 characters.")
	private String prd_name;
	
	@NotEmpty(message="Please add a Description!")
	private String prd_description;
	
	@NotNull
	private Float prd_price;
	
	@NotNull
	private Short prd_instock_quantity;
	
	@NotNull
	private String prd_category;
	
	@NotNull
	private String prd_updated_by;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date created_at;	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updated_at;
	
	@PrePersist
	protected void onCreate() {
		this.created_at = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updated_at = new Date();
	}
	
	// Constructors
	
	public Product() {}

	public Product(Long prd_id,
			@NotNull @Size(min = 2, max = 255, message = "Name must be between 2-255 characters.") String prd_name,
			@NotEmpty(message = "Please add a Description!") String prd_description, @NotNull Float prd_price,
			@NotNull Short prd_instock_quantity, @NotNull String prd_category, @NotNull String prd_updated_by,
			Date created_at, Date updated_at) {
		super();
		this.prd_id = prd_id;
		this.prd_name = prd_name;
		this.prd_description = prd_description;
		this.prd_price = prd_price;
		this.prd_instock_quantity = prd_instock_quantity;
		this.prd_category = prd_category;
		this.prd_updated_by = prd_updated_by;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	public Long getPrd_id() {
		return prd_id;
	}

	public void setPrd_id(Long prd_id) {
		this.prd_id = prd_id;
	}

	public String getPrd_name() {
		return prd_name;
	}

	public void setPrd_name(String prd_name) {
		this.prd_name = prd_name;
	}

	public String getPrd_description() {
		return prd_description;
	}

	public void setPrd_description(String prd_description) {
		this.prd_description = prd_description;
	}

	public Float getPrd_price() {
		return prd_price;
	}

	public void setPrd_price(Float prd_price) {
		this.prd_price = prd_price;
	}

	public Short getPrd_instock_quantity() {
		return prd_instock_quantity;
	}

	public void setPrd_instock_quantity(Short prd_instock_quantity) {
		this.prd_instock_quantity = prd_instock_quantity;
	}

	public String getPrd_updated_by() {
		return prd_updated_by;
	}

	public void setPrd_updated_by(String prd_updated_by) {
		this.prd_updated_by = prd_updated_by;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public String getPrd_category() {
		return prd_category;
	}

	public void setPrd_category(String prd_category) {
		this.prd_category = prd_category;
	}
	
	
	
	// TODO Generate constructor for validations
	
	// TODO add necessary relationships to other Models;
	
	// TODO Generate Getters & Setters for relationships
	
	


}