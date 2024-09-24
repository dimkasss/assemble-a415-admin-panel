"use client";

interface NumberedCardProps {
  number: number;
  title: string;
}

export function NumberedCard({ number, title }: NumberedCardProps) {
  return (
    <div className="bg-purple-100 rounded-3xl p-4 w-48 h-24 flex flex-col justify-between">
      <div className="text-gray-600 text-sm">№{number}</div>
      <div className="text-gray-800 text-2xl font-semibold">{title}</div>
    </div>
  );
}
