// import { useEffect, useRef } from "react";
// import { Star, User } from "lucide-react";

// const testimonials = [
//   {
//     name: "Michael Lee",
//     review:
//       "Exceptional craftsmanship and attention to detail! The team delivered our project on time with outstanding quality.",
//     rating: 5,
//   },
//   {
//     name: "Sarah Johnson",
//     review:
//       "Professional, reliable, and highly skilled. Our dream home turned out even better than we imagined!",
//     rating: 5,
//   },
//   {
//     name: "Emily Thomson",
//     review:
//       "From planning to execution, everything was seamless. Highly recommended for any construction needs!",
//     rating: 5,
//   },
//   {
//     name: "John Doe",
//     review:
//       "Great service! The project was completed efficiently and on time. Highly recommend their work!",
//     rating: 4,
//   },
//   {
//     name: "Jane Smith",
//     review:
//       "Very satisfied with the work. The attention to detail was impressive!",
//     rating: 5,
//   },
// ];

// // Duplicate testimonials for seamless scrolling
// const duplicatedTestimonials = [...testimonials, ...testimonials];

// export default function Testimonial() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let speed = 5; // Adjust speed for smoother movement

//     function scroll() {
//       if (scrollContainer) {
//         scrollContainer.scrollLeft += speed;

//         // Reset scroll when reaching halfway to create an infinite effect
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
//       <h2 className="text-2xl font-bold text-blue-600">Testimonial</h2>
//       <p className="text-gray-600 mt-2">Building Excellence, One Structure At A Time</p>

//       {/* Scrolling Container */}
//       <div
//         ref={scrollRef}
//         className="flex space-x-6 overflow-hidden mt-6 px-10 py-5"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {duplicatedTestimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="flex-none w-[30%] bg-white rounded-lg shadow-lg p-5 border border-gray-200 text-left h-auto"
//           >
//             <div className="flex items-center space-x-3">
//               <User className="w-8 h-8 text-gray-500" />
//               <h3 className="font-semibold">{testimonial.name}</h3>
//             </div>

//             {/* Star Rating */}
//             <div className="flex mt-2">
//               {Array.from({ length: testimonial.rating }, (_, i) => (
//                 <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//               ))}
//             </div>

//             {/* Full Review (Fits Inside Card) */}
//             <p className="text-gray-600 mt-3 text-sm leading-relaxed">{testimonial.review}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// } 

import { useEffect, useRef } from "react";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Michael Lee",
    review:
      "Exceptional craftsmanship and attention to detail! The team delivered our project on time with outstanding quality.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    review:
      "Professional, reliable, and highly skilled. Our dream home turned out even better than we imagined!",
    rating: 5,
  },
  {
    name: "Emily Thomson",
    review:
      "From planning to execution, everything was seamless. Highly recommended for any construction needs!",
    rating: 5,
  },
  {
    name: "John Doe",
    review:
      "Great service! The project was completed efficiently and on time. Highly recommend their work!",
    rating: 4,
  },
  {
    name: "Jane Smith",
    review:
      "Very satisfied with the work. The attention to detail was impressive!",
    rating: 5,
  },
];

// Duplicate testimonials for seamless scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonial() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let speed = 0.3; // Consistent, smooth scrolling speed across all devices

    // Ensures consistent, smooth scrolling across all devices
    function scroll() {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;

        // Reset scroll when reaching halfway to create an infinite effect
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
      <h2 className="text-2xl font-bold text-blue-600">Testimonial</h2>
      <p className="text-gray-600 mt-2">Building Excellence, One Structure At A Time</p>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-hidden mt-6 px-10 py-5"
        style={{ scrollBehavior: "smooth" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white rounded-lg shadow-lg p-5 border border-gray-200 text-left h-auto transition-transform transform hover:scale-105 duration-200"
          >
            <div className="flex items-center space-x-3">
              <User className="w-8 h-8 text-gray-500" />
              <h3 className="font-semibold">{testimonial.name}</h3>
            </div>

            {/* Star Rating */}
            <div className="flex mt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            {/* Full Review (Fits Inside Card) */}
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



