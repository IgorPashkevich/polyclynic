package com.pashkevich.polyclinic.controller;

import com.pashkevich.polyclinic.dto.SalaryDto;
import com.pashkevich.polyclinic.entity.Salary;
import com.pashkevich.polyclinic.service.SalaryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/salary")
@AllArgsConstructor
public class SalaryController {

    private final SalaryService salaryService;

    @GetMapping
    public List<Salary> findAll() {
        return salaryService.findAll();
    }

    @PostMapping()
    public Salary save(@RequestBody SalaryDto dto) {
        return salaryService.save(dto);
    }

    @GetMapping("/employee/{id}")
    public List<Salary> search(@PathVariable Long id) {
        return salaryService.findAllByEmployee(id);
    }
}
