"use client";

import { getRandomTailwindColor } from "@/lib/utils";
import Image from "next/image";

import SpeakerIcon from "@/public/speaker-icon.svg";
import { useMemo } from "react";
import Link from "next/link";

interface NumberedCardProps {
  number: number;
  title: string;
  hasSound?: boolean;
  id: number;
}

const NumberedCard = ({ number, title, hasSound, id }: NumberedCardProps) => {
  const color = useMemo(getRandomTailwindColor, []);
  console.log("@color", color);

  return (
    <Link
      href={"/assemblies/" + id}
      className={`bg-${color} rounded-3xl p-4 min-w-48 flex flex-col justify-between gap-5 cursor-pointer`}
    >
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-lg">№{number}</p>
        <p>{hasSound && <Image src={SpeakerIcon} alt="Аудио" />}</p>
      </div>
      <div className="text-gray-800 text-2xl font-medium">{title}</div>
    </Link>
  );
};

export default NumberedCard;
