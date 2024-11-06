// App.js
import React from 'react';
import './App.css'; // Styling for the main app
import ProductCard from './ProductList';

const products = [
  {
    id: 'Rayon Fabric',
    imageUrl: 'Home/pic1.png', // Replace with actual image paths
    features: [
      "Digital Print Fabric",
        "Rayon Twill Fabric",
        "Rayon Spandex Fabric",
        "Rayon Challis Fabric",
        "Rayon Slub Fabric"
    ],
    specifications: {
      width: "Width: 145-150cm",
      weight: "Weight: 70-180gsm",
      composition: "Composition: 100%R",
      use: "Use for dress, shirts, pants, pajamas"
    }
  },
  {
    id: 'Polyester Stretch Fabric',
    imageUrl: 'Home/pic3.png',
    features: [
        "CEY Fabric",
        "SPH Fabric",
        "Como Crepe Fabric",
        "Super Soft Fabric",
        "Armani Silk Fabric",
        "Satin Fabric",
        "Chiffon Fabric",
        "Polyester Crepe Fabric"
    ],
    specifications: {
      width: "Weight: 80-200gsm",
      weight: "",
      composition: "Composition: 100%T",
      use: "Use for dress, skirt, blouse"
    }
  },
  {
    id: 'Polyester Fabric',
    imageUrl: 'Home/pic2.png',
    features: [
      "Morgan Fabric",
        "Prada Fabric",
        "British Twill Fabric",
        "Barbie Fabric",
        "Maserati Fabric",
        "Poka Twill Fabric"
    ],
    specifications: {
      width: "Weight: 180-300gsm",
      weight: "",
      composition: "Composition: 100%T",
      use: "Use for lady's suit, blouse, pant"
    }
  },
  {
    id: 'Satin Fabric',
    imageUrl: 'Home/pic1.png',
    features: [
      "American Satin Fabric",
        "Russian Satin Fabric",
        "Spandex Satin Fabric",
        "Crinkle Satin Fabric",
        "Armani Silk Fabric",
        "Matte Satin Fabric"
    ],
    specifications: {
      width: "Width: 150cm",
      weight: "Weight: 80-170gsm",
      composition: "",
      use: "Use for dress, skirt, blouse, shirt, pajama"
    }
  },

  {
    id: 'Cotton Spandex Fabric',
    imageUrl: 'Home/pic2.png',
    features: [
      "100% Cotton Fabric",
        "Cotton Spandex Fabric",
        "Cotton Flannel Fabric"
    ],
    specifications: {
      width: "Shirt Weight: 80-140gsm",
      weight: "Pant Weight: 180-300gsm",
      composition: "",
      use: ""
    }
  },

  {
    id: 'Bengaline Fabric',
    imageUrl: 'Home/pic3.png',
    features: [
      "-",
        
    ],
    specifications: {
      width: "Shirt Weight: 120-180gsm",
      weight: "Pant Weight: 230-260gsm",
      composition: "",
      use: "Use for skirt, shirt, blouse, pants, leggings"
    }
  },

  {
    id: 'Check Flannel Fabric',
    imageUrl: 'Home/pic1.png',
    features: [
      "-",
        
    ],
    specifications: {
      width: "Width: 150cm",
      weight: "Weight: 260-270gsm, 300-330gsm, 380-400gsm",
      composition: "",
      use: "Use for coat, dress, pants, shirt"
    }
  },

  {
    id: 'Knit Fabric',
    imageUrl: 'Home/pic2.png',
    features: [
      "Rib Fabric",
        "Suede Fabric",
        "Scuba Fabric",
        "Roma Fabric",
        "TR Angora Fabric",
        "DTY Brush Fabric",
        "Single Jersey Fabric",
        "Bonded Fabric",
        
    ],
    specifications: {
      width: "-",
      weight: "",
      composition: "",
      use: ""
    }
  },



];

const App = () => {
  return (
    <div className="app123">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
