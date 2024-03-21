package com.rc.ecommbackend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rc.ecommbackend.models.Product;
import com.rc.ecommbackend.services.ProductService;

@Controller
public class MainController {
	
	// services
	private final ProductService productServ;
	
	public MainController(ProductService productServ) {
		this.productServ = productServ;
	}
	
//	@GetMapping("/products")
//	public String productView(Model model) {
//		
//		// data for front-end view
//		return model.addAttribute("allProducts", productServ.getAllProducts());	
//	}
//	
//	@GetMapping("/products/{id}")
//	public String showOneProduct(@PathVariable("id") Long PRD_ID, Model model) {
//		// get Product by ID
//		Product product = productServ.getOneProduct(PRD_ID);
//		model.addAttribute("product", product);
//		
//		return product;
//	}
	
	@GetMapping("/products")
    @ResponseBody // Ensure that the returned data is serialized to JSON
    public List<Product> productView(Model model) {
        return productServ.getAllProducts(); // Assuming getAllProducts() returns a List<Product>
    }
    
    @GetMapping("/products/{id}")
    @ResponseBody // Ensure that the returned data is serialized to JSON
    public ResponseEntity<?> showOneProduct(@PathVariable("id") Long PRD_ID) {
        Product product = productServ.getOneProduct(PRD_ID);
        if (product != null) {
            return ResponseEntity.ok(product); // Return the product if found
        } else {
            return ResponseEntity.notFound().build(); // Return 404 Not Found if product not found
        }
    }
    
    // Other controller methods for creating, updating, and deleting products
	// @GetMapping("/products/new") // - Add new Product
	// @PutMapping ... // - update product
	// @RequestMapping ... // - delete product by id
}
