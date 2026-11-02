'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // No proteger la página de login
    if (pathname === '/admin-panel-xyz123/login') {
      setLoading(false)
      return
    }

    const auth = localStorage.getItem('adminAuthenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    } else {
      router.push('/admin-panel-xyz123/login')
    }
    setLoading(false)
  }, [router, pathname])

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    router.push('/admin-panel-xyz123/login')
  }

  if (loading) return <div>Cargando...</div>

  // Mostrar login sin protección
  if (pathname === '/admin-panel-xyz123/login') {
    return children
  }

  if (!isAuthenticated) return null

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-8">🚗 Admin</h1>

        <nav className="space-y-4">
          <Link href="/admin-panel-xyz123/dashboard" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
            📊 Dashboard
          </Link>
          <Link href="/admin-panel-xyz123/autos" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
            🚙 Gestionar Autos
          </Link>
          <Link href="/admin-panel-xyz123/config" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
            ⚙️ Configuración
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-300 px-6 py-4">
          <h2 className="text-gray-800 text-lg">Greislyn Auto Import - Panel de Control</h2>
        </div>
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
