export default function Contacto() {
  return (
    <section id="contacto" className="p-10 max-w-md mx-auto animate-fadeIn duration-500 ease-out">
      <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col text-gray-300">
          Nombre
          <input
            type="text"
            placeholder="Tu nombre"
            className="mt-1 p-2 rounded bg-gray-900 border border-gray-700 focus:outline-cyan-500"
            required
          />
        </label>
        <label className="flex flex-col text-gray-300">
          Email
          <input
            type="email"
            placeholder="tu@email.com"
            className="mt-1 p-2 rounded bg-gray-900 border border-gray-700 focus:outline-cyan-500"
            required
          />
        </label>
        <label className="flex flex-col text-gray-300">
          Mensaje
          <textarea
            placeholder="Escribí tu mensaje..."
            rows={5}
            className="mt-1 p-2 rounded bg-gray-900 border border-gray-700 focus:outline-cyan-500 resize-none"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}