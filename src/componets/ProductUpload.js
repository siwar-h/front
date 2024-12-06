// src/components/ProductUpload.js
import React, { useState } from 'react';

const ProductUpload = ({ onProductAdded }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('image', product.image);

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Product added successfully');
        onProductAdded(); // Refresh product list
      } else {
        alert('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="product-upload">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
        <input type="text" name="description" placeholder="Description" onChange={handleInputChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleInputChange} required />
        <input type="text" name="category" placeholder="Category" onChange={handleInputChange} required />
        <input type="file" name="image" onChange={handleFileChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductUpload;
