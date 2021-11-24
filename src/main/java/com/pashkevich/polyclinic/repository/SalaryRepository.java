package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalaryRepository extends JpaRepository<Salary, Long> {

    List<Salary> findAllByEmployee_Id(Long id);
}
