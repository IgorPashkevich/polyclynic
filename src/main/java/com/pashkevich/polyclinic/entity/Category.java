package com.pashkevich.polyclinic.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "category")
@Entity
@Getter
@Setter
public class Category {

    @Id
    private Long id;

    @Column(name = "name")
    private String name;
}
