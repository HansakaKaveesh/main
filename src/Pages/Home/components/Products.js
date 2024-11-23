import React from 'react';
import './Products.css'; 
import { Link } from 'react-router-dom';


const Products = () => {
    const items = [
        { id: 1, src: '/1.jpg', alt: 'Custom Item 1', name: 'Scarf Collection' },
        { id: 2, src: '/2.jpg', alt: 'Custom Item 2', name: 'Winter Essentials' },
        { id: 3, src: '/4.jpg', alt: 'Custom Item 3', name: 'Bold Colors' },
        { id: 4, src: '/5.jpg', alt: 'Custom Item 4', name: 'Autumn Vibes' },
        
    ];

    return (
        <div className="container">
            {items.map((item) => (
                <div key={item.id} className={`item item-${item.id}`}>
                    <img src={item.src} alt={item.alt} />
                    <div className="overlay">
                        <h2>{item.name}</h2>
                        <Link to="/quotation"><button>Quotation</button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
