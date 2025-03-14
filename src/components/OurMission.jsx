import Mission from "../assets/images/M1.png"
export default function OurMission() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-2 py-12 bg-white">
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={Mission}
            alt="Construction site with workers and cranes"
            className="w-3/4 h-[450px] object-cover rounded-3xl "
          />
        </div>
  
        <div className="md:w-3/4 space-y-6">
          <h2 className="text-3xl text-justify font-bold text-blue-600">Our Mission</h2>
  
          <div>
            <h3 className="text-xl font-semibold">Building with Purpose</h3>
            <p className="text-gray-600">
              "Our mission is to deliver exceptional construction solutions through innovation, quality, and sustainability, ensuring every project exceeds expectations and adds value to society."
              
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Turning Vision into Reality</h3>
            <p className="text-gray-600">
              "We are committed to transforming dreams into reality by providing world-class construction services, ensuring superior craftsmanship."
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Constructing Beyond Structures</h3>
            <p className="text-gray-600">
              "We strive to go beyond constructing buildings — we build communities, trust, and a better future by delivering high-quality infrastructure through innovation and excellence."
            </p>
          </div>
        </div>
      </section>
    );
  }
  


