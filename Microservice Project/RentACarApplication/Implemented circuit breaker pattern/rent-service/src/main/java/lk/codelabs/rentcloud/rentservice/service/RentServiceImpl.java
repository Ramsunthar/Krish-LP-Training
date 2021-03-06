package lk.codelabs.rentcloud.rentservice.service;

import lk.codelabs.rentcloud.model.customer.Customer;
import lk.codelabs.rentcloud.model.rent.Rent;
import lk.codelabs.rentcloud.model.vehicle.Vehicle;
import lk.codelabs.rentcloud.rentservice.hystrix.CommonHystrixCommand;
import lk.codelabs.rentcloud.rentservice.hystrix.vehicleCommand;
import lk.codelabs.rentcloud.rentservice.model.DetailResponse;
import lk.codelabs.rentcloud.rentservice.repository.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.HystrixCommand;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@Service
public class RentServiceImpl implements RentService {

	@Autowired
	RentRepository rentRepository;

	@Autowired
	HystrixCommand.Setter setter; // to use the setter config

	@LoadBalanced // to make it as loadBalanced
	@Bean
	RestTemplate getRestTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Autowired
	RestTemplate restTemplate;

	@Override
	public Rent save(Rent customer) {
		return rentRepository.save(customer);
	}

	@Override
	public Rent findById(int id) {
		Optional<Rent> rent = rentRepository.findById(id);

		if (rent.isPresent())
			return rent.get();
		else
			return new Rent();

	}

	@Override
	public List<Rent> findAll() {
		return rentRepository.findAll();
	}

	@Override
	public DetailResponse findDetailResponse(int id) throws InterruptedException, ExecutionException {

		Rent rent = findById(id);
		Customer customer = getCustomer(rent.getCustomerId());
		Vehicle vehicle = getVehicle(rent.getVehicleId());

		return new DetailResponse(rent, customer, vehicle);

	}

	private Customer getCustomer(int customerId) throws InterruptedException, ExecutionException {

//		CommonHystrixCommand<Customer> customerCommandHystrixCommand = new CommonHystrixCommand<Customer>("default",
//				() -> {
//					return restTemplate.getForObject("http://customer/services/customers/" + customerId,
//							Customer.class);
//				}, () -> {
//					return new Customer();
//				});
		
		CommonHystrixCommand<Customer> customerCommandHystrixCommand = new CommonHystrixCommand<Customer>(setter,
				() -> {
					return restTemplate.getForObject("http://customer/services/customers/" + customerId,
							Customer.class);
				}, () -> {
					return new Customer();
				});

		Future<Customer> customerFuture = customerCommandHystrixCommand.queue();
		return customerFuture.get();
	}

	private Vehicle getVehicle(int vehicleId) {
		vehicleCommand vehicleCommand = new vehicleCommand(restTemplate, vehicleId);
		return vehicleCommand.execute();

//       return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);

	}
}
