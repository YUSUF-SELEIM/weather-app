function searchLocation() {
	const searchButton = document.getElementById("search-button");
	const locationInput = document.getElementById("location-search");
	searchButton.addEventListener("click", function () {
		console.log("search for " + locationInput.value);
		return locationInput.value;
	});
}

export default searchLocation;
