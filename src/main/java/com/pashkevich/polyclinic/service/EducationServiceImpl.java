package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.dto.EducationDto;
import com.pashkevich.polyclinic.entity.City;
import com.pashkevich.polyclinic.entity.Education;
import com.pashkevich.polyclinic.repository.CityRepository;
import com.pashkevich.polyclinic.repository.EducationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EducationServiceImpl implements EducationService {

    private final EducationRepository educationRepository;

    private final CityRepository cityRepository;

    @Override
    public List<Education> findAll() {
        return educationRepository.findAll();
    }

    @Override
    public Education save(EducationDto dto) {
        var city = cityRepository.getById(dto.getCityId());

        var education = new Education();
        education.setName(dto.getName());
        education.setCity(city);

        return educationRepository.save(education);
    }

    @Override
    @Transactional
    public Education update(EducationDto dto) {
        var city = cityRepository.findById(dto.getCityId()).get();

        var savedEducation = educationRepository.findById(dto.getId()).get();
        savedEducation.setName(dto.getName());
        savedEducation.setCity(city);

        return educationRepository.save(savedEducation);
    }

    @Override
    public void delete(Long id) {
        educationRepository.deleteById(id);
    }
}
