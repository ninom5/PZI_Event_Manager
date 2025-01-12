import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import AllEvents from "./pages/AllEvents";
import DeleteEvent from "./pages/DeleteEventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<CreateEventPage />} />
        <Route path="/allEvents" element={<AllEvents />} />
        <Route path="/deleteEvent" element={<DeleteEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
