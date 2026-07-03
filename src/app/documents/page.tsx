export default function Documents() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Документи</h1>
        <a href="/dashboard" className="text-blue-400">← Назад</a>
      </div>

      <div className="space-y-4">

        <div className="bg-gray-900 p-6 rounded-xl flex justify-between">
          <span>📄 Договір оренди</span>
          <button className="text-blue-400">Завантажити</button>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl flex justify-between">
          <span>🛡️ Страхування</span>
          <button className="text-blue-400">Завантажити</button>
        </div>

      </div>
    </div>
  );
}