import React from "react";

function HoverDropdown() {
  return (
    <div className="dropdown-container">
      <span className="dropdown-label">Events</span>
      <ul className="dropdown-menu">
        <li>
          <a href="#/create">Create event</a>
        </li>
        <li>
          <a href="#/see-all">See all events</a>
        </li>
        <li>
          <a href="#/delete">Delete event</a>
        </li>
      </ul>
    </div>
  );
}

export default HoverDropdown;
