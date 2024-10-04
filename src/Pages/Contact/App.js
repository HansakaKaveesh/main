import React from "react";
import Apps from './components/Apps';
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";


export default function App() {
  return (
    <div className="app">
     <Header/>
     <Apps/> 
     <Footer/>
    </div>
  );
}


