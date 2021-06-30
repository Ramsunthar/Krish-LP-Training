package com.ramsunthar.rentcloud.profileservice.service;

import java.util.List;

import com.ramsunthar.rentcloud.commons.model.Customer;

public interface CustomerService {

	public Customer save(Customer customer);
	
	public Customer fetchById(int profileId);
	
	public List<Customer> show();
}
