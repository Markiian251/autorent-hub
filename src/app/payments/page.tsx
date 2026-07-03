export default function Payments() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Платежі</h1>
        <a href="/dashboard" className="text-blue-400">← Назад</a>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl space-y-3">
        <p>💳 Наступний платіж: 12 000 грн</p>
        <p>📅 Дата: 01.08.2026</p>
        <p>📊 Статус: Очікується</p>

        <button className="mt-4 bg-blue-600 px-4 py-2 rounded-xl">
          Оплатити
        </button>
      </div>

    </div>
  );
}