

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Railway Over Head Traction System, Traction Sub-Station and EHT Transmission Line",
    description: " CORE4 – EPC division is capable to undertake Total Turnkey Projects, pertaining to Design, Supply, Erection, Testing and Commissioning of all 2 X 25KV Over Head Electrification (OHE) for Indian Railway",
    image: "/src/assets/images/h2.png",
  },
  {
    title: "Railway Station Infrastructure Works",
    description: "CORE4 – Undertake infrastructure projects for Railway Stations, involving Composite nature of works involving Civil, Electricaland Fabrication works. We provide solutions such as Foot Over Bridge (FOB), Station.",
    image: "/src/assets/images/p1.png",
  },
  {
    title: "SCDA and Automation systems",
    description: "We have an experienced team to Design , Supply, Erection and Commissioning of SCADA and Automation systems for Railway Traction System, Traction Sub-Station, Transmission Lines, MV distribution system involving RMUs, LT Distribution system within Railway Stations,",
    image: "/src/assets/images/s4.png",
  },
  {
    title: "Water and Waste Water Treatment Plants",
    description: "Managing Water and Wast Water is a tedious job. Growing population leads to increase in water usage, intern generation of waste water in Railway Station premises. We have our technology such as MBBR, MBR, SBR for waste water treatment plant with Zero Liquid discharge technology",
    image: "/src/assets/images/s3.png",
  },
  {
    title: "Private Public Partnership model",
    description: "Future Plans - Private Public Partnership (PPP) model in Infrastructure works, Pre-Cast Concrete Products, Distribution Transformer Manufacturing Unit, Cloud Data Centre service provider.",
    image: "/src/assets/images/s5.png",
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
