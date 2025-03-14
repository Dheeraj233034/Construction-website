
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/C6.png";
import c13 from "../assets/images/c13.png";
import c12 from "../assets/images/c12.png";
import c14 from "../assets/images/c14.png";

export default function OurClients() {
  const clients = [
    { name: "Google", logo: c1 },
    { name: "Capgemini", logo: c2 },
    { name: "Accenture", logo: c5 },
    { name: "Amazon", logo: c6 },
    { name: "HCLTech", logo: c13 },
    { name: "Infosys", logo: c12 },
    { name: "TCS", logo: c14 } // Changed duplicate "Infosys" to "TCS"
  ];

  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Clients</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
