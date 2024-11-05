// ProductSlider.js
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./ProductSlider.css";
import product1Image from "../assets/Pic1.jpg";
import product2Image from "../assets/Pic2.jpg";
import product3Image from "../assets/Pic3.png";
import product4Image from "../assets/Pic2.jpg";


const ProductSlider = () => {
  const products = [
    {
      title: "Product 1",
      description: (<>Digital Print Fabric <br /> Rayon Twill Fabric<br /> Rayon Spandex Fabric<br /> ayon Challis Fabric <br /> Rayon Slub Fabric<br /><br /> Width: 145-150cm<br />Weight: 70-180gsm<br />Composition: 100%R<br />Use for dress, shirts, pants, pajamas</>),
      image: product1Image,
    },
    {
      title: "Product 2",
      description: (<>Digital Print Fabric <br /> Rayon Twill Fabric<br /> Rayon Spandex Fabric<br /> ayon Challis Fabric <br /> Rayon Slub Fabric<br /><br /> Width: 145-150cm<br />Weight: 70-180gsm<br />Composition: 100%R<br />Use for dress, shirts, pants, pajamas</>),
      image: product2Image,
    },
    {
      title: "Product 3",
      description: (<>Digital Print Fabric <br /> Rayon Twill Fabric<br /> Rayon Spandex Fabric<br /> ayon Challis Fabric <br /> Rayon Slub Fabric<br /><br /> Width: 145-150cm<br />Weight: 70-180gsm<br />Composition: 100%R<br />Use for dress, shirts, pants, pajamas</>),
      image: product3Image,
    },
    {
      title: "Product 4",
      description: (<>Digital Print Fabric <br /> Rayon Twill Fabric<br /> Rayon Spandex Fabric<br /> ayon Challis Fabric <br /> Rayon Slub Fabric<br /><br /> Width: 145-150cm<br />Weight: 70-180gsm<br />Composition: 100%R<br />Use for dress, shirts, pants, pajamas</>),
      image: product4Image,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="product-slider">
      
      <Slider {...settings}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="product-slide"
          >
            <div className="product-content">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
               { /*<button className="product-button">Shop Now</button>*/}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
