function createCard(forecastJsonForLocation) {
	const forecastIcon = document.getElementById("forecast-icon");
	const locationName = document.getElementById("location-name");
	const conditionText = document.getElementById("condition-text");
	const forecastTemp = document.getElementById("forecast-temp");
	const feelsLike = document.getElementById("feels-like");
	const humidity = document.getElementById("humidity");
	const celOrFeh = document.getElementById("cel-or-feh");

	try {
		forecastIcon.src = forecastJsonForLocation.current.condition.icon;
		locationName.textContent = forecastJsonForLocation.location.name;
		conditionText.textContent = forecastJsonForLocation.current.condition.text;
		humidity.textContent =
			"Humidity : " + forecastJsonForLocation.current.humidity + " %";
		forecastTemp.textContent = forecastJsonForLocation.current.temp_c + " °C";
		forecastTemp.style = "cursor:pointer";

		celOrFeh.addEventListener("change", function () {
			if (celOrFeh.checked === true) {
				forecastTemp.textContent =
					forecastJsonForLocation.current.temp_c + " °C";
			} else {
				forecastTemp.textContent =
					forecastJsonForLocation.current.temp_f + " °F";
			}
		});
		feelsLike.textContent =
			"Feels Like : " + forecastJsonForLocation.current.feelslike_c + " °C";
		feelsLike.style = "cursor:pointer";
		
		celOrFeh.addEventListener("change", function () {
			if (celOrFeh.checked === true) {
				feelsLike.textContent =
					"Feels Like : " + forecastJsonForLocation.current.feelslike_c + " °C";
			} else {
				feelsLike.textContent =
					"Feels Like : " + forecastJsonForLocation.current.feelslike_f + " °F";
			}
		});
	} catch (error) {
		console.log(error);
	}
}

export default createCard;
