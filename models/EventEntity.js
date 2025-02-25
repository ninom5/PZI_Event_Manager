let EventId = 0;

class Event {
  constructor(image, name, description, location, startDate, endDate) {
    this.id = EventId++;
    this.image = image;
    this.name = name;
    this.description = description;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export { Event };
