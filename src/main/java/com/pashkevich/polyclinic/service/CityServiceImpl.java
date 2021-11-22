package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.entity.City;
import com.pashkevich.polyclinic.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CityServiceImpl implements CityService{

    private final CityRepository cityRepository;

    public List<City> findAll() {
        return cityRepository.findAll();
    }

    public City save(City city) {
        return cityRepository.save(city);
    }

    public City getById(Long id) {
        return cityRepository.getById(id);
    }

    public void delete(Long id) {
        cityRepository.deleteById(id);
    }
}
