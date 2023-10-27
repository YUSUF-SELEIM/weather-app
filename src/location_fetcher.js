
async function getLocation() {
	try {
		const location = await fetch(
			"https://ipgeolocation.abstractapi.com/v1?api_key=8cc5296c91114dee913497eb35779a3f&fields=city"
		);

		if (!location.ok) {
			throw new Error("Failed to fetch location data.");
		}

		const locationJson = await location.json();

		console.log(locationJson.city);
		// getForecast(locationJson.city);
		return locationJson.city;
	} catch (error) {
		console.log("Error fetching location:", error);
	}
}

export default getLocation;
