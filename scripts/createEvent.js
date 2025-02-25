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
  const imageOfTheEvent = document.getElementById("image-input");
  const nameOfTheEvent = document.getElementById("event-name").value;
  const eventDescription = document.getElementById("event-description").value;
  const location = document.getElementById("city-select").value;

  if (
    !validateEventData(
      imageOfTheEvent,
      nameOfTheEvent,
      eventDescription,
      location
    )
  )
    return;

  const imageFile = imageOfTheEvent.files[0];
  if (!imageFile) {
    alert("Upload image");
    return;
  }

  try {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Image = e.target.result;

      const newEvent = new Event(
        base64Image,
        nameOfTheEvent?.trim(),
        eventDescription?.trim(),
        location
      );

      let allEvents = JSON.parse(localStorage.getItem("events")) || [];
      allEvents.push(newEvent);

      localStorage.setItem("events", JSON.stringify(allEvents));
      resetForm();
    };
    reader.readAsDataURL(imageFile);
  } catch (error) {
    alert("Error creating event");
    console.log("Error creating event: ", error);

    return;
  }
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
