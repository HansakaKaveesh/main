import React, { useState } from 'react';
import './QuotationForm.css'; // Create or update this CSS file for styling
import logo from './pic1.png'; // Path to your logo
import curtain from './img with blur.png'; // Path to the curtain image

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container258">
      <div className="curtain-section258">
        <img src={curtain} alt="Curtain" className="curtain-img258" />
        <img src={logo} alt="Glorious Logo" className="logo258" />
      </div>
      <form onSubmit={handleSubmit} className="quotation-form258">
        <h2>Send Quotation</h2>
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
        <button type="submit" className="submit-btn258">send a quotation</button>
      </form>
    </div>
  );
};

export default QuotationForm;
