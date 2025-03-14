import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGlobe, FaWindows, FaAndroid, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg">Get Core4</h3>
            <ul className="mt-4 space-y-2">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Renovation & Remodeling</li>
              <li>Infrastructure Development</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-xl" />
              <h3 className="font-bold text-lg">Web Browser</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Industries Served</li>
              <li>Client Testimonials</li>
              <li>Case Studies</li>
              <li>Recent Project</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="flex items-center gap-2">
              <FaWindows className="text-xl" />
              <h3 className="font-bold text-lg">Windows</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Construction Guides</li>
              <li>Safety & Compliance</li>
              <li>Cost Estimation Tool</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="flex items-center gap-2">
              <FaAndroid className="text-xl" />
              <h3 className="font-bold text-lg">Android</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Webinars</li>
              <li>Consultation Booking</li>
              <li>Site Inspection Services</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <div className="flex items-center gap-2">
              <FaApple className="text-xl" />
              <h3 className="font-bold text-lg">iOS</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>About Us</li>
              <li>Contact</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Investors Report</li>
              <li>Press & Media</li>
              <li>Legal Policies</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-10 space-x-6 text-gray-600">
          <FaFacebook className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-gray-800" />
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 mt-6">
          © 2025 Design by Linqway
        </p>
      </div>
    </footer>
  );
};

export default Footer;
