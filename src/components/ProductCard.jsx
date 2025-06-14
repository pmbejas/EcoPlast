"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-sm h-64 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d \${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700 flex flex-col items-center justify-center p-4">
          <Image
            src={product.img}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-44 object-contain mb-4"
            loading="lazy"

          />
          <h3 className="text-xl font-semibold text-green-500">{product.name}</h3>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden shadow-lg bg-gray-700 border border-gray-600 p-6 flex items-center justify-center text-center text-gray-300">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
