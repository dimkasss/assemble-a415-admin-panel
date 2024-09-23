"use client";

import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
}

function CardComponent({ title, image }: CardProps) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default CardComponent;
