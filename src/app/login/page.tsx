export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">

      <div className="w-96 bg-gray-900 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Увійти
        </h1>

        <input
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded-lg bg-gray-800 outline-none"
          placeholder="Пароль"
        />

        <a
          href="/dashboard"
          className="block text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium"
        >
          Увійти
        </a>

        <p className="text-center text-gray-500 text-sm mt-4">
          Demo логін (без бази даних)
        </p>

        <a
          href="/"
          className="block text-center mt-4 text-gray-400 hover:text-white"
        >
          ← Повернутись на головну
        </a>

      </div>
    </div>
  );
}