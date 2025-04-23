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
    <main className="flex-1 p-4 sm:p-6 bg-[#FFFFF4]/80 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-2 sm:mt-0 p-2 rounded transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base">
        Manage your mining team’s shifts and sites.
      </p>

      <ul className="mt-4 sm:mt-6 space-y-2">
        {rosters.length === 0 ? (
          <li className="p-2 rounded bg-[#FFFFF4]">
            No roster data available.
          </li>
        ) : (
          rosters.map((roster) => (
            <li
              key={roster.id}
              className={`p-2 rounded ${
                isDarkMode ? 'bg-gray-700 text-[#191970]' : 'bg-[#FFFFF4]'
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
