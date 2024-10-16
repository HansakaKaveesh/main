import React, { useState } from 'react';
import './MainSection.css'; // Make sure to create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (send the form data to server or email)
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-Div">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Massage"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info1">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />GLORIOUS FABRIC PVT LTD,182/C,KANDEWATTE ROAD MALWANA
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />info@gloriousfabric.lkExplore
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />0776769398 / 0773315775
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
