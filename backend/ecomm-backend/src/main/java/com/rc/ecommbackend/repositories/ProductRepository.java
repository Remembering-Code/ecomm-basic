package com.rc.ecommbackend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rc.ecommbackend.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

	// get all products
		List<Product> findAll();
		
		// get one Product based on ID
		Optional<Product> findById(Long id);
		
		// save product
		// Product save(Product a);
		
		// delete Product by ID
		void deleteById(Long id);

}
