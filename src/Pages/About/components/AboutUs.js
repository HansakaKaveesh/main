import React from 'react';
import './AboutUs.css';
import whoWeAreImage from './assets/pic1.png';   // Import your images
import missionImage from './assets/pic3.png';
import customerCareImage from './assets/pic1.png';

const AboutUs = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="cards-container">

        <div className="card">
          <img src={whoWeAreImage} alt="Who We Are" />
          <h3>Who We Are</h3>
          <p>We are a premier fabric store dedicated to offering high-quality textiles at competitive prices. Our journey began in 2020 when we first stepped into the fabric industry. Over the years, we have steadily grown and refined our expertise, culminating in the official launch of our large-scale business on February 12, 2024.As a partnership venture, Glorious Fabric specializes in directly importing premium fabrics from around the globe. We cater to both wholesale and retail customers, ensuring that top-notch materials are accessible to everyone at affordable prices .</p>
        </div>

        <div className="card">
          <img src={missionImage} alt="Our Mission" />
          <h3>Our Mission</h3>
          <p>Our mission is to deliver the most suitable and desirable fabrics at affordable prices, ensuring the highest level of quality and customer satisfaction. We are dedicated to understanding and meeting our customers' needs, striving to achieve their trust and loyalty through exceptional service and consistent value.</p>
        </div>

        <div className="card">
          <img src={customerCareImage} alt="Customer Care" />
          <h3>Customer Care</h3>
          <p>Whether you are a designer, retailer, or individual buyer, we are here to support your projects with our exceptional service and competitive pricing. Thank you for choosing Glorious Fabric Pvt Ltd. We look forward to being your trusted partner in all your fabric needs. Contact Us Feel free to reach out to us for any inquiries or assistance. We're here to help!</p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
