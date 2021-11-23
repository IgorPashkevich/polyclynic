package com.pashkevich.polyclinic.service;

import com.pashkevich.polyclinic.entity.Position;

import java.util.List;

public interface PositionService {

    List<Position> findAll();

    Position save(Position position);

    void delete(Long id);
}
