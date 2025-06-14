'use client'

import React from 'react'

const members = [
  {
    name: 'Pablo Bejas',
    role: 'Desarrollador Fullstack',
    image: 'assets/images/equipo/pabloB.jpg',
    description: 'Apasionado por la programación y la innovación tecnológica.',
  },
  {
    name: 'Alejo Garlati',
    role: 'Diseñador UX/UI',
    image: 'assets/images/equipo/alejoG.png',
    description: 'Diseña con propósito y estética accesible.',
  },
  {
    name: 'Alejo Salas',
    role: 'Especialista en reciclado',
    image: 'assets/images/equipo/alejoS.jpg',
    description: 'Experto en procesos de reutilización de plásticos.',
  },
  {
    name: 'Patricio Vargas',
    role: 'Marketing y Comunicación',
    image: 'assets/images/equipo/patricioV.jpg',
    description: 'Conecta a Ecoplast con el mundo.',
  },
  {
    name: 'Facundo Palavecino',
    role: 'Coordinador Operativo',
    image: 'assets/images/equipo/facundoP.jpg',
    description: 'Optimiza cada paso del proceso productivo.',
  },
  {
    name: 'Tadeo Giobelina',
    role: 'Administración y Finanzas',
    image: 'assets/images/equipo/tadeoG.jpg',
    description: 'Cuida el corazón financiero de Ecoplast.',
  },
]

export default function Equipo() {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 text-green-500">Nuestro Equipo</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-neutral-700"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-emerald-400 mb-2">{member.role}</p>
            <p className="text-sm text-neutral-300">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}