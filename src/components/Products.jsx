
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Power Control Center Panel (PCC)",
    description: "We offer PCC panel with a current carrying capacity up to 6300A. We have short circuit type test certificate of 50kA/1 Sec from CPRI.",
    image: "/src/assets/images/PR1.png",
  },
  {
    title: "Motor Control Center Panel (MCC)",
    description: "Switchboard assemblies used for low voltage power distribution having a common power bus and principally containing motor control units are generally called motor control center (MCC).",
    image: "/src/assets/images/PR2.png",
  },
  {
    title: "PLC AND SCADA PANELS",
    description: "Programming logic controller (PLC) desire to be logic flow for the program using the input device to trigger output devices depending on logic of the program, these panels are mainly used having configuration.",
    image: "/src/assets/images/PR3.png",
  },
  {
    title: "L T Panel",
    description: "To control and monitor the main supply at centralized location with protective switchgears. Similarly of distribution boards are utilized for control of small power control provided near load.",
    image: "/src/assets/images/PR6.png",
  },
  {
    title: "Feeder Pillar",
    description: "Feeder pillars allow simple and local maintenance to your equipment, reducing site downtime and reducing overall maintenance costs.",
    image: "/src/assets/images/PR4.png",
  },
];

// Duplicate projects for infinite scrolling
const duplicatedProjects = [...projects, ...projects];

export default function ProjectCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let speed = 1.5; // Default scroll speed

    // Adjust scroll speed based on screen size
    if (window.innerWidth <= 640) {
      speed = 1; // Slower speed for mobile devices
    } else if (window.innerWidth <= 1024) {
      speed = 1.5; // Medium speed for tablets
    } else {
      speed = 2; // Faster speed for larger screens (desktops)
    }

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
      <h2 className="text-3xl font-bold text-blue-600">Products</h2>

      {/* Scrolling Container */}
      <div ref={scrollRef} className="flex space-x-6 overflow-hidden mt-6 px-4 sm:px-8 md:px-10 py-5">
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col"
          >
            <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed text-justify flex-grow">{project.description}</p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full text-sm self-center">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
