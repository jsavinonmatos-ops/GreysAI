'use client'

import { useEffect, useState } from 'react'
import { Auto } from '@/types'
import autos from '@/data/autos.json'
import fs from 'fs'

export default function AutosPage() {
  const [autos_list, setAutosList] = useState<Auto[]>(autos)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newAuto, setNewAuto] = useState<Partial<Auto>>({
    marca: '',
    modelo: '',
    anio: new Date().getFullYear(),
    precio: 0,
    descripcion: '',
    imagen: '',
    disponible: true,
  })

  const handleAddAuto = async () => {
    if (!newAuto.marca || !newAuto.modelo) {
      alert('Por favor completa marca y modelo')
      return
    }

    const autoToAdd: Auto = {
      id: Date.now().toString(),
      marca: newAuto.marca || '',
      modelo: newAuto.modelo || '',
      anio: newAuto.anio || new Date().getFullYear(),
      precio: newAuto.precio || 0,
      descripcion: newAuto.descripcion || '',
      imagen: newAuto.imagen || '',
      disponible: newAuto.disponible ?? true,
      createdAt: new Date().toISOString().split('T')[0],
    }

    const updated = [...autos_list, autoToAdd]
    setAutosList(updated)
    setNewAuto({
      marca: '',
      modelo: '',
      anio: new Date().getFullYear(),
      precio: 0,
      descripcion: '',
      imagen: '',
      disponible: true,
    })

    // Guardar en localStorage como respaldo
    localStorage.setItem('autos_backup', JSON.stringify(updated))
    alert('✅ Auto agregado correctamente')
  }

  const handleDeleteAuto = (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este auto?')) {
      const updated = autos_list.filter(a => a.id !== id)
      setAutosList(updated)
      localStorage.setItem('autos_backup', JSON.stringify(updated))
      alert('✅ Auto eliminado')
    }
  }

  const handleToggleDisponible = (id: string) => {
    const updated = autos_list.map(a =>
      a.id === id ? { ...a, disponible: !a.disponible } : a
    )
    setAutosList(updated)
    localStorage.setItem('autos_backup', JSON.stringify(updated))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Gestionar Autos</h1>

      {/* Formulario Agregar */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">➕ Agregar Nuevo Auto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Marca"
            value={newAuto.marca || ''}
            onChange={(e) => setNewAuto({ ...newAuto, marca: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Modelo"
            value={newAuto.modelo || ''}
            onChange={(e) => setNewAuto({ ...newAuto, modelo: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Año"
            value={newAuto.anio || ''}
            onChange={(e) => setNewAuto({ ...newAuto, anio: parseInt(e.target.value) })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Precio"
            value={newAuto.precio || ''}
            onChange={(e) => setNewAuto({ ...newAuto, precio: parseInt(e.target.value) })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Descripción"
            value={newAuto.descripcion || ''}
            onChange={(e) => setNewAuto({ ...newAuto, descripcion: e.target.value })}
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />

          <input
            type="text"
            placeholder="URL de Imagen"
            value={newAuto.imagen || ''}
            onChange={(e) => setNewAuto({ ...newAuto, imagen: e.target.value })}
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAddAuto}
            className="md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Guardar Auto
          </button>
        </div>
      </div>

      {/* Lista de Autos */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Marca</th>
              <th className="px-6 py-3 text-left">Modelo</th>
              <th className="px-6 py-3 text-left">Año</th>
              <th className="px-6 py-3 text-left">Precio</th>
              <th className="px-6 py-3 text-left">Estado</th>
              <th className="px-6 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {autos_list.map((auto) => (
              <tr key={auto.id} className="border-t border-gray-300 hover:bg-gray-50">
                <td className="px-6 py-4">{auto.marca}</td>
                <td className="px-6 py-4">{auto.modelo}</td>
                <td className="px-6 py-4">{auto.anio}</td>
                <td className="px-6 py-4">${auto.precio.toLocaleString('es-DO')}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${
                    auto.disponible ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {auto.disponible ? '✅ Disponible' : '❌ Vendido'}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2 flex">
                  <button
                    onClick={() => handleToggleDisponible(auto.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition"
                  >
                    {auto.disponible ? '🔒 Marcar Vendido' : '🔓 Marcar Disponible'}
                  </button>
                  <button
                    onClick={() => handleDeleteAuto(auto.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-blue-100 border border-blue-400 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>ℹ️ Nota:</strong> Los cambios se guardan localmente. Para persistencia permanente, exporta los datos y usa un servidor backend.
        </p>
      </div>
    </div>
  )
}
