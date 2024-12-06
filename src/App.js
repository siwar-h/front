// import React from 'react';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BannerProduct from './componets/BannerProduct';
// import Footer from './componets/Footer';
// import Home from './componets/Home';
// import Navbar from './componets/NavBar';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import TopProducts from './componets/TopProducts';
// import Bann from './componets/Bann';
// import Testimonials from './componets/Testimonials';
// import AboutUs from './componets/AboutUs';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import JeansPage from './componets/JeansPage';
// import ContactUs from './componets/ContactUs';
// import Cart from './componets/cart';
// import ProductList from './componets/ProductList'; // Import ProductList
// import ProductUpload from './componets/ProductUpload'; // Import ProductUpload

// const App = () => {
//   const [products, setProducts] = React.useState([]); // State to manage products
//   const [cart, setCart] = React.useState([]); // State to manage cart items

//   // Fetch products from API
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/products');
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       const data = await response.json();
//       setProducts(data);
//     } catch (err) {
//       console.error('Error fetching products:', err);
//     }
//   };

//   // Add product to the cart
//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to the cart.`);
//   };

//   // Initialize AOS and fetch products on mount
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     fetchProducts();
//   }, []);

//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <BannerProduct />
//                 <Home />
//                 <TopProducts />
//                 <Bann />
//                 <Testimonials />
//               </>
//             }
//           />
//           <Route path="/cart" element={<Cart cartItems={cart} />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/jeans" element={<JeansPage />} />

//           {/* New Route for Product Management */}
//           <Route
//             path="/products"
//             element={
//               <>
//                 <ProductUpload onProductAdded={fetchProducts} />
//                 <ProductList
//                   products={products}
//                   onAddToCart={handleAddToCart}
//                 />
//               </>
//             }
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BannerProduct from './componets/BannerProduct';
import Footer from './componets/Footer';
import Home from './componets/Home';
import Navbar from './componets/NavBar';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './componets/TopProducts';
import Bann from './componets/Bann';
import Testimonials from './componets/Testimonials';
import AboutUs from './componets/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JeansPage from './componets/JeansPage';
import ContactUs from './componets/ContactUs';
import Cart from './componets/cart';
import ProductList from './componets/ProductList';
import AddProductForm from './componets/AddProductForm';

const App = () => {
  const [products, setProducts] = React.useState([]); // State to manage products
  const [cart, setCart] = React.useState([]); // State to manage cart items

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  // Add product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to the cart.`);
  };

  // Initialize AOS and fetch products on mount
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerProduct />
                <Home />
                <TopProducts />
                <Bann />
                <Testimonials />
              </>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cart} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/jeans" element={<JeansPage />} />

          {/* Route for Product Management */}
          <Route
            path="/products"
            element={
              <>
                <AddProductForm onProductAdded={fetchProducts} />
                <ProductList
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
