import React from "react";
import Hero from './components/Hero';
import MainSection from './components/MainSection';
import Header from "../Home/components/Header";
import MapSection from './components/MapSection'
import Footer from "../Home/components/Footer";


export default function App() {
  return (
    <div className="app">
     <Header/>
     <Hero/>
     <MainSection/> 
     <MapSection/>
     <Footer/>
    </div>
  );
}


