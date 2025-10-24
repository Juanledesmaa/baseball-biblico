'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

// Placeholder sound buttons - will be replaced with actual mp3 files
const soundButtons = [
  { id: 1, label: 'Sound 1', file: '' },
  { id: 2, label: 'Sound 2', file: '' },
  { id: 3, label: 'Sound 3', file: '' },
  { id: 4, label: 'Sound 4', file: '' },
  { id: 5, label: 'Sound 5', file: '' },
  { id: 6, label: 'Sound 6', file: '' },
  { id: 7, label: 'Sound 7', file: '' },
  { id: 8, label: 'Sound 8', file: '' },
  { id: 9, label: 'Sound 9', file: '' },
  { id: 10, label: 'Sound 10', file: '' },
  { id: 11, label: 'Sound 11', file: '' },
  { id: 12, label: 'Sound 12', file: '' },
];

export default function Soundboard() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const playSound = (id: number, file: string) => {
    if (!file) {
      alert('Sound file not configured yet');
      return;
    }

    // Stop currently playing sound
    if (currentlyPlaying !== null) {
      setCurrentlyPlaying(null);
    }

    // Play new sound
    const audio = new Audio(file);
    audio.play();
    setCurrentlyPlaying(id);

    audio.onended = () => {
      setCurrentlyPlaying(null);
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-red-700 mb-6 text-center flex items-center justify-center gap-3">
            <span>🔊</span>
            <span>Soundboard</span>
            <span>⚾</span>
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Haz clic en los botones para reproducir los sonidos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {soundButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => playSound(button.id, button.file)}
                className={`
                  relative p-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg
                  ${
                    currentlyPlaying === button.id
                      ? 'bg-green-600 text-white scale-95 shadow-xl'
                      : 'bg-gradient-to-br from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:scale-105'
                  }
                  active:scale-95
                  border-4 border-red-900
                `}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">
                    {currentlyPlaying === button.id ? '🔊' : '🎵'}
                  </span>
                  <span>{button.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
            <p className="text-yellow-900 text-sm">
              <strong>Nota:</strong> Los archivos de sonido MP3 se configurarán próximamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
