import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-white to-blue-100 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>

        <div className="flex flex-wrap items-center justify-between">
          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-4 text-pink-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-4 text-pink-500" />
                support@shoppingapp.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-4 text-pink-500" />
                123 Shopping Street, Cityville
              </li>
            </ul>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl text-green-500 font-bold">
                  Thank you for reaching out!
                </h3>
                <p className="text-gray-600 mt-2">
                  We will get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

