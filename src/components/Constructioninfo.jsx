// import React from "react";

// const ConstructionInfo = () => {
//   return (
//     <div className="bg-green-200 py-16 px-10 flex items-center justify-center relative">
//       {/* Colored Overlapping Boxes */}
//       <div className="absolute top-2 left-2">
//         <div className="w-16 h-16 bg-orange-500 opacity-90 absolute top-0 left-0 z-30"></div>
//         <div className="w-16 h-16 bg-green-600 opacity-90 absolute top-3 left-3 z-20"></div>
//         <div className="w-16 h-16 bg-blue-600 opacity-90 absolute top-6 left-6 z-10"></div>
//       </div>

//       {/* Text Content */}
//       <div className="text-center max-w-3xl">
//         <h1 className="text-4xl font-bold text-gray-900">
//           Get to know Construction from <br />
//           <span className="font-extrabold">Foundation to Finish</span>
//         </h1>
//         <p className="mt-4 text-lg text-gray-800 leading-relaxed">
//           The Builder’s Handbook is a collection of expert knowledge
//           and best practices to help you construct efficiently, meet
//           your project goals, and create outstanding structure.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ConstructionInfo;

import React from "react";

const ConstructionInfo = () => {
  return (
    <div className="bg-green-200 py-16 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex items-center justify-center relative">
      {/* Colored Overlapping Boxes */}
      <div className="absolute top-2 left-2">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 opacity-90 absolute top-0 left-0 z-30"></div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 opacity-90 absolute top-3 left-3 z-20"></div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 opacity-90 absolute top-6 left-6 z-10"></div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-full sm:max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Get to know Construction from <br />
          <span className="font-bold">Foundation to Finish</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
          The Builder’s Handbook is a collection of expert knowledge
          and best practices to help you construct efficiently, meet
          your project goals, and create outstanding structures.
        </p>
      </div>
    </div>
  );
};

export default ConstructionInfo;
