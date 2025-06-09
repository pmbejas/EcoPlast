import ProductCard from "../../components/ProductCard";
import Image from "next/image";

const productos = [
  {
    id: 1,
    name: "PlastiMadera",
    img: "/assets/images/productos/producto1.jpg",
    description:
      "Listones de 'Madera de Plastico'.",
  },
  {
    id: 2,
    name: "Pellets",
    img: "/assets/images/productos/producto2.jpg",
    description:
      "Materia prima para fabricantes externos.",
  },
  {
    id: 3,
    name: "Postes circulares (2mts)",
    img: "/assets/images/productos/producto3.jpg",
    description:
      "Son ideales para alambrados rurales, cercos de viñedo.",
  },
  {
    id: 4,
    name: "Postes de luz",
    img: "/assets/images/productos/producto4.jpg",
    description:
      "Iluminación vial en barrios eco-sustentables.",
  },
  {
    id: 5,
    name: "Placas 5–20 mm",
    img: "/assets/images/productos/producto5.jpg",
    description:
      "División de espacios, cartelería, cerramientos de obra.",
  },
  {
    id: 6,
    name: "Ladrillos encastrables",
    img: "/assets/images/productos/producto6.jpg",
    description:
      "Muros no portantes, módulos habitacionales.",
  },
  {
    id: 7,
    name: "Reductores de velocidad",
    img: "/assets/images/productos/producto7.jpg",
    description:
      "Para uso en vías urbanas o estacionamientos.",
  },
  {
    id: 8,
    name: "Mobiliario para plaza/jardín",
    img: "/assets/images/productos/producto8.jpg",
    description:
      "Plazas públicas, patios escolares.",
  },
  {
    id: 9,
    name: "Cestos de basura 50–120 L",
    img: "/assets/images/productos/producto9.jpg",
    description:
      "Recolección diferenciada domiciliaria.",
  },
  {
    id: 10,
    name: "Cucha para animales",
    img: "/assets/images/productos/producto10.jpg",
    description:
      "De uso exclusivo para Refugios y veterinarias.",
  },
];

export default function Productos() {
  return (
    <div>
      <section className="p-5 md:max-w-5xl mx-auto animate-fadeIn duration-500 ease-out text-xl text-justify ">
        <h3 className="text-3xl font-bold mb-4 text-green-500">Producción</h3>
        <p className="mb-4">
          Nuestra empresa desarrolla un proceso productivo que comienza desde la
          recolección de residuos plásticos en la ciudad de San Miguel de
          Tucumán. A través de convenios con el municipio, se recolectan
          plásticos de hogares, escuelas, comercios e instituciones. Estos
          materiales son transportados a nuestra planta, donde un equipo
          especializado los clasifica según tipo y calidad.
        </p>
        <p className="mb-4">
          El plástico que no puede reutilizarse es prensado y destinado a
          recicladores externos. El que sí es apto para reutilización es lavado,
          secado y triturado, quedando listo para ser utilizado como materia
          prima. Luego, pasa a la sección de producción, donde operarios
          calificados manejan máquinas para crear nuevos productos, como
          macetas, muebles plásticos, bancos para espacios públicos, entre otros
          bienes que vuelven a la comunidad en forma de servicios.
        </p>
        <p className="mb-4">
          Este proceso no solo ayuda al ambiente, sino que también genera empleo
          y conciencia ambiental en la población.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-green-500">
          Proceso Productivo
        </h3>
        <p className="mb-4">
          <span className="font-bold text-green-500">Recolección y
          Recepción:</span> Se recolectan residuos plásticos desde centros de acopio,
          industrias, cooperativas o puntos verdes. Se reciben, pesan y
          clasifican en la planta según tipo de plástico (PET, HDPE, LDPE,
          etc.).
        </p>
        <p className="mb-4">
          <span className="font-bold text-green-500">Clasificación y
          Pretratamiento: </span> Se separan manual o mecánicamente los plásticos por
          tipo y color. Se eliminan impurezas como etiquetas, restos de
          alimentos, metales, etc. El material pasa por un proceso de lavado
          industrial con agua caliente y detergentes especiales.
        </p>
        <Image
          src="/assets/images/produccion/separacion.jpg"
          alt="Organigrama"
          width={1600}
          height={900}
          className="hidden md:block px-5 justify-self-center mt-5 mb-10 w-full h-auto"
        />
        <p className="mb-4">
          <span className="font-bold text-green-500">Secado y Triturado: </span> Luego del lavado, se secan los plásticos con aire caliente o
          centrífugas. Se trituran en molinos hasta obtener escamas (flakes) o
          pequeños trozos uniformes.
        </p>
        <Image
          src="/assets/images/produccion/triturado.jpg"
          alt="Organigrama"
          width={1600}
          height={900}
          className="hidden md:block px-5 justify-self-center mt-5 mb-10 w-full h-auto"
        />
        <p className="mb-4">
          <span className="font-bold text-green-500">Extrusión y
          Pelletizado:</span> Las escamas se funden en extrusoras a alta temperatura.
          Se filtran las impurezas restantes y el plástico fundido se corta en
          pellets (gránulos).
        </p>
        <p className="mb-4">
          <span className="font-bold text-green-500">
            Producción de Nuevos Productos:
          </span>{" "}
          Los pellets reciclados se utilizan como materia prima para: Perfiles
          plásticos (usados en construcción, mobiliario urbano), láminas y
          placas.
        </p>
        <p className="mb-4">
          <span className="font-bold text-green-500">Control de Calidad: </span>{" "}
          En cada etapa se hacen controles para garantizar la calidad del
          material reciclado y que cumplan normas (ISO 15270, IRAM). Se evalúan
          propiedades físicas, químicas y mecánicas de los productos.
        </p>
        <p className="mb-4">
          <span className="font-bold text-green-500">
            Almacenamiento y Distribución:
          </span>{" "}
          Los productos terminados se embalan, etiquetan y almacenan. Se
          distribuyen a clientes del sector público y privado, fomentando la
          economía circular.
        </p>
      </section>
      <section className="p-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn duration-500 ease-out">
        {productos.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
}
