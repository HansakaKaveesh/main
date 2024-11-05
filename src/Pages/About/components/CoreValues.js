import React from 'react';
import Slider from 'react-slick';
import './CoreValues.css';



const CoreValues = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  

  const coreValues = [
    {
      title: 'Sustainability',
      description: 'We prioritize eco-friendly materials and practices, ensuring that our products and processes minimize environmental impact.',
    },
    {
      title: 'Customer Satisfaction',
      description: 'We prioritize eco-friendly materials and practices, ensuring that our products and processes minimize environmental impact.',
    },
    {
      title: 'Innovation and Creativity',
      description: 'We embrace the latest trends and technology in textiles, continuously evolving our collections to inspire creativity in our customers.',
    },
    {
      title: 'Community Support',
      description: 'We believe in fostering strong relationships within our community by supporting local artisans and contributing to local initiatives.',
    },
    {
      title: 'Affordability',
      description: 'We offer premium quality fabrics at competitive prices, ensuring that everyone has access to top-quality materials for their projects.',
    },
    {
      title: 'Integrity and Trust',
      description: 'Transparency and honesty define our interactions with customers, suppliers, and partners, building trust through every transaction.',
    },
  ];

  return (
    <div className='core-123'>
    
    <div className="core-values-section">
      
      <h2>Our Core Values</h2>
      <Slider {...settings}>
        {coreValues.map((value, index) => (
          <div key={index} className="core-value-slide">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CoreValues;
