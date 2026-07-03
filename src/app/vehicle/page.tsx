export default function Vehicle() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Моє авто</h1>
        <a href="/dashboard" className="text-blue-400">← Назад</a>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl">
        <p>🚗 BMW X5</p>
        <p>📅 2022 рік</p>
        <p>🔢 VIN: WB123456789</p>
        <p>📍 Статус: В оренді</p>
      </div>

    </div>
  );
}