import React from "react";
import Navbar from "./Components/Navbar";
import Place from "./Components/Place";
import "./App.css";
import data from "./data.js";

function App() {
  return (
    <section className="container">
      <Navbar />
      <div className="travel-places-list">
        {data.map((place, i) => (
          <Place key={i} place={place} />
        ))}
      </div>
    </section>
  );
}

export default App;
