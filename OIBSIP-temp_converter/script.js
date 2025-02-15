function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
    let resultContainer = document.getElementById("result-container");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number!";
        resultContainer.classList.remove("opacity-0");
        return;
    }

    let convertedTemp, convertedUnit;

    if (unit === "celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = "°F (Fahrenheit)";
    } else if (unit === "fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = "°C (Celsius)";
    } else if (unit === "kelvin") {
        convertedTemp = temperature - 273.15;
        convertedUnit = "°C (Celsius)";
    }

    result.textContent = convertedTemp.toFixed(2) + " " + convertedUnit;

    // Smoothly reveal result
    resultContainer.classList.remove("opacity-0");
}
