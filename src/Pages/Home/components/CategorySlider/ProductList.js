// ProductCard.js
import React from 'react';
import './ProductCard.css'; // Ensure you have this CSS file

const ProductCard = ({ product, isActive }) => {
  // Add alignment logic for item label
  // const alignmentClass = (product.id === '02' || product.id === '04') ? 'align-right' : 'align-left';

  return (
    <div className="products-card-container">
    <div className={"products-card"}>
      <div className="images-section">
        <img src={product.imageSrc} alt={`Item ${product.id}`} />
        <div className={"items-label"}>{product.title}</div>
      </div>
      <div className="details-section">
        {product.description.features.length > 0 && (
          <div>
            <h3>Features</h3>
            <ul>
              {product.description.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {product.description.specifications.length > 0 && (
          <div>
            <h3>Specifications</h3>
            <ul>
              {product.description.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
