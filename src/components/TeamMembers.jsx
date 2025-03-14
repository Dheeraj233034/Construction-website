import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import T4 from "../assets/images/T4.png";

export default function TeamMembers() {
  const scrollRef = useRef(null);

  const team = [
    {
      name: "Ajay Kumar",
      role: "House Owner",
      image: T4,
      description:
        "The construction company did an excellent job on my home renovation, delivering quality work on time and within budget."
    },
    {
      name: "William Joe",
      role: "Suppliers",
      image: T4,
      description:
        "Working with this construction company has been a great experience; they are reliable, pay on time, and communicate."
    },
    {
      name: "Sunitha Patel",
      role: "Real Estate Agent",
      image: T4,
      description:
        "This construction company consistently delivers high-quality work and meets deadlines, making it easy to recommend."
    },
    {
      name: "Michael Lee",
      role: "Project Manager",
      image: T4,
      description:
        "Managing construction projects has never been easier. This team ensures timely and efficient work."
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust scroll speed
      container.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <section className="p-8 bg-white relative">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Team Members</h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Team Members Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth px-10 py-5 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {team.map((member, index) => (
            <div key={index} className="flex-none w-80 bg-white rounded-lg shadow-md p-6 text-center border">
              <img src={member.image} alt={member.name} className="w-full h-60 object-contain rounded-lg mb-4" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Hide Scrollbar for WebKit Browsers (Chrome, Safari) */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
