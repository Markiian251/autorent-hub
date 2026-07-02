export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="min-h-screen bg-black/60 flex flex-col">

        {/* NAV */}
        <header className="flex justify-between px-10 py-6">
          <h1 className="text-xl font-bold">AutoRent Hub</h1>

          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/login" className="hover:text-blue-400">Login</a>
            <a href="/dashboard" className="hover:text-blue-400">Dashboard</a>
            <a href="/profile" className="hover:text-blue-400">Profile</a>
            <a href="/payments" className="hover:text-blue-400">Payments</a>
          </div>
        </header>

        {/* HERO */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl font-bold mb-4">
            Автопрокат система
          </h2>

          <p className="text-gray-300 mb-8">
            Повний контроль авто, клієнтів та платежів
          </p>

          <div className="flex gap-4">
            <a href="/login" className="bg-blue-600 px-6 py-3 rounded-xl">
              Увійти
            </a>

            <a href="/dashboard" className="bg-white text-black px-6 py-3 rounded-xl">
              Кабінет
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}