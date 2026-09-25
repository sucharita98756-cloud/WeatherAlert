package com.weatheralert.controler;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    @GetMapping
    public String getLocation(
            @RequestParam String city) {

        return "Location: " + city;
    }

    @PostMapping
    public String saveLocation(
            @RequestParam String city) {

        // Later:
        // Save city in MySQL database

        return city + " saved successfully";
    }

    @DeleteMapping
    public String deleteLocation(
            @RequestParam String city) {

        // Later:
        // Delete city from database

        return city + " removed successfully";
    }
}