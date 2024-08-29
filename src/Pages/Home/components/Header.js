import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <li><Link to="/">Home</Link></li>
          <li 
            className="dropdown" 
            onClick={toggleDropdown}
          >
            <a href="#">Product</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <li><a href="#">Product 3</a></li>
              </ul>
            )}
          </li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
