import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-red-800 to-blue-900">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              ⚾ Baseball Bíblico
            </h1>
            <p className="text-2xl text-white/90 mb-8">
              Herramienta para Jueces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <Link
              href="/preguntas"
              className="group bg-white hover:bg-red-50 rounded-2xl shadow-2xl p-12 transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  📋
                </div>
                <h2 className="text-3xl font-bold text-red-700 mb-2">
                  Preguntas
                </h2>
                <p className="text-gray-600">
                  Reglas y preguntas del juego
                </p>
              </div>
            </Link>

            <Link
              href="/soundboard"
              className="group bg-white hover:bg-blue-50 rounded-2xl shadow-2xl p-12 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  🔊
                </div>
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                  Soundboard
                </h2>
                <p className="text-gray-600">
                  Efectos de sonido del juego
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
              <p className="text-white text-lg">
                Selecciona una opción para comenzar
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
