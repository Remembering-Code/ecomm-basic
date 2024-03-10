package com.rc.ecommbackend.services;

@Service
public class ProductService {
	
	private final ProductRepo productRepo;
	public ProductService(ProductRepo productRepo) {
		this.productRepo = productRepo;
	}
	
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}
	
	public Product getOneProduct(Long PRD_ID) {
		Optional<Product> optionalProduct = productRepo.findById(PRD_ID);
		return optionalProduct.isPresent() ? optionalProduct.get() : null;
	}
	
	public Product saveProduct(Product a) {
		return productRepo.save(a);
	}
	
	public void deleteProduct(Long PRD_ID) {
		productRepo.deleteById(PRD_ID);
	}
	
}