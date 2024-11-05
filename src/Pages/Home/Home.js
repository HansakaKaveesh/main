import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components//CategorySlider/App';
import FlashSale from './components/FlashSale';
import About from './components/About';
import Footer from './components/Footer';


function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <FlashSale />
      <About />
      <Footer />
      
    </div>
  );
}

export default Home;
