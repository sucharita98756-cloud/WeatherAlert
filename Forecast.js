function changeLocation() {

    let location = prompt("Enter your city:");

    if (location === null || location.trim() === "") {
        return;
    }

    document.getElementById("cityName").innerText =
        location + ", India";

    alert(
        "Location changed to " +
        location +
        ".\n\nWeather data will be updated when the Weather API is connected."
    );
}


/* Example function for updating forecast */

function updateWeather(
    temperature,
    condition,
    humidity,
    wind,
    rain
) {

    document.getElementById("todayTemp").innerText =
        temperature + "°C";

    document.getElementById("todayCondition").innerText =
        condition;

}


/* Notification button */

document
    .querySelector(".notification")
    .addEventListener("click", function () {

        alert(
            "You have no new weather notifications."
        );

    });