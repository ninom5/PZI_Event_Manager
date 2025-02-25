import { addCities } from "./addCities.js";
import { Event } from "../models/EventEntity.js";

document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.querySelector(".date-input");
  const calendar = document.querySelector(".calendar");

  const clearDatesBtn = document.getElementById("clear-dates");
  clearDatesBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".day button")
      .forEach((btn) => btn.classList.remove("selected-date"));

    dateInput.value = "";
  });

  dateInput.addEventListener("click", () => {
    calendar.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!calendar.contains(e.target) && e.target !== dateInput) {
      calendar.classList.remove("show");
    }
  });

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
  const dateStartEnd = document.querySelector(".date-input").value;

  if (
    !validateEventData(
      imageOfTheEvent,
      nameOfTheEvent,
      eventDescription,
      location,
      dateStartEnd
    )
  )
    return;

  const clearedDate = dateStartEnd
    .replace("Start: ", "")
    .replace("End: ", "")
    .trim();

  const dates = clearedDate.split(" - ");

  const startDate = dates[0].trim();
  const endDate = dates[1].trim();
  const currentDate = new Date();

  if (
    new Date(startDate) < currentDate ||
    new Date(startDate) > new Date(endDate)
  ) {
    alert(
      "dates can't be in past and ending date can't be before starting one"
    );
    return;
  }

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
        location,
        startDate,
        endDate
      );

      let allEvents = JSON.parse(localStorage.getItem("events")) || [];
      allEvents.push(newEvent);

      localStorage.setItem("events", JSON.stringify(allEvents));
      resetForm();

      alert("Successfully added new event");
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
  location,
  dateStartEnd
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

  if (!dateStartEnd.includes("Start:") || !dateStartEnd.includes("End:")) {
    alert("Pick valid dates");
    return;
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
