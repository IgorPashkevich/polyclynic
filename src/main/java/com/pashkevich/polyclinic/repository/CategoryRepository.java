package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
