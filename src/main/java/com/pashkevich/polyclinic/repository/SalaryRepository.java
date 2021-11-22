package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalaryRepository extends JpaRepository<Salary, Long> {

}
