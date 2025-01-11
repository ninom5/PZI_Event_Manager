const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

let events = [];

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.post("/events", (req, res) => {
  try {
    const { coverImageName, nameOfTheEvent, eventDescription, categories } =
      req.body;

    const newEvent = {
      id: events.length + 1,
      coverImageName,
      nameOfTheEvent,
      eventDescription,
      categories,
    };

    events.push(newEvent);

    return res.json("Successfully created new event");
  } catch (error) {
    return res.json("error while creating new event");
  }
});

// app.get("/actualEvents", (req, res) => {
//   try {
//     if (events.length === 0) return res.json("No events available");

//     events.forEach((event) => {
//       console.log(event);
//     });

//     return res.json(events);
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     return res.status(500);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
