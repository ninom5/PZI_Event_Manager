import { addCities } from "./addCities.js";
import { Event } from "../models/EventEntity.js";

document.addEventListener("DOMContentLoaded", () => {
  addCities();
});

const createEventForm = document.querySelector(".create-event-section__form");
createEventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createEvent();
});

function createEvent() {
  const imageOfTheEvent = document.getElementById("image-input").value;
  const nameOfTheEvent = document.getElementById("event-name").value;
  const eventDescription = document.getElementById("event-description").value;
  const location = document.getElementById("city-select").value;

  validateEventData(
    imageOfTheEvent,
    nameOfTheEvent,
    eventDescription,
    location
  );

  const newEvent = new Event(
    imageOfTheEvent,
    nameOfTheEvent?.trim(),
    eventDescription?.trim(),
    location
  );

  localStorage.setItem("event", JSON.stringify(newEvent));

  resetForm();
}

const validateEventData = (
  imageOfTheEvent,
  nameOfTheEvent,
  eventDescription,
  location
) => {
  if (
    imageOfTheEvent === null ||
    nameOfTheEvent === null ||
    eventDescription === null ||
    location === null
  ) {
    alert("Fill in all the fields");
    return false;
  }

  if (nameOfTheEvent?.trim() === "" || eventDescription?.trim() === "") {
    alert("Fill in all the fields");
    return false;
  }

  return true;
};

const resetForm = () => {
  createEventForm.reset();
};
