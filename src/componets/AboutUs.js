import React from 'react';
import { FaTrophy, FaUsers, FaShoppingBag } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us p-6 bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen text-white">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg leading-7">
          At Sousou Style, we celebrate individuality and empower you to express yourself through fashion.
          Discover our story and values below!
        </p>
      </header>

      {/* Interactive Sections */}
      <div className="interactive-sections grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">10+ Awards</h2>
          <p>Recognized for excellence in fashion and customer service worldwide.</p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">500k+ Customers</h2>
          <p>We are proud to serve a diverse and global community of fashion lovers.</p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaShoppingBag className="text-5xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">200+ Products</h2>
          <p>A carefully curated collection of trendy and timeless pieces.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">
          Join our journey and explore the latest trends. We promise to make every moment stylish!
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-gray-800 font-bold rounded-full hover:bg-yellow-600 shadow-lg transition">
          Explore Our Products
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

