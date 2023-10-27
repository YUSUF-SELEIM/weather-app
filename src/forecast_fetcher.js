import createCard from "./create_card";

async function getForecast(city) {
	try {
		const forecast = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=18feae854691456cb6c114106232710&q=${city}`
		);

		if (!forecast.ok) {
			throw new Error("Failed to fetch forecast data.");
		}

		const forecastJson = await forecast.json();
		console.log(forecastJson);
		return forecastJson;
	} catch (error) {
		console.log("Error fetching forecast:", error);
		alert("Location Not Found");
		createCard();
	}
}

export default getForecast;
