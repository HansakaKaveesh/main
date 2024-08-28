import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="hero">
       <img src="/img with blur.png" alt="Curtain" className="hero-img" />
      <div className="hero-text">
        <p><b>Glorius Textile has been the go-to company since the 80's.</b></p>
        <a href="#" className="btn">Realize Your Vision</a>
      </div>
    </section>
  );
}

export default Hero;