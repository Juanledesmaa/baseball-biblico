"use client";

import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import * as qsES from './questions.es';
import * as qsEN from './questions.en';

type Q = {
  id: number;
  question: string;
  options?: string[];
  correct?: number;
};

export default function Preguntas() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'es') setLang(stored);
      else if (document.documentElement.lang === 'en') setLang('en');
    } catch (e) {
      // ignore
    }
  }, []);

  const round1: Q[] = lang === 'en' ? (qsEN.round1 as Q[]) : (qsES.round1 as Q[]);
  const round3: string[] = lang === 'en' ? (qsEN as any).round3Prompts ?? [] : (qsES as any).round3Prompts ?? [];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">⚾ Baseball Bíblico</h1>

          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">Reglas para el Jurado</h2>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-red-700 mb-3">🏁 Estructura del Juego</h3>
            <p className="mb-2">El juego se compone de <strong>tres rondas</strong>:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Ronda 1:</strong> Preguntas fáciles.</li>
              <li><strong>Ronda 2:</strong> Preguntas que los equipos prepararon para "tirar" o "pitchear" al equipo contrario.</li>
              <li><strong>Ronda 3:</strong> Preguntas difíciles de análisis.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-red-700 mb-3">⚖️ Reglas Generales del Jurado</h3>

            <div className="mb-6 bg-blue-50 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-900 mb-2">🥇 Ronda 1 — Preguntas Fáciles</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Las preguntas deben ser <strong>leídas sin opciones múltiples</strong>.</li>
                <li>Si el jugador responde correctamente <strong>sin escuchar las opciones</strong>, la respuesta vale <strong>3 bases</strong>.</li>
                <li>Si el jugador <strong>pide escuchar las opciones</strong>, la respuesta correcta vale <strong>2 bases</strong>.</li>
                <li>Si el jugador <strong>no logra responder</strong>, se le puede ofrecer un <strong>comodín 50/50</strong>, que elimina dos opciones (dejando una correcta y una incorrecta).
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Si responde correctamente después del comodín, la pregunta vale <strong>1 base</strong>.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mb-6 bg-red-50 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-red-700 mb-2">⚾ Ronda 2 — Preguntas entre Equipos</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Estas preguntas son <strong>preparadas por los mismos equipos</strong>, por lo tanto <strong>no tienen opción múltiple</strong>.</li>
                <li>Cada pregunta correcta vale <strong>2 bases</strong>.</li>
                <li>El jugador puede <strong>pedir una pista</strong> al jurado.
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>El jurado decide qué pista dar.</li>
                    <li>Si el jugador acierta después de recibir la pista, la pregunta vale <strong>1 base</strong>.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-yellow-800 mb-2">🏆 Ronda 3 — Preguntas de Análisis Difícil</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Estas preguntas <strong>no tienen opciones múltiples ni pistas</strong>.</li>
                <li>Si el jugador responde correctamente, <strong>anota un home run</strong> (recorre todas las bases).</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-red-700 mb-3">🧩 Resumen Rápido de Puntuación</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-700 text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Situación</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Valor en Bases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Responde sin opciones (Ronda 1)</td>
                    <td className="border border-gray-300 px-4 py-2">⚾ <strong>3 bases</strong></td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Responde con opciones (Ronda 1)</td>
                    <td className="border border-gray-300 px-4 py-2">⚾ <strong>2 bases</strong></td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Usa comodín 50/50 (Ronda 1)</td>
                    <td className="border border-gray-300 px-4 py-2">⚾ <strong>1 base</strong></td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Pregunta de otro equipo (sin pista)</td>
                    <td className="border border-gray-300 px-4 py-2">⚾ <strong>2 bases</strong></td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Pregunta de otro equipo (con pista)</td>
                    <td className="border border-gray-300 px-4 py-2">⚾ <strong>1 base</strong></td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Pregunta difícil bien respondida (Ronda 3)</td>
                    <td className="border border-gray-300 px-4 py-2">🏠 <strong>Home Run</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-blue-100 border-l-4 border-blue-700 p-4 mb-8">
            <p className="text-blue-900">
              <strong>💡 Nota para el jurado:</strong><br />
              Mantengan la imparcialidad, mantengan el ambiente divertido y asegúrense de que todos los jugadores comprendan las reglas antes de iniciar el juego.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">PREGUNTAS RONDA 1</h2>

            {round1.map((q) => (
              <div key={q.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">{q.id}) {q.question.replace(/\n/g, ' ')}</p>
                {q.options ? (
                  <ul className="ml-6 space-y-1">
                    {q.options.map((opt, i) => (
                      <li key={i} className={i === q.correct ? 'text-green-700 font-bold' : undefined}>
                        {String.fromCharCode(65 + i)}) {opt}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">PREGUNTAS RONDA 3</h2>
            <p className="mb-4 italic text-gray-700">(Las respuestas de estas preguntas deberán ser analizadas por el jurado para determinar si son correctas)</p>

            {round3.map((prompt, idx) => (
              <div key={idx} className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                <p className="font-semibold mb-2">{prompt}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}


            {/* Question 19 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">19) Según <strong>Mateo 5:4</strong>, ¿qué reciben los que lloran?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Justicia</li>
                <li className="text-green-700 font-bold">B) ✅ Consuelo</li>
                <li>C) Pan</li>
                <li>D) Riquezas</li>
              </ul>
            </div>

            {/* Question 20 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">20) Según <strong>Mateo 5:14</strong>, Jesús dice que sus seguidores son "la luz de…"</p>
              <ul className="ml-6 space-y-1">
                <li>A) Israel</li>
                <li className="text-green-700 font-bold">B) ✅ El mundo</li>
                <li>C) El templo</li>
                <li>D) Los cielos</li>
              </ul>
            </div>

            {/* Question 21 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">21) Según <strong>Mateo 7:1</strong>, ¿qué no debemos hacer para no ser juzgados?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Mentir</li>
                <li className="text-green-700 font-bold">B) ✅ Juzgar a los demás</li>
                <li>C) Callar</li>
                <li>D) Criticar a los amigos</li>
              </ul>
            </div>

            {/* Question 22 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">22) Según <strong>Mateo 5:1</strong>, ¿quién subió a la ladera de la montaña y se sentó para enseñar?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Juan</li>
                <li>B) Pedro</li>
                <li className="text-green-700 font-bold">C) ✅ Jesús</li>
                <li>D) Moisés</li>
              </ul>
            </div>

            {/* Question 23 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">23) Según <strong>Mateo 5:44</strong>, ¿a quién debemos amar?</p>
              <ul className="ml-6 space-y-1">
                <li>A) A los amigos</li>
                <li>B) A los que nos aman</li>
                <li className="text-green-700 font-bold">C) ✅ A nuestros enemigos</li>
                <li>D) A los ricos</li>
              </ul>
            </div>

            {/* Question 24 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">24) Según <strong>Mateo 6:1</strong>, ¿qué advierte Jesús sobre hacer buenas acciones?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Que las publiquemos</li>
                <li className="text-green-700 font-bold">B) ✅ Que no las hagamos para que otros nos vean</li>
                <li>C) Que las contemos</li>
                <li>D) Que las escribamos</li>
              </ul>
            </div>

            {/* Question 25 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">25) Según <strong>Mateo 6:20</strong>, ¿dónde debemos acumular nuestros tesoros?</p>
              <ul className="ml-6 space-y-1">
                <li>A) En cofres cerrados</li>
                <li>B) En la tierra</li>
                <li className="text-green-700 font-bold">C) ✅ En el cielo</li>
                <li>D) En la familia</li>
              </ul>
            </div>

            {/* Question 26 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">26) Según <strong>Mateo 6:24</strong>, ¿cuántos señores puede servir una persona a la vez?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Dos</li>
                <li>B) Muchos</li>
                <li className="text-green-700 font-bold">C) ✅ Ninguno, solo uno</li>
                <li>D) Cuatro</li>
              </ul>
            </div>

            {/* Question 27 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">27) Según <strong>Mateo 6:26</strong>, ¿qué ejemplo usa Jesús para mostrar que Dios provee?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Las estrellas</li>
                <li className="text-green-700 font-bold">B) ✅ Las aves del cielo</li>
                <li>C) Los ríos</li>
                <li>D) Las montañas</li>
              </ul>
            </div>

            {/* Question 28 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">28) Según <strong>Mateo 6:28</strong>, ¿qué flores menciona Jesús al hablar de la confianza en Dios?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Rosas</li>
                <li>B) Margaritas</li>
                <li className="text-green-700 font-bold">C) ✅ Lirios del campo</li>
                <li>D) Girasoles</li>
              </ul>
            </div>

            {/* Question 29 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">29) Según <strong>Mateo 6:34</strong>, ¿por qué no debemos preocuparnos por el mañana?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Porque no existe</li>
                <li className="text-green-700 font-bold">B) ✅ Porque cada día tiene ya sus propios problemas</li>
                <li>C) Porque Dios no lo ve</li>
                <li>D) Porque todo será igual</li>
              </ul>
            </div>

            {/* Question 30 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">30) Según <strong>Mateo 5:16</strong>, ¿qué deben hacer nuestras buenas acciones?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Hacernos famosos</li>
                <li className="text-green-700 font-bold">B) ✅ Brillar para que otros alaben a Dios</li>
                <li>C) Ser secretas</li>
                <li>D) Sorprender a los demás</li>
              </ul>
            </div>

            {/* Question 31 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">31) Según <strong>Mateo 5:23–24</strong>, si estás ofreciendo algo en el altar y recuerdas que alguien tiene algo contra ti, ¿qué debes hacer primero?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Ignorarlo</li>
                <li className="text-green-700 font-bold">B) ✅ Reconciliarte con esa persona</li>
                <li>C) Terminar la ofrenda</li>
                <li>D) Orar más</li>
              </ul>
            </div>

            {/* Question 32 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">32) Según <strong>Mateo 5:28</strong>, ¿qué dice Jesús sobre mirar a una mujer con deseo?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Que es normal</li>
                <li className="text-green-700 font-bold">B) ✅ Que ya se ha cometido adulterio en el corazón</li>
                <li>C) Que no tiene importancia</li>
                <li>D) Que puede evitarse con oración</li>
              </ul>
            </div>


