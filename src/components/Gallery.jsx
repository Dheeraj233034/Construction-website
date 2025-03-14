import PO1 from "../assets/images/PO1.jpg";
import G2 from "../assets/images/G2.jpg";
import G1 from "../assets/images/G1.jpg";
import g7 from "../assets/images/g7.jpg";
import g4 from "../assets/images/g4.jpg";
import g8 from "../assets/images/g8.jpg";
import g9 from "../assets/images/g9.jpg";
import g10 from "../assets/images/g10.jpg";
import g11 from "../assets/images/g11.jpg";

export default function Gallery() {
  const images = [PO1, G2, G1, g7, g4, g8, g9, g10, g11];
  const imageAlts = [
    "Construction workers",
    "High-rise building",
    "Modern house",
    "City skyline",
    "Aerial view of neighborhood",
    "Construction workers inside a building",
    "Wood workshop",
    "Modern office space",
    "Luxury hotel lobby",
  ];

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

      <div className="grid lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img key={index} src={img} alt={imageAlts[index]} className="w-full h-auto shadow-md" />
        ))}
      </div>
    </section>
  );
}



