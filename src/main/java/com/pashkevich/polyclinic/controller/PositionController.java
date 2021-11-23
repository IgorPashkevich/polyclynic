package com.pashkevich.polyclinic.controller;

import com.pashkevich.polyclinic.entity.Position;
import com.pashkevich.polyclinic.service.PositionService;
import lombok.AllArgsConstructor;
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
@RequestMapping("/positions")
@AllArgsConstructor
public class PositionController {

    private final PositionService positionService;

    @GetMapping
    public List<Position> findAll() {
        return positionService.findAll();
    }

    @PostMapping()
    public Position save(@RequestBody Position position) {
        return positionService.save(position);
    }

    @PutMapping()
    public Position edit(@RequestBody Position position) {
        return positionService.save(position);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        positionService.delete(id);
    }
}
