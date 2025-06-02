"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Organización", href: "/organizacion" },
  { name: "Productos", href: "/productos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isHome = pathname === '/hero'

  return (
    <nav className={`text-gray-300 ${ isHome ? 'dark:bg-gray-900' : 'dark:bg-gray-900'} sticky top-0 z-50`} >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex gap-2">
          <Image
            src="/assets/logoEcoPlast.png" 
            alt="Logo de Ecoplast" 
            width={40} 
            height={40}
          />
          <div className="text-gray-200 text-2xl font-bold">EcoPlast</div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static bg-gray-900 w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out
  ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  } md:max-h-none md:opacity-100 md:overflow-visible`}

          /* className={`md:flex md:items-center md:space-x-8 absolute md:static bg-gray-800 dark:bg-gray-900 w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`} */
        >
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`block px-4 py-2 md:p-0 hover:text-cyan-400 transition-colors ${
                  pathname === href ? "text-cyan-400 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
