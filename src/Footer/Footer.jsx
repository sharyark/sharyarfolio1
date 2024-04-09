import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  // Contact information
  const contactInfo = {
    address: "123 Main Street",
    city: "City, State 12345",
    email: "contact@example.com",
    phone: "123-456-7890"
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Us Section */}
        <ul className="text-sm md:flex-grow-1 md:text-left">
          <li>{contactInfo.address}</li>
          <li>{contactInfo.city}</li>
          <li>{contactInfo.email}</li>
          <li>{contactInfo.phone}</li>
        </ul>
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end md:flex-grow-1">
          <a href="https://github.com/yourgithub" className="text-white mr-10">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/yourlinkedin" className="text-white mr-10">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/yourinstagram" className="text-white mr-10">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com/yourfacebook" className="text-white">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
