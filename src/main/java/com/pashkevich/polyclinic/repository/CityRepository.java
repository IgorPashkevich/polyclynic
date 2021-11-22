package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {

}
