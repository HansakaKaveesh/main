import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="Sec">
      <img src="/img/img with blur.png" alt="Curtain" className="hero-img" />
      <div className="hero-text">
        <img src="/img/Logo.png" alt="Curtain" className="logo" />
        <h1>Products</h1>
        <p>Select Your items.</p>
        
      </div>
    </section>
  );
}

export default Hero;
