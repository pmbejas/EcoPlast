import Organigrama from "@/components/Organigrama";
import Image from "next/image";
import Link from "next/link";

export default function Organizacion() {
  return (
    <section className="p-5 md:max-w-5xl mx-auto animate-fadeIn duration-500 ease-out text-justify text-gray-200 leading-relaxed">
      <h3 className="text-3xl font-bold mb-4 text-green-500">Organización</h3>
      <p className="mb-4 text-xl">
        Nuestra organización está basada en valores de transparencia,
        colaboración y compromiso, fomentando un ambiente de trabajo inclusivo y
        creativo.
      </p>
      <p className="mb-4 text-xl">
        Somos una empresa de carácter mixto, lo que significa que combina
        capitales estatales y privados en su funcionamiento. Nuestra empresa es
        impulsada y financiada en gran parte por el Estado municipal, quien
        garantiza la infraestructura básica, los salarios y el marco
        institucional. A su vez, generamos ingresos propios mediante la
        comercialización de productos plásticos reciclados, lo cual permite
        reinvertir en equipamiento, innovación, y expansión de nuestras
        operaciones.
      </p>
      <p className="mb-4 text-xl">
        El modelo de empresa mixta nos permite operar con eficiencia,
        manteniendo un fuerte compromiso social y ambiental, al tiempo que
        incorporamos criterios de gestión empresarial sostenibles. Esta
        estructura favorece una administración profesionalizada, capaz de
        adaptarse a los desafíos del mercado sin perder de vista nuestra misión
        pública. Así, combinamos lo mejor del sector público (estabilidad,
        regulación y orientación social) con las fortalezas del sector privado
        (dinamismo, eficiencia y capacidad de generar valor).
      </p>

      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Estructura Legal
      </h3>
      <p className="mb-4 text-xl">
        <span className="font-bold">Sociedad Anónima (Mixta)</span> regida por
        ley de sociedades (Ley 19.550).
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">Directorio mixto:</span> 3 miembros
        designados por el Estado, 3 por privados.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">Presidencia:</span> alternada cada 2 años
        entre sectores.
      </p>

      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Organigrama
      </h3>
      <Image
        className="bg-gray-100 rounded-2xl p-5 justify-self-center mt-5 mb-5"
        src="/assets/7591715.svg" // ruta pública o remota
        alt="Logo"
        width={800}
        height={200}
      />
      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Areas de Gestión
      </h3>
      <p className="mb-4 text-xl">
        <span className="font-bold">RRHH y Capacitación:</span> responsabilidad
        principal del socio público. El capital público asume esta área porque
        su misión prioritaria es la creación de empleo de calidad y la inclusión
        social.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">Finanzas y Contabilidad:</span> es de
        gestión mixta público/privada. Aquí confluyen los intereses de control
        fiscal del socio público y la agilidad financiera del privado.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">Área Jurídico/Legal:</span> de co-gestión
        público/privada. Su función es asegurar que Ecoplast cumpla la doble
        normativa de derecho público y derecho privado entre sectores y gestiona
        cuestiones legales generales.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">Seguridad e Higiene Industrial:</span>{" "}
        gestión del socio privado La producción en planta exige rapidez de
        decisión y especialización técnica, por eso esta área se mantiene en la
        órbita privada aunque reporte al directorio mixto.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">
          Comunicación y Relaciones Institucionales:
        </span>{" "}
        responsabilidad compartida. Construye reputación y licencia social,
        combinando la legitimidad pública con la orientación al mercado del
        privado.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold">Tecnología y Soporte IT:</span> liderazgo
        del socio privado. El sector privado aporta know-how tecnológico y
        flexibilidad para adoptar innovación
      </p>
      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">Información Adicional</h3>
      <p className="mb-4 text-xl">
        <Link
          className="hover:text-cyan-400 transition-colors"
          href="/assets/pdf/analisisFODA.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Analisis FODA
        </Link>
      </p>
      <p className="mb-4 text-xl">
        <Link
          className="hover:text-cyan-400 transition-colors me-3"
          href="/assets/pdf/estatutoEcoPlastSAM.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estatuto Social
        </Link>- 
        <Link
          className="hover:text-cyan-400 transition-colors ms-3"
          href="/assets/pdf/explicacionEstatuto.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explicacion del Estatuto Social
        </Link>
      </p>
    </section>
  );
}
