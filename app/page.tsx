// app/page.tsx

import { ThemeImplementation } from "./components/ThemeImplementation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeImplementation />
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
          Event Planner Theme Selector
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Click the palette icon in the bottom right to change themes!
        </p>
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How it works
          </h2>
          <p className="text-gray-700 mb-4">
            This theme selector allows you to preview different background
            themes for your event planning application.
          </p>
          <ul className="text-left list-disc pl-5 space-y-2 text-gray-700">
            <li>Click the palette icon to open the theme selector</li>
            <li>Choose from 11 different theme options</li>
            <li>The background will update in real-time</li>
            <li>Click Reset to Default to return to the original theme</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
