'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'w-36' : 'w-12'
      } p-4 bg-[#FFFFF4]/80 backdrop-blur-md transition-all duration-300 ease-in-out min-h-[200px] md:min-h-screen group text-[#191970] font-bold`}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <nav className="space-y-3 mt-6">
        <Link
          href="/"
          className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
            pathname === '/' ? 'bg-[#191970]/10' : 'hover:bg-[#191970]/20'
          }`}
        >
          <span className="text-base font-bold">Rosters</span>
        </Link>
        <Link
          href="/timesheets"
          className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
            pathname === '/timesheets' ? 'bg-[#191970]/10' : 'hover:bg-[#191970]/20'
          }`}
        >
          <span className="text-base font-bold">Timesheets</span>
        </Link>
        <Link
          href="/maps"
          className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
            pathname === '/maps' ? 'bg-[#191970]/10' : 'hover:bg-[#191970]/20'
          }`}
        >
          <span className="text-base font-bold">3D Maps</span>
        </Link>
      </nav>

      {isSidebarOpen && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search workers..."
            className="w-full p-3 rounded-lg bg-[#FFFFF4] text-[#191970] placeholder-[#191970]/50 font-jetbrains focus:outline-none focus:ring-2 focus:ring-[#191970]/50 transition-all duration-200"
          />
        </div>
      )}
    </aside>
  );
}
