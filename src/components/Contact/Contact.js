import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <div className="Contact-info">
        <div className="Contact-location">
          <h3>Thika Town Office</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            EQUITY PLAZA, 4TH FLOOR, ROOM 420, THIKA TOWN.
          </p>
        </div>
        <div className="Contact-location">
          <h3>Githurai Office</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            WIMMA BUILDING (POST BANK), 4TH FLOOR, ROOM 24, MWIHOKO ROAD, GITHURAI.
          </p>
        </div>
        <div className="Contact-email">
          <h3>Email</h3>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            lawfirm@example.com
          </p>
        </div>
        <div className="Contact-map">
          <h3>Location Map</h3>
          {/* Replace the placeholder map with your preferred map component */}
          <div className="Map-placeholder">
            <p>Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
