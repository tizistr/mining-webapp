'use client';

import { useState } from 'react';

export default function Timesheets() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main
      className={`flex-1 p-4 sm:p-6 bg-white/30 backdrop-blur-sm ${
        isDarkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-gray-200' : 'bg-gradient-to-b from-amber-100 to-amber-300 text-gray-800'
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mb-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-2 sm:mt-0 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base text-gray-600">
        Track your team’s working hours.
      </p>

      <ul className="mt-4 sm:mt-6 space-y-3">
        <li
          className={`p-3 rounded-lg shadow-sm ${
            isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          Geologist: Alice - Date: 2025-04-22 - Hours: 8
        </li>
        <li
          className={`p-3 rounded-lg shadow-sm ${
            isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          Operator: Bob - Date: 2025-04-22 - Hours: 12
        </li>
      </ul>
    </main>
  );
}
