package lk.codelabs.rentcloud.rentservice.hystrix;

import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;

import lk.codelabs.rentcloud.model.vehicle.Vehicle;

public class vehicleCommand extends HystrixCommand<Vehicle>{

	RestTemplate restTemplate;
	int vehicleId;
	
	public vehicleCommand(RestTemplate restTemplate, int vehicleId) {
		super(HystrixCommandGroupKey.Factory.asKey("default"));
		
		this.restTemplate =restTemplate;
		this.vehicleId = vehicleId;
	}
	
	@Override
	protected Vehicle run() throws Exception {
		return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);
	}

	@Override
	protected Vehicle getFallback() {
		System.out.println("Hit on fallBack");
		return new Vehicle(); 
		/*This is for default and what it does is if the vehicle 
		 * service is not working this will return a empty vehicle*/
	}
	
	
}
