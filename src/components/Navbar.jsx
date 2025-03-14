

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md h-24 px-6 md:px-12 flex justify-between items-center">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img src="src/assets/images/logo.png" alt="Logo" className="h-20" />
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-8 text-black text-lg font-normal">
//         {["Home", "About Us", "Management Team", "Gallery", "Projects", "Investors", "Contact Us"].map((item) => (
//           <li key={item}>
//             <a href="#" className="hover:text-blue-700 transition">{item}</a>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden text-2xl"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle Menu"
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 md:hidden">
//           <ul className="flex flex-col space-y-4 text-black text-lg font-normal">
//             {["Home", "About Us", "Management Team", "Gallery", "Projects", "Investors", "Contact Us"].map((item) => (
//               <li key={item}>
//                 <a href="#" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
        {["Home", "About Us", "Management Team", "Gallery", "Projects", "Investors", "Contact Us"].map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-blue-700 transition">
              {item}
            </a>
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
          {["Home", "About Us", "Management Team", "Gallery", "Projects", "Investors", "Contact Us"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
