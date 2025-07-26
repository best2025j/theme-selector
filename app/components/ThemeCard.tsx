// app/components/ThemeCard.tsx
"use client";

import Image from "next/image";
import { Theme } from "../types";

interface ThemeCardProps {
  theme: Theme;
  isSelected: boolean;
  onClick: () => void;
}

export const ThemeCard = ({ theme, isSelected, onClick }: ThemeCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`border-3 rounded-2xl overflow-hidden transition-all text-left w-full
        ${
          isSelected
            ? "border-[#2A1D52] shadow-lg scale-105"
            : "border-transparent hover:border-gray-200"
        }`}
      aria-label={`Select ${theme.name} theme`}
    >
      <div className="relative aspect-video">
        <Image
          src={theme.image}
          alt={`${theme.name} theme`}
          fill
          className="object-cover w-full"
        />
        {theme.isDefault && (
          <div className="absolute top-2 right-2 bg-[#2A1D52] text-white px-2 py-1 rounded-full text-xs font-semibold">
            Default
          </div>
        )}
      </div>
      <p className="text-center font-semibold p-3 text-gray-800">
        {theme.name}
      </p>
    </button>
  );
};
