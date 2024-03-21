package com.rc.ecommbackend.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="t_ecom_pro_product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long PRD_ID;
	
	@NotNull
	@Size(min=2, max=255, message="Name must be between 2-255 characters.")
	private String PRD_NAME;
	
	@NotEmpty(message="Please add a Description!")
	private String PRD_DESCRIPTION;
	
	@NotNull
	private Float PRD_PRICE;
	
	@NotNull
	private Short PRD_INSTOCK_QUANTITY;
	
	@NotNull
	private String PRD_UPDATED_BY;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date CREATED_AT;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date UPDATED_AT;
	
	@PrePersist
	protected void onCreate() {
		this.CREATED_AT = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.UPDATED_AT = new Date();
	}
	
	// Constructors
	
	public Product() {}
	
	public Product(Long PRD_ID,
			@NotNull @Size(min=2, max=255, message="Name must be between 2-255 characters.") String PRD_NAME,
			@NotEmpty(message="Please add a Description!") String PRD_DESCRIPTION,
			@NotNull Float PRD_PRICE,
			@NotNull Short PRD_INSTOCK_QUANTITY,
			@NotNull String PRD_UPDATED_BY,
			Date CREATED_AT,
			Date UPDATED_AT) {
		this.PRD_ID = PRD_ID;
		this.PRD_NAME = PRD_NAME;
		this.PRD_DESCRIPTION = PRD_DESCRIPTION;
		this.PRD_PRICE = PRD_PRICE;
		this.PRD_INSTOCK_QUANTITY = PRD_INSTOCK_QUANTITY;
		this.PRD_UPDATED_BY = PRD_UPDATED_BY;
		this.CREATED_AT = CREATED_AT;
		this.UPDATED_AT = UPDATED_AT;
	}
	
	// TODO Generate constructor for validations
	
	// TODO add necessary relationships to other Models;
	
	// TODO Generate Getters & Setters for relationships
	
	

	public Long getPRD_ID() {
		return PRD_ID;
	}

	public void setPRD_ID(Long pRD_ID) {
		PRD_ID = pRD_ID;
	}

	public String getPRD_NAME() {
		return PRD_NAME;
	}

	public void setPRD_NAME(String pRD_NAME) {
		PRD_NAME = pRD_NAME;
	}

	public String getPRD_DESCRIPTION() {
		return PRD_DESCRIPTION;
	}

	public void setPRD_DESCRIPTION(String pRD_DESCRIPTION) {
		PRD_DESCRIPTION = pRD_DESCRIPTION;
	}

	public Float getPRD_PRICE() {
		return PRD_PRICE;
	}

	public void setPRD_PRICE(Float pRD_PRICE) {
		PRD_PRICE = pRD_PRICE;
	}

	public Short getPRD_INSTOCK_QUANTITY() {
		return PRD_INSTOCK_QUANTITY;
	}

	public void setPRD_INSTOCK_QUANTITY(Short pRD_INSTOCK_QUANTITY) {
		PRD_INSTOCK_QUANTITY = pRD_INSTOCK_QUANTITY;
	}

	public String getPRD_UPDATED_BY() {
		return PRD_UPDATED_BY;
	}

	public void setPRD_UPDATED_BY(String pRD_UPDATED_BY) {
		PRD_UPDATED_BY = pRD_UPDATED_BY;
	}

	public Date getCREATED_AT() {
		return CREATED_AT;
	}

	public void setCREATED_AT(Date cREATED_AT) {
		CREATED_AT = cREATED_AT;
	}

	public Date getUPDATED_AT() {
		return UPDATED_AT;
	}

	public void setUPDATED_AT(Date uPDATED_AT) {
		UPDATED_AT = uPDATED_AT;
	}
}