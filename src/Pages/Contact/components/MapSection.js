import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map">
        <section className="map-section1">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31683.7962953108!2d80.016028!3d6.953215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25500305ab5ab%3A0xaa1b3a547a939ad5!2sGLORIOUS%20HOUSE!5e0!3m2!1sen!2sus!4v1729102498633!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location">
        </iframe>
      </section>
    </div>
  );
};

export default MapSection;
