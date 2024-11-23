import React from 'react';
import { Link } from 'react-router-dom';
import '../../../components/shared/Hero.css'; 

function Hero() {
  return (
    <section className="Sect">
      <img src="/Logo&Cloth/img with blur.png" alt="Curtain" className="Sect-img" />
      <div className="Sect-text">
        <img src="/Logo&Cloth/pic1.png" alt="Curtain" className="logo" />
        <h1>Comfort to Elegance</h1>
        <p>Welcome to Glorious Fabric</p>
        <Link to="/quotation"><button className="button">Quotation</button></Link>
      </div>
    </section>
  );
}

export default Hero;
