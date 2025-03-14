// export default function OurClients() {
//     const clients = [
//       { name: "Google", logo: "/src/assets/images/c1.png" },
//       { name: "Capgemini", logo: "/src/assets/images/c2.png" },
//       { name: "Accenture", logo: "/src/assets/images/c5.png" },
//       { name: "Amazon", logo: "/src/assets/images/C6.png" },
//       { name: "HCLTech", logo: "/src/assets/images/C8.png" },
//       { name: "Infosys", logo: "/src/assets/images/C9.png" }
//     ];
  
//     return (
//       <section className="p-8 bg-white text-center">
//         <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Clients</h2>
//         <div className="flex flex-wrap justify-center items-center gap-8">
//           {clients.map((client, index) => (
//             <img
//               key={index}
//               src={client.logo}
//               alt={client.name}
//               className="h-24 object-contain"
//             />
//           ))}
//         </div>
//       </section>
//     );
//   } 

export default function OurClients() {
  const clients = [
    { name: "Google", logo: "/src/assets/images/c1.png" },
    { name: "Capgemini", logo: "/src/assets/images/c2.png" },
    { name: "Accenture", logo: "/src/assets/images/c5.png" },
    { name: "Amazon", logo: "/src/assets/images/C6.png" },
    { name: "HCLTech", logo: "/src/assets/images/c13.png" },
    { name: "Infosys", logo: "/src/assets/images/c12.png" },
    { name: "Infosys", logo: "/src/assets/images/c14.png" }
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
