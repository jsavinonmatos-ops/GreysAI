'use client'

import { Auto } from '@/types'
import Image from 'next/image'

export default function AutoCard({ auto }: { auto: Auto }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      {/* Imagen */}
      <div className="relative h-48 bg-gray-200">
        {auto.imagen ? (
          <img
            src={auto.imagen}
            alt={`${auto.marca} ${auto.modelo}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500">Sin imagen</span>
          </div>
        )}

        {!auto.disponible && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Vendido
          </div>
        )}
      </div>

      {/* Información */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">
          {auto.marca} {auto.modelo}
        </h3>
        <p className="text-sm text-gray-500">Año: {auto.anio}</p>

        <p className="text-blue-600 text-2xl font-bold my-2">
          {formatPrice(auto.precio)}
        </p>

        <p className="text-gray-600 text-sm mb-4">
          {auto.descripcion}
        </p>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
          Información
        </button>
      </div>
    </div>
  )
}
