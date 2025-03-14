
// import { useEffect, useRef } from "react";

// const projects = [
//   {
//     title: "Railway Infrastructure Projects",
//     description: "The choice of eco-friendly building materials plays a crucial role in reducing environmental impact.",
//     image: "/src/assets/images/PO1.jpg",
//   },
//   {
//     title: "Water Supply Projects",
//     description: "Sustainability in construction starts with foundation and structural work, where eco-friendly materials.",
//     image: "/src/assets/images/PO2.jpg",
//   },
//   {
//     title: "Networking and Telecom Infra Projects",
//     description: "Integration of IOT, energy management. The choice of eco-friendly building materials plays a crucial role.",
//     image: "/src/assets/images/P03.png",
//   },
//   {
//     title: "Mechanical, Plubing and Electrical Projects",
//     description: "Modern and innovative designs that enhance both aesthetics and functionality.",
//     image: "/src/assets/images/PO4.png",
//   },
//   {
//     title: "Renewable Energy Projects",
//     description: "Eco-friendly solutions that minimize environmental impact while maintaining high performance.",
//     image: "/src/assets/images/PO6.png",
//   },
// ];

// // Duplicate projects for infinite scrolling
// const duplicatedProjects = [...projects, ...projects];

// export default function ProjectCarousel() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let speed = 1.5; // Medium scrolling speed

//     function scroll() {
//       if (scrollContainer) {
//         scrollContainer.scrollLeft += speed;
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//           scrollContainer.scrollLeft = 0;
//         }
//       }
//       requestAnimationFrame(scroll);
//     }

//     scroll();
//   }, []);

//   return (
//     <div className="w-full max-w-6xl mx-auto py-10 text-center overflow-hidden">
//       <h2 className="text-3xl font-bold text-blue-600">Projects</h2>

//       {/* Scrolling Container */}
//       <div ref={scrollRef} className="flex space-x-6 overflow-hidden mt-6 px-10 py-5">
//         {duplicatedProjects.map((project, index) => (
//           <div
//             key={index}
//             className="flex-none w-full sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col"
//           >
//             <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover" />
//             <div className="p-5 flex flex-col flex-grow">
//               <h3 className="font-bold text-lg">{project.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-grow">{project.description}</p>
//               <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full text-sm self-center">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// } 
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Railway Infrastructure Projects",
    description: "Projects related to the development of railway systems, including tracks, stations, and electrification.",
    image: "/src/assets/images/PO1.jpg",
  },
  {
    title: "Water Supply Projects",
    description: "Infrastructure projects focusing on the supply of clean and sustainable water sources to urban and rural areas.",
    image: "/src/assets/images/PO2.jpg",
  },
  {
    title: "Networking and Telecom Infra Projects",
    description: "Projects focused on the development of telecom infrastructure, including fiber optic networks and cell towers.",
    image: "/src/assets/images/P03.png",
  },
  {
    title: "Mechanical, Plumbing, and Electrical Projects",
    description: "Integration of mechanical systems, plumbing, and electrical systems for residential, commercial, and industrial buildings.",
    image: "/src/assets/images/PO4.png",
  },
  {
    title: "Renewable Energy Projects",
    description: "Sustainable energy solutions including solar, wind, and hydroelectric power systems to reduce environmental impact.",
    image: "/src/assets/images/PO6.png",
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
      <h2 className="text-3xl font-bold text-blue-600">Projects</h2>

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
