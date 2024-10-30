import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map">
        <section className="map-section1">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.4708191715813!2d80.016521!3d6.953656000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTcnMTMuMiJOIDgwwrAwMCc1OS41IkU!5e0!3m2!1sen!2slk!4v1730329318848!5m2!1sen!2slk" 
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
