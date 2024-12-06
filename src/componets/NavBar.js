import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import logo from '../componets/images/banner/logo1.jpg';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <nav className="navbar flex items-center justify-between px-6 py-4 bg-black">
      {/* Logo */}
      <div className="logo flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
        <Link to="/" className="text-3xl font-bold text-white hover:text-yellow-400">
          Sousou Style
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar flex items-center w-full max-w-md border border-gray-500 rounded-full bg-gray-700">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 text-white bg-transparent placeholder-gray-300 outline-none"
          onChange={handleSearch}
          value={search}
        />
        <button className="p-2">
          <IoMdSearch className="text-2xl text-white hover:text-yellow-500" />
        </button>
      </div>

      {/* Dark Mode */}
      <DarkMode />

      {/* Navigation Links */}
      <ul className="nav-links flex space-x-6 text-white font-medium">
        <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
        <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
        <li><button onClick={toggleModal} className="text-white hover:text-yellow-500">Login / Sign Up</button></li>
      </ul>

      {/* Modal with Login, Signup, Forgot Password forms */}
      <Modal show={showModal} toggleModal={toggleModal} />
    </nav>
  );
};

export default Navbar;
