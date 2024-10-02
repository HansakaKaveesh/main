import React from 'react';
import './ProductItem.css'; // Optional: separate CSS for product item
import { Link } from 'react-router-dom';

function ProductItem({ imageSrc, itemName, price }) {
  return (
    <div className="product-items">
      <img src={imageSrc} alt={itemName} />
      <p>{itemName}</p>
      <Link to="/QUOTATION"><button>Inquiry</button></Link>
      
    </div>
  );
}

export default ProductItem;