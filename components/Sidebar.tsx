"use client";

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

