import React from 'react';
import Hero from './components/Hero';
import SearchBox from './components/SearchBox';
import Section from './components/Section';
import ProductList from './components/ProductList';
import Header from './components/Header'
import './App.css';
import Footer from '../Home/components/Footer';


function App() {
  const newInProducts = [
    { imageSrc: '/1.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/2.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/3.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/4.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
  ];

  const bestSellers = [
    { imageSrc: '/3.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/5.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/2.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/1.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
  ];

  return (
    <div className="app">
      <Hero/>
      <Header />
      <SearchBox />
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
