import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  let categoryOptions = [
    "----------",
    "concert",
    "educational",
    "party",
    "public exhibition",
    "humanitarian action",
  ];
  // const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventName || !eventDescription) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/events", {
        coverImageName: selectedImage ? selectedImage.name : "",
        nameOfTheEvent: eventName,
        eventDescription,
        categories: document.querySelector("select[name='categories']").value,
      });

      alert(response.data);

      const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
      const newEvent = {
        coverImageName: selectedImage ? selectedImage.name : "",
        nameOfTheEvent: eventName,
        eventDescription,
        categories: document.querySelector("select[name='categories']").value,
      };

      existingEvents.push(newEvent);
      localStorage.setItem("events", JSON.stringify(existingEvents));

      setEventName("");
      setEventDescription("");
      setSelectedImage(null);
      document.querySelector("select[name='categories']").selectedIndex = 0;
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="create-event-page">
      <Header />
      <form onSubmit={handleSubmit}>
        {selectedImage && (
          <div>
            <img
              alt="Image not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <button onClick={() => setSelectedImage(null)}>Remove image</button>
          </div>
        )}
        <label>
          Cover image:
          <input
            type="file"
            name="coverImageName"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            required
          />
        </label>
        <label>
          Name of the event:
          <input
            type="text"
            value={eventName}
            name="nameOfTheEvent"
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <label>
          <div id="description">
            Description of the event:
            <textarea
              value={eventDescription}
              name="eventDescription"
              onChange={(e) => setEventDescription(e.target.value)}
              required
            />
          </div>
        </label>
        <label>
          Starting date and time of the event:
          <input type="datetime-local" required />
        </label>
        <label>
          Ending date and time of the event:
          <input type="datetime-local" required />
        </label>
        <label>
          Category:
          <select name="categories">
            {categoryOptions.map((category) => {
              return <option>{category}</option>;
            })}
          </select>
        </label>
        <button type="submit" className="create-button">
          Create Event
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateEventPage;
