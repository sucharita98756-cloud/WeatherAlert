function searchLocation() {

    const input =
        document.getElementById("locationInput");

    const city = input.value.trim();

    if (city === "") {

        alert("Please enter a city name.");

        return;
    }

    document.getElementById("currentCity").innerText =
        city + ", India";

    alert(
        "Location selected: " +
        city +
        "\n\nReal weather data will be loaded after connecting the Weather API."
    );

    input.value = "";
}


/* ================= CURRENT LOCATION ================= */

function useCurrentLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported by your browser."
        );

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            document.getElementById("coordinates").innerText =
                "Latitude: " +
                latitude.toFixed(4) +
                "° | Longitude: " +
                longitude.toFixed(4) +
                "°";

            alert(
                "Your location has been detected.\n\n" +
                "Latitude: " + latitude.toFixed(4) +
                "\nLongitude: " + longitude.toFixed(4)
            );

        },

        function() {

            alert(
                "Unable to access your location. " +
                "Please allow location permission."
            );

        }

    );
}


/* ================= ADD LOCATION ================= */

function openAddLocation() {

    document.getElementById("locationModal")
        .style.display = "flex";
}


function closeAddLocation() {

    document.getElementById("locationModal")
        .style.display = "none";
}


function addLocation() {

    const input =
        document.getElementById("newLocation");

    const city = input.value.trim();

    if (city === "") {

        alert("Please enter a city name.");

        return;
    }

    const locationList =
        document.getElementById("locationList");


    const card =
        document.createElement("div");

    card.className = "location-card";


    card.innerHTML = `

        <div class="location-card-icon">
            📍
        </div>

        <div class="location-details">

            <h3>${city}</h3>

            <p>India</p>

        </div>

        <div class="location-weather">

            <span>🌤️</span>

            <strong>--°C</strong>

            <small>Loading...</small>

        </div>

        <div class="location-actions">

            <button
                onclick="selectLocation('${city}')">
                ✓
            </button>

            <button
                onclick="removeLocation(this)">
                🗑️
            </button>

        </div>
    `;


    locationList.appendChild(card);

    input.value = "";

    closeAddLocation();

    alert(
        city +
        " has been added to your saved locations."
    );
}


/* ================= SELECT LOCATION ================= */

function selectLocation(city) {

    document.getElementById("currentCity").innerText =
        city + ", India";

    alert(
        city +
        " is now selected as your active location."
    );
}


/* ================= REMOVE LOCATION ================= */

function removeLocation(button) {

    const card =
        button.closest(".location-card");

    const city =
        card.querySelector("h3").innerText;

    if (
        confirm(
            "Remove " +
            city +
            " from saved locations?"
        )
    ) {

        card.remove();

    }
}


/* ================= NOTIFICATION ================= */

document
    .querySelector(".notification")
    .addEventListener(
        "click",
        function() {

            alert(
                "You have no new notifications."
            );

        }
    );