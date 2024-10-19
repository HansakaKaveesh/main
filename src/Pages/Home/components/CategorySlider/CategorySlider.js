import React from "react";
import Slider from "react-slick";
import './Category.css';
{/*import { Link } from 'react-router-dom';*/}


const CategorySlider = ({ categories }) => {
    const settings = {
        dots: true,              // Show navigation dots
        infinite: true,          // Enable infinite scrolling
        speed: 500,              // Slide transition speed (in ms)
        slidesToShow: 3,         // Number of items to show at once
        slidesToScroll: 1,       // Number of items to scroll at once
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 3000,     // Autoplay speed (in ms)
      };

    

      // Handle button click for "Buy Now"
  const handleBuyNow = (itemName) => {
    alert(`You clicked Buy Now for ${itemName}`);
    // Here you could implement logic like adding to cart or redirecting to a checkout page
  };

  return (
    <div className="all123">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          
          <Slider {...settings}>
            {category.items.map((item, idx) => (
              <div key={idx} className="item-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                {/*<Link to="/QUOTATION"><button className="buy-now-btn">Quotation</button></Link>*/}
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};


export default CategorySlider;