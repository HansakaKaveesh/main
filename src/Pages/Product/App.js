import React from 'react';
import Hero from './components/Hero';
import SearchBox from './components/SearchBox';
import Section from './components/Section';
import ProductList from './components/ProductList';
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';


function App() {
  const newInProducts = [
    { imageSrc: '/3.jpg', itemName: 'Item Name' },
    { imageSrc: '/1.jpg', itemName: 'Item Name' },
    { imageSrc: '/3.jpg', itemName: 'Item Name' },
    { imageSrc: '/1.jpg', itemName: 'Item Name' },
  ];

  const bestSellers = [
    { imageSrc: '/4.jpg', itemName: 'Item Name' },
    { imageSrc: '/5.jpg', itemName: 'Item Name' },
    { imageSrc: '/6.jpg', itemName: 'Item Name' },
    { imageSrc: '/7.jpg', itemName: 'Item Name' },
  ];

  return (
    <div className="app">
      <Hero/>
      <Header />
      <Section title="New In">
        <ProductList products={newInProducts} />
      </Section>
      <Section title="Best Sellers">
        <ProductList products={bestSellers} />
      </Section>
      <Footer/>
    </div>
  );
}

export default App;