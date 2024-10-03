"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NumberedCard from "./numbered-card";
import { assemblyProps } from "@/lib/mockData";
import { Marmelad } from "next/font/google";

const marmelad = Marmelad({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

interface CardWrapperProps {
  title: string;
  data: assemblyProps[];
}

const CardWrapper: React.FC<CardWrapperProps> = ({ title, data }) => {
  console.log("@cardWrapper render");

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -192 : 192;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="relative">
      <h2 className={`text-3xl font-extrabold mb-4 ${marmelad.className}`}>
        {title}
      </h2>
      <hr className="p-3" />
      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          {data.map((card) => (
            <NumberedCard
              key={card.id}
              number={card.number}
              title={card.title}
              hasSound={card.hasSound}
              id={card.id}
            />
          ))}
        </div>
        {
          <button
            onClick={() => handleScroll("left")}
            className={`absolute right-0 top-[30%] transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md ${
              showLeftArrow ? "" : "cursor-not-allowed"
            }`}
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        }
        {
          <button
            onClick={() => handleScroll("right")}
            className={`absolute right-0 top-[70%] transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md ${
              showRightArrow ? "" : "cursor-not-allowed"
            }`}
            disabled={!showRightArrow}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        }
      </div>
    </div>
  );
};

export default CardWrapper;
