import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css'; // Optional: separate CSS for product list

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          imageSrc={product.imageSrc}
          itemName={product.itemName}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
