import Organigrama from "@/components/Organigrama";

export default function Organizacion() {
  return (
    <section className="p-5 md:max-w-5xl mx-auto animate-fadeIn duration-500 ease-out text-justify text-gray-200 leading-relaxed">
      <h2 className="text-3xl font-bold mb-4 text-green-500">Organización</h2>
      <p className="mb-4 text-xl">
        Nuestra organización está basada en valores de transparencia,
        colaboración y compromiso, fomentando un ambiente de trabajo inclusivo y
        creativo.
      </p>
      <p className="mb-4 text-xl">
        Somos una organización de carácter mixto, lo que significa que combina
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
      <h2 className="text-3xl font-bold mb-4 text-green-500 mt-10">Organigrama</h2>
      <Organigrama />
    </section>
  );
}
