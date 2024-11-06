// ProductCard.js
import React from 'react';
import './ProductCard.css'; // Ensure you have this CSS file

const ProductCard = ({ product }) => {
  // Add alignment logic for item label
  const alignmentClass = (product.id === '02' || product.id === '04') ? 'align-right' : 'align-left';

  return (
    <div class="products-card-container">
    <div className={`products-card ${alignmentClass}`}>
      <div className="images-section">
        <img src={product.imageUrl} alt={`Item ${product.id}`} />
        <div className={`items-label ${alignmentClass}`}> {product.id}</div>
      </div>
      <div className="details-section">
        <h3>Features</h3>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3>Specifications</h3>
        <p> {product.specifications.width}</p>
        <p>{product.specifications.weight}</p>
        <p>{product.specifications.composition}</p>
        <p>{product.specifications.use}</p>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
