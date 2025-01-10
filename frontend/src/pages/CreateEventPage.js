import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/events", {
        name: eventName,
      });

      alert(`${response.data}`);
      setEventName("");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="create-event-page">
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Name of the event:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <label>
          Description of the event:
          <input
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Date and time of the event:
          <input type="datetime-local" />
        </label>
        <label>
          Category:
          <select>
            <option></option>
          </select>
        </label>
        <button type="submit">Create Event</button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateEventPage;
