// import { useState } from "react";

// const locations = [
//   { name: "Tamil Nadu", x: "39%", y: "85%", details: "Railway Electrification Madurai to Tamil Nadu" },
//   { name: "Andhra Pradesh", x: "40%", y: "71%", details: "2.5 Lakhs Liter Water Project" },
//   { name: "Karnataka", x: "33%", y: "75%", details: "Railway Electrification in Karnataka" },
//   { name: "Maharashtra", x: "35%", y: "57%", details: "Railway Electrification in Maharashtra" },
// ];

// export default function IndiaMap() {
//   const [hoveredLocation, setHoveredLocation] = useState(null);

//   return (
//     <div className="relative flex flex-col items-center">
//       <h2 className="text-xl font-bold text-blue-600">100+ Projects Across India</h2>
//       <div className="relative mt-4">
//         <img src="\src\assets\images\image.png" alt="India Map" className="w-[500px] h-auto" />

//         {locations.map((loc, index) => (
//           <div
//             key={index}
//             className="absolute text-red-600 text-2xl cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
//             style={{ left: loc.x, top: loc.y }}
//             onMouseEnter={() => setHoveredLocation(loc)}
//             onMouseLeave={() => setHoveredLocation(null)}
//           >
//             📍
//           </div>
//         ))}

//         {hoveredLocation && (
//           <div
//             className="absolute bg-white shadow-lg p-2 rounded text-sm text-gray-800 border border-gray-300"
//             style={{
//               left: hoveredLocation.x,
//               top: `calc(${hoveredLocation.y} - 30px)`,
//               transform: "translate(-50%, -100%)",
//             }}
//           >
//             {hoveredLocation.details}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import mapImage from "/src/assets/images/image.png"; // Replace with your India map image
import locationPin from "/src/assets/images/location1.png"; // Replace with your location pin image

const projects = [
  { name: "Railway Electrification Madurai to Tamil Nadu", x: "40%", y: "83%" },
  { name: "2.5 Lakhs Liter Water Project (Andra Pradesh", x: "40%", y: "73%" },
  { name: "Sweage treatment plant (Karnataka)", x: "32%", y: "75%" },
  { name: "Railway Electrification (Maharashtra)", x: "32%", y: "63%" },
  { name: "11kv/750v Substain (Odisha)", x: "58%", y: "58%" },
  { name: "Video Survilence (Rajasthan)", x: "32%", y: "40%" },
  { name: "Railway Electrification bhopal (Madhya Pradesh)", x: "40%", y: "49%" },
];

export default function IndiaMap() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="flex flex-row items-start justify-center gap-10 p-6">
      {/* Left Side - India Map */}
      <div className="relative w-[500px]">
        <img src={mapImage} alt="India Map" className="w-full h-auto" />

        {/* Location Pins */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
            style={{ left: project.x, top: project.y }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img src={locationPin} alt="Location Pin" className="w-6 h-6" />
          </div>
        ))}

        {/* Tooltip for hovered project */}
        {hoveredProject && (
          <div
            className="absolute bg-white text-black text-sm p-2 border border-gray-300 shadow-lg rounded"
            style={{
              left: hoveredProject.x,
              top: `calc(${hoveredProject.y} - 30px)`,
              transform: "translate(-50%, -100%)",
            }}
          >
            {hoveredProject.name}
          </div>
        )}
      </div>

      {/* Right Side - Project List */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600">100+ Projects Across India</h2>
        <ul className="mt-4 space-y-2">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-lg cursor-pointer hover:text-blue-600"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
