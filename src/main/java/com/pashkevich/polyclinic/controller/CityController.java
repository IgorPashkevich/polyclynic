package com.pashkevich.polyclinic.controller;

import com.pashkevich.polyclinic.entity.City;
import com.pashkevich.polyclinic.repository.CityRepository;
import com.pashkevich.polyclinic.service.CityService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
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
@RequestMapping("/cities")
@AllArgsConstructor
public class CityController {

    private final CityService cityService;

    @GetMapping
    public List<City> findAll() {
//qwe
        return cityService.findAll();
    }

    @GetMapping("/{id}")
    public City findById(@PathVariable Long id) {
        return cityService.getById(id);
    }

    @PostMapping()
    public City save(@RequestBody City city) {
        return cityService.save(city);
    }

    @PutMapping()
    public City edit(@RequestBody City city) {
        return cityService.save(city);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        cityService.delete(id);
    }
}
