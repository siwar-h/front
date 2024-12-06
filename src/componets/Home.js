// // src/components/Home.js
// import React from 'react';
// import ProductList from './ProductList';
// import AddProductForm from './AddProductForm';
// // import ProductUpload from './ProductUpload';

// const Home = () => {
//   return (
//     <div className="home">
//       <AddProductForm />
//       <ProductList />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Assuming you're fetching products from an API
    fetch('http://localhost:5000/api/products') // replace with your API endpoint
      .then(response => response.json())
      .then(data => setProducts(data)) // set the fetched data to state
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product);
    // Implement cart logic here
  };

  return (
    <div className="home">
         <AddProductForm />
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
