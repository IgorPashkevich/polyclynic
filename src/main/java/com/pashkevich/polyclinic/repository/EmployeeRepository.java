package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findAllByLastName(String lastName);
}
