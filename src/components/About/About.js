import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <div className="content-container">
        <div className="description-container">
          <p className="description">
            Welcome to our company! We are a dedicated team of professionals
            committed to delivering high-quality products and services to our
            customers.
          </p>
          <p className="description">
            Our mission is to provide innovative solutions that meet the needs
            of our clients and exceed their expectations. With years of
            experience in the industry, we have built a reputation for
            reliability and excellence.
          </p>
          <p className="description">
            At our company, we value collaboration, integrity, and continuous
            improvement. We work closely with our clients to understand their
            requirements and develop tailored solutions that drive their
            success.
           
          </p>
          <Link to="/services" className="contact-button">Services</Link>
        </div>
        <img
            className="company-image"
            src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF3eWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Company"
          />
      
      </div>
      <footer className="footer">
        <p>&copy; 2023 mwangi mwendia associates and advocates. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;