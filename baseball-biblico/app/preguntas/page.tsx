import Navbar from '../components/Navbar';

export default function Preguntas() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">
            ⚾ Baseball Bíblico
          </h1>

          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">
            Reglas para el Jurado
          </h2>

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
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">
              PREGUNTAS RONDA 1
            </h2>

            {/* Question 1 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">1) Según <strong>Mateo 6:33</strong>, ¿qué debemos buscar primero?</p>
              <ul className="ml-6 space-y-1">
                <li>A) El pan diario</li>
                <li>B) La fama</li>
                <li className="text-green-700 font-bold">C) ✅ El reino de Dios y su justicia</li>
                <li>D) Los bienes materiales</li>
              </ul>
            </div>

            {/* Question 2 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">2) Según <strong>Mateo 5:5</strong>, ¿qué heredarán los humildes?</p>
              <ul className="ml-6 space-y-1">
                <li>A) El cielo</li>
                <li>B) La ciudad santa</li>
                <li className="text-green-700 font-bold">C) ✅ Toda la tierra</li>
                <li>D) Una corona</li>
              </ul>
            </div>

            {/* Question 3 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">3) Según <strong>Mateo 7:7</strong>, Jesús dice: "Pidan, y…"</p>
              <ul className="ml-6 space-y-1">
                <li>A) No se les dará</li>
                <li className="text-green-700 font-bold">B) ✅ Recibirán</li>
                <li>C) Buscarán</li>
                <li>D) Esperarán en vano</li>
              </ul>
            </div>

            {/* Question 4 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">4) Según <strong>Mateo 5:3</strong>, "Dios bendice a los que son pobres en espíritu…". ¿Qué les pertenece?</p>
              <ul className="ml-6 space-y-1">
                <li>A) La tierra</li>
                <li>B) El consuelo</li>
                <li className="text-green-700 font-bold">C) ✅ El reino del cielo</li>
                <li>D) La misericordia</li>
              </ul>
            </div>

            {/* Question 5 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">5) Según <strong>Mateo 5:13</strong>, Jesús dice que sus seguidores son "la sal de…"</p>
              <ul className="ml-6 space-y-1">
                <li>A) La vida</li>
                <li>B) Jerusalén</li>
                <li className="text-green-700 font-bold">C) ✅ La tierra</li>
                <li>D) La ley</li>
              </ul>
            </div>

            {/* Question 6 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">6) Según <strong>Mateo 6:6</strong>, cuando oremos debemos hacerlo…</p>
              <ul className="ml-6 space-y-1">
                <li>A) En la calle</li>
                <li>B) En voz alta</li>
                <li className="text-green-700 font-bold">C) ✅ En privado, en nuestra habitación</li>
                <li>D) En grupo</li>
              </ul>
            </div>

            {/* Question 7 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">7) Según <strong>Mateo 5:7</strong>, los compasivos recibirán…</p>
              <ul className="ml-6 space-y-1">
                <li>A) Paz</li>
                <li className="text-green-700 font-bold">B) ✅ Compasión</li>
                <li>C) Riquezas</li>
                <li>D) Visión</li>
              </ul>
            </div>

            {/* Question 8 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">8) Según <strong>Mateo 7:24</strong>, ¿a qué compara Jesús a quien escucha sus palabras y las pone en práctica?</p>
              <ul className="ml-6 space-y-1">
                <li>A) A un sembrador</li>
                <li className="text-green-700 font-bold">B) ✅ A un hombre prudente que construyó su casa sobre la roca</li>
                <li>C) A un pescador</li>
                <li>D) A un profeta</li>
              </ul>
            </div>

            {/* Question 9 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">9) Según <strong>Mateo 6:21</strong>, ¿dónde estará tu corazón?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Donde estén tus pensamientos</li>
                <li className="text-green-700 font-bold">B) ✅ Donde esté tu tesoro</li>
                <li>C) Donde esté tu familia</li>
                <li>D) Donde esté tu casa</li>
              </ul>
            </div>

            {/* Question 10 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">10) Según <strong>Mateo 5:9</strong>, los que trabajan por la paz serán llamados…</p>
              <ul className="ml-6 space-y-1">
                <li>A) Siervos fieles</li>
                <li className="text-green-700 font-bold">B) ✅ Hijos de Dios</li>
                <li>C) Profetas</li>
                <li>D) Discípulos de Juan</li>
              </ul>
            </div>

            {/* Question 11 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">11) Según <strong>Mateo 5:17</strong>, Jesús vino no para abolir sino para cumplir…</p>
              <ul className="ml-6 space-y-1">
                <li>A) Las tradiciones</li>
                <li>B) Las parábolas</li>
                <li className="text-green-700 font-bold">C) ✅ La ley y los profetas</li>
                <li>D) Los pactos humanos</li>
              </ul>
            </div>

            {/* Question 12 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">12) Según <strong>Mateo 6:19</strong>, ¿qué no debemos hacer?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Trabajar demasiado</li>
                <li className="text-green-700 font-bold">B) ✅ Acumular tesoros en la tierra</li>
                <li>C) Compartir con los demás</li>
                <li>D) Orar en público</li>
              </ul>
            </div>

            {/* Question 13 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">13) Según <strong>Mateo 5:8</strong>, los de corazón puro verán…</p>
              <ul className="ml-6 space-y-1">
                <li>A) Ángeles</li>
                <li className="text-green-700 font-bold">B) ✅ A Dios</li>
                <li>C) El reino humano</li>
                <li>D) La ciudad de David</li>
              </ul>
            </div>

            {/* Question 14 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">14) Según <strong>Mateo 5:10</strong>, ¿a quiénes bendice Dios por causa de la justicia?</p>
              <ul className="ml-6 space-y-1">
                <li>A) A los pobres</li>
                <li>B) A los humildes</li>
                <li className="text-green-700 font-bold">C) ✅ A los perseguidos</li>
                <li>D) A los sabios</li>
              </ul>
            </div>

            {/* Question 15 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">15) Según <strong>Mateo 6:9–10</strong>, ¿cómo comienza el Padre Nuestro?</p>
              <ul className="ml-6 space-y-1">
                <li>A) "Padre amado del cielo"</li>
                <li className="text-green-700 font-bold">B) ✅ "Padre nuestro que estás en los cielos…"</li>
                <li>C) "Dios todopoderoso y justo"</li>
                <li>D) "Oh Señor celestial"</li>
              </ul>
            </div>

            {/* Question 16 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">16) Según <strong>Mateo 5:6</strong>, los que tienen hambre y sed de justicia serán…</p>
              <ul className="ml-6 space-y-1">
                <li>A) Perdonados</li>
                <li className="text-green-700 font-bold">B) ✅ Saciados</li>
                <li>C) Exaltados</li>
                <li>D) Librados</li>
              </ul>
            </div>

            {/* Question 17 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">17) Según <strong>Mateo 5:39</strong>, ¿qué dice Jesús que hagamos si alguien nos da una bofetada en la mejilla derecha?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Golpearlo de vuelta</li>
                <li className="text-green-700 font-bold">B) ✅ Ofrecer la otra mejilla también</li>
                <li>C) Llamar a los guardias</li>
                <li>D) Ignorarlo</li>
              </ul>
            </div>

            {/* Question 18 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">18) Según <strong>Mateo 7:12</strong>, ¿cómo se llama la enseñanza "trata a los demás como quieres que te traten"?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Mandamiento nuevo</li>
                <li className="text-green-700 font-bold">B) ✅ Regla de oro</li>
                <li>C) Parábola de oro</li>
                <li>D) Ley de Moisés</li>
              </ul>
            </div>

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

            {/* Question 33 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">33) Según <strong>Mateo 5:37</strong>, ¿qué debe significar nuestro "sí" y nuestro "no"?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Depende del momento</li>
                <li className="text-green-700 font-bold">B) ✅ Simplemente sí o no, nada más</li>
                <li>C) Lo que convenga</li>
                <li>D) Lo que los demás quieran oír</li>
              </ul>
            </div>

            {/* Question 34 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">34) Según <strong>Mateo 7:3</strong>, ¿qué compara Jesús con una "viga"?</p>
              <ul className="ml-6 space-y-1">
                <li>A) El pecado grande de los demás</li>
                <li className="text-green-700 font-bold">B) ✅ Los errores que no vemos en nosotros mismos</li>
                <li>C) Las leyes antiguas</li>
                <li>D) La fe de los hipócritas</li>
              </ul>
            </div>

            {/* Question 35 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">35) Según <strong>Mateo 7:6</strong>, ¿qué dice Jesús que no demos a los perros o a los cerdos?</p>
              <ul className="ml-6 space-y-1">
                <li>A) Pan</li>
                <li>B) Oro</li>
                <li className="text-green-700 font-bold">C) ✅ Cosas sagradas o valiosas</li>
                <li>D) Piedras</li>
              </ul>
            </div>

            {/* Question 36 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">36) Según <strong>Mateo 7:15</strong>, ¿de qué advierte Jesús a sus seguidores?</p>
              <ul className="ml-6 space-y-1">
                <li>A) De las tentaciones</li>
                <li className="text-green-700 font-bold">B) ✅ De los falsos profetas vestidos como ovejas</li>
                <li>C) De los soldados romanos</li>
                <li>D) De los escribas</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">
              RONDA 2
            </h2>
            <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4">
              <p className="text-yellow-900 font-semibold">
                Las preguntas de la 2da ronda serán dadas por los equipos contra sus equipos en contra.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-red-700 pb-2">
              PREGUNTAS RONDA 3
            </h2>
            <p className="mb-4 italic text-gray-700">
              (Las respuestas de estas preguntas deberán ser analizadas por el jurado para determinar si son correctas)
            </p>

            <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold mb-2">
                En <strong>Mateo 5:13</strong>, Jesús dice que si la sal pierde su sabor "ya no sirve para nada".
              </p>
              <p className="text-purple-900">¿Qué significa esto en relación con la vida del creyente?</p>
            </div>

            <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold mb-2">
                Según <strong>Mateo 7:21–23</strong>, no todos los que dicen "Señor, Señor" entrarán al Reino de los Cielos.
              </p>
              <p className="text-purple-900">¿Qué distingue a los verdaderos discípulos?</p>
            </div>

            <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold mb-2">
                En <strong>Mateo 7:16–20</strong>, Jesús dice "por sus frutos los conocerán".
              </p>
              <p className="text-purple-900">¿Qué representa el "fruto" en la vida de una persona?</p>
            </div>

            <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold mb-2">
                En <strong>Mateo 5:38–39</strong>, Jesús enseña a "poner la otra mejilla".
              </p>
              <p className="text-purple-900">¿Cómo interpretas esto?</p>
            </div>

            <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold mb-2">
                En <strong>Mateo 7:13–14</strong>, Jesús menciona la puerta angosta y la puerta ancha.
              </p>
              <p className="text-purple-900">¿Qué representa realmente esa metáfora?</p>
            </div>

            <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold mb-2">
                En <strong>Mateo 6:19–21</strong>, Jesús dice que donde está tu tesoro, allí estará tu corazón.
              </p>
              <p className="text-purple-900">¿Qué significa eso?</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
