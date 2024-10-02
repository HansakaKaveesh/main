import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="head">
      <nav className="navi">
        
        <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navi-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/Product" onClick={toggleMobileMenu}>Product</Link></li>
          <li><Link to="/About" onClick={toggleMobileMenu}>About Us</Link></li>
          <li><Link to="/Contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
          <li><Link to="/QUOTATION" onClick={toggleMobileMenu}>Quotation</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
