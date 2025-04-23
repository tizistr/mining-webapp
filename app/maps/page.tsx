'use client';

import { useState } from 'react';

export default function Maps() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main
      className={`flex-1 p-4 sm:p-6 bg-white/30 backdrop-blur-sm ${
        isDarkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-gray-200' : 'bg-gradient-to-b from-amber-100 to-amber-300 text-gray-800'
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">FieldPulse: 3D Maps</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-2 sm:mt-0 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base text-gray-600">
        Visualize your mining sites in 3D.
      </p>

      <div className="mt-4 sm:mt-6">
        <p className="p-3 rounded-lg shadow-sm bg-white text-gray-800">
          Placeholder for 3D map (coming soon).
        </p>
      </div>
    </main>
  );
}
