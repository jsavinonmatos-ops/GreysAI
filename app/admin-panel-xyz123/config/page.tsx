'use client'

import { useEffect, useState } from 'react'
import { Config } from '@/types'
import config from '@/data/config.json'

export default function ConfigPage() {
  const [configData, setConfigData] = useState<Config>(config)
  const [saved, setSaved] = useState(false)

  const handleChange = (field: keyof Config, value: string) => {
    setConfigData({
      ...configData,
      [field]: value,
    })
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem('config_backup', JSON.stringify(configData))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">⚙️ Configuración</h1>

      <div className="bg-white p-8 rounded-lg shadow max-w-2xl">
        <div className="space-y-6">
          {/* Nombre del Dealer */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre del Dealer
            </label>
            <input
              type="text"
              value={configData.nombreDealer}
              onChange={(e) => handleChange('nombreDealer', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Título Principal */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Título Principal
            </label>
            <input
              type="text"
              value={configData.titulo}
              onChange={(e) => handleChange('titulo', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subtítulo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subtítulo
            </label>
            <textarea
              value={configData.subtitulo}
              onChange={(e) => handleChange('subtitulo', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              WhatsApp
            </label>
            <input
              type="text"
              value={configData.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              placeholder="+1 (829) 555-1234"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={configData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="text"
              value={configData.telefono}
              onChange={(e) => handleChange('telefono', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botón Guardar */}
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            💾 Guardar Configuración
          </button>

          {saved && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              ✅ Configuración guardada correctamente
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>⚠️ Importante:</strong> Los cambios se guardan en localStorage de tu navegador. Para guardar permanentemente, debes usar un servidor backend.
        </p>
      </div>
    </div>
  )
}
