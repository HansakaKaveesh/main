// App.js
import React from 'react';
import './App.css'; // Styling for the main app
import ProductCard from './ProductList';

const products = [
  {
    id: '01',
    imageUrl: 'Home/pic1.png', // Replace with actual image paths
    features: [
      "Digital Print Fabric",
      "Rayon Twill Fabric",
      "Rayon Spandex Fabric",
      "Rayon Challis Fabric",
      "Rayon Slub Fabric"
    ],
    specifications: {
      width: "145-150cm",
      weight: "70-180gsm",
      composition: "100%R",
      use: "Use for dress, shirts, pants, pajamas"
    }
  },
  {
    id: '02',
    imageUrl: 'Home/pic3.png',
    features: [
      "Digital Print Fabric",
      "Rayon Twill Fabric",
      "Rayon Spandex Fabric",
      "Rayon Challis Fabric",
      "Rayon Slub Fabric"
    ],
    specifications: {
      width: "145-150cm",
      weight: "70-180gsm",
      composition: "100%R",
      use: "Use for dress, shirts, pants, pajamas"
    }
  },
  {
    id: '03',
    imageUrl: 'Home/pic2.png',
    features: [
      "Digital Print Fabric",
      "Rayon Twill Fabric",
      "Rayon Spandex Fabric",
      "Rayon Challis Fabric",
      "Rayon Slub Fabric"
    ],
    specifications: {
      width: "145-150cm",
      weight: "70-180gsm",
      composition: "100%R",
      use: "Use for dress, shirts, pants, pajamas"
    }
  },
  {
    id: '04',
    imageUrl: 'Home/pic1.png',
    features: [
      "Digital Print Fabric",
      "Rayon Twill Fabric",
      "Rayon Spandex Fabric",
      "Rayon Challis Fabric",
      "Rayon Slub Fabric"
    ],
    specifications: {
      width: "145-150cm",
      weight: "70-180gsm",
      composition: "100%R",
      use: "Use for dress, shirts, pants, pajamas"
    }
  }
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
