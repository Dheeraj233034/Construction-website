import { useEffect, useRef } from "react";

// Import images at the top
import h2 from "../assets/images/h2.png";
import p1 from "../assets/images/p1.png";
import s4 from "../assets/images/s4.png";
import s3 from "../assets/images/s3.png";
import s5 from "../assets/images/s5.png";

const projects = [
  {
    title: "Railway Over Head Traction System, Traction Sub-Station and EHT Transmission Line",
    description: "CORE4 – EPC division is capable to undertake Total Turnkey Projects...",
    image: h2, // Use imported variable
  },
  {
    title: "Railway Station Infrastructure Works",
    description: "CORE4 – Undertake infrastructure projects for Railway Stations...",
    image: p1,
  },
  {
    title: "SCDA and Automation systems",
    description: "We have an experienced team to Design , Supply, Erection...",
    image: s4,
  },
  {
    title: "Water and Waste Water Treatment Plants",
    description: "Managing Water and Waste Water is a tedious job...",
    image: s3,
  },
  {
    title: "Private Public Partnership model",
    description: "Future Plans - Private Public Partnership (PPP) model...",
    image: s5,
  },
];

// Duplicate projects for infinite scrolling
const duplicatedProjects = [...projects, ...projects];

export default function ProjectCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let speed = 1.5; // Medium scrolling speed

    function scroll() {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-blue-600">Services</h2>

      {/* Scrolling Container */}
      <div ref={scrollRef} className="flex space-x-6 overflow-hidden mt-6 px-10 py-5">
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col"
          >
            <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-grow">{project.description}</p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full text-sm self-center">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
