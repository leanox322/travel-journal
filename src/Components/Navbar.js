import React from "react";
import "../App.css";
import planetImg from "../images/planet.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title-wrapper">
        <img src={planetImg} />
        <h2>my travel journal.</h2>
      </div>
    </nav>
  );
}

export default Navbar;
