import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const getRandomTailwindColor = () => {
  const colors = [
    "rose",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "violet",
    "purple",
  ];

  const opacityAvailable = ["100"];

  return (
    colors[getRandomInt(0, colors.length)] +
    "-" +
    opacityAvailable[getRandomInt(0, opacityAvailable.length)]
  );
};
