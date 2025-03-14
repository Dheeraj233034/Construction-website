import React from "react";
import constructionImage from "../assets/images/construction-team.jpg";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-12 bg-white">
      {/* Left Side: Core Values */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">Core Values</h2>
        <p className="text-gray-600">
          We are driven by integrity, quality, innovation, and a customer-centric approach. We believe in transparent 
          communication, ethical business practices, and delivering exceptional craftsmanship in every project.
        </p>
        <img src={constructionImage} alt="Construction Team" />
        
    
          < div className="w-75% max-w-lg rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-40% bg-gray-200 shadow-lg rounded-xl p-6 lg:p-8">
        <h3 className="text-xl  text-center font-semibold mb-4">Contact Form</h3>
        <p className="text-gray-500 text-sm mb-4">
          Fill out the form below, and our team will get back to you promptly.
        </p>
        
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-sm font-medium">Business Email *</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <div className="flex items-center gap-2">
              <select className="border px-2 py-2 rounded-md">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                placeholder="Enter your contact number"
                className="flex-grow px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-sm font-medium">What service do you need? *</label>
            <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400">
              <option>Select</option>
              <option>Architectural Planning</option>
              <option>Structural Engineering</option>
              <option>Construction Management</option>
            </select>
          </div>

          {/* Message Box */}
          <div>
            <label className="block text-sm font-medium">How can we help you?</label>
            <textarea
              placeholder="Enter your message here"
              className="w-full mt-1 px-3 py-2 border rounded-md h-24 focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
