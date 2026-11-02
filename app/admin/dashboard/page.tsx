'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import autos from '@/data/autos.json'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalAutos: 0,
    autosDisponibles: 0,
    autosVendidos: 0,
  })

  useEffect(() => {
    const disponibles = autos.filter(a => a.disponible).length
    const vendidos = autos.filter(a => !a.disponible).length

    setStats({
      totalAutos: autos.length,
      autosDisponibles: disponibles,
      autosVendidos: vendidos,
    })
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-4xl mb-2">🚗</div>
          <h3 className="text-gray-600 text-sm uppercase tracking-wide mb-2">Total de Autos</h3>
          <p className="text-3xl font-bold text-gray-800">{stats.totalAutos}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-4xl mb-2">✅</div>
          <h3 className="text-gray-600 text-sm uppercase tracking-wide mb-2">Disponibles</h3>
          <p className="text-3xl font-bold text-green-600">{stats.autosDisponibles}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-4xl mb-2">❌</div>
          <h3 className="text-gray-600 text-sm uppercase tracking-wide mb-2">Vendidos</h3>
          <p className="text-3xl font-bold text-red-600">{stats.autosVendidos}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Acciones Rápidas</h2>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/admin/autos"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
          >
            ➕ Agregar Auto
          </Link>
          <Link
            href="/admin/autos"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
          >
            ✏️ Editar Autos
          </Link>
          <Link
            href="/admin/config"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition"
          >
            ⚙️ Configuración
          </Link>
        </div>
      </div>
    </div>
  )
}
