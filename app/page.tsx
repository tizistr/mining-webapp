"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rosters, setRosters] = useState<any[]>([]);

  useEffect(() => {
    const fetchRosters = async () => {
      console.log("Fetching rosters from Supabase...");
      const { data, error } = await supabase
        .from("rosters")
        .select("*");
      if (error) {
        console.error("Error fetching rosters:", error);
      } else {
        console.log("Rosters fetched:", data);
        setRosters(data);
      }
    };
    fetchRosters();
  }, []);

  return (
    <main className="flex-1 p-2 bg-[#FFFFF4]/80 backdrop-blur-md no-underline">
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mb-2">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mt-1 sm:mt-0 p-1 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline border-none font-bold bg-transparent transform hover:scale-105 text-sm"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <p className="mt-1 text-xs font-bold">
        Manage your mining team’s shifts and sites.
      </p>

      <ul className="mt-2 space-y-1">
        {rosters.length === 0 ? (
          <li className="p-1 bg-[#FFFFF4] font-bold text-xs">
            No roster data available.
          </li>
        ) : (
          rosters.map((roster) => (
            <li
              key={roster.id}
              className={`p-1 ${
                isDarkMode ? "bg-gray-700 text-[#191970]" : "bg-[#FFFFF4]"
              } font-bold text-xs transition-all duration-200 hover:bg-[#191970]/10`}
            >
              {roster.role}: {roster.name} - Shift: {roster.shift} - Site: {roster.site}
            </li>
          ))
        )}
      </ul>
    </main>
  );
}

