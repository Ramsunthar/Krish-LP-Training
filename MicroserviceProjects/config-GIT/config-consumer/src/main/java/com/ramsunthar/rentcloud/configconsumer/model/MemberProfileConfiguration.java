package com.ramsunthar.rentcloud.configconsumer.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component //this will help to create a bean
public class MemberProfileConfiguration {

	@Autowired
	Environment environment;
	
	public String getDefaultModel() {
		return environment.getProperty("vehicle.default.model");
	}
	
	public String getMminRentPeriod() {
		return environment.getProperty("member.rent.min");
	}
}
