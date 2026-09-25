// ================= SAVE SETTINGS =================

function saveSettings() {

    const settings = {

        weatherAlerts:
            document.getElementById("weatherAlerts").checked,

        rainAlerts:
            document.getElementById("rainAlerts").checked,

        stormAlerts:
            document.getElementById("stormAlerts").checked,

        dailySummary:
            document.getElementById("dailySummary").checked,

        temperatureUnit:
            document.getElementById("temperatureUnit").value,

        windUnit:
            document.getElementById("windUnit").value,

        forecastDays:
            document.getElementById("forecastDays").value,

        locationAccess:
            document.getElementById("locationAccess").checked,

        searchHistory:
            document.getElementById("searchHistory").checked

    };

    // Save temporarily in browser
    localStorage.setItem(
        "weatherAlertSettings",
        JSON.stringify(settings)
    );
}


// ================= LOAD SETTINGS =================

function loadSettings() {

    const saved =
        localStorage.getItem(
            "weatherAlertSettings"
        );

    if (!saved) {
        return;
    }

    const settings =
        JSON.parse(saved);


    document.getElementById("weatherAlerts").checked =
        settings.weatherAlerts;

    document.getElementById("rainAlerts").checked =
        settings.rainAlerts;

    document.getElementById("stormAlerts").checked =
        settings.stormAlerts;

    document.getElementById("dailySummary").checked =
        settings.dailySummary;

    document.getElementById("temperatureUnit").value =
        settings.temperatureUnit;

    document.getElementById("windUnit").value =
        settings.windUnit;

    document.getElementById("forecastDays").value =
        settings.forecastDays;

    document.getElementById("locationAccess").checked =
        settings.locationAccess;

    document.getElementById("searchHistory").checked =
        settings.searchHistory;
}


// ================= SAVE ALL =================

function saveAllSettings() {

    saveSettings();

    alert(
        "Your WeatherAlert settings have been saved successfully!"
    );
}


// ================= NOTIFICATION =================

function showNotification() {

    alert(
        "You have no new notifications."
    );
}


// ================= EDIT PROFILE =================

function editProfile() {

    alert(
        "Profile editing will be available after connecting the Java backend."
    );
}


// ================= LOGOUT =================

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );

    if (confirmLogout) {

        alert(
            "You have been logged out."
        );

    }
}


// ================= LOAD =================

window.onload = function () {

    loadSettings();

};