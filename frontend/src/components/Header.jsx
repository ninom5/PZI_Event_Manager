// import { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import headerLogo from "../assets/headerLogo.jpg";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import DropDownButton from "./DropDownButton";
import Hover from "./Hover";

function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <Hover />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
