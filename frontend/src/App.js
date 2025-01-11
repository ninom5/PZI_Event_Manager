import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import AllEvents from "./pages/AllEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<CreateEventPage />} />
        <Route path="actualEvents" element={<AllEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
