'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppBtn() {
  const numeroTelefono = '5493814636143';
  const mensaje = encodeURIComponent('¡Hola, Ecoplast! Me gustaria hacer una consulta.');

  const whatsappURL = `https://wa.me/${numeroTelefono}?text=${mensaje}`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      aria-label="Chat de WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}