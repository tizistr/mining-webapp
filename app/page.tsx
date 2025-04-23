'use client';

import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main
      className={`w-4/5 p-6 bg-white/30 backdrop-blur-sm ${
        isDarkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-gray-200' : 'bg-gradient-to-b from-amber-100 to-amber-300 text-gray-800'
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">FieldPulse: Mining Roster</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded hover:bg-gray-200"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <p className="mt-2">
        Manage your mining team’s shifts and sites.
      </p>

      <ul className="mt-6 space-y-2">
        <li
          className={`p-2 rounded shadow ${
            isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          Geologist: Alice - Shift: Morning - Site: North Quarry
        </li>
        <li
          className={`p-2 rounded shadow ${
            isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          Operator: Bob - Shift: Night - Site: South Pit
        </li>
      </ul>
    </main>
  );
}
