import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import './QuotationForm.css';
import logo from './pic1.png';
import curtain from './img with blur.png';

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: '',      // Added name field
    email: '',
    description: ''
  });

  const [successMessage, setSuccessMessage] = useState(''); // To display success/failure message
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const templateParams = {
      name: formData.name,        // Include name in the template parameters
      email: formData.email,
      description: formData.description
    };

    // Use EmailJS to send the email
    emailjs.send(
      'service_oa3pgka',  // Replace with your EmailJS Service ID
      'template_2hjolph', // Replace with your EmailJS Template ID
      templateParams,
      'aMdXsgx7jLbgmXJeJ' // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Your quotation request was sent successfully!');
      setErrorMessage('');
      setFormData({ name: '', email: '', description: '' }); // Clear form fields after success
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setErrorMessage('Failed to send the request. Please try again.');
      setSuccessMessage('');
    });
  };

  return (
    <div className="form-container258">
      <div className="curtain-section258">
        <img src={curtain} alt="Curtain" className="curtain-img258" />
        <img src={logo} alt="Glorious Logo" className="logo258" />
      </div>
      <form onSubmit={handleSubmit} className="quotation-form258">
        <h2>Send Quotation</h2>
        {successMessage && <p className="success-message258">{successMessage}</p>}
        {errorMessage && <p className="error-message258">{errorMessage}</p>}
        
        <div className="form-group258">
          <label>Name</label>  {/* Added name label */}
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
        </div>
        
        <div className="form-group258">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
        </div>
        
        <div className="form-group258">
          <label>Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required
          />
        </div>
        
        <button type="submit" className="submit-btn258">Send a Quotation</button>
      </form>
    </div>
  );
};

export default QuotationForm;
