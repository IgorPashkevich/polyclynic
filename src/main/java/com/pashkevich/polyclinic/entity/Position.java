package com.pashkevich.polyclinic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "position")
public class Position {

    @Id
    private Long id;

    @Column(name = "name")
    private String name;
}
