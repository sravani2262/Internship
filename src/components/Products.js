// Products.js

import React, { useState } from 'react';
import './products.css';
import productslist from '../components/productslist'; // Importing dummy product data

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle changes in the search bar
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering products based on search term
  const filteredProducts = productslist.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-container">
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <i className="fa fa-search search-icon"></i> {/* Search icon */}
      </div>
      {/* Product cards */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
