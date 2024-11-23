import React from 'react';
import './FlashSale.css';

import { Link } from 'react-router-dom';

function FlashSale() {
  return (
    <section className="flash-sale">
      <img src="/Home/pic3.png" alt="Flash Sale" />
      <div className="flash-sale-text">
        <h2>Custom Items</h2>
        <p>Send us a Quotation</p>
        <Link to="/quotation"><a className="btn">Quotation</a></Link>
        
      </div>
    </section>
  );
}

export default FlashSale;