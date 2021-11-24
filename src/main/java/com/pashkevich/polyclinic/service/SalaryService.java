package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.dto.SalaryDto;
import com.pashkevich.polyclinic.entity.Salary;

import java.util.List;

public interface SalaryService {

    List<Salary> findAll();

    Salary save(SalaryDto salaryDto);

    List<Salary> findAllByEmployee(Long id);
}
