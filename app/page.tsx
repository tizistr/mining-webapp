'use client';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      {/* Sidebar Placeholder */}
      <aside className="w-1/5 p-4 bg-white/30 backdrop-blur-sm">
        <h2 className="text-xl font-mono font-bold text-gray-800">FieldPulse</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-2 bg-white/50 rounded hover:ring-2 ring-gray-500">
            📋 Rosters
          </li>
          <li className="p-2 rounded hover:ring-2 ring-gray-500">
            ⏰ Timesheets
          </li>
          <li className="p-2 rounded hover:ring-2 ring-gray-500">
            🗺️ 3D Maps
          </li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className="w-4/5 p-6 bg-white/30 backdrop-blur-sm">
        <h1 className="text-3xl font-mono font-bold text-gray-800">
          FieldPulse: Mining Roster
        </h1>
        <p className="mt-2 font-mono text-gray-600">
          Manage your mining team’s shifts and sites.
        </p>
        <ul className="mt-6 space-y-2">
          <li className="p-2 bg-white rounded shadow">
            Geologist: Alice - Shift: Morning - Site: North Quarry
          </li>
          <li className="p-2 bg-white rounded shadow">
            Operator: Bob - Shift: Night - Site: South Pit
          </li>
        </ul>
      </main>
    </div>
  );
}