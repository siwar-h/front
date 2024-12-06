import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ toggleSignupForm }) => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  const [notification, setNotification] = useState({ message: '', type: '' });

  // Handle input changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted', userData); // For debugging
    
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', userData);
      setNotification({ message: 'Signup successful!', type: 'success' });
      toggleSignupForm(); // Close the form after successful signup
    } catch (error) {
      setNotification({ message: error.response?.data?.error || 'Signup failed.', type: 'error' });
    }
  };

  return (
    <div className="modal-content">
      <h2>Create Account</h2>
      {notification.message && (
        <div className={`notification ${notification.type === 'success' ? 'success' : 'error'}`}>
          {notification.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          value={userData.username} 
          onChange={handleChange} 
          placeholder="Username" 
        />
        <input 
          type="email" 
          name="email" 
          value={userData.email} 
          onChange={handleChange} 
          placeholder="Email" 
        />
        <input 
          type="password" 
          name="password" 
          value={userData.password} 
          onChange={handleChange} 
          placeholder="Password" 
        />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={toggleSignupForm}>Cancel</button>
    </div>
  );
};

export default SignupForm;
