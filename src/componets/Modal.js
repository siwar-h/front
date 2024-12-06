import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirecting after successful login/signup

const Modal = ({ show, toggleModal }) => {
  const [formType, setFormType] = useState('login');
  const [userData, setUserData] = useState({ email: '', password: '', username: '' });
  const [notification, setNotification] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const switchForm = (type) => {
    setFormType(type);
    setNotification('');
    setUserData({ email: '', password: '', username: '' }); // Reset user data when switching forms
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;

      // Handle login form submission
      if (formType === 'login') {
        response = await axios.post('http://localhost:5000/api/users/signin', {
          email: userData.email,
          password: userData.password,
        });
      }

      // Handle signup form submission
      else if (formType === 'signup') {
        response = await axios.post('http://localhost:5000/api/users/signup', {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        });
      }

      // Handle forgot password form submission
      else if (formType === 'forgotPassword') {
        response = await axios.post('http://localhost:5000/api/users/forgot-password', {
          email: userData.email,
        });
      }

      // Success handling
      if (response.data.success) {
        setNotification(response.data.message);
        if (formType === 'login' || formType === 'signup') {
          // Store the token in localStorage or cookies
          localStorage.setItem('token', response.data.data); // Save token
          navigate('/'); // Redirect to homepage after successful login/signup
          toggleModal(); // Close the modal
        }
      } else {
        setNotification(response.data.message);
      }
    } catch (error) {
      setNotification(error.response?.data?.message || 'Something went wrong.');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <button onClick={toggleModal} className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700">&times;</button>

        {/* Notification message */}
        {notification && (
          <div className="text-center text-sm text-red-600 mb-4">
            {notification}
          </div>
        )}

        {/* Conditional rendering of forms */}
        {formType === 'login' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                value={userData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                value={userData.password}
                onChange={handleChange}
              />
              <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Sign In</button>
            </form>
            <p className="text-center mt-3 text-sm">
              <span
                onClick={() => switchForm('forgotPassword')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Forgot Password?
              </span>
              <span className="ml-2">|</span>
              <span
                onClick={() => switchForm('signup')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </div>
        )}

        {formType === 'signup' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                value={userData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                value={userData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                value={userData.password}
                onChange={handleChange}
              />
              <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Sign Up</button>
            </form>
            <p className="text-center mt-3 text-sm">
              <span
                onClick={() => switchForm('login')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Already have an account? Sign In
              </span>
            </p>
          </div>
        )}

        {formType === 'forgotPassword' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                value={userData.email}
                onChange={handleChange}
              />
              <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Reset Password</button>
            </form>
            <p className="text-center mt-3 text-sm">
              <span
                onClick={() => switchForm('login')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Back to Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
