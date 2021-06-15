package com.ramsunthar.rentacar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ramsunthar.rentacar.model.Student;
import com.ramsunthar.rentacar.service.StudentService;

@RestController
public class MainController {
	
	@Autowired
	StudentService studentService;
	
	
	//by default it will take both get and post methods we have to specify like below to get it separately
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String greeting1() {
		return "Hello Springboot from get";
	}
	@RequestMapping(value = "/hello", method = RequestMethod.POST)
	public String greeting2() {
		return "Hello Springboot from post";
	}
	
	//here lets have a method to handle the crud in db
	/*In here the input is in the json format so we have to 
	 * get that in the student object.*/
	@RequestMapping(value = "/student", method = RequestMethod.POST)
	public Student save(@RequestBody Student student) {
		
		return studentService.save(student);
	}
	
	@RequestMapping(value= "/student", method = RequestMethod.GET)
	public ResponseEntity<Student> fetchStudent(@RequestParam int id) {
		//we used ResponseEntity because there maybe a chance that there won't be any object as output
		Student student = studentService.fetchStudentById(id);
		if(student== null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok().body(student);
		}
		
		
	}

}
