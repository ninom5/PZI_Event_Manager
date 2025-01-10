import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<CreateEventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
