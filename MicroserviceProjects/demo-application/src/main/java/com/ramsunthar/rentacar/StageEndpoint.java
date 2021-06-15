package com.ramsunthar.rentacar;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

/*This is a scenario where there is a threshold value
 * which can be changed so this the class for that
 * and the int value will have the value for the 
 * threshold*/

@Component
@Endpoint(id="stage")//these two will expose this as a custom actuator endpoints
public class StageEndpoint {
	
	Map<String, Stage> stages = new ConcurrentHashMap<>();
	//to get all the stages
	@ReadOperation
	public Map<String,Stage> getAllStages() {
		return stages;
	}
	//get specific stage by getting name and returning value
	@ReadOperation
	public Stage getStage(@Selector String name) {
		//selector will get the value from the endpoint and pass it here/
		//http:/localhost:8080/actuator/{name}
		return stages.get(name);
	}
	//setting value for the stage
	@WriteOperation
	public void setValue(@Selector String name, int stage) {
		stages.put(name, new Stage(stage));
	}

	static class Stage{
		int value;
	
		public Stage(int value) {
			super();
			this.value = value;
		}

		public int getValue() {
			return value;
		}

		public void setValue(int value) {
			this.value = value;
		}
		
		
	}
}
