package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.dto.EmployeeDto;
import com.pashkevich.polyclinic.dto.SearchDto;
import com.pashkevich.polyclinic.entity.Employee;
import com.pashkevich.polyclinic.repository.CategoryRepository;
import com.pashkevich.polyclinic.repository.EducationRepository;
import com.pashkevich.polyclinic.repository.EmployeeRepository;
import com.pashkevich.polyclinic.repository.PositionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final CategoryRepository categoryRepository;
    private final EducationRepository educationRepository;
    private final PositionRepository positionRepository;

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee save(EmployeeDto dto) {
        var category = categoryRepository.findById(dto.getCategoryId()).get();
        var education = educationRepository.findById(dto.getEducationId()).get();
        var position = positionRepository.findById(dto.getPositionId()).get();

        var employee = new Employee();
        employee.setFirstName(dto.getFirstName());
        employee.setLastName(dto.getLastName());
        employee.setMiddleName(dto.getMiddleName());
        employee.setDateOfBirth(dto.getDateOfBirth());
        employee.setCategory(category);
        employee.setEducation(education);
        employee.setPosition(position);

        return employeeRepository.save(employee);
    }

    @Override
    public void delete(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee update(EmployeeDto dto) {
        var employee = employeeRepository.findById(dto.getId()).get();

        var category = categoryRepository.findById(dto.getCategoryId()).get();
        var education = educationRepository.findById(dto.getEducationId()).get();
        var position = positionRepository.findById(dto.getPositionId()).get();

        employee.setFirstName(dto.getFirstName());
        employee.setLastName(dto.getLastName());
        employee.setMiddleName(dto.getMiddleName());
        employee.setDateOfBirth(dto.getDateOfBirth());
        employee.setCategory(category);
        employee.setEducation(education);
        employee.setPosition(position);

        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> search(SearchDto searchDto) {
        if (Objects.nonNull(searchDto.getLastName())) {
            return employeeRepository.findAllByLastName(searchDto.getLastName());
        }

        return Collections.emptyList();
    }
}
