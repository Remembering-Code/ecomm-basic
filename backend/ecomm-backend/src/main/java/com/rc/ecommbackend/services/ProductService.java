package com.rc.ecommbackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.rc.ecommbackend.models.Product;
import com.rc.ecommbackend.repositories.ProductRepository;

@Service
public class ProductService {
	
//	@Autowired
//	private ProductRepository productRepo;

	private final ProductRepository productRepo;
	
	public ProductService(ProductRepository productRepo) {
		this.productRepo = productRepo;
	}
	
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}
	
	public Product getOneProduct(Long prd_id) {
		Optional<Product> optionalProduct = productRepo.findById(prd_id);
		return optionalProduct.isPresent() ? optionalProduct.get() : null;
	}
	
	public Product saveProduct(Product a) {
		return productRepo.save(a);
	}
	
	public void deleteProduct(Long prd_id) {
		productRepo.deleteById(prd_id);
	}
	
}