import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="Sec">
      <img src="/img/img with blur.png" alt="Curtain" className="hero-img" />
      <div className="hero-text">
        <img src="/img/Logo.png" alt="Curtain" className="logo" />
        <h1>Elevate Your Brand</h1>
        <p>Glorius Textile has been the go-to company since the 80's.</p>
        <a href="#" className="button">Realize Your Vision</a>
      </div>
    </section>
  );
}

export default Hero;
