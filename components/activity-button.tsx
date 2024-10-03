"use client";

import { Marmelad } from "next/font/google";
import Image, { StaticImageData } from "next/image";

const marmelad = Marmelad({ weight: "400", subsets: ["latin", "cyrillic"] });

interface ActivityButtonComponentProps {
  text: string;
  image?: StaticImageData;
  imageData?: {
    image: StaticImageData;
    imageAlt: string;
  };
  active?: boolean;
}

const ActivityButtonComponent: React.FC<ActivityButtonComponentProps> = ({
  text,
  imageData,
  active = false,
}) => {
  return (
    <button
      className={`flex flex-col items-center gap-5 w-full p-4 transition-colors duration-200 bg-[--active-button-bg] my-6 rounded-3xl hover:bg-[--active-button-bg-hover] ${
        active ? "" : ""
      }`}
    >
      <h2 className={`text-2xl text-[--secondary] ${marmelad.className}`}>
        {text}
      </h2>
      {imageData != undefined && (
        <Image src={imageData.image} alt={imageData.imageAlt} width={150} />
      )}
    </button>
  );
};

export default ActivityButtonComponent;
