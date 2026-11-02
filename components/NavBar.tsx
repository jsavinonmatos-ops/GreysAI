'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-navy-900 text-white shadow-lg sticky top-0 z-50 border-b border-navy-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-accent-red hover:text-accent-red-light transition duration-300">
          Greislyn Auto
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="#catalogo" className="font-medium text-gray-200 hover:text-accent-red transition duration-300">
            Catálogo
          </Link>
          <Link href="#contacto" className="font-medium text-gray-200 hover:text-accent-red transition duration-300">
            Contacto
          </Link>
        </div>

        <button
          className="md:hidden text-2xl text-gray-200 hover:text-accent-red transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-800 px-4 py-4 space-y-3 border-t border-navy-700 animate-slideUp">
          <Link href="#catalogo" className="block font-medium text-gray-200 hover:text-accent-red transition duration-300">
            Catálogo
          </Link>
          <Link href="#contacto" className="block font-medium text-gray-200 hover:text-accent-red transition duration-300">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  )
}
