'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Aquí iría validación real de contraseña
    // Por ahora, usamos una contraseña simple para testing
    const ADMIN_PASSWORD = 'greislyn2026'

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuthenticated', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Contraseña incorrecta')
    }

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
          Para testing: contraseña = greislyn2026
        </p>
      </div>
    </div>
  )
}
