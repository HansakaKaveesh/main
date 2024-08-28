import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <h2>About Us </h2>

            <div className="section">
                <h3>Who We Are</h3>
                <p>Glorious Textile started in the spring of 2008. Two friends had a vision to spread happiness by turning an everyday essential into a colorful design piece with a rigid standard of ultimate quality, craftsmanship, and creativity. A concept now brought to perfection by the Happy Socks collective of creators.</p>
            </div>

            <div className="section">
                <img src="/img/pic1.jpg" alt="Who We Are" className="about-us-image" />
            </div>

            <div className="section">
                <h3>Our Mission</h3>
                <p>Glorious Textile started in the spring of 2008. Two friends had a vision to spread happiness by turning an everyday essential into a colorful design piece with a rigid standard of ultimate quality, craftsmanship, and creativity. A concept now brought to perfection by the Happy Socks collective of creators.</p>
            </div>

            <div className="section">
                <img src="/img/pic2.webp" alt="Our Mission" className="about-us-image" />
            </div>

            <div className="section">
                <h3>Customer Care</h3>
                <p>Glorious Textile started in the spring of 2008. Two friends had a vision to spread happiness by turning an everyday essential into a colorful design piece with a rigid standard of ultimate quality, craftsmanship, and creativity. A concept now brought to perfection by the Happy Socks collective of creators.</p>
            </div>

            <div className="section">
                <img src="/img/pic3.jpg" alt="Customer Care" className="about-us-image" />
            </div>
        </section>
    );
};

export default AboutUs;
