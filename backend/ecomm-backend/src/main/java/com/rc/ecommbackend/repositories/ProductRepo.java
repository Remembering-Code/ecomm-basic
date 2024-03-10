package com.rc.ecommbackend.repositories;

import java.util.List;
import java.util.Optional;

import com.rc.ecommbackend.models.Product;

public interface ProductRepo extends CrudRepository<Product, Long> {

	// get all products
		List<Product> findAll();
		
		// get one Product based on ID
		Optional<Product> findById(Long id);
		
		// save product
		// Product save(Product a);
		
		// delete Product by ID
		void deleteById(Long id);

}
