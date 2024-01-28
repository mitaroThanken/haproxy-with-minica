package com.example.sampleapi;

import java.time.Instant;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class SampleDto {
   private String message;
   private Instant current; 
}
