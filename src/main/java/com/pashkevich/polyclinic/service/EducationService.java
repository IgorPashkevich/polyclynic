package com.pashkevich.polyclinic.service;


import com.pashkevich.polyclinic.dto.EducationDto;
import com.pashkevich.polyclinic.entity.Education;

import java.util.List;

public interface EducationService {

    List<Education> findAll();

    Education save(EducationDto dto);

    Education update(EducationDto dto);

    void delete(Long id);
}
