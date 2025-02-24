import { fetchCities } from "./fetchCities.js";

async function addCities() {
  const citySelect = document.getElementById("city-select");

  const cities = await fetchCities();
  if (cities.length === 0) return;

  cities.forEach((city) => {
    const citySelectOption = document.createElement("option");

    citySelectOption.setAttribute("value", city.city);
    citySelectOption.textContent = city.city + ", " + city.country;

    citySelect.appendChild(citySelectOption);
  });
}

export { addCities };
