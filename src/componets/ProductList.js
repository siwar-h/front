import React from 'react';
import './ProductList.css';

const ProductList = ({ products = [], onAddToCart }) => {
  if (!products || products.length === 0) {
    return <div className="empty-list">No products available.</div>;
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Available Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
              Add to Pannier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
