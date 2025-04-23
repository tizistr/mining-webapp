'use client';

import { useState } from 'react';

export default function Maps() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main
      className={`flex-1 p-4 sm:p-6 bg-[#FFFFF4]/80 backdrop-blur-md ${
        isDarkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-[#191970]' : 'bg-gradient-to-b from-amber-100 to-amber-300 text-[#191970]'
      } font-bold`}
    >
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mb-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-2 sm:mt-0 p-2 rounded hover:bg-[#191970]/20 transition-all duration-200"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base">
        Visualize your mining sites in 3D.
      </p>

      <div className="mt-4 sm:mt-6">
        <p className="p-3 rounded bg-[#FFFFF4]">
          Placeholder for 3D map (coming soon).
        </p>
      </div>
    </main>
  );
}
