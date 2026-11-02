'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [clientIp, setClientIp] = useState('')
  const router = useRouter()

  // IPs permitidas (agregar la IP real del dueño después)
  const ALLOWED_IPS = ['127.0.0.1', 'localhost', '::1']

  // CONTRASEÑA FUERTE
  const ADMIN_PASSWORD = 'Greislyn@Auto2026!Seguro'

  useEffect(() => {
    // Detectar si está en localhost
    const isLocalhost = window.location.hostname === 'localhost' ||
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '::1'

    if (isLocalhost) {
      setClientIp('127.0.0.1')
    } else {
      // Obtener IP real del cliente para producción
      const getClientIp = async () => {
        try {
          const response = await fetch('https://api.ipify.org?format=json')
          const data = await response.json()
          setClientIp(data.ip)
        } catch (err) {
          setClientIp('unknown')
        }
      }
      getClientIp()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validar contraseña
    if (password !== ADMIN_PASSWORD) {
      setError('Contraseña incorrecta')
      setLoading(false)
      return
    }

    // En localhost permitir siempre
    const isLocalhost = window.location.hostname === 'localhost' ||
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '::1'

    if (isLocalhost) {
      // Permitir en localhost sin restricción de IP
      localStorage.setItem('adminAuthenticated', 'true')
      router.push('/admin-panel-xyz123/dashboard')
      setLoading(false)
      return
    }

    // En producción validar IP
    if (!ALLOWED_IPS.includes(clientIp)) {
      setError(`Acceso denegado. Tu IP (${clientIp}) no está autorizada. Solo ${ALLOWED_IPS.join(', ')} pueden acceder.`)
      setLoading(false)
      return
    }

    localStorage.setItem('adminAuthenticated', 'true')
    router.push('/admin-panel-xyz123/dashboard')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          🚗 Greislyn Auto
        </h1>
        <h2 className="text-gray-600 text-center mb-8">Panel de Administración</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña de Administrador
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa la contraseña"
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Sistema seguro con validación de IP
        </p>
      </div>
    </div>
  )
}
