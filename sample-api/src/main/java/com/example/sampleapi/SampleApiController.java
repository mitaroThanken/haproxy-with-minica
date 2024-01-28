package com.example.sampleapi;

import java.time.Instant;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SampleApiController {
    @GetMapping("/hello")
    public ResponseEntity<SampleDto> hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        final var data = SampleDto.builder().current(Instant.now()).message(String.format("Hello %s!", name)).build();
        return ResponseEntity.ok().body(data);
    }
}
