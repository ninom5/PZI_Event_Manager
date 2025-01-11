import React from "react";
import { Link } from "react-router-dom";

function HoverDropdown() {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">Events</label>
      <ul className="dropdown-menu">
        <li>
          <Link to="/events">Create event</Link>
        </li>
        <li>
          <Link to="/actualEvents">See all events</Link>
        </li>
        <li>
          <a href="#/delete">Delete event</a>
        </li>
      </ul>
    </div>
  );
}

export default HoverDropdown;
