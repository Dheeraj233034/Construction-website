import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Ensure the correct path to your image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md h-20 px-4 md:px-10 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 md:h-20" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-black text-base lg:text-lg font-normal">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Management Team", path: "/management" },
          { name: "Gallery", path: "/gallery" },
          { name: "Projects", path: "/projects" },
          { name: "Investors", path: "/investors" },
          { name: "Contact Us", path: "/contact" },
        ].map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="hover:text-blue-700 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-lg z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-6 text-3xl"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-black text-lg font-normal">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Management Team", path: "/management" },
            { name: "Gallery", path: "/gallery" },
            { name: "Projects", path: "/projects" },
            { name: "Investors", path: "/investors" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

