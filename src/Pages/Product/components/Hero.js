import React from 'react';
import './Hero.css'; 
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="Sect">
      <img src="/img with blur.png" alt="Curtain" className="Sect-img" />
      <div className="Sect-text">
        <img src="/pic1.png" alt="Curtain" className="logo" />
        <h1>Products</h1>
        <p>Premier fabric store dedicated to offering high-quality textiles</p>
        <Link to="/QUOTATION"><a className="button">QUOTATION</a></Link>
      </div>
    </section>
  );
}

export default Hero;
