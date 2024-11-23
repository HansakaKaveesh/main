// App.js
import React, { useState, useEffect, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./App.css"; // Styling for the main app
import ProductCard from "./ProductList";

const products = [
  {
    title: "Rayon Fabric",
    description: {
      features: [
        "Digital Print Fabric",
        "Rayon Twill Fabric",
        "Rayon Spandex Fabric",
        "Rayon Challis Fabric",
        "Rayon Slub Fabric",
      ],
      specifications: [
        "Width: 145-150cm",
        "Weight: 70-180gsm",
        "Composition: 100%R",
        "Use for dress, shirts, pants, pajamas",
      ],
    },
    bgImgSrc: "Home/products/rayon_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
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
    bgImgSrc: "Home/products/polyester_stretch_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
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
    bgImgSrc: "Home/products/polyester_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
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
    bgImgSrc: "Home/products/satin_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
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
    bgImgSrc: "Home/products/cotton_spandex_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
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
    bgImgSrc: "Home/products/bengaline_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
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
    bgImgSrc: "Home/products/check_flannel_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
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
    bgImgSrc: "Home/products/knit_fabric_bg.jpeg",
    fgImgSrc: "Home/products/rayon_fg.jpeg",
  },
];

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    const checkHeight = () => {
      if (appRef.current) {
        const divHeight = appRef.current.getBoundingClientRect().height;
        const viewportHeight = window.innerHeight;
        setIsFullHeight(divHeight >= viewportHeight);
      }
    };

    // Initial check
    checkHeight();

    // Add resize listener
    window.addEventListener('resize', checkHeight);

    // Set CSS variable for total height
    document.documentElement.style.setProperty('--total-products', products.length);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkHeight);
    };
  }, []);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="app123" ref={appRef}>
      {!isFullHeight ? (
        // Render products without Scrollama
        products.map((product, index) => (
          <div key={index} style={{ margin: "1vh 0" }}>
            <ProductCard
              product={product}
              isActive={false}
            />
          </div>
        ))
      ) : (
        <>
          <div className="product-section">
            <div className="background-container">
              {products.map((product, index) => (
                <img 
                  key={index}
                  src={product.bgImgSrc} 
                  alt={product.title}
                  className={`background-image ${currentStepIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="overlay" />
            <div className={`product-content ${currentStepIndex !== null ? 'active' : ''}`}>
              {currentStepIndex !== null && (
                <div key={animationKey} className="content-wrapper">
                  <h2>{products[currentStepIndex].title}</h2>
                  {products[currentStepIndex].description.features.length > 0 && (
                    <div className="feature-section">
                      <h3>Features</h3>
                      <ul>
                        {products[currentStepIndex].description.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {products[currentStepIndex].description.specifications.length > 0 && (
                    <div className="spec-section">
                      <h3>Specifications</h3>
                      <ul>
                        {products[currentStepIndex].description.specifications.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="scroll-container">
            <Scrollama onStepEnter={onStepEnter} offset={0.5}>
              {products.map((_, index) => (
                <Step data={index} key={index}>
                  <div style={{ height: '100vh' }} />
                </Step>
              ))}
            </Scrollama>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
