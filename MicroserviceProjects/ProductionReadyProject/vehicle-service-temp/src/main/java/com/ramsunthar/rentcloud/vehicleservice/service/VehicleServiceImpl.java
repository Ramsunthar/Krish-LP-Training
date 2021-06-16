package com.ramsunthar.rentcloud.vehicleservice.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ramsunthar.rentcloud.profileservice.repository.VehicleRepository;

import com.ramsunthar.rentcloud.commons.model.Vehicle;

@Service
public class VehicleServiceImpl implements VehicleService{

	@Autowired
	VehicleRepository vehicleRepository;
	
	
	
	@Override
	public Vehicle save(Vehicle vehicle) {
		
		return vehicleRepository.save(vehicle);
	}

	
}
