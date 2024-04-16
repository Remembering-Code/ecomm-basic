package com.rc.ecommbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rc.ecommbackend.models.NewUser;
import com.rc.ecommbackend.models.Product;
import com.rc.ecommbackend.models.UserLogin;
import com.rc.ecommbackend.services.ProductService;
import com.rc.ecommbackend.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class MainController {

	@Autowired
	private UserService userServ;
	@Autowired
	private ProductService productServ;

	/*
	 * @GetMapping("/loggedInUser") public ResponseEntity<?>
	 * getDashboard(HttpSession session) { Long userId = (Long)
	 * session.getAttribute("user_id"); if (userId == null) { return
	 * ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated"
	 * ); } NewUser user = userServ.oneUser(userId); if (user == null) { return
	 * ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
	 * body("Error retrieving user information"); } return ResponseEntity.ok(user);
	 * }
	 */
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable Long userId) {
	    // Call a service method to retrieve user data by userId
	    NewUser user = userServ.oneUser(userId);
	    
	    if (user == null) {
	        return ResponseEntity.notFound().build(); // User not found
	    }
	    
	    return ResponseEntity.ok(user); // Return user data
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
		return productServ.getAllProducts();
	}

	@GetMapping("/product/{id}")
	@ResponseBody // Ensure that the returned data is serialized to JSON
	public ResponseEntity<?> showOneProduct(@PathVariable("id") Long PRD_ID) {
		Product product = productServ.getOneProduct(PRD_ID);
		if (product != null) {
			return ResponseEntity.ok(product); // Return the product if found
		} else {
			return ResponseEntity.notFound().build(); // Return 404 Not Found if product not found
		}
	}
	
	@PostMapping("/newProduct")
	public ResponseEntity<?> createProduct(@RequestBody Product product) {
	    Product createdProduct = productServ.saveProduct(product);
	    if (createdProduct != null) {
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
	    } else {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating product, backend");
	    }
	}
	
	 @DeleteMapping("/deleteProduct/{id}")
	    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
	        // Call the service to delete the product with the given ID
	        productServ.deleteProduct(id);

	        // Check if the product still exists after deletion
	        Product deletedProduct = productServ.getOneProduct(id);
	        
	        if (deletedProduct == null) {
	            return ResponseEntity.ok("Product with ID " + id + " has been deleted.");
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                    .body("Error deleting product with ID " + id);
	        }
	    }
	 
	 @PutMapping("/updateProduct/{id}")
	    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product product) {
	        Product existingProduct = productServ.getOneProduct(id);
	        
	        if (existingProduct == null) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product with ID " + id + " not found.");
	        }
	        
	        // Set the ID of the product to be updated
	        product.setPrd_id(id);
	        
	        // Update the product
	        Product updatedProduct = productServ.saveProduct(product);
	        
	        if (updatedProduct != null) {
	            return ResponseEntity.ok(updatedProduct);
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                    .body("Error updating product with ID " + id);
	        }
	    }
	 

	@PostMapping("/register")
	@ResponseBody
	public ResponseEntity<?> register(@Valid @ModelAttribute("newUser") NewUser newUser, BindingResult result,
			HttpSession session) {
		// Call the register method in the service layer and pass new user info and
		// binding results
		userServ.register(newUser, result);

		// If there are validation errors, return a bad request response with an error
		// message
		if (result.hasErrors()) {
			return ResponseEntity.badRequest().body("Invalid user information");
		}

		// Set the user ID in the session
		session.setAttribute("user_id", newUser.getId());

		// Return a success response
		return ResponseEntity.ok(newUser);
	}

//	// this route is the action for submitting an existing user, login
//	@PostMapping("/login")
//	@ResponseBody
//	public ResponseEntity<?> login(@Valid @ModelAttribute("newLogin") UserLogin newLogin, BindingResult result,
//			HttpSession session) {
//		NewUser user = userServ.login(newLogin, result);
//		if (result.hasErrors()) {
//			return ResponseEntity.badRequest().body("Invalid credentials");
//		}
//		session.setAttribute("user_id", user.getId());
//		return ResponseEntity.ok(user);
//	}
	
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody UserLogin newLogin, BindingResult result, HttpSession session) {
        NewUser user = userServ.login(newLogin, result);
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
        session.setAttribute("user_id", user.getId());
        return ResponseEntity.ok(user);
    }

	// Other controller methods for creating, updating, and deleting products
	// @PostMapping("/products/new") // - Add new Product
	// @PutMapping ... // - update product
	// @RequestMapping ... // - delete product by id
}
