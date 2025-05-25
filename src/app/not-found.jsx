export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 animate-fadeIn duration-500 ease-out">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">Página no encontrada</p>
      <a
        href="/"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
      >
        Volver al inicio
      </a>
    </section>
  );
}