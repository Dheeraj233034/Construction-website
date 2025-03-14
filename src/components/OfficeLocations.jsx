import React from "react";

const offices = [
  {
    title: "HEAD OFFICE",
    address: "No. 12, 1’ Floor, Near Ramana Maharshi Gyana Kendra, Near New Law Court, K-Block, Kuvempunagar, Mysuru, KARNATAKA – 570 023",
  },
  {
    title: "MARKETING AND HUMAN RESOURCE OFFICE",
    address: "#392, 1st Floor, 3rd Block, Rajaji Nagar, Bangalore, KARNATAKA - 560010",
  },
  {
    title: "BRANCH OFFICE",
    address: "#7/103 Rajendraprasad 3rd Cross Street, Nggo Colony Nagamalai Pudukottai, Madurai, TAMILNADU - 625019.\n\nBSNL Backside, Ramchandrapur Bazaar, Sri Raghunath Workshop, Jethani, ODISHA – 752050",
  },
  {
    title: "FACTORY",
    address: "Plot No.77-N, Hootagalli Industrial Area, Koorgally, Mysore, KARNATAKA - 570018",
  },
];

const OfficeLocations = () => {
  return (
    <section className="bg-[#000066] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {offices.map((office, index) => (
          <div key={index} className="relative px-6">
            {/* White Vertical Line (Divider) */}
            {index !== 0 && (
              <div className="absolute left-0 top-1/3 transform -translate-y-1/2 w-px h-48 bg-white/50 hidden md:block"></div>
            )}

            <h3 className="text-lg font-bold">{office.title}</h3>
            <p className="mt-2 text-sm whitespace-pre-line">{office.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeLocations;

