import React from 'react';
import './SearchBox.css'; // Optional: separate CSS for search box

function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBox;
