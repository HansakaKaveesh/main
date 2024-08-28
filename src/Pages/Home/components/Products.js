import React from 'react';
import './Products.css'; 

const Products = () => {
    const items = [
        { id: 1, src: 'img/Rectangle90.jpeg', alt: 'Custom Item 1', name: 'Scarf Collection' },
        { id: 2, src: 'img/Rectangle90.jpeg', alt: 'Custom Item 2', name: 'Winter Essentials' },
        { id: 3, src: 'img/Rectangle92.jpeg', alt: 'Custom Item 3', name: 'Bold Colors' },
        { id: 4, src: 'img/Rectangle92.jpeg', alt: 'Custom Item 4', name: 'Autumn Vibes' },
        
    ];

    return (
        <div className="container">
            {items.map((item) => (
                <div key={item.id} className={`item item-${item.id}`}>
                    <img src={item.src} alt={item.alt} />
                    <div className="overlay">
                        <h2>{item.name}</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
