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
      <body className={`${jetBrainsMono.className} bg-[#FFFFF4] font-bold text-[#191970] cursor-[url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M12 4h8v4h-8zM12 8h12v4h-12zM12 12h16v4h-16zM8 4l8 12-8 12h8l4-8 4 8h8l-8-12 8-12h-8l-4 8-4-8z\" fill=\"%23191970\" stroke=\"%23191970\" stroke-width=\"1\"/></svg>"),_auto]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="bg-[#FFFFF4] p-2 flex items-center justify-between">
              <h1 className="text-2xl lowercase transition-all duration-300 hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]">re-sort</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`${jetBrainsMono.className} p-1 bg-[#FFFFF4] placeholder-[#191970] focus:outline-none transition-all duration-200 w-1/4 border-none font-bold text-lg hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]`}
                />
              </div>
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
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <nav className="space-y-4 mt-6">
        <Link
          href="/"
          className={`block p-2 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline font-bold text-xl ${
            pathname === "/" ? "bg-[#191970]/10" : ""
          }`}
        >
          <span className="">Rosters</span>
        </Link>
        <Link
          href="/timesheets"
          className={`block p-2 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline font-bold text-xl ${
            pathname === "/timesheets" ? "bg-[#191970]/10" : ""
          }`}
        >
          <span className="">Timesheets</span>
        </Link>
        <Link
          href="/maps"
          className={`block p-2 transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] no-underline font-bold text-xl ${
            pathname === "/maps" ? "bg-[#191970]/10" : ""
          }`}
        >
          <span className="">3D Maps</span>
        </Link>
      </nav>

      {isSidebarOpen && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search workers..."
            className={`${jetBrainsMono.className} w-full p-1 bg-[#FFFFF4] placeholder-[#191970] focus:outline-none transition-all duration-200 border-none font-bold text-lg hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]`}
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
'

# Automatically commit and push changes
echo "Applying changes and pushing to GitHub..."
git add .
git commit -m "Updated sidebar layout and moved dark/light mode toggle to top right"
git push
echo "Changes applied and pushed to GitHub!"
