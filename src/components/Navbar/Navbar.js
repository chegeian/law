import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  
  return (
    <>
      <nav className={Mobile ? "navbar mobile" : "navbar"}>
        <Link to='/' className='logo'>
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=641e000e39&attid=0.1&permmsgid=msg-f:1766599139043412869&th=1884388e9f318b85&view=att&disp=safe&realattid=f_lhyuq9jr0" alt="Logo" className="logo-img" />
          <p className="mwa">Mwangi mwendia Associates & Advocates</p>
        </Link>
      
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/practice' className='skills'>
            <li>Practice Areas</li>
          </Link>
          <Link to='/contact' className='home'>
            <li>Contact</li>
          </Link>
        
        </ul>
      
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}

export default Navbar;
