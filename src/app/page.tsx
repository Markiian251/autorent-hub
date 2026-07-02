export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black rounded-2xl shadow-xl p-8 w-[420px]">
        <h1 className="text-3xl font-bold mb-2">
          🚗 Піся Оксани
        </h1>

        <p className="text-black-500 mb-8">
          Кабінет Оксанки
        </p>

        <div className="space-y-4">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-sm text-gray-500">Автомобіль</p>
            <h2 className="text-xl font-semibold">
              Соска
            </h2>
          </div>

          <div className="rounded-xl bg-green-50 p-4">
            <p className="text-sm text-gray-500">
              Наступний платіж
            </p>
            <h2 className="text-xl font-semibold">
              12 500 грн
            </h2>
          </div>

          <button className="w-full bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700">
            Тицьни На Мене Сучка
          </button>
        </div>
      </div>
    </main>
  );
}