import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");

  let categoryOptions = [
    "---------------------------",
    "concert",
    "educational",
    "party",
    "public exhibition",
    "humanitarian action",
  ];
  // const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });

    let base64Image = "";

    if (selectedImage) {
      base64Image = await getBase64(selectedImage);
    }

    try {
      const response = await axios.post("http://localhost:5000/events", {
        coverImageName: base64Image,
        nameOfTheEvent: eventName,
        eventDescription,
        startingDate: startingDate,
        endingDate: endingDate,
        categories: document.querySelector("select[name='categories']").value,
      });

      const existingEvents = JSON.parse(localStorage.getItem("events")) || [];

      const newEvent = {
        coverImageName: base64Image,
        nameOfTheEvent: eventName,
        eventDescription,
        startingDate,
        endingDate,
        categories: document.querySelector("select[name='categories']").value,
      };

      existingEvents.push(newEvent);
      localStorage.setItem("events", JSON.stringify(existingEvents));

      setEventName("");
      setEventDescription("");
      setStartingDate("");
      setEndingDate("");
      setSelectedImage(null);

      document.querySelector("select[name='categories']").selectedIndex = 0;

      alert(response.data);
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event: " + error.response.data);
    }
  };

  return (
    <div className="create-event-page">
      <Header />
      <form onSubmit={handleSubmit}>
        {selectedImage ? (
          <div className="img-container">
            <img
              alt="Image not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <button id="remove-img" onClick={() => setSelectedImage(null)}>
              Remove image
            </button>
          </div>
        ) : (
          <label>
            Cover image:
            <input
              type="file"
              name="coverImageName"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              className="add-img-btn"
              required
            />
          </label>
        )}
        <label>
          Name of the event:
          <input
            type="text"
            value={eventName}
            name="nameOfTheEvent"
            onChange={(e) => setEventName(e.target.value)}
            className="text-input"
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
              className="text-input"
              required
            />
          </div>
        </label>
        <label>
          Starting date and time of the event:
          <input
            type="datetime-local"
            value={startingDate}
            name="startingDate"
            onChange={(e) => setStartingDate(e.target.value)}
            required
          />
        </label>
        <label>
          Ending date and time of the event:
          <input
            type="datetime-local"
            value={endingDate}
            name="endingDate"
            onChange={(e) => setEndingDate(e.target.value)}
            required
          />
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
