import React, { useState } from 'react';
import './MainSection.css'; // Make sure to create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs.send(
      'service_oa3pgka',  // EmailJS service ID
      'template_hea36es',  // EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'aMdXsgx7jLbgmXJeJ' // EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setShowPopup(true); // Show popup on success
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message, please try again later.");
    });
  };

  const closePopup = () => {
    setShowPopup(false);
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
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info1">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Glorious Fabric (Pvt) Ltd, 182/C, Kandewatta Rd, Malwana.
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@gloriousfabric.lk
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 0776769398 / 0773315775
          </p>
        </div>
      </div>
      
      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <h3>Success!</h3>
            <p>Message sent successfully!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
