let EventId = 0;

class Event {
  constructor(image, name, description, location, eventStart, eventEnd) {
    this.id = EventId++;
    this.image = image;
    this.name = name;
    this.description = description;
    this.location = location;
    // this.eventStart = eventStart;
    // this.eventEnd = eventEnd;
  }
}

export { Event };
