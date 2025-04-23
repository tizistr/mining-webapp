'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'w-36' : 'w-12'
      } p-4 bg-[#FFFFF4]/80 backdrop-blur-md transition-all duration-300 ease-in-out min-h-[200px] md:min-h-screen group`}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <nav className="space-y-3 mt-6">
        <Link
          href="/"
          className={`block p-3 rounded-lg transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] ${
            pathname === '/' ? 'bg-[#191970]/10' : ''
          }`}
        >
          <span className="text-base">Rosters</span>
        </Link>
        <Link
          href="/timesheets"
          className={`block p-3 rounded-lg transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] ${
            pathname === '/timesheets' ? 'bg-[#191970]/10' : ''
          }`}
        >
          <span className="text-base">Timesheets</span>
        </Link>
        <Link
          href="/maps"
          className={`block p-3 rounded-lg transition-all duration-200 hover:text-[#191970] hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)] ${
            pathname === '/maps' ? 'bg-[#191970]/10' : ''
          }`}
        >
          <span className="text-base">3D Maps</span>
        </Link>
      </nav>

      {isSidebarOpen && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search workers..."
            className="w-full p-3 rounded-lg bg-[#FFFFF4] placeholder-[#191970]/50 focus:outline-none focus:ring-2 focus:ring-[#191970]/50 transition-all duration-200"
          />
        </div>
      )}
    </aside>
  );
}
