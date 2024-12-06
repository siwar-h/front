import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ onProductAdded }) => {
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
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Product added successfully');
        onProductAdded();
      } else {
        alert('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <input type="text" name="name" placeholder="Product Name" onChange={handleInputChange} required />
      <textarea name="description" placeholder="Description" onChange={handleInputChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleInputChange} required />
      <input type="text" name="category" placeholder="Category" onChange={handleInputChange} required />
      <input type="file" name="image" onChange={handleFileChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
