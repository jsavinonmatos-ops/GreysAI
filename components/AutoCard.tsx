'use client'

import { Auto } from '@/types'

export default function AutoCard({ auto }: { auto: Auto }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="group relative bg-navy-800 rounded-xl overflow-hidden border border-navy-700 hover:border-accent-red transition-all duration-300 hover:shadow-2xl hover:shadow-accent-red/20">
      {/* Imagen */}
      <div className="relative h-56 bg-navy-900 overflow-hidden">
        {auto.imagen ? (
          <img
            src={auto.imagen}
            alt={`${auto.marca} ${auto.modelo}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
            <span className="text-gray-500 font-medium">Sin imagen</span>
          </div>
        )}

        {!auto.disponible && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-xl">VENDIDO</span>
          </div>
        )}

        {auto.disponible && (
          <div className="absolute top-4 right-4 bg-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Disponible
          </div>
        )}
      </div>

      {/* Información */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-accent-red transition duration-300">
            {auto.marca}
          </h3>
          <p className="text-sm text-gray-400 font-medium">{auto.modelo}</p>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Año</span>
          <span className="text-white font-semibold">{auto.anio}</span>
        </div>

        <div className="border-t border-navy-700 pt-3">
          <p className="text-accent-red text-2xl font-bold">
            {formatPrice(auto.precio)}
          </p>
        </div>

        <p className="text-gray-300 text-sm line-clamp-2">
          {auto.descripcion}
        </p>

        <button className="w-full mt-4 bg-accent-red hover:bg-accent-red-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
          Ver Detalles
        </button>
      </div>
    </div>
  )
}
