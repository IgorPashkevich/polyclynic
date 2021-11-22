package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, Long> {

}
