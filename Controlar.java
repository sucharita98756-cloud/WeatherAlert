package com.weatheralert.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/forecast")
public class ForecastController {

    @GetMapping
    public String getForecast(
            @RequestParam String city) {

        // Later:
        // 1. Call Weather API
        // 2. Get forecast data
        // 3. Process JSON
        // 4. Return forecast to frontend

        return "Forecast for " + city;
    }
}