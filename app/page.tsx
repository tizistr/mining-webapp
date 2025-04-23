'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rosters, setRosters] = useState<any[]>([]);

  useEffect(() => {
    const fetchRosters = async () => {
      console.log('Fetching rosters from Supabase...');
      const { data, error } = await supabase
        .from('rosters')
        .select('*');
      if (error) {
        console.error('Error fetching rosters:', error);
      } else {
        console.log('Rosters fetched:', data);
        setRosters(data);
      }
    };
    fetchRosters();
  }, []);

  return (
    <main
      className={`flex-1 p-4 sm:p-6 bg-white/30 backdrop-blur-sm ${
        isDarkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-gray-200' : 'bg-gradient-to-b from-amber-100 to-amber-300 text-gray-800'
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">FieldPulse: Mining Roster</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-2 sm:mt-0 p-2 rounded hover:bg-gray-200 transition-colors duration-200"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base">
        Manage your mining team’s shifts and sites.
      </p>

      <ul className="mt-4 sm:mt-6 space-y-2">
        {rosters.length === 0 ? (
          <li className="p-2 rounded shadow bg-white text-gray-800">
            No roster data available.
          </li>
        ) : (
          rosters.map((roster) => (
            <li
              key={roster.id}
              className={`p-2 rounded shadow ${
                isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
              }`}
            >
              {roster.role}: {roster.name} - Shift: {roster.shift} - Site: {roster.site}
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
