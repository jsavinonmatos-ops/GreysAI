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
        setMessage('✓ Redirigiendo a WhatsApp...')
      } else {
        setMessage('✓ Mensaje enviado correctamente!')
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
      setMessage('Error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="contacto" className="bg-navy-800 rounded-xl shadow-2xl p-8 md:p-12 border border-navy-700 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
        Ponte en Contacto
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Nos encantaría escucharte. Cuéntanos qué auto buscas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent text-white placeholder-gray-500 transition duration-300"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent text-white placeholder-gray-500 transition duration-300"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent text-white placeholder-gray-500 transition duration-300"
            placeholder="+1 (829) 555-1234"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent text-white placeholder-gray-500 transition duration-300"
            placeholder="Cuéntanos qué auto buscas"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Método de Contacto Preferido
          </label>
          <select
            name="contactoPor"
            value={formData.contactoPor}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent text-white transition duration-300 appearance-none cursor-pointer"
          >
            <option value="whatsapp">WhatsApp - Respuesta Rápida</option>
            <option value="email">Email</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-red hover:bg-accent-red-light disabled:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-red/30 disabled:shadow-none"
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {message && (
          <div className={`p-4 rounded-lg text-center font-semibold transition duration-300 ${
            message.includes('Error')
              ? 'bg-red-500/20 border border-red-500 text-red-200'
              : 'bg-green-500/20 border border-green-500 text-green-200'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
