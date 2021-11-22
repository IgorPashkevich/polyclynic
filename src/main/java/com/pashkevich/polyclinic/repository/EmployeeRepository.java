package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
