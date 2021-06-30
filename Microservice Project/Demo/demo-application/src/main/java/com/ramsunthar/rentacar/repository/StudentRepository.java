package com.ramsunthar.rentacar.repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.ramsunthar.rentacar.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{
//	Student save(Student student);
}
   