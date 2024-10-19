import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './QuotationForm.css'; // Assuming you will style using an external CSS file

const Quotation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    telNo: '',
    description: ''
  });

  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const [status, setStatus] = useState(''); // State to manage status message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send form
    emailjs.send(
      'service_oa3pgka', // replace with your service ID
      'template_2hjolph', // replace with your template ID
      formData,
      'aMdXsgx7jLbgmXJeJ' // replace with your user ID
    )
    .then((result) => {
      console.log('Email successfully sent:', result.text);
      setStatus('Quotation sent successfully!');
      setPopupVisible(true); // Show the popup on success
    })
    .catch((error) => {
      console.log('Failed to send the email:', error.text);
      setStatus('Failed to send quotation.');
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='Quotation-BK'>
      <form className="Quotation" onSubmit={handleSubmit}>
        <h2>Send Quotation</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telNo">Tel-No</label>
            <input
              type="tel"
              id="telNo"
              name="telNo"
              value={formData.telNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send a Quotation</button>
      </form>
      
      {status && <p>{status}</p>}

      {/* Popup Modal */}
      {popupVisible && (
        <div className="popup-modal">
          <div className="popup-content">
            <h3>Success!</h3>
            <p>Quotation sent successfully.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotation;
