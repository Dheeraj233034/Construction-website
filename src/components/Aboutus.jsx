
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import constructionImage from "../assets/images/AB.png"; // Update the path accordingly

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center  px-2 py-8">
      {/* Left - Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={constructionImage}
          alt="Construction Site"
          className="w-3/4 h-[450px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Right - Text */}
      <div className="w-full lg:w-2/3 lg:pl-12 mt-8 lg:mt-0">
        <h2 className="text-blue-600 text-justify text-3xl font-bold">About Us</h2>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">
          A blueprint for the future, built today
        </h3>
        <p className="text-gray-700 mt-4 text-justify leading-relaxed">
       <span className="font-semibold">CORE 4 ENGINEERS</span>,  was founded as a partnership in the year 2014, and was upgraded to Pvt
Ltd company under Companies act in the year 2022. Our vision is to maximize project execution
speed and prortability in Small and Medium EPC contracts, also to create assets with new
technology to provide infrastructure solutions under PPP for Small and Medium Infrastructure.
        </p>
        <p className="text-gray-700 mt-4 text-justify leading-relaxed">
        We also provide, Technology for
Water and Waste water treatment plant with Zero Liquid Discharge Technology for Public utilities.
Our company is driven by Technology, where we adapt and manage latest technology to solve
modern problems, turning into opportunity for better and sustainable future.
        </p>

        {/* Bullet Points */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center text-gray-900">
            <FaCheckCircle className="text-blue-600 text-lg mr-2" />
            <p className="font-semibold">Architects of progress</p>
          </div>
          <div className="flex items-center text-gray-900">
            <FaCheckCircle className="text-blue-600 text-lg mr-2" />
            <p className="font-semibold">Excellence at its core</p>
          </div>
        </div>

        {/* Read More Button */}
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;




