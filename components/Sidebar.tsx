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
      } p-4 bg-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out min-h-[200px] md:min-h-screen shadow-lg group`}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <div className="flex items-center mb-6">
        {isSidebarOpen && (
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide">re-sort</h2>
        )}
      </div>

      <nav className="space-y-3">
        <Link
          href="/"
          className={`flex items-center p-3 rounded-lg hover:ring-2 ring-amber-500 transition-all duration-200 ${
            pathname === '/' ? 'bg-white/50 shadow-md' : 'hover:bg-white/20'
          }`}
        >
          <span className="mr-3 text-lg">📋</span>
          {isSidebarOpen && <span className="text-base font-medium">Rosters</span>}
        </Link>
        <Link
          href="/timesheets"
          className={`flex items-center p-3 rounded-lg hover:ring-2 ring-amber-500 transition-all duration-200 ${
            pathname === '/timesheets' ? 'bg-white/50 shadow-md' : 'hover:bg-white/20'
          }`}
        >
          <span className="mr-3 text-lg">⏰</span>
          {isSidebarOpen && <span className="text-base font-medium">Timesheets</span>}
        </Link>
        <Link
          href="/maps"
          className={`flex items-center p-3 rounded-lg hover:ring-2 ring-amber-500 transition-all duration-200 ${
            pathname === '/maps' ? 'bg-white/50 shadow-md' : 'hover:bg-white/20'
          }`}
        >
          <span className="mr-3 text-lg">🗺️</span>
          {isSidebarOpen && <span className="text-base font-medium">3D Maps</span>}
        </Link>
      </nav>

      {isSidebarOpen && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search workers..."
            className="w-full p-3 rounded-lg bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 shadow-sm"
          />
        </div>
      )}
    </aside>
  );
}
