import React, { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import GYSLogo from "../assets/GYSLogo3.png";
// import GYSLogo from "../assets/GYSLogo1.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" shadow-md sticky top-0 z-50 bg-white ">
      <div className="px-2 sm:px-4 lg:px-10">
        <div className="flex justify-between items-center h-14 lg:h-23 ">
          {/* Logo */}
          <div className="flex items-start">
            <Link
              to="/"
              className="flex items-start gap-2 text-xl font-bold text-gray-900"
            >
              <img
                src={GYSLogo}
                height={"120px"}
                width={"120px"}
                className="text-violet-400"
                alt="gystechnologies"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-16 text-lg font-medium text-gray-800">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/aboutus" className="hover:text-blue-600">
              About Us
            </Link>
            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-blue-600">
              Portfolio
            </Link>
            <Link to="/careers" className="hover:text-blue-600">
              Careers
            </Link>
          </nav>
          <div className="hidden md:flex md:justify-center">
            <button className=" rounded-3xl px-9 py-2 border-violet-900 border-2 font-semibold text-gray-700">
              Explore More
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2 font-medium text-gray-800">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block">
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            About Us
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Services
          </Link>
           <Link
            to="/careers"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
             Careers
          </Link>
         
        </div>
      )}
    </header>
  );
};

export default Header;
