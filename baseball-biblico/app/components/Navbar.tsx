'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<string>('es');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'es') {
        setLang(stored);
        document.documentElement.lang = stored;
      } else {
        // keep default 'es' but set document language
        document.documentElement.lang = 'es';
      }
    } catch (e) {
      /* ignore (SSR or privacy) */
    }
  }, []);

  function changeLang(next: string) {
    setLang(next);
    try {
      localStorage.setItem('lang', next);
    } catch (e) {
      /* ignore */
    }
    try {
      document.documentElement.lang = next;
    } catch (e) {
      /* ignore */
    }
  }

  return (
    <nav className="bg-red-700 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="text-white text-4xl font-bold">
            ⚾ Baseball Bíblico
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <Link
                href="/preguntas"
                className={`px-8 py-4 rounded-lg text-xl font-semibold transition-colors ${
                  pathname === '/preguntas'
                    ? 'bg-white text-red-700'
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
              >
                Preguntas
              </Link>
              <Link
                href="/presentacion"
                className={`px-8 py-4 rounded-lg text-xl font-semibold transition-colors ${
                  pathname === '/presentacion'
                    ? 'bg-white text-red-700'
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
              >
                Presentación
              </Link>
              <Link
                href="/soundboard"
                className={`px-8 py-4 rounded-lg text-xl font-semibold transition-colors ${
                  pathname === '/soundboard'
                    ? 'bg-white text-red-700'
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
              >
                Soundboard
              </Link>
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
                  lang === 'en'
                    ? 'bg-white text-red-700'
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => changeLang('es')}
                aria-pressed={lang === 'es'}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
                  lang === 'es'
                    ? 'bg-white text-red-700'
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
                title="Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
