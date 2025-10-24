'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-red-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl font-bold">
            ⚾ Baseball Bíblico
          </Link>
          <div className="flex gap-4">
            <Link
              href="/preguntas"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                pathname === '/preguntas'
                  ? 'bg-white text-red-700'
                  : 'bg-red-800 text-white hover:bg-red-900'
              }`}
            >
              Preguntas
            </Link>
            <Link
              href="/presentacion"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                pathname === '/presentacion'
                  ? 'bg-white text-red-700'
                  : 'bg-red-800 text-white hover:bg-red-900'
              }`}
            >
              Presentación
            </Link>
            <Link
              href="/soundboard"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                pathname === '/soundboard'
                  ? 'bg-white text-red-700'
                  : 'bg-red-800 text-white hover:bg-red-900'
              }`}
            >
              Soundboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
