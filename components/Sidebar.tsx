'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'w-1/5' : 'w-16'
      } p-4 bg-white/30 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        {isSidebarOpen && (
          <h2 className="text-xl font-bold text-gray-800">FieldPulse</h2>
        )}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1 rounded hover:bg-gray-200"
        >
          {isSidebarOpen ? '☰' : '➔'}
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <Link
            href="/"
            className={`flex items-center p-2 rounded hover:ring-2 ring-amber-500 transition-all ${
              pathname === '/' ? 'bg-white/50' : ''
            }`}
          >
            <span className="mr-2">📋</span>
            {isSidebarOpen && <span>Rosters</span>}
          </Link>
        </li>
        <li>
          <Link
            href="/timesheets"
            className={`flex items-center p-2 rounded hover:ring-2 ring-amber-500 transition-all ${
              pathname === '/timesheets' ? 'bg-white/50' : ''
            }`}
          >
            <span className="mr-2">⏰</span>
            {isSidebarOpen && <span>Timesheets</span>}
          </Link>
        </li>
        <li>
          <Link
            href="/maps"
            className={`flex items-center p-2 rounded hover:ring-2 ring-amber-500 transition-all ${
              pathname === '/maps' ? 'bg-white/50' : ''
            }`}
          >
            <span className="mr-2">🗺️</span>
            {isSidebarOpen && <span>3D Maps</span>}
          </Link>
        </li>
      </ul>

      {isSidebarOpen && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search workers..."
            className="w-full p-2 rounded bg-white/50 text-gray-800 placeholder-gray-500"
          />
        </div>
      )}
    </aside>
  );
}
