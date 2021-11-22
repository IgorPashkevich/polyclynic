package com.pashkevich.polyclinic.repository;

import com.pashkevich.polyclinic.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionRepository extends JpaRepository<Position, Long> {

}
