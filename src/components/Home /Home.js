import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="homepage-lander">
        <div className="homepage-tile">
          <p className="sub-heading">LEARN TO DO GOOD; SEEK JUSTICE & CORRECT OPPRESSION.</p>
          <h1 className="heading">The Most Talented Law Firm Aiming To Provide High Legal Consultancy.</h1>
          <p className="sub-heading">Reputation. Respect. Result.  <Link to="/about" className="about-button">learn more</Link></p>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
