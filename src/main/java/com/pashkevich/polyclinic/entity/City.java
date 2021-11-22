package com.pashkevich.polyclinic.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "city")
@Getter
@Setter
@ToString
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_id")
    @SequenceGenerator(name = "city_id", sequenceName = "city_id_seq", allocationSize = 1)
    private Long id;

    @Column
    private String name;
}
