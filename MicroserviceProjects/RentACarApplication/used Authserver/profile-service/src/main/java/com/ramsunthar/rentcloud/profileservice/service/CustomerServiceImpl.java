package com.ramsunthar.rentcloud.profileservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ramsunthar.rentcloud.profileservice.repository.CustomerRepository;

import com.ramsunthar.rentcloud.commons.model.Customer;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerRepository customerRepository;
	
	
	
	@Override
	public Customer save(Customer customer) {
		
		return customerRepository.save(customer);
	}



	@Override
	public List<Customer> show() {
		return customerRepository.findAll();
		
	}



	@Override
	public Customer fetchById(int profileId) {
		Optional<Customer> customer = customerRepository.findById(profileId);
        if (customer.isPresent()) {
            return customer.get();
        } else {
            return null;
        }
	}

	
}
