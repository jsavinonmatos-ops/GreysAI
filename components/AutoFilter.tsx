'use client'

import { useState, useMemo } from 'react'
import { Auto } from '@/types'

interface AutoFilterProps {
  autos: Auto[]
  onFilter: (filtered: Auto[]) => void
}

export default function AutoFilter({ autos, onFilter }: AutoFilterProps) {
  const [searchModel, setSearchModel] = useState('')
  const [selectedYear, setSelectedYear] = useState<string>('')

  const years = useMemo(() => {
    const yearSet = new Set(autos.map(a => a.anio))
    return Array.from(yearSet).sort((a, b) => b - a)
  }, [autos])

  const filteredAutos = useMemo(() => {
    return autos.filter(auto => {
      const matchesModel = `${auto.marca} ${auto.modelo}`
        .toLowerCase()
        .includes(searchModel.toLowerCase())

      const matchesYear = !selectedYear || auto.anio.toString() === selectedYear

      return matchesModel && matchesYear
    })
  }, [autos, searchModel, selectedYear])

  useMemo(() => {
    onFilter(filteredAutos)
  }, [filteredAutos, onFilter])

  return (
    <div className="bg-navy-800 border-b border-navy-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Búsqueda por Modelo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Buscar Modelo
            </label>
            <input
              type="text"
              placeholder="Ej: Toyota Corolla"
              value={searchModel}
              onChange={(e) => setSearchModel(e.target.value)}
              className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent transition duration-300"
            />
          </div>

          {/* Filtro por Año */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Año
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent transition duration-300 appearance-none cursor-pointer"
            >
              <option value="">Todos los años</option>
              {years.map(year => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultados */}
        <div className="mt-4 text-sm text-gray-400">
          Mostrando <span className="text-accent-red font-semibold">{filteredAutos.length}</span> de <span className="text-accent-red font-semibold">{autos.length}</span> vehículos
        </div>
      </div>
    </div>
  )
}
