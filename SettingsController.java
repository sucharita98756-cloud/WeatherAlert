package com.weatheralert.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {

    // GET SETTINGS
    @GetMapping
    public String getSettings() {

        return "WeatherAlert Settings";
    }


    // SAVE SETTINGS
    @PostMapping
    public String saveSettings(
            @RequestParam boolean weatherAlerts,
            @RequestParam boolean rainAlerts,
            @RequestParam boolean stormAlerts,
            @RequestParam boolean dailySummary,
            @RequestParam String temperatureUnit,
            @RequestParam String windUnit,
            @RequestParam int forecastDays) {

        System.out.println(
                "Weather Alerts: "
                + weatherAlerts
        );

        System.out.println(
                "Rain Alerts: "
                + rainAlerts
        );

        System.out.println(
                "Storm Alerts: "
                + stormAlerts
        );

        System.out.println(
                "Daily Summary: "
                + dailySummary
        );

        System.out.println(
                "Temperature Unit: "
                + temperatureUnit
        );

        System.out.println(
                "Wind Unit: "
                + windUnit
        );

        System.out.println(
                "Forecast Days: "
                + forecastDays
        );


        return "Settings saved successfully";
    }
}