import React from "react";
import CategorySlider from "./CategorySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const categories = [
  {
    name: "Items",
    items: [
      { name: "Item 1", image: "/7.jpg" },
      { name: "Item 2", image: "/Rectangle92.jpg" },
      { name: "Item 3", image: "/7.jpg" },
      { name: "Item 4", image: "/Rectangle93.jpg" },
    ],
  },
  
];

function App() {
  return (
    <div>
      <CategorySlider categories={categories} />
    </div>
  );
}

export default App;
