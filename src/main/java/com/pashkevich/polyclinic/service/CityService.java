package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.entity.City;

import java.util.List;

public interface CityService {

    List<City> findAll();

    City save(City city);

    void delete(Long id);
}
