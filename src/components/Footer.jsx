'use client'

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-amber-300">EcoPlast S.A.M.</h2>
          <p className="mt-2 text-sm text-gray-200">
            Empresa de reciclado de plásticos con participación estatal y privada. Promovemos la economía circular y el desarrollo sustentable.
          </p>
          <p className="text-sm text-gray-200 mt-5">
            © 2025 EcoPlast S.A.M. - Todos los derechos reservados.
          </p>
        </div>

        {/* Mapa del sitio */}
        <div>
          <h3 className="text-lg font-semibold text-amber-200 mb-2">Mapa del sitio</h3>
          <ul className="space-y-1 text-sm text-gray-200">
            
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
            <li><Link href="/organizacion" className="hover:underline">Organización</Link></li>
            <li><Link href="/productos" className="hover:underline">Productos</Link></li>
            <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-amber-200 mb-2">Contacto</h3>
          <p className="text-sm text-gray-200">
            <span className="block mt-5">📍 Coronel Zelaya Sur S/N</span>
            <span className="block">(4000) San Miguel de Tucumán</span>
            <span className="block mt-7">📞 +54 381 320-2795</span>
            <span className="block">📧 ecoplastsam@gmail.com</span>
          </p>
        </div>
      </div>

    </footer>
  )
}