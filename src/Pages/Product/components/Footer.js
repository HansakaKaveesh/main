import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div class="footer-container">
      <div class="footer-section">
        <h2>About Us</h2>
        <p>Welcome to Glorious Fabric Pvt Ltd ! Located in the heart of Malwana , we are a premier fabric store dedicated to offering high-quality textiles at competitive prices.</p>
      </div>
        <div class="footer-section">
        <h2>Quick Links</h2>
          <ul>
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/QUOTATION">QUOTATION</Link></li>
          </ul>
        </div>
      
      <div class="footer-section">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="https://web.facebook.com/profile.php?id=61561593119926"><img src="/icon/Facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com/glorious_fabric/"><img src="/icon/Instergram.png" alt="Instagram" /></a>
        
      </div>
      </div>  
      
      <div class="footer-section">
                <h2>Contact Us</h2>
                <p>Email: info@gloriousfabric.lkExplore</p>
                <p>Phone: 0776769398 / 0773315775</p>
                <p>Address: GLORIOUS FABRIC PVT LTD,182/C,KANDEWATTE ROAD MALWANA</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        </div> 
    </footer>
  );
}

export default Footer;
