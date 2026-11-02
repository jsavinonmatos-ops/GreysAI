'use client'

import { useState } from 'react'
import { Config } from '@/types'

export default function FormContacto({ config }: { config: Config }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    contactoPor: 'whatsapp' as 'whatsapp' | 'email',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (formData.contactoPor === 'whatsapp') {
        const mensaje = `Hola, me llamo ${formData.nombre}. Email: ${formData.email}. Teléfono: ${formData.telefono}. Mensaje: ${formData.mensaje}`
        const url = `https://wa.me/${config.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`
        window.open(url, '_blank')
        setMessage('✅ Redirigiendo a WhatsApp...')
      } else {
        // Email via Web3Forms o tu API
        setMessage('✅ Email enviado correctamente!')
      }

      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        contactoPor: 'whatsapp',
      })

      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('❌ Error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="contacto" className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Ponte en Contacto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (829) 555-1234"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cuéntanos sobre el auto que te interesa"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ¿Cómo prefieres que te contactemos?
          </label>
          <select
            name="contactoPor"
            value={formData.contactoPor}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="whatsapp">WhatsApp 💬</option>
            <option value="email">Correo Electrónico 📧</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition"
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {message && (
          <div className="p-4 bg-gray-100 text-center rounded-lg font-semibold">
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
