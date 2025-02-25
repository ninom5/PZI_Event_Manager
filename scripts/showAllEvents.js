document.addEventListener("DOMContentLoaded", () => {
  const eventsContainer = document.querySelector(".show-all-events");

  let allEvents = JSON.parse(localStorage.getItem("events")) || [];

  if (!allEvents || allEvents.length === 0) {
    const noEventsHeading = document.createElement("h2");
    noEventsHeading.textContent = "No created events right now";
    noEventsHeading.classList.add("no-events-heading");
    eventsContainer.appendChild(noEventsHeading);

    return;
  }
  allEvents.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const eventImg = document.createElement("img");
    eventImg.setAttribute("src", event.image);
    eventImg.setAttribute("alt", "Event image");
    eventImg.classList.add("event-card-image");

    const eventName = document.createElement("h3");
    eventName.innerHTML = `Event name: <span>${event.name}</span>`;

    const eventDescription = document.createElement("h3");
    eventDescription.innerHTML = `Event description: <span>${event.description}</span>`;

    const eventLocation = document.createElement("h3");
    eventLocation.innerHTML = `Event location: <span>${event.location}</span>`;

    const startDate = document.createElement("h3");
    startDate.innerHTML = `Start of the event: <span>${event.startDate}</span>`;

    const endDate = document.createElement("h3");
    endDate.innerHTML = `End of the event: <span>${event.endDate}</span>`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-card-btn");
    deleteButton.innerHTML = "&#10006;";

    deleteButton.addEventListener("click", () => {
      if (!confirm(`Do you really want to delete event: ${event.name} ?`))
        return;

      card.remove();
      const updatedEvents = allEvents.filter((e) => e.name !== event.name);
      localStorage.setItem("events", JSON.stringify(updatedEvents));

      alert("Successfully deleted event");
    });

    card.appendChild(eventImg);
    card.appendChild(eventName);
    card.appendChild(eventDescription);
    card.appendChild(eventLocation);
    card.appendChild(startDate);
    card.appendChild(endDate);
    card.appendChild(deleteButton);

    eventsContainer.appendChild(card);
  });
});
