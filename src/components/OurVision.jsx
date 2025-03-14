import Vision from "../assets/images/V2.jpg";
export default function OurVision() {
    return (
      <section className="flex flex-col md:flex-row items-center  p-8 bg-white rounded-lg shadow-md">
        <div className="md:w-3/4 space-y-6">
          <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
  
          <div>
            <h3 className="text-xl font-semibold">Building the Future</h3>
            <p className="text-gray-600">
              "Our vision is to transform the landscape of construction by creating iconic, sustainable, and future-ready structures that redefine modern living and inspire generations."
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Creating Spaces that Inspire</h3>
            <p className="text-gray-600">
              "We strive to build spaces that not only serve their purpose but also inspire people, blending innovation, quality, and sustainability in every structure."
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Tomorrow, Today</h3>
            <p className="text-gray-600">
              "Our vision is to lead the construction industry by delivering sustainable and innovative infrastructure solutions that shape a better tomorrow, today."
            </p>
          </div>
        </div>
  
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={Vision}
            alt="Futuristic city skyline"
            className="rounded-3xl w-3/4 h-[450px] object-cover"
          />
        </div>
      </section>
    );
  }
  
