'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          🚗 Greislyn Auto
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="#catalogo" className="hover:text-blue-400 transition">
            Catálogo
          </Link>
          <Link href="#contacto" className="hover:text-blue-400 transition">
            Contacto
          </Link>
          <Link href="/admin/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
            Admin
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-2">
          <Link href="#catalogo" className="block hover:text-blue-400">
            Catálogo
          </Link>
          <Link href="#contacto" className="block hover:text-blue-400">
            Contacto
          </Link>
          <Link href="/admin/login" className="block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Admin
          </Link>
        </div>
      )}
    </nav>
  )
}
