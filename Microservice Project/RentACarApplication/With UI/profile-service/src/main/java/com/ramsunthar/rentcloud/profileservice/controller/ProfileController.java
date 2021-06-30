package com.ramsunthar.rentcloud.profileservice.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ramsunthar.rentcloud.profileservice.service.CustomerService;

import com.ramsunthar.rentcloud.commons.model.Customer;

@RestController
@RequestMapping(value = "/services")
public class ProfileController {

	@Autowired
	CustomerService customerService;

	@RequestMapping(value = "/customers", method = RequestMethod.POST)
	@PreAuthorize("hasAuthority('create_profile')")
	public Customer save(@RequestBody Customer customer) {
		return customerService.save(customer);
	}
	
	@RequestMapping(value = "/customers/{id}", method = RequestMethod.GET)
    public Customer fetch(@PathVariable(value = "id") int customerid) {
        return customerService.fetchById(customerid);
    }

	@PreAuthorize("hasRole('ROLE_operator')")//can specify using role or authority
	@RequestMapping(value = "/customers", method = RequestMethod.GET)
	public List<Customer> show() {
		return customerService.show();
	}

//	@RequestMapping(value = "/anonymous", method = RequestMethod.GET)
//	public ResponseEntity<String> getAnonymous() {
//		return ResponseEntity.ok("Hello Anonymous");
//	}
//
//	@RolesAllowed("user")
//	@RequestMapping(value = "/user", method = RequestMethod.GET)
//	public ResponseEntity<String> getUser() {
//		return ResponseEntity.ok("Hello User");
//	}
//
//	@RolesAllowed("admin")
//	@RequestMapping(value = "/admin", method = RequestMethod.GET)
//	public ResponseEntity<String> getAdmin() {
//		return ResponseEntity.ok("Hello Admin");
//	}
//
//	@RolesAllowed({ "admin", "user" })
//	@RequestMapping(value = "/all-user", method = RequestMethod.GET)
//	public ResponseEntity<String> getAllUser() {
//		return ResponseEntity.ok("Hello All User");
//	}
}
