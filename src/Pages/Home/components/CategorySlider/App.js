import React from "react";
import CategorySlider from "./CategorySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const categories = [
  {
    name: "Items",
    items: [
      { name: "Item 1", image: "/Home/7.jpg" },
      { name: "Item 2", image: "/Home/Rectangle92.jpg" },
      { name: "Item 3", image: "/Home/7.jpg" },
      { name: "Item 4", image: "/Home/Rectangle93.jpg" },
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
