import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="Sec">
      <img src="/img/img with blur.png" alt="Curtain" className="hero-img" />
      <div className="hero-text">
        <img src="/img/Logo.png" alt="Curtain" className="logo" />
        <h1>About Us</h1>
        <p>Glorious Textile started in the spring of 2008. </p>
        
      </div>
    </section>
  );
}

export default Hero;