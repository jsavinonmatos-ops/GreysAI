'use client'

import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import AutoCard from '@/components/AutoCard'
import AutoFilter from '@/components/AutoFilter'
import FormContacto from '@/components/FormContacto'
import autos from '@/data/autos.json'
import config from '@/data/config.json'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-screen">
      <NavBar />

      <HeroSection />

      {/* Filtro */}
      <AutoFilterWrapper autos={autos} />

      {/* Catálogo */}
      <section id="catalogo" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AutoCatalog autos={autos} />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-navy-800 border-t border-navy-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Ventajas de Greislyn Auto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-navy-900 border border-navy-700 rounded-xl hover:border-accent-red transition-all duration-300 hover:shadow-lg hover:shadow-accent-red/10">
              <div className="text-4xl mb-4 text-accent-red group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Entrega Rápida
              </h3>
              <p className="text-gray-400">
                Los mejores vehículos importados listos para ti
              </p>
            </div>

            <div className="group p-8 bg-navy-900 border border-navy-700 rounded-xl hover:border-accent-red transition-all duration-300 hover:shadow-lg hover:shadow-accent-red/10">
              <div className="text-4xl mb-4 text-accent-red group-hover:scale-110 transition-transform duration-300">
                💼
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Profesionalismo
              </h3>
              <p className="text-gray-400">
                Atención personalizada y asesoría experta
              </p>
            </div>

            <div className="group p-8 bg-navy-900 border border-navy-700 rounded-xl hover:border-accent-red transition-all duration-300 hover:shadow-lg hover:shadow-accent-red/10">
              <div className="text-4xl mb-4 text-accent-red group-hover:scale-110 transition-transform duration-300">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Garantizado
              </h3>
              <p className="text-gray-400">
                Todos nuestros vehículos con garantía de calidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Contacto */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FormContacto config={config} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-navy-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-bold text-accent-red">
            Contáctanos
          </h3>
          <div className="flex justify-center gap-8 flex-wrap text-sm">
            <a href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-red transition duration-300">
              WhatsApp: {config.whatsapp}
            </a>
            <a href={`mailto:${config.email}`} className="text-gray-300 hover:text-accent-red transition duration-300">
              Email: {config.email}
            </a>
            <div className="text-gray-300">
              Tel: {config.telefono}
            </div>
          </div>
          <p className="text-gray-500 mt-6 pt-6 border-t border-navy-700">
            © 2026 {config.nombreDealer}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

function AutoFilterWrapper({ autos }: { autos: typeof import('@/data/autos.json') }) {
  const [filtered, setFiltered] = useState(autos)

  return (
    <>
      <AutoFilter autos={autos} onFilter={setFiltered} />

      <section id="catalogo" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(auto => (
                <div key={auto.id} className="animate-slideUp">
                  <AutoCard auto={auto} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">
                No hay vehículos que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function AutoCatalog({ autos }: { autos: typeof import('@/data/autos.json') }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Nuestro Catálogo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {autos.map((auto, index) => (
          <div key={auto.id} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <AutoCard auto={auto} />
          </div>
        ))}
      </div>
    </div>
  )
}
