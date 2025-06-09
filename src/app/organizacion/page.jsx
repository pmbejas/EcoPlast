import Image from "next/image";
import Link from "next/link";
import Equipo from "@/components/Equipo";

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

      <h3 className="text-3xl font-bold mb-4 text-green-500">
        Información General
      </h3>
      <h4 className="text-xl font-bold mb-4 text-gray-200">
        Identificación de la Empresa
      </h4>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Nombre:</span> EcoPlast S.A.M. (Sociedad
        Anónima Mixta)
      </p>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Actividad principal:</span> Recolección,
        clasificación y reciclado de plásticos para su reintroducción en el
        circuito productivo.
      </p>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Ubicación:</span> Provincia de Tucumán,
        Argentina.
      </p>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Socios:</span> Estado Provincial (a través
        del Ministerio de Ambiente): 50% o Inversores privados (agrupados en
        Ecoplast Capital S.A.): 50%
      </p>
      <h4 className="text-xl font-bold mt-10 mb-4 text-gray-200">Objetivos</h4>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Económicos:</span> Obtener rentabilidad a
        través de productos reciclados
      </p>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Ambientales:</span> Reducir contaminación
        plástica, fomentar economía circular.
      </p>
      <p className="text-gray-300 leading-snug mb-4 ps-0 md:ps-5 text-xl">
        <span className="font-bold">Sociales:</span> Generar empleo formalizado,
        especialmente para sectores vulnerables y cooperativas de recolectores
        urbanos.
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
        src="/assets/images/organigramaEscritorio.png"
        alt="Organigrama"
        width={1600}
        height={900}
        className="hidden md:block px-5 justify-self-center mt-5 mb-5 w-full h-auto"
      />
      <Image
        src="/assets/images/organigramaMobile.png"
        alt="Organigrama"
        width={1600}
        height={900}
        className="block md:hidden px-2 justify-self-center w-full h-auto"
      />

      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Areas de Gestión
      </h3>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Seguridad, Higiene y Medio Ambiente:</span>{" "}
        Cuida que todas las operaciones sean seguras para las personas y
        responsables con el entorno. Desarrolla políticas de salud ocupacional y
        planes de respuesta ante emergencias. Lidera auditorías ambientales y
        gestiona certificaciones
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">
          Comunicación y Relaciones Institucionales:
        </span>{" "}
        Maneja la imagen pública y la relación con medios, comunidad y
        autoridades. Define el tono de marca y la estrategia de prensa.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Comercial y Marketing:</span> Diseña la
        propuesta de valor, precios y promociones. Define objetivos de ventas y
        analiza tendencias de mercado.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Tecnología (CTO):</span> Traza la hoja de
        ruta tecnológica, prioriza proyectos IT y vela por la ciberseguridad.
        Gestiona presupuestos de hardware, software y nube
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Operaciones (COO):</span> Orquesta la
        producción y la logística para que los pedidos lleguen a tiempo y con
        calidad. Mejora procesos, indicadores OEE y costos operativos.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Finanzas (CFO):</span> Administra el flujo
        de caja, la financiación y la relación con bancos. Entrega reportes
        financieros al directorio y asegura el cumplimiento impositivo.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Recursos Humanos:</span> Diseña la
        estrategia de talento: atracción, desarrollo y retención. Administra
        nómina, clima laboral y relaciones sindicales.
      </p>
      <p className="mb-4 text-xl">
        <span className="font-bold text-green-500">Área Legal:</span> Brinda asesoramiento
        jurídico integral y representa a la empresa ante litigios. Revisa
        contratos y asegura el cumplimiento normativo.
      </p>
      <Equipo />
      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Información Adicional
      </h3>
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
        </Link>
        -
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
