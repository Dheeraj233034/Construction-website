import React from "react";
import PO1 from "../assets/images/PO1.jpg";
import G2 from "../assets/images/G2.jpg";
import G1 from "../assets/images/G1.jpg";
import g7 from "../assets/images/g7.jpg";
import g4 from "../assets/images/g4.jpg";
import g8 from "../assets/images/g8.jpg";
import g9 from "../assets/images/g9.jpg";
import g10 from "../assets/images/g10.jpg";
import g11 from "../assets/images/g11.jpg";

const Gallery = () => {
  const images = [PO1, G2, G1, g7, g4, g8, g9, g10, g11];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
