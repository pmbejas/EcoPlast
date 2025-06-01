'use client';
import { useState } from "react";

const organigrama = [
  {
    id: "dirGen",
    nombre: "Dirección General",
    empleados: 2,
    descripcion: "Responsable máximo de la empresa, define estrategias y toma decisiones.",
    hijos: [
      {
        id: "asistenteEjecutivo",
        nombre: "Asistente Ejecutivo/a",
        empleados: 1,
        descripcion: "Apoya al Director/a General en tareas administrativas y coordinación.",
      },
    ],
  },
  {
    id: "dirAdm",
    nombre: "Dirección Administrativa",
    empleados: 13,
    descripcion: "Gestiona contabilidad, recursos humanos y asuntos legales.",
    hijos: [
      {
        id: "areaContable",
        nombre: "Área Contable",
        empleados: 5,
        descripcion: "Controla y registra las operaciones contables.",
        hijos: [
          {
            id: "contadorGeneral",
            nombre: "Contador/a General",
            empleados: 1,
            descripcion: "Supervisa la contabilidad y estados financieros.",
          },
          {
            id: "analistasContables",
            nombre: "Analistas Contables",
            empleados: 2,
            descripcion: "Ejecutan análisis y registros contables.",
          },
          {
            id: "auxiliaresAdministrativos",
            nombre: "Auxiliares Administrativos",
            empleados: 2,
            descripcion: "Apoyan en tareas administrativas y archivo.",
          },
        ],
      },
      {
        id: "recursosHumanos",
        nombre: "Recursos Humanos",
        empleados: 4,
        descripcion: "Gestiona personal, capacitaciones y relaciones laborales.",
        hijos: [
          {
            id: "jefeRRHH",
            nombre: "Jefe/a de RRHH",
            empleados: 1,
            descripcion: "Dirige las políticas y planificación del personal.",
          },
          {
            id: "capacitacionBienestar",
            nombre: "Encargado/a de Capacitación y Bienestar",
            empleados: 1,
            descripcion: "Organiza capacitaciones y actividades para empleados.",
          },
          {
            id: "liquidacionSueldos",
            nombre: "Encargado/a de Liquidación de Sueldos",
            empleados: 1,
            descripcion: "Realiza la liquidación de haberes y cumple normativa laboral.",
          },
          {
            id: "reclutamientoSeleccion",
            nombre: "Encargado/a de Reclutamiento y Selección",
            empleados: 1,
            descripcion: "Lleva a cabo la selección y contratación de personal.",
          },
        ],
      },
      {
        id: "juridicoLegal",
        nombre: "Jurídico y Legal",
        empleados: 1,
        descripcion: "Asesora legalmente a la empresa y elabora contratos.",
        hijos: [
          {
            id: "abogadoEmpresa",
            nombre: "Abogado/a de la Empresa",
            empleados: 1,
            descripcion: "Representa legalmente y gestiona litigios.",
          },
        ],
      },
    ],
  },
  {
    id: "dirProduccion",
    nombre: "Dirección de Producción",
    empleados: 92,
    descripcion:
      "Coordina toda la producción: recolección, prensado, preparación y fabricación.",
    hijos: [
      {
        id: "jefePlanta",
        nombre: "Jefe/a de Planta",
        empleados: 1,
        descripcion: "Coordina operativa de planta, calidad y mantenimiento.",
        hijos: [
          {
            id: "supervisorRecoleccion",
            nombre: "Supervisor/a de Recolección y Clasificación",
            empleados: 1,
            descripcion: "Organiza rutas y supervisa clasificación de residuos.",
            hijos: [
              {
                id: "personalRecoleccion",
                nombre: "Personal de recolección",
                empleados: 20,
                descripcion: "Recolectan plástico en origen.",
              },
              {
                id: "clasificadoresPlastico",
                nombre: "Clasificadores/as de plástico",
                empleados: 16,
                descripcion: "Separan residuos por tipo y calidad.",
              },
            ],
          },
          {
            id: "supervisorPrensado",
            nombre: "Supervisor/a de Prensado",
            empleados: 1,
            descripcion: "Dirige equipo que prensa material no reutilizable.",
            hijos: [
              {
                id: "operariosPrensado",
                nombre: "Operarios de prensado",
                empleados: 10,
                descripcion: "Operan prensas hidráulicas.",
              },
            ],
          },
          {
            id: "supervisorPreparacion",
            nombre: "Supervisor/a de Preparación de Material",
            empleados: 1,
            descripcion: "Supervisa limpieza y triturado del plástico reutilizable.",
            hijos: [
              {
                id: "operariosTriturado",
                nombre: "Operarios de triturado/picado",
                empleados: 10,
                descripcion: "Preparan material para producción.",
              },
            ],
          },
          {
            id: "supervisorProduccion",
            nombre: "Supervisor/a de Producción",
            empleados: 1,
            descripcion: "Dirige línea de producción de productos reciclados.",
            hijos: [
              {
                id: "operariosMaquinas",
                nombre: "Operarios de máquinas de producción",
                empleados: 25,
                descripcion: "Manejan máquinas de moldeo y extrusión.",
              },
              {
                id: "controlCalidad",
                nombre: "Control de calidad",
                empleados: 4,
                descripcion: "Verifican que productos cumplan estándares.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "logistica",
    nombre: "Logística y Almacenamiento",
    empleados: 12,
    descripcion: "Gestiona almacenamiento, transporte y distribución.",
    hijos: [
      {
        id: "jefeLogistica",
        nombre: "Jefe/a de Logística",
        empleados: 1,
        descripcion: "Coordina ingreso, egreso y stock.",
        hijos: [
          {
            id: "encargadoDeposito",
            nombre: "Encargado/a de Depósito",
            empleados: 1,
            descripcion: "Gestiona almacenamiento de materias primas y productos.",
          },
          {
            id: "choferes",
            nombre: "Choferes",
            empleados: 5,
            descripcion: "Transportan materiales y productos.",
          },
          {
            id: "cargaDescarga",
            nombre: "Personal de carga/descarga",
            empleados: 6,
            descripcion: "Cargan y descargan mercadería.",
          },
        ],
      },
    ],
  },
  {
    id: "seguridad",
    nombre: "Seguridad e Higiene",
    empleados: 4,
    descripcion: "Controla seguridad laboral y normas ambientales.",
    hijos: [
      {
        id: "jefeSeguridad",
        nombre: "Jefe/a de Seguridad e Higiene",
        empleados: 1,
        descripcion: "Diseña políticas de prevención y controla cumplimiento.",
        hijos: [
          {
            id: "inspectoresSeguridad",
            nombre: "Inspectores de Seguridad",
            empleados: 2,
            descripcion: "Realizan auditorías y capacitaciones.",
          },
          {
            id: "responsableMedioAmbiente",
            nombre: "Responsable de Medio Ambiente",
            empleados: 1,
            descripcion: "Supervisa normativas ambientales.",
          },
        ],
      },
    ],
  },
  {
    id: "tecnologia",
    nombre: "Tecnología y Sistemas",
    empleados: 4,
    descripcion: "Administra infraestructura tecnológica y soporte.",
    hijos: [
      {
        id: "responsableIT",
        nombre: "Responsable de IT",
        empleados: 1,
        descripcion: "Administra infraestructura tecnológica y comunicaciones.",
        hijos: [
          {
            id: "soporteTecnico",
            nombre: "Soporte técnico",
            empleados: 2,
            descripcion: "Atiende incidentes técnicos y soporte a usuarios.",
          },
          {
            id: "encargadoSistemasDatos",
            nombre: "Encargado/a de sistemas y datos",
            empleados: 1,
            descripcion: "Administra bases de datos y aplicaciones internas.",
          },
        ],
      },
    ],
  },
  {
    id: "relaciones",
    nombre: "Relaciones Institucionales y Comunicación",
    empleados: 3,
    descripcion: "Gestiona comunicación y vínculos externos.",
    hijos: [
      {
        id: "responsableComunicacion",
        nombre: "Responsable de Comunicación",
        empleados: 1,
        descripcion: "Planifica comunicación interna y externa.",
        hijos: [
          {
            id: "prensaRRII",
            nombre: "Encargado/a de Prensa y RRII",
            empleados: 1,
            descripcion: "Gestiona relaciones con medios y organismos.",
          },
          {
            id: "disenadorGrafico",
            nombre: "Diseñador/a gráfico",
            empleados: 1,
            descripcion: "Crea piezas visuales y campañas.",
          },
        ],
      },
    ],
  },
];

function AreaCard({ area, hoveredId, setHoveredId }) {
  return (
    <div
      className="relative inline-block mb-4 p-4 rounded-lg border border-gray-300 bg-gray-200 text-gray-800 shadow cursor-pointer max-w-md"
      onMouseEnter={() => setHoveredId(area.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="font-semibold text-lg">
        {area.nombre} ({area.empleados} {area.empleados > 1 ? "empleados" : "empleado"})
      </div>
      {hoveredId === area.id && (
        <div className="absolute z-10 left-full top-1/2 transform -translate-y-1/2 ml-3 w-72 p-3 bg-gray-800 text-white rounded-md shadow-lg text-sm max-w-xs">
          {area.descripcion}
        </div>
      )}
    </div>
  );
}

function RecursiveArea({ area, hoveredId, setHoveredId, nivel = 0 }) {
  return (
    <div className={`ml-${nivel * 8} mt-4 border-l ${nivel > 0 ? "border-gray-300 pl-4" : ""}`}>
      <AreaCard area={area} hoveredId={hoveredId} setHoveredId={setHoveredId} />
      {area.hijos && area.hijos.length > 0 && (
        <div className="ml-6 mt-2">
          {area.hijos.map((hijo) => (
            <RecursiveArea
              key={hijo.id}
              area={hijo}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              nivel={nivel + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Organigrama() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-10">
      {organigrama.map((area) => (
        <RecursiveArea
          key={area.id}
          area={area}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
  );
}

