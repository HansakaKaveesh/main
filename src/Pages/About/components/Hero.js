import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="Sec">
      <img src="/img with blur.png" alt="Curtain" className="hero-img" />
      <div className="hero-text">
        <img src="/pic1.png" alt="Curtain" className="logo1" />
        <h1>About Us</h1>
        <p>Our journey began in 2020 when we first stepped into the fabric industry</p>
        
      </div>
    </section>
  );
}

export default Hero;