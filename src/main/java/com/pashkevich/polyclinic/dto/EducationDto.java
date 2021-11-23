package com.pashkevich.polyclinic.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EducationDto {
    private Long id;
    private String name;
    private Long cityId;
}
