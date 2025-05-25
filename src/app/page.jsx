import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <section className="p-10 animate-fadeIn duration-500 ease-out max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Bienvenidos a nuestra Exposición</h1>
      <p className="text-lg mb-8">Descubre quiénes somos, qué hacemos y nuestros productos destacados.</p>
      <a
        href="#contacto"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors"
      >
        Contactanos
      </a>
    </section>
  );
}