package com.ramsunthar.rentcloud.vehicleservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ramsunthar.rentcloud.commons.model.Vehicle;





public interface VehicleRepository extends JpaRepository <Vehicle, Integer>{

}
