package com.ramsunthar.rentcloud.vehicleservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ramsunthar.rentcloud.vehicleservice.service.VehicleService;


import com.ramsunthar.rentcloud.commons.model.Vehicle;

@RestController
@RequestMapping(value = "/services")
public class VehicleController {

	@Autowired
	VehicleService vehicleService;
	
	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	public Vehicle save(@RequestBody Vehicle vehicle) {
		return vehicleService.save(vehicle);
	}
}
