function searchWeather() {

    let city = document.getElementById("cityInput").value;

    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    document.getElementById("cityName").innerText =
        city + ", India";

    // Temporary demo data
    document.getElementById("temperature").innerText = "30°C";
    document.getElementById("condition").innerText = "Partly Cloudy";
    document.getElementById("feelsLike").innerText = "33°C";

    document.getElementById("humidity").innerText = "75%";
    document.getElementById("wind").innerText = "14 km/h";
    document.getElementById("rain").innerText = "55%";
    document.getElementById("uv").innerText = "6";

    document.getElementById("weatherIcon").innerText = "🌤️";
}


function showAlert() {

    alert(
        "⚠️ WEATHER ALERT\n\n" +
        "Heavy rainfall is possible in your area.\n\n" +
        "Safety Tip: Avoid low-lying areas and stay indoors if rainfall becomes severe."
    );

}