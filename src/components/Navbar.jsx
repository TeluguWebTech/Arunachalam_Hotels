import React, { useState } from 'react';
import { FaBars, FaTimes, FaHotel, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-white">GoTiruvannamalai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium flex items-center">
              <FaHotel className="mr-2" /> Hotels
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Distance
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium flex items-center">
              <FaRupeeSign className="mr-2" /> Tariff
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-blue-600 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md font-medium flex items-center"
          >
            <FaHotel className="mr-2" /> Hotels
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md font-medium flex items-center"
          >
            <FaMapMarkerAlt className="mr-2" /> Distance
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md font-medium flex items-center"
          >
            <FaRupeeSign className="mr-2" /> Tariff
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;