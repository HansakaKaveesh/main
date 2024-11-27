import React from 'react';
import '../../../components/shared/Hero.css';

function Hero() {
  const scrollToFabrics = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="Sect">
      <img src="/Logo&Cloth/img with blur.png" alt="Curtain" className="Sect-img" />
      <div className="Sect-text">
        <img src="/Logo&Cloth/pic1.png" alt="Curtain" className="logo" />
        <h1>Comfort to Elegance</h1>
        <p>Welcome to Glorious Fabric</p>
        <button className="button" onClick={scrollToFabrics}>
          Our Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;
