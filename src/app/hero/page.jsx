'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      {/* Fondo */}
      
        <Image
          src="/assets/heroEco.jpg"
          alt="Fondo reciclaje"
          fill
          className="object-cover"
        />


      {/* Contenido */}
      <div className="absolute right-0 top-0 bg-opacity-70 w-full md:w-1/2 z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 animate-fade-in mb-10">
          Ecoplast S.A.M.
        </h1>
        <p className="text-lg md:text-xl text-gray-100 animate-fade-in delay-200 mb-5">
          Reciclamos plásticos, regeneramos futuro.
        </p>
        <p className="text-lg md:text-xl text-gray-100 animate-fade-in delay-200 mb-10">
          Empresa mixta al servicio del ambiente y la economía circular.
        </p>

        {/* Botones de navegación */}
       {/*  <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
          <Link href="#nosotros" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition transform hover:scale-105 font-medium">
            Nosotros
          </Link>
          <Link href="#organizacion" className="bg-white text-gray-900 px-6 py-3 rounded-xl transition hover:bg-gray-200 font-medium">
            Organización
          </Link>
          <Link href="#productos" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition transform hover:scale-105 font-medium">
            Productos
          </Link>
          <Link href="#contacto" className="bg-white text-gray-900 px-6 py-3 rounded-xl transition hover:bg-gray-200 font-medium">
            Contacto
          </Link>
        </div> */}

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 text-center animate-fade-in delay-500">
          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg hover:scale-105 transition">
            <p className="text-2xl font-bold text-green-400">+500 Tn</p>
            <p className="text-sm text-gray-400">Plástico reciclado</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg hover:scale-105 transition">
            <p className="text-2xl font-bold text-green-400">+30</p>
            <p className="text-sm text-gray-400">Empleos verdes</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg hover:scale-105 transition">
            <p className="text-2xl font-bold text-green-400">100%</p>
            <p className="text-sm text-gray-400">Energía renovable</p>
          </div>
          {/* <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg hover:scale-105 transition">
            <p className="text-2xl font-bold text-green-400">4</p>
            <p className="text-sm text-gray-400">Sucursales</p>
          </div> */}
        </div>
      </div>
    </main>
  );
}