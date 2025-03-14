

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import bgImage from "../assets/images/Home1.jpg";
import { FaFileContract, FaProjectDiagram, FaTools } from "react-icons/fa";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Left Text Section */}
      <div className="w-full lg:w-2/3 mb-36 text-white text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Construction Solution <br /> for everyone
        </h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto lg:mx-0">
        We provide innovative electrical solutions: compact substations, high-performance panels, 
        and advanced RTUs, ensuring efficiency, reliability, and customer satisfaction.
        We offer top-notch electrical contracting services that guarantee safety and ensure reliability.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700">
          Read More
        </button>
      </div>

      {/* Right Info Box */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm border-t-4 border-red-600 mt-10 lg:mt-0 lg:absolute right-10 bottom-28">
        <h3 className="text-xl font-bold mb-4">
          We Construct and Manage Places and Infrastructure
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <FaFileContract className="text-blue-600 text-2xl" />
            <div>
              <h4 className="font-semibold">General Contract</h4>
              <p className="text-sm text-gray-600">
                Construction Contract is an agreement between the Owner and Contractor.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaProjectDiagram className="text-blue-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Project Planning</h4>
              <p className="text-sm text-gray-600">
                Construction Contract is an agreement between the Owner and Contractor.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaTools className="text-blue-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Refurbishment</h4>
              <p className="text-sm text-gray-600">
                Construction Contract is an agreement between the Owner and Contractor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="flex flex-wrap justify-center lg:justify-start space-x-1 mt-6 lg:absolute bottom-[17%] right-[35%]">
        <div className="bg-blue-600 text-white  h-24 w-36 px-6 py-2 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">
            {inView ? <CountUp start={0} end={148} duration={3} separator="," /> : 0}
          </h2>
          <p>Completed Projects</p>
        </div>
        <div className="bg-red-600 text-white px-6 py-2 h-24 w-36 shadow-md rounded-lg text-center">
          <h2 className="text-3xl font-bold">
            {inView ? <CountUp start={0} end={28} duration={3} separator="," /> : 0}+
          </h2>
          <p>Years of Experience</p>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;






