package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.entity.Category;

import java.util.List;

public interface CategoryService {

    List<Category> findAll();

    Category save(Category category);

    void delete(Long id);
}
