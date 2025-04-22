export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">FieldPulse: Mining Roster</h1>
      <p className="mt-2 text-gray-600">Manage your mining team’s shifts and sites.</p>
      <ul className="mt-6 space-y-2">
        <li className="p-2 bg-white rounded shadow">
          Geologist: Alice - Shift: Morning - Site: North Quarry
        </li>
        <li className="p-2 bg-white rounded shadow">
          Operator: Bob - Shift: Night - Site: South Pit
        </li>
      </ul>
    </div>
  );
}