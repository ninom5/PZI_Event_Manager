async function fetchCities() {
  const fetchCitiesURL =
    "https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-capital-city.json";
  try {
    const response = await fetch(fetchCitiesURL);
    if (!response.ok) throw new Error("Failed to fetch cities");

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    alert("Problem with fetching");
    console.error("Problem fetching cities: ", error);
    return [];
  }
}

export { fetchCities };
