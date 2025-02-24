import { addCities } from "./addCities.js";

document.addEventListener("DOMContentLoaded", () => {
  addCities();
});

const createEventForm = document.querySelector(".create-event-section__form");
createEventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createEvent();
});

function createEvent() {
  const nameOfTheEvent = document.getElementById("event-name");
  const eventDescription = document.getElementById("event-description");
}
