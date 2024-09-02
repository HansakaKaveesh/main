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
    { imageSrc: '/product/1.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/product/2.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/product/3.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/product/4.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
  ];

  const bestSellers = [
    { imageSrc: '/product/3.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/product/5.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/product/2.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
    { imageSrc: '/product/1.jpg', itemName: 'Item Name', price: 'Rs. 2500' },
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
