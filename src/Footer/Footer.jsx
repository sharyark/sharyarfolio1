import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  // Contact information
  const contactInfo = {
    address: "Islamabad",
    city: "Islamabad",
    email: "ksharyar12345@gmail.com",
    phone: "00923265652667"
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
          <a href="https://github.com/sharyark" className="text-white mr-10">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sharyar-khan-2014251a5/" className="text-white mr-10">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/sharyarkhan20" className="text-white mr-10">
            <FaInstagram size={24} />
          </a>
          <a href="https://web.facebook.com/sharyar.shary.5243" className="text-white">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
