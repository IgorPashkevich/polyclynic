package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.dto.EmployeeDto;
import com.pashkevich.polyclinic.dto.SearchDto;
import com.pashkevich.polyclinic.entity.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    Employee save(EmployeeDto dto);

    void delete(Long id);

    Employee update(EmployeeDto dto);

    List<Employee> search(SearchDto searchDto);
}
