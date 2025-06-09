
export default function Contacto() {
  return (
    <section
      id="contacto"
      className="p-5 md:max-w-5xl mx-auto animate-fadeIn duration-500 ease-out text-justify text-gray-200 leading-relaxed"
    >
      <h2 className="text-3xl font-bold mb-6  text-green-500">Contacto</h2>
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
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition-colors max-w-30"
        >
          Enviar
        </button>
      </form>
      <div className="mt-5 flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Encontranos en
        </h3>
        <iframe
          className="mt-5 mb-5"
          src="https://www.google.com/maps?q=-26.859394766970453,-65.24842198808511&z=13&output=embed"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
