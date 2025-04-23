#!/bin/bash

# Function to apply changes to a file
apply_changes() {
  local file=$1
  local content=$2
  echo "$content" > "$file"
  echo "Updated $file"
}

# Apply changes to app/layout.tsx
apply_changes "app/layout.tsx" 'import { JetBrains_Mono } from "next/font/google";
import Sidebar from "../components/Sidebar";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} bg-[#FFFFF4] font-bold text-[#191970] cursor-[url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M5 5h8l3 12L28 5h-8l-3 12L5 5z\" fill=\"%23191970\"/><path d=\"M5 5l12 12L5 27h8l3-12L28 27h-8l-3-12L5 5z\" fill=\"none\" stroke=\"%23191970\" stroke-width=\"2\"/></svg>"),_auto]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="bg-[#FFFFF4] p-2 flex items-center justify-between">
              <h1 className="text-2xl lowercase transition-all duration-300 hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]">re-sort</h1>
              <input
                type="text"
                placeholder="Search..."
                className="p-1 bg-[#FFFFF4] placeholder-[#191970]/50 focus:outline-none transition-all duration-200 w-1/4 border-none font-jetbrains font-bold"
              />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
'

# Apply changes to components/Sidebar.tsx
apply_changes "components/Sidebar.tsx" '"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-36" : "w-12"
      } p-2 bg-[#FFFFF4]/80 backdrop-blur-md transition-all duration-500 ease-in-out min-h-[200px] md:min-h-screen group no-underline transform ${isSidebarOpen ? "scale-100" : "scale-95"} opacity-${isSidebarOpen ? "100" : "80"}`}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <nav className="space-y-1 mt-4">
        <Link
          href="/"
          className={`block p-2 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline font-bold transform hover:scale-105 ${
            pathname === "/" ? "bg-[#191970]/10" : ""
          }`}
        >
          <span className="text-sm">Rosters</span>
        </Link>
        <Link
          href="/timesheets"
          className={`block p-2 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline font-bold transform hover:scale-105 ${
            pathname === "/timesheets" ? "bg-[#191970]/10" : ""
          }`}
        >
          <span className="text-sm">Timesheets</span>
        </Link>
        <Link
          href="/maps"
          className={`block p-2 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline font-bold transform hover:scale-105 ${
            pathname === "/maps" ? "bg-[#191970]/10" : ""
          }`}
        >
          <span className="text-sm">3D Maps</span>
        </Link>
      </nav>

      {isSidebarOpen && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search workers..."
            className="w-full p-1 bg-[#FFFFF4] placeholder-[#191970]/50 focus:outline-none transition-all duration-200 border-none font-jetbrains font-bold text-sm"
          />
        </div>
      )}
    </aside>
  );
}
'

# Apply changes to app/page.tsx
apply_changes "app/page.tsx" '"use client";

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
'

# Ask for confirmation before applying changes
echo "The script will update app/layout.tsx, components/Sidebar.tsx, and app/page.tsx."
read -p "Do you want to apply these changes? (y/n): " confirm
if [ "$confirm" = "y" ]; then
  git add .
  git commit -m "Applied automated changes to layout, sidebar, and roster page"
  git push
  echo "Changes applied and pushed to GitHub!"
else
  echo "Changes not applied."
  exit 1
fi
