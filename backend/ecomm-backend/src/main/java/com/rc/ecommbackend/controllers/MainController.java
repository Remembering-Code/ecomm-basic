package com.rc.ecommbackend.controllers;

import org.springframework.ui.Model;

import com.rc.ecommbackend.services.ProductService;

@Controller
public class MainController {
	
	// services
	private final ProductService productServ;
	
	public MainController(ProductService productServ) {
		this.productServ = productServ;
	}
	
	@GetMapping("/products")
	public String productView(Model model) {
		
		// data for front-end view
		return model.addAttribute("allProducts", productServ.getAllProducts());	
	}
	
	@GetMapping("/products/{id}")
	public String showOneProduct(@PathVariable("id") Long PRD_ID, Model model) {
		// get Product by ID
		Product product = productServ.getOneProduct(PRD_ID);
		model.addAttribute("product", product);
		
		return product;
	}
	
	// @GetMapping("/products/new") // - Add new Product
	// @PutMapping ... // - update product
	// @RequestMapping ... // - delete product by id
}