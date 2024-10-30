import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Welcome to Glorious Fabric Pvt Ltd! Located in the heart of Malwana, we are a premier fabric store dedicated to offering high-quality textiles at competitive prices.</p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/Quotation">Quotation</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://web.facebook.com/profile.php?id=61561593119926"><img src="/icon/Facebook.png" alt="Facebook" /></a>
            <a href="https://www.instagram.com/glorious_fabric/"><img src="/icon/Instergram.png" alt="Instagram" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p><i className="fas fa-envelope"></i>info@gloriousfabric.lk</p>
          <p><i className="fas fa-phone-alt"></i>0776769398 / 0773315775</p>
          <p><i className="fas fa-map-marker-alt"></i>Glorious Fabric (Pvt) Ltd,<br/>182/C, Kandewatta Rd,<br/>Malwana.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Glorious Fabric Pvt Ltd. All Rights Reserved.</p>
      </div> 
    </footer>
  );
}

export default Footer;
