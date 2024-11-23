import React from 'react';
import './Hero.css'; 
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="Sect">
      <img src="/Logo&Cloth/img with blur.png" alt="Curtain" className="Sect-img" />
      <div className="Sect-text">
        <img src="/Logo&Cloth/pic1.png" alt="Curtain" className="logo" />
        <h1>Comfort to Elegance</h1>
        <p>Welcome to Glorious Fabric Pvt Ltd</p>
        <Link to="/quotation"><a className="button">Quotation</a></Link>
      </div>
    </section>
  );
}

export default Hero;
