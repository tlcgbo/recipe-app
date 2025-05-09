import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600 tracking-tight">
          🍎 <span className="font-extrabold">RecipeFinder</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-red-600 cursor-pointer transition">Home</Link>

          <li className="hover:text-red-600 cursor-pointer transition">Favourites</li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-green-600 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer transition">Finder</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
