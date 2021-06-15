package com.ramsunthar.rentacar.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ramsunthar.rentacar.model.Student;
import com.ramsunthar.rentacar.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	StudentRepository studentRepository;

	public Student save(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public Student fetchStudentById(int id) {
		Optional<Student> student =  studentRepository.findById(id);
		/*This is to check whether the there is record or not
		 * and we can also do it in the controller as well*/
		if(student.isPresent()) {
			return student.get();
		}
		return null;
	}
	

}
