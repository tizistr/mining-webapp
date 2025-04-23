"use client";

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

