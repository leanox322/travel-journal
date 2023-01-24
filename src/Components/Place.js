import React from "react";
import "../App.css";
import marker from "../images/marker.png";

function Place({ place }) {
  const {
    imageUrl,
    location,
    googleMapsUrl,
    title,
    startDate,
    endDate,
    description,
  } = place;
  return (
    <div>
      <div className="travel-place-wrapper">
        <img src={imageUrl} className="place-img" />
        <div className="place-details">
          <div className="place-location">
            <img src={marker} />
            <p className="place-country">{location}</p>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2 className="place-title">{title}</h2>
          <span className="place-date">
            {startDate} - {endDate}
          </span>
          <p className="place-description">{description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Place;
