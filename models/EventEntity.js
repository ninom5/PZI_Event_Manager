class Event {
  constructor(image, name, description, location, startDate, endDate) {
    let allEvents = JSON.parse(localStorage.getItem("events")) || [];
    this.id = allEvents.length;

    this.image = image;
    this.name = name;
    this.description = description;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export { Event };
