import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function AllEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];

    setEvents(savedEvents);
  }, []);

  return (
    <div className="all-events-container">
      <Header />
      <div className="all-events-container__element">
        {events.length > 0 ? (
          events.map((event, index) => {
            return (
              <div className="card" key={index}>
                <Card
                  eventImg={event.coverImageName}
                  eventName={event.nameOfTheEvent}
                  eventDescription={event.eventDescription}
                  // eventStart={event.startingbals}
                  // eventEnd={event.endbla}
                  eventCategory={event.categories}
                  eventIndex={index}
                />
              </div>
            );
          })
        ) : (
          <p>No saved events</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AllEvents;
