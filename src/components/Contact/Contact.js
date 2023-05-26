import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Address: 123 Main Street, City, Country
            </p>
            <p>
              Phone: +1234567890
            </p>
            <p>
              Email: info@example.com
            </p>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          {/* Embed your map component or use an iframe to display the map */}
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d0.000000!3d0.000000!4m5!6m4!1s0x0:0x0!8m2!3d0.000000!4d0.000000"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Law Firm. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
