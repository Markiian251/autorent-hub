export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="flex gap-4">
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/profile" className="text-gray-400 hover:text-white">Profile</a>
          <a href="/payments" className="text-gray-400 hover:text-white">Payments</a>
          <a href="/login" className="text-red-400 hover:text-red-300">Logout</a>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <a href="/vehicle" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800">
          🚗 Моє авто
        </a>

        <a href="/payments" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800">
          💳 Платежі
        </a>

        <a href="/documents" className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800">
          📄 Документи
        </a>

      </div>
    </div>
  );
}