import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L1 12H4V22H20V12H23L12 2Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl font-bold">XXXX</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-yellow-200">HOME</Link>
            <Link to="/quem-somos" className="text-white hover:text-yellow-200">QUEM SOMOS</Link>
            <Link to="/carreira" className="text-white hover:text-yellow-200">CARREIRA</Link>
            <Link to="/contato" className="text-white hover:text-yellow-200">CONTATO</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

