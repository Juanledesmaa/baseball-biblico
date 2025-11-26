'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';

// Sound files from public/sounds directory
const soundButtons = [
  // { id: 1, label: 'Baseball Classic Charge', file: '/sounds/baseball classic charge.mp3' },
  // { id: 2, label: 'Baseball Out', file: '/sounds/baseball-out.mp3' },
  // { id: 3, label: 'Bye Bye Bye', file: '/sounds/bye bye bye.mp3' },
  // { id: 4, label: 'Charge Baseball', file: '/sounds/charge baseball.mp3' },
  // { id: 5, label: 'Charge Baseball Organ', file: '/sounds/charge-baseball-organ.mp3' },
  { id: 1, label: 'Coqui', file: '/sounds/coqui.mp3' },
  { id: 2, label: 'Pajaros cantando', file: '/sounds/bird-chirping-sound-effect.mp3' },
  { id:3, label: 'Cuatro puertoriqueno', file: '/sounds/Cuatro puerto.m4a' },
  // { id: 7, label: 'The Final Countdown Chorus', file: '/sounds/europe_-_the_final_countdown_chorus-1.mp3' },
  // { id: 8, label: 'Pac Man Startup', file: '/sounds/pac-man-startup.mp3' },
  // { id: 9, label: 'Seven Nation Army', file: '/sounds/seven-nation-army-goaltune.mp3' },
  // { id: 10, label: 'Eye of the Tiger', file: '/sounds/survivor-eye-of-the-tiger-ringtone-youtube.mp3' },
  // { id: 11, label: 'The Final Countdown', file: '/sounds/the-final-countdown.mp3' },
  // { id: 12, label: 'We Will Rock You', file: '/sounds/we-will-rock-you.mp3' },
  // { id: 13, label: 'Winner Bell', file: '/sounds/winner-bell-game-show-sound-effect.mp3' },
  // { id: 14, label: 'Yo Te Extrañaré', file: '/sounds/yo_te_extranare.mp3' },
  // { id: 15, label: 'Among Us Sus', file: '/sounds/among-us-sus.mp3' },
  // { id: 16, label: 'Boxing Bell', file: '/sounds/boxing-bell.mp3' },
  // { id: 17, label: "Can't Hold Us", file: '/sounds/cant-hold-us.mp3' },
  // { id: 18, label: 'Spiderman Meme Song', file: '/sounds/spiderman-meme-song.mp3' },
  // { id: 19, label: 'Victory Sound', file: '/sounds/victory_sound.mp3' },
];

export default function Soundboard() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (id: number, file: string) => {
    // Stop currently playing sound if there is one
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create and play new sound
    const audio = new Audio(file);
    audioRef.current = audio;
    setCurrentlyPlaying(id);

    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
      setCurrentlyPlaying(null);
    });

    audio.onended = () => {
      setCurrentlyPlaying(null);
      audioRef.current = null;
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
                  relative p-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg
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
                  <span className="text-center leading-tight">{button.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-blue-900 text-sm">
              <strong>Tip:</strong> Presionar un botón mientras otro sonido está reproduciéndose detendrá el sonido actual automáticamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
