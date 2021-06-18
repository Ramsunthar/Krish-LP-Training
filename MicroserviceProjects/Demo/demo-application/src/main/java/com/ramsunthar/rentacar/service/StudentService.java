package com.ramsunthar.rentacar.service;

import com.ramsunthar.rentacar.model.Student;

public interface StudentService {
	Student save(Student student);

	Student fetchStudentById(int id);



//	Student fetchStudentById(int id);
}
