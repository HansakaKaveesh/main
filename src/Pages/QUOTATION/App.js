import React from 'react'
import MyComponent from './components/MyComponent';
import Header from '../Home/components/Header';
import Hero from './components/Hero';
import Footer from '../Home/components/Footer';

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <MyComponent/>
      <Footer/>
     
    </div>
  )
}
