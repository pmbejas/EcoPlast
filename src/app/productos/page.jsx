import ProductCard from "../../components/ProductCard";

const productos = [
  {
    id: 1,
    name: "Producto A",
    img: "/productos/producto-a.jpg",
    description:
      "Este es el producto A, con características innovadoras y diseño moderno.",
  },
  {
    id: 2,
    name: "Producto B",
    img: "/productos/producto-b.jpg",
    description:
      "Producto B es ideal para quienes buscan calidad y rendimiento.",
  },
  {
    id: 3,
    name: "Producto C",
    img: "/productos/producto-c.jpg",
    description:
      "Con el producto C tendrás eficiencia y estilo en un solo paquete.",
  },
];

export default function Productos() {
  return (
    <div>
      <section className="p-5 md:max-w-5xl mx-auto animate-fadeIn duration-500 ease-out text-xl text-justify">
        <h3 className="text-3xl font-bold mb-4 text-green-500">Proceso de Producción</h3>
        <p className="mb-4">
          Nuestra empresa desarrolla un proceso productivo que comienza desde la
          recolección de residuos plásticos en la ciudad. A través de convenios
          con el municipio, se recolectan plásticos de hogares, escuelas,
          comercios e instituciones. Estos materiales son transportados a nuestra
          planta, donde un equipo especializado los clasifica según tipo y
          calidad.
        </p>
        <p className="mb-4">
          El plástico que no puede reutilizarse es prensado y destinado a
          recicladores externos. El que sí es apto para reutilización es lavado,
          secado y triturado, quedando listo para ser utilizado como materia
          prima. Luego, pasa a la sección de producción, donde operarios
          calificados manejan máquinas para crear nuevos productos, como macetas,
          muebles plásticos, bancos para espacios públicos, entre otros bienes que
          vuelven a la comunidad en forma de servicios. 
        </p>
        <p className="mb-4">
          Este proceso no solo ayuda
          al ambiente, sino que también genera empleo y conciencia ambiental en la
          población.
        </p>
      </section>
      9<section className="p-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn duration-500 ease-out">
        {productos.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
}
