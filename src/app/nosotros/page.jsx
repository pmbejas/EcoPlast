import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="p-5 md:max-w-5xl mx-auto animate-fadeIn duration-500 ease-out text-justify text-xl">
      <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center items-center">
          <Image
              src="/assets/images/ecoPlastPredio.jpg"
            alt="Nuestra historia"
            width={300}
            height={300}
            className="w-full h-auto md:block rounded-lg hidden pt-10 pb-5"
            priority
          />
          <Image
              src="/assets/images/ecoPlastPredioMobile.jpg"
            alt="Nuestra historia"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg block md:hidden"
            priority
          />
        
        <div className="w-full ">
          <h3 className="text-3xl font-bold mb-4 text-green-500">
            Nuestra Historia
          </h3>
          <p className="text-gray-300 leading-snug mb-4">
            Cuando empezó todo, éramos simplemente tres amigos con una idea y muchas
            ganas de hacer algo que tuviera impacto real. Nos habíamos planteado un
            desafío doble: por un lado, crear una empresa que pudiera sostenerse
            económicamente, y por el otro, contribuir de forma concreta al cuidado
            del medio ambiente. Así nació la idea de EcoPlast.
          </p>
          <p className="text-gray-300 leading-snug mb-4">
            Al principio, como suele pasar, teníamos muchas ideas y muchas más
            dudas. Sabíamos que queríamos trabajar con reciclaje, pero no sabíamos
            exactamente cómo ni por dónde empezar. Así que hicimos lo primero que
            cualquier proyecto necesita: sentarnos a pensar, investigar y tomar
            decisiones.
          </p>
          <p className="text-gray-300 leading-snug mb-4">
            Nos hicimos varias preguntas:
            <br />
            <span className="ps-5">
              • ¿Qué residuos íbamos a reciclar?
              <br />
              • ¿Cuál era la materia prima más abundante y con mayor impacto
              ambiental?
              <br />
              • ¿Cómo podíamos financiar esto?
              <br />
            </span>
          </p>
        </div>
      </div>
      <p className="text-gray-300 leading-snug mb-4">
        Después de varias reuniones, debates y noches sin dormir, decidimos
        enfocarnos en los residuos plásticos, porque veíamos que eran un
        problema enorme, omnipresentes en cada rincón de la ciudad, y con mucho
        potencial de reutilización si se los trataba correctamente.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Ahí apareció el primer gran obstáculo: el financiamiento. Empezamos por
        donde casi todos comienzan, buscando capitales privados. Golpeamos
        muchas puertas, presentamos nuestra idea, incluso llegamos a hablar con
        inversores de Buenos Aires. Pero la verdad es que, al ser un proyecto
        ambiental y social en lugar de uno puramente rentable, la respuesta
        siempre fue negativa.
      </p>
      <Image
        src="/assets/images/historiaReUse.jpg"
        alt="EcoPlast - Reutiliza"
        width={400}
        height={400}
        className="w-full block md:hidden h-auto rounded-lg md:px-0 my-5"
        priority
      />
      <p className="text-gray-300 leading-snug mb-4">
        Cuando vimos que el camino privado no nos iba a abrir las puertas,
        decidimos intentarlo con el sector público. Preparamos una carpeta con
        todo: análisis del impacto ambiental, proyecciones de empleo,
        necesidades de maquinaria, y posibles productos derivados del reciclado.
        Presentamos el proyecto en tres municipalidades: Yerba Buena, Tafí Viejo
        y San Miguel de Tucumán.
      </p>
      <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center items-center">
        <div className="w-full ">
          <p className="text-gray-300 leading-snug mb-4">
            Después de varias semanas, fue la Municipalidad de San Miguel de Tucumán
            la que nos llamó. Se interesaron mucho en la propuesta, sobre todo por
            su potencial de generar empleo verde y reducir los residuos urbanos. Ahí
            comenzó a tomar forma lo que hoy es EcoPlast.
          </p>

          <p className="text-gray-300 leading-snug mb-4">
            Con nuestros ahorros personales y el apoyo de la municipalidad, que se
            comprometió a asumir los primeros sueldos del personal y colaborar con
            la logística de recolección de residuos plásticos, pudimos instalar una
            estructura inicial bastante básica: una planta chica donde
            clasificábamos los residuos plásticos que venían de los centros de
            acopio y de la recolección municipal.
          </p>
          <p className="text-gray-300 leading-snug mb-4">
            Ahí también tuvimos que tomar decisiones importantes: por ejemplo, al
            principio no podíamos procesar todos los tipos de plástico, así que
            optamos por clasificar lo que sí podíamos tratar, y vender el resto a
            una empresa recicladora en Buenos Aires, lo cual nos permitió recuperar
            algo de inversión mientras ganábamos tiempo y experiencia.
          </p>
        </div>
        <Image
            src="/assets/images/economiaCircular.jpg"
          alt="Nuestra historia"
          width={400}
          height={400}
          className="w-full h-auto rounded-lg py-5"
          priority
        />
      </div>

      <p className="text-gray-300 leading-snug mb-4">
        Con el correr de los meses y viendo que el sistema funcionaba, empezamos
        a pensar en el siguiente paso: ¿Qué productos podíamos fabricar con el
        plástico reciclado? Hicimos un análisis de mercado sencillo,
        investigamos qué productos tenían demanda local y cuáles podían
        fabricarse con los residuos que estábamos procesando. Así fue como
        lanzamos nuestros primeros productos: tachos, macetas y algunas placas
        para construcción.
      </p>

      <p className="text-gray-300 leading-snug mb-4">
        La municipalidad nos ofreció un convenio de financiamiento para ampliar
        la planta, y ahí surgió otro gran momento de decisión. Teníamos un
        presupuesto limitado y una lista larguísima de máquinas posibles.
        Decidimos hacer un proceso de investigación técnica, comparando costos,
        capacidades y eficiencia energética. Visitamos otras plantas,
        consultamos con ingenieros y fabricantes. Al final, elegimos tres
        máquinas clave que nos permitieron automatizar parte del proceso y
        multiplicar la capacidad de producción.
      </p>

      <p className="text-gray-300 leading-snug mb-4">
        Desde ahí, todo fue creciendo paso a paso. Al principio teníamos unos 40
        empleados y muchas tareas se hacían de forma casi artesanal. Hoy, ya
        somos 145 personas trabajando en distintas áreas, desde clasificación
        hasta ventas, pasando por ingeniería, administración y logística.
      </p>

      <p className="text-gray-300 leading-snug mb-4">
        Además, logramos estructurar un directorio de 6 personas, entre
        representantes del sector privado y público, que se reúne todos los
        meses en asamblea. En esas reuniones aplicamos procesos de análisis de
        datos de producción y rendimiento, y tomamos decisiones importantes:
        como qué productos discontinuar, en qué nuevas líneas invertir, o cómo
        mejorar la eficiencia energética de la planta.
      </p>
      <Image
        src="/assets/images/historiaFinal.jpg"
        alt="EcoPlast"
        width={400}
        height={400}
        className="w-full h-auto rounded-lg md:px-0 my-5"
        priority
      />
      <p className="text-gray-300 leading-snug mb-4 font-semibold">
        Hoy, EcoPlast es una realidad. Una empresa mixta que nació de la
        convicción de que se puede emprender sin perder de vista el bien común.
        Y todo empezó con una idea, mucha voluntad y decisiones difíciles que
        fuimos tomando con compromiso, investigación y trabajo en equipo.
      </p>
      <h3 className="text-3xl font-bold mb-4 text-green-500">
        Propósito y Vision
      </h3>
      <p className="text-gray-300 leading-snug mb-4">
        En EcoPlast, creemos en un futuro más limpio, sostenible y consciente.
        Somos una empresa joven comprometida con el reciclaje de plásticos como
        una forma de cuidar el planeta y transformar residuos en nuevas
        oportunidades.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Nuestro propósito nace de una necesidad urgente: reducir el impacto
        ambiental del plástico, uno de los materiales más contaminantes y
        duraderos en nuestro ecosistema. Por eso, desarrollamos un sistema
        integral de recolección, clasificación y transformación de plásticos,
        que permite darles una segunda vida útil, ya sea como materia prima
        reciclada o como nuevos productos.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Estamos convencidos de que la economía circular es el camino, y
        trabajamos día a día para convertir lo que antes era desecho en valor.
        Colaboramos con cooperativas, industrias y organismos públicos para
        fomentar una red responsable de consumo y reciclaje.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        En EcoPlast, reciclamos con propósito, innovamos con compromiso y
        construimos, junto a la comunidad, un mundo más verde.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Queremos ser referentes en reciclaje de plásticos a nivel regional,
        impulsando soluciones sostenibles que integren tecnología, educación
        ambiental y responsabilidad social.
      </p>
      <h3 className="text-3xl font-bold mb-4 text-green-500 mt-10">
        Misión y Valores
      </h3>
      <p className="text-gray-300 leading-snug mb-4">
        Transformamos el plástico descartado en nuevas oportunidades, reduciendo
        el impacto ambiental y promoviendo una cultura de reciclaje consciente
        en nuestra comunidad..
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Economía circular: Creemos en el ciclo de vida continuo de los
        materiales, donde nada se desperdicia y todo puede transformarse.
      </p>

      <p className="text-gray-300 leading-snug mb-4">
        Colaboración comunitaria: Fomentamos redes de trabajo con personas,
        organizaciones y entidades que comparten nuestra visión de un futuro
        sostenible.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Innovación con propósito: Buscamos soluciones creativas y eficientes que
        generen impacto positivo en el medioambiente y en la sociedad.
      </p>
      <p className="text-gray-300 leading-snug mb-4">
        Educación y conciencia: Apostamos a la formación y sensibilización como
        herramientas clave para construir una cultura más responsable y
        ecológica.
      </p>
      <h3 className="text-3xl font-bold mb-4 text-green-500">
        Compromiso Ambiental
      </h3>
      <p className="text-gray-300 leading-snug mb-4">
        En cada paso que damos, reafirmamos nuestro compromiso con el cuidado
        del medio ambiente. Creemos que proteger el entorno que compartimos no
        es solo una responsabilidad, sino un deber esencial. Por eso, trabajamos
        día a día implementando prácticas sostenibles, promoviendo la conciencia
        ecológica y contribuyendo activamente a la construcción de un futuro más
        limpio y equilibrado para las próximas generaciones.
      </p>

    </section>
  );
}
