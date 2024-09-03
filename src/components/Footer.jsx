import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo/logo.svg';

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="GymLabs Logo" className="mx-auto w-16 h-16 mb-4" />
        <p className="text-sm text-gray-600 mb-6">© 2024 GymLabs AI. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-primary">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;