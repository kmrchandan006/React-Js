import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file


function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      <div>
      <Link to="/next">Next</Link>
      </div>
    </nav>
  );
}

export default Navbar;
