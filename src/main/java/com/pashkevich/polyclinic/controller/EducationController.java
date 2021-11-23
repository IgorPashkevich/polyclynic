package com.pashkevich.polyclinic.controller;


import com.pashkevich.polyclinic.dto.EducationDto;
import com.pashkevich.polyclinic.entity.Education;
import com.pashkevich.polyclinic.service.EducationService;
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
@RequestMapping("/educations")
@AllArgsConstructor
public class EducationController {

    private final EducationService educationService;

    @GetMapping
    public List<Education> findAll() {
        return educationService.findAll();
    }

    @PostMapping()
    public Education save(@RequestBody EducationDto dto) {
        return educationService.save(dto);
    }

    @PutMapping()
    public Education edit(@RequestBody EducationDto dto) {
        return educationService.update(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        educationService.delete(id);
    }
}
