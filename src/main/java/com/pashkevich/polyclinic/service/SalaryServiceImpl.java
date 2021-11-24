package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.dto.SalaryDto;
import com.pashkevich.polyclinic.entity.Salary;
import com.pashkevich.polyclinic.repository.EmployeeRepository;
import com.pashkevich.polyclinic.repository.SalaryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class SalaryServiceImpl implements SalaryService {

    private final SalaryRepository salaryRepository;

    private final EmployeeRepository employeeRepository;

    @Override
    public List<Salary> findAll() {
        return salaryRepository.findAll();
    }

    @Override
    public Salary save(SalaryDto salaryDto) {
        var employee = employeeRepository.findById(salaryDto.getEmployee()).get();

        var salary = new Salary();
        salary.setEmployee(employee);
        salary.setAmount(salaryDto.getAmount());
        salary.setDate(LocalDate.now());
        return salaryRepository.save(salary);
    }

    @Override
    public List<Salary> findAllByEmployee(Long employeeId) {
        return salaryRepository.findAllByEmployee_Id(employeeId);
    }
}
