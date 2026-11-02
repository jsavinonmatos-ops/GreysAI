import NavBar from '@/components/NavBar'
import AutoCard from '@/components/AutoCard'
import FormContacto from '@/components/FormContacto'
import autos from '@/data/autos.json'
import config from '@/data/config.json'

export default function Home() {
  const autosDisponibles = autos.filter(auto => auto.disponible)

  return (
    <main>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            {config.titulo}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {config.subtitulo}
          </p>
          <a
            href="#catalogo"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg inline-block transition"
          >
            Ver Catálogo
          </a>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Nuestro Catálogo
        </h2>

        {autosDisponibles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autosDisponibles.map(auto => (
              <AutoCard key={auto.id} auto={auto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              No hay vehículos disponibles en este momento.
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            ¿Por Qué Elegir {config.nombreDealer}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Vehículos Importados
              </h3>
              <p className="text-gray-600">
                Selección cuidadosa de autos de calidad
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Precios Competitivos
              </h3>
              <p className="text-gray-600">
                Las mejores condiciones de pago
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Equipo profesional a tu servicio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Contacto */}
      <section className="py-16 px-4">
        <FormContacto config={config} />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
          <div className="flex justify-center gap-8 mb-4 text-sm flex-wrap">
            <a href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              WhatsApp: {config.whatsapp}
            </a>
            <a href={`mailto:${config.email}`} className="hover:text-blue-400">
              Email: {config.email}
            </a>
            <div className="hover:text-blue-400">
              Teléfono: {config.telefono}
            </div>
          </div>
          <p className="text-gray-400 mt-4">
            © 2026 {config.nombreDealer}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
