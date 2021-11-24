package com.pashkevich.polyclinic.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SalaryDto {
    private Long employee;
    private Double amount;
}
