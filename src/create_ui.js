import "./style.css";
import createCard from "./create_card";
import getLocation from "./location_fetcher";
import getForecast from "./forecast_fetcher";

const body = document.getElementById("body");

async function createUI() {
	body.classList.add("bg-[#DADDB1]");

	const searchButton = document.getElementById("search-button");
	const locationInput = document.getElementById("location-search");
	const spinnerOverlay = document.getElementById("spinner-overlay");

	let forecastJsonForLocation;
	spinnerOverlay.classList.remove("hidden");
	forecastJsonForLocation = await getForecast(await getLocation());
	createCard(forecastJsonForLocation);
	dayOrNightBG(forecastJsonForLocation.current.is_day);
	spinnerOverlay.classList.add("hidden");

	searchButton.addEventListener("click", async function () {
		spinnerOverlay.classList.remove("hidden");
		forecastJsonForLocation = await getForecast(locationInput.value);
		try {
			createCard(forecastJsonForLocation);
			dayOrNightBG(forecastJsonForLocation.current.is_day);
		} catch (error) {
			console.log(error);
		}
		spinnerOverlay.classList.add("hidden");
	});
}
function dayOrNightBG(isDay) {
	if (isDay === 1) {
		body.classList.add("day-bg");
		body.classList.remove("night-bg");
	} else {
		body.classList.remove("day-bg");
		body.classList.add("night-bg");
	}
}

export default createUI;
