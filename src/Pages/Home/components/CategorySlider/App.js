// App.js
import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./App.css"; // Styling for the main app
import ProductCard from "./ProductList";

const products = [
  { title: "Rayon Fabric",
    description: {
      features: [
    
      "Digital Print Fabric",
        "Rayon Twill Fabric",
        "Rayon Spandex Fabric",
        "Rayon Challis Fabric",
        "Rayon Slub Fabric"
    ],
    specifications: [
      "Width: 145-150cm",
      "Weight: 70-180gsm",
      "Composition: 100%R",
      "Use for dress, shirts, pants, pajamas",
    ],
  },
  imageSrc: "Home/rayon.jpg",
    },
  
  {
    title: "Polyester Stretch Fabric",
    description: {
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
    specifications: [
      "Weight: 80-200gsm",
      "Composition: 100%T",
      "Use for dress, skirt, blouse",
    ],
  },
  imageSrc: "Home/pic1.png",
  },
  
  {
    title: "Polyester Fabric",
    description: {
      features: [
      "Morgan Fabric",
        "Prada Fabric",
        "British Twill Fabric",
        "Barbie Fabric",
        "Maserati Fabric",
        "Poka Twill Fabric"
    ],
    specifications: [
      "Weight: 180-300gsm",
      "Composition: 100%T",
      "Use for lady's suit, blouse, pant",
    ],
  },
  imageSrc: "Home/pic1.png",
  },
 
  {
    title: "Satin Fabric",
    description: {
      features: [
      "American Satin Fabric",
        "Russian Satin Fabric",
        "Spandex Satin Fabric",
        "Crinkle Satin Fabric",
        "Armani Silk Fabric",
        "Matte Satin Fabric"
    ],
    specifications: [
      "Width: 150cm",
      "Weight: 80-170gsm",
      "Use for dress, skirt, blouse, shirt, pajama",
    ],
  },
  imageSrc: "Home/pic1.png",
  },

  {
    title: "Cotton Spandex Fabric",
    description: {
      features: [
      "100% Cotton Fabric",
        "Cotton Spandex Fabric",
        "Cotton Flannel Fabric"
    ],
    specifications: ["Shirt Weight: 80-140gsm", "Pant Weight: 180-300gsm"],
    },
    imageSrc: "Home/pic1.png",
    
  },

  {
    title: "Bengaline Fabric",
    description: {
      features: [],
      specifications: [
        "Shirt Weight: 120-180gsm",
        "Pant Weight: 230-260gsm",
        "Use for skirt, shirt, blouse, pants, leggings",
      ],
    },
    imageSrc: "Home/pic1.png",
  },

  {
    title: "Check Flannel Fabric",
    description: {
      features: [],
      specifications: [
        "Width: 150cm",
        "Weight: 260-270gsm, 300-330gsm, 380-400gsm",
        "Use for coat, dress, pants, shirt",
      ],
    },
    imageSrc: "Home/pic1.png",
  },

  {
    title: "Knit Fabric",
    description: {
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
    specifications: [],
    },
    imageSrc: "Home/pic1.png",
  },



];

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  return (
    <div className="app123">
      <Scrollama onStepEnter={onStepEnter}>
        {products.map((product, index) => (
          <Step data={index} key={index}>
            <div
              style={{
                margin: "1vh 0",
                opacity: currentStepIndex === index ? 1 : 0.7,
              }}
            >
              <ProductCard
                product={product}
                isActive={currentStepIndex === index}
              />
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default App;
