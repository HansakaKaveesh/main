import React from 'react';
import './FlashSale.css';

import { Link } from 'react-router-dom';

function FlashSale() {
  return (
    <section className="flash-sale">
      <img src="/Home/pic3.png" alt="Flash Sale" />
      <div className="flash-sale-text">
        <h2>Custom Items</h2>
        <p>Flash Sale • 50% - 70% Selected Items. Only now</p>
        <Link to="/QUOTATION"><a className="btn">QUOTATION</a></Link>
        
      </div>
    </section>
  );
}

export default FlashSale;
