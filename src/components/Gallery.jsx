export default function Gallery() {
  return (
    <section className="p-8 bg-white">
      <div className="text-center mb-6">
        <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-semibold">
          Gallery
        </div>
        <h2 className="text-2xl font-bold mt-2">“Foundation Today, Landmark Tomorrow”</h2>
        <p className="text-gray-600 mt-1">
          Innovative Building Solutions That Blend Design, Durability, And Sustainability.
        </p>
      </div>

      <div className="grid lg:grid-cols-3">
        <img src="\src\assets\images\PO1.jpg" alt="Construction workers" className="w-50% h-75% shadow-md"/>
        <img src="\src\assets\images\G2.jpg" alt="High-rise building" className="shadow-md" />
        <img src="\src\assets\images\G1.jpg" alt="Modern house" className="shadow-md H-75%" />
      
  <img src="\src\assets\images\g7.jpg" alt="City skyline" className="shadow-md" />
        <img src="\src\assets\images\g4.jpg" alt="Aerial view of neighborhood" className="shadow-md" />
        <img src="\src\assets\images\g8.jpg" alt="Construction workers inside a building" className="shadow-md" />
        <img src="\src\assets\images\g9.jpg" alt="Wood workshop" className="shadow-md" />
        <img src="\src\assets\images\g10.jpg" alt="Modern office space" className="shadow-md" />
        <img src="\src\assets\images\g11.jpg" alt="Luxury hotel lobby" className="shadow-md" />
      </div>
    </section>
  );
}




