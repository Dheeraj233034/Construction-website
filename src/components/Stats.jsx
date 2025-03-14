// import React from "react";

// const stats = [
//   { title: "Happy Customers", value: "142+", description: "We Believe Construction Is More Than Building Structure" },
//   { title: "On-Going Projects", value: "32+", description: "We Believe Construction Is More Than Building Structure" },
//   { title: "Happy Customers", value: "10K", description: "We Believe Construction Is More Than Building Structure" },
//   { title: "Awards Achievement", value: "50+", description: "We Believe Construction Is More Than Building Structure" },
// ];

// const StatsSection = () => {
//   return (
//     <section className="bg-blue-900 text-white py-10">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center  py-6">
//           {stats.map((stat, index) => (
//             <div key={index} className="relative px-6">
//               {/* Divider */}
//               {index !== 0 && (
//                 <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/30 hidden md:block"></div>
//               )}
              
//               <h3 className="text-lg font-semibold">{stat.title}</h3>
//               <p className="text-3xl font-bold mt-2">{stat.value}</p>
//               <p className="text-sm mt-2">{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { title: "Happy Customers", value: 142, description: "We Believe Construction Is More Than Building Structure" },
  { title: "On-Going Projects", value: 32, description: "We Believe Construction Is More Than Building Structure" },
  { title: "Completed Projects", value: 10000, description: "We Believe Construction Is More Than Building Structure" },
  { title: "Awards Achievement", value: 50, description: "We Believe Construction Is More Than Building Structure" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative px-6">
              {/* Divider */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/30 hidden md:block"></div>
              )}

              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">
                {inView ? <CountUp start={0} end={stat.value} duration={3} separator="," /> : 0}+
              </p>
              <p className="text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
