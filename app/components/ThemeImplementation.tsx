// app/components/ThemeImplementation.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeSelector } from "./ThemeSelector";
import { Theme } from "../types";
import { defaultTheme } from "../themeConfig";

export const ThemeImplementation = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(defaultTheme);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  return (
    <div className="relative">
      {/* Theme background implementation */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={selectedTheme.image}
          alt={`${selectedTheme.name} theme background`}
          fill
          className="object-cover"
          quality={80}
          priority={selectedTheme.isDefault}
        />
      </div>

      {/* Theme button - always clickable */}
      <button
        onClick={() => setShowThemeSelector(true)}
        className="fixed bottom-8 right-8 bg-white p-4 rounded-full shadow-lg z-50
                  hover:scale-110 transition-transform duration-200"
        aria-label="Change theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {/* Theme selector modal */}
      {showThemeSelector && (
        <ThemeSelector
          selectedTheme={selectedTheme}
          setSelectedTheme={(theme: Theme) => setSelectedTheme(theme)} // Explicitly typed
          onClose={() => setShowThemeSelector(false)}
        />
      )}
    </div>
  );
};
