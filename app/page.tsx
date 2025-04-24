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
    <main className={`flex-1 p-2 ${isDarkMode ? "bg-gray-800 text-[#191970]" : "bg-[#FFFFF4]/80 text-[#191970]"} backdrop-blur-md no-underline`}>
      <p className="mt-1 text-lg font-bold">
        Manage your mining team’s shifts and sites.
      </p>

      <ul className="mt-2 space-y-1">
        {rosters.length === 0 ? (
          <li className={`p-1 ${isDarkMode ? "bg-gray-700" : "bg-[#FFFFF4]"} font-bold text-lg`}>
            No roster data available.
          </li>
        ) : (
          rosters.map((roster) => (
            <li
              key={roster.id}
              className={`p-1 ${isDarkMode ? "bg-gray-700" : "bg-[#FFFFF4]"} font-bold text-lg transition-all duration-200 hover:bg-[#191970]/10 hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]`}
            >
              {roster.role}: {roster.name} - Shift: {roster.shift} - Site: {roster.site}
            </li>
          ))
        )}
      </ul>
    </main>
  );
}

