package com.rc.ecommbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EcommBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommBackendApplication.class, args);
	}

	@RequestMapping("/")
	public String hello() {
		return "Hellllooooo WOOORRRLLDDDDD!";
	}

}
