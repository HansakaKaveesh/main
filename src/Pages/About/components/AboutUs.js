import React from 'react';
import './AboutUs.css';

function AboutUs() {
  const imageFiles = [
    'IMG-20241127-WA0009.jpg',
    'IMG-20241127-WA0010.jpg',
    'IMG-20241127-WA0011.jpg',
    'IMG-20241127-WA0012.jpg',
  ];

  const homeProductImages = [
    'bengaline_bg.jpeg',
    'check_flannel_bg.jpeg',
    'cotton_spandex_bg.jpeg',
    'knit_fabric_bg.jpeg',
    'polyester_bg.jpeg',
    'polyester_stretch_bg.jpeg',
    'rayon_bg.jpeg',
    'satin_bg.jpeg',
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleMouseEnter(event) {
    const images = event.currentTarget.querySelectorAll('.shuffled-image');
    images.forEach((img) => {
      const randomX = getRandomInt(-15, 15);
      const randomY = getRandomInt(-15, 15);
      img.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  }

  function handleMouseLeave(event) {
    const images = event.currentTarget.querySelectorAll('.shuffled-image');
    images.forEach((img, index) => {
      const transforms = [
        'translate(-10px, -10px) rotate(-10deg)',
        'translate(10px, -5px) rotate(5deg)',
        'translate(-5px, 10px) rotate(15deg)',
        'translate(5px, 5px) rotate(-5deg)'
      ];
      img.style.transform = transforms[index % transforms.length];
    });
  }

  return (
    <div className="about2-us-section">

      <div className="about2-us-content section-style">
        <div className="text">
          <h2>About Us</h2>
          <p>
            We are a premier fabric store dedicated to offering high-quality textiles at competitive prices. Our journey began in 2020 when we first stepped into the fabric industry. Over the years, we have steadily grown and refined our expertise, culminating in the official launch of our large-scale business on February 12, 2024. As a partnership venture, Glorious Fabric specializes in directly importing premium fabrics from around the globe. We cater to both wholesale and retail customers, ensuring that top-notch materials are accessible to everyone at affordable prices.
          </p>
        </div>
        <div className="image-shuffle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {imageFiles.map((file, index) => (
            <img
              key={index}
              src={`/AboutUs/fabrics/${file}`}
              alt={`Fabric ${index + 1}`}
              className="shuffled-image"
            />
          ))}
        </div>
      </div>

      <hr className="section-divider" />

      <div className="mission-content section-style">
        <div className="image-shuffle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {homeProductImages.map((file, index) => (
            <img
              key={index}
              src={`/Home/products/${file}`}
              alt={`Product ${index + 1}`}
              className="shuffled-image"
            />
          ))}
        </div>
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the most suitable and desirable fabrics at affordable prices, ensuring the highest level of quality and customer satisfaction. We are dedicated to understanding and meeting our customers' needs, striving to achieve their trust and loyalty through exceptional service and consistent value.
          </p>
        </div>
      </div>

      <hr className="section-divider" />

      <div className="customer-care-content section-style">
        <div className="text">
          <h2>Customer Care</h2>
          <p>
            Whether you are a designer, retailer, or individual buyer, we are here to support your projects with our exceptional service and competitive pricing. Thank you for choosing Glorious Fabric Pvt Ltd. We look forward to being your trusted partner in all your fabric needs. Contact us for any inquiries or assistance. We're here to help!
          </p>
        </div>
        <div className="image">
          <img src="/AboutUs/pic3.png" alt="Customer Care" />
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
