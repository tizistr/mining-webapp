'use client';

import { useState } from 'react';

export default function Timesheets() {
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
        Track your team’s working hours.
      </p>

      <ul className="mt-4 sm:mt-6 space-y-3">
        <li
          className={`p-3 rounded ${
            isDarkMode ? 'bg-gray-700' : 'bg-[#FFFFF4]'
          }`}
        >
          Geologist: Alice - Date: 2025-04-22 - Hours: 8
        </li>
        <li
          className={`p-3 rounded ${
            isDarkMode ? 'bg-gray-700' : 'bg-[#FFFFF4]'
          }`}
        >
          Operator: Bob - Date: 2025-04-22 - Hours: 12
        </li>
      </ul>
    </main>
  );
}
