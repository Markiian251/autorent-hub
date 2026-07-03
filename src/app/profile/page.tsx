export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Профіль</h1>
        <a href="/dashboard" className="text-blue-400">← Назад</a>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl space-y-2">
        <p>👤 Ім'я: Клієнт</p>
        <p>📞 Телефон: +380 XX XXX XX XX</p>
        <p>📧 Email: client@mail.com</p>
      </div>

    </div>
  );
}