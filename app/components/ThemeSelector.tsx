// app/components/ThemeSelector.tsx
"use client";

import { Theme, ThemeSelectorProps } from "../types";
import { ThemeCard } from "./ThemeCard";
import { themeConfigs, defaultTheme } from "../themeConfig";

export const ThemeSelector = ({
  selectedTheme,
  setSelectedTheme,
  onClose,
}: ThemeSelectorProps) => {
  const handleThemeSelection = (theme: Theme) => {
    setSelectedTheme(theme);
    // onClose(); // Close the selector after selection
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white/95 backdrop-blur-md p-6 space-y-4 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex w-full justify-between pb-4 items-center">
          <h1 className="text-xl font-bold text-[#2A1D52] ">
            Choose a theme
          </h1>
          <div>
            <button
              onClick={onClose}
              className=" text-gray-400 border p-1 w-10 rounded-full hover:text-gray-800 text-2xl"
              aria-label="Close theme selector"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {themeConfigs.map((theme) => (
            <ThemeCard
              key={theme.name}
              theme={theme}
              isSelected={selectedTheme.name === theme.name}
              onClick={() => handleThemeSelection(theme)}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              setSelectedTheme(defaultTheme);
              onClose(); // Also close when resetting
            }}
            className="px-8 py-3 bg-gray-100 hover:bg-gray-200 border  rounded-full text-sm font-semibold text-gray-700"
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};
