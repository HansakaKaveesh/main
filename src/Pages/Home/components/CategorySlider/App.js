// App.js
import React, { useState, useEffect, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./App.css";

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
    bgImgSrc: "Home/products/rayon_bg.jpg",
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
    bgImgSrc: "Home/products/polyester_stretch_bg.jpg",
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
    bgImgSrc: "Home/products/polyester_bg.jpg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
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
    bgImgSrc: "Home/products/satin_bg.jpg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
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
    bgImgSrc: "Home/products/cotton_spandex_bg.jpg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
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
    bgImgSrc: "Home/products/bengaline_bg.jpg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
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
    bgImgSrc: "Home/products/check_flannel_bg.jpg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
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
    bgImgSrc: "Home/products/knit_fabric_bg.jpg",
    fgImgSrc: "Home/products/rayon_fg.jpg",
  },
];

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const appRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkHeight = () => {
      if (appRef.current) {
        const divHeight = appRef.current.getBoundingClientRect().height;
        const viewportHeight = window.innerHeight;
        setIsFullHeight(divHeight >= viewportHeight);
      }
    };

    const handleScroll = () => {
      if (!appRef.current) return;
      
      const windowHeight = window.innerHeight;
      const sliderTop = appRef.current.getBoundingClientRect().top;
      
      // If slider is not yet in view, progress is 0
      if (sliderTop > 0) {
        setScrollProgress(0);
        return;
      }

      // Calculate progress only after slider comes into view
      const maxScroll = windowHeight * (products.length - 1); // Adjust for zero-based index
      const currentScroll = Math.abs(sliderTop);
      const progress = Math.min((currentScroll / maxScroll) * 100, 100);
      setScrollProgress(progress);
    };

    // Initial check
    checkHeight();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', checkHeight);
    window.addEventListener('scroll', handleScroll);

    // Set CSS variable for total height
    document.documentElement.style.setProperty('--total-products', products.length);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setAnimationKey(prev => prev + 1);
  };

  const handleNavigation = (direction) => {
    const windowHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollAmount = direction === 'next' 
      ? currentScroll + windowHeight
      : currentScroll - windowHeight;

    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app123" ref={appRef}>
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
        <div className="navigation-arrows">
          <button
            className={`nav-arrow up ${currentStepIndex === 0 ? 'disabled' : ''}`}
            onClick={() => handleNavigation('prev')}
            aria-label="Previous product"
            disabled={currentStepIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="currentColor" />
            </svg>
          </button>
          <button
            className={`nav-arrow down ${currentStepIndex === products.length - 1 ? 'disabled' : ''}`}
            onClick={() => handleNavigation('next')}
            aria-label="Next product"
            disabled={currentStepIndex === products.length - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      <div className="scroll-container" ref={scrollContainerRef}>
        <Scrollama
          onStepEnter={onStepEnter}
          offset={0.5}
          threshold={2}
        >
          {products.map((_, index) => (
            <Step data={index} key={index}>
              <div className="scroll-step" style={{ minHeight: '100vh', height: '100vh' }} data-step={index} />
            </Step>
          ))}
        </Scrollama>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default App;