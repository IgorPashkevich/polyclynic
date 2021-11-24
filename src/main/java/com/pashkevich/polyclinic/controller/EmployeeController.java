package com.pashkevich.polyclinic.controller;

import com.pashkevich.polyclinic.dto.EmployeeDto;
import com.pashkevich.polyclinic.dto.SearchDto;
import com.pashkevich.polyclinic.entity.Employee;
import com.pashkevich.polyclinic.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/employees")
@AllArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    @PostMapping()
    public Employee save(@RequestBody EmployeeDto dto) {
        return employeeService.save(dto);
    }

    @PutMapping()
    public Employee update(@RequestBody  EmployeeDto dto) {
        return employeeService.update(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        employeeService.delete(id);
    }

    @GetMapping("/search")
    public List<Employee> search(SearchDto searchDto) {
        return employeeService.search(searchDto);
    }
}
