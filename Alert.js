function showAlertDetails(alertName) {

    alert(
        "WEATHER ALERT\n\n" +
        alertName +
        "\n\n" +
        "Please follow the recommended safety instructions " +
        "and monitor official weather updates."
    );
}


function refreshAlerts() {

    const button = document.querySelector(".location-bar button");

    button.innerText = "⏳ Updating...";

    setTimeout(function () {

        button.innerText = "🔄 Refresh";

        alert("Weather alerts updated successfully.");

    }, 1000);
}