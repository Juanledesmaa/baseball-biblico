'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

// Round 1 Questions
const questions = [
  {
    number: 1,
    question: 'Según Mateo 6:33, ¿qué debemos buscar primero?',
    options: ['A) El pan diario', 'B) La fama', 'C) El reino de Dios y su justicia ✅', 'D) Los bienes materiales'],
  },
  {
    number: 2,
    question: 'Según Mateo 5:5, ¿qué heredarán los humildes?',
    options: ['A) El cielo', 'B) La ciudad santa', 'C) Toda la tierra ✅', 'D) Una corona'],
  },
  {
    number: 3,
    question: 'Según Mateo 7:7, Jesús dice: "Pidan, y…"',
    options: ['A) No se les dará', 'B) Recibirán ✅', 'C) Buscarán', 'D) Esperarán en vano'],
  },
  {
    number: 4,
    question: 'Según Mateo 5:3, "Dios bendice a los que son pobres en espíritu…". ¿Qué les pertenece?',
    options: ['A) La tierra', 'B) El consuelo', 'C) El reino del cielo ✅', 'D) La misericordia'],
  },
  {
    number: 5,
    question: 'Según Mateo 5:13, Jesús dice que sus seguidores son "la sal de…"',
    options: ['A) La vida', 'B) Jerusalén', 'C) La tierra ✅', 'D) La ley'],
  },
  {
    number: 6,
    question: 'Según Mateo 6:6, cuando oremos debemos hacerlo…',
    options: ['A) En la calle', 'B) En voz alta', 'C) En privado, en nuestra habitación ✅', 'D) En grupo'],
  },
  {
    number: 7,
    question: 'Según Mateo 5:7, los compasivos recibirán…',
    options: ['A) Paz', 'B) Compasión ✅', 'C) Riquezas', 'D) Visión'],
  },
  {
    number: 8,
    question: 'Según Mateo 7:24, ¿a qué compara Jesús a quien escucha sus palabras y las pone en práctica?',
    options: ['A) A un sembrador', 'B) A un hombre prudente que construyó su casa sobre la roca ✅', 'C) A un pescador', 'D) A un profeta'],
  },
  {
    number: 9,
    question: 'Según Mateo 6:21, ¿dónde estará tu corazón?',
    options: ['A) Donde estén tus pensamientos', 'B) Donde esté tu tesoro ✅', 'C) Donde esté tu familia', 'D) Donde esté tu casa'],
  },
  {
    number: 10,
    question: 'Según Mateo 5:9, los que trabajan por la paz serán llamados…',
    options: ['A) Siervos fieles', 'B) Hijos de Dios ✅', 'C) Profetas', 'D) Discípulos de Juan'],
  },
  {
    number: 11,
    question: 'Según Mateo 5:17, Jesús vino no para abolir sino para cumplir…',
    options: ['A) Las tradiciones', 'B) Las parábolas', 'C) La ley y los profetas ✅', 'D) Los pactos humanos'],
  },
  {
    number: 12,
    question: 'Según Mateo 6:19, ¿qué no debemos hacer?',
    options: ['A) Trabajar demasiado', 'B) Acumular tesoros en la tierra ✅', 'C) Compartir con los demás', 'D) Orar en público'],
  },
  {
    number: 13,
    question: 'Según Mateo 5:8, los de corazón puro verán…',
    options: ['A) Ángeles', 'B) A Dios ✅', 'C) El reino humano', 'D) La ciudad de David'],
  },
  {
    number: 14,
    question: 'Según Mateo 5:10, ¿a quiénes bendice Dios por causa de la justicia?',
    options: ['A) A los pobres', 'B) A los humildes', 'C) A los perseguidos ✅', 'D) A los sabios'],
  },
  {
    number: 15,
    question: 'Según Mateo 6:9–10, ¿cómo comienza el Padre Nuestro?',
    options: ['A) "Padre amado del cielo"', 'B) "Padre nuestro que estás en los cielos…" ✅', 'C) "Dios todopoderoso y justo"', 'D) "Oh Señor celestial"'],
  },
  {
    number: 16,
    question: 'Según Mateo 5:6, los que tienen hambre y sed de justicia serán…',
    options: ['A) Perdonados', 'B) Saciados ✅', 'C) Exaltados', 'D) Librados'],
  },
  {
    number: 17,
    question: 'Según Mateo 5:39, ¿qué dice Jesús que hagamos si alguien nos da una bofetada en la mejilla derecha?',
    options: ['A) Golpearlo de vuelta', 'B) Ofrecer la otra mejilla también ✅', 'C) Llamar a los guardias', 'D) Ignorarlo'],
  },
  {
    number: 18,
    question: 'Según Mateo 7:12, ¿cómo se llama la enseñanza "trata a los demás como quieres que te traten"?',
    options: ['A) Mandamiento nuevo', 'B) Regla de oro ✅', 'C) Parábola de oro', 'D) Ley de Moisés'],
  },
  {
    number: 19,
    question: 'Según Mateo 5:4, ¿qué reciben los que lloran?',
    options: ['A) Justicia', 'B) Consuelo ✅', 'C) Pan', 'D) Riquezas'],
  },
  {
    number: 20,
    question: 'Según Mateo 5:14, Jesús dice que sus seguidores son "la luz de…"',
    options: ['A) Israel', 'B) El mundo ✅', 'C) El templo', 'D) Los cielos'],
  },
  {
    number: 21,
    question: 'Según Mateo 7:1, ¿qué no debemos hacer para no ser juzgados?',
    options: ['A) Mentir', 'B) Juzgar a los demás ✅', 'C) Callar', 'D) Criticar a los amigos'],
  },
  {
    number: 22,
    question: 'Según Mateo 5:1, ¿quién subió a la ladera de la montaña y se sentó para enseñar?',
    options: ['A) Juan', 'B) Pedro', 'C) Jesús ✅', 'D) Moisés'],
  },
  {
    number: 23,
    question: 'Según Mateo 5:44, ¿a quién debemos amar?',
    options: ['A) A los amigos', 'B) A los que nos aman', 'C) A nuestros enemigos ✅', 'D) A los ricos'],
  },
  {
    number: 24,
    question: 'Según Mateo 6:1, ¿qué advierte Jesús sobre hacer buenas acciones?',
    options: ['A) Que las publiquemos', 'B) Que no las hagamos para que otros nos vean ✅', 'C) Que las contemos', 'D) Que las escribamos'],
  },
  {
    number: 25,
    question: 'Según Mateo 6:20, ¿dónde debemos acumular nuestros tesoros?',
    options: ['A) En cofres cerrados', 'B) En la tierra', 'C) En el cielo ✅', 'D) En la familia'],
  },
  {
    number: 26,
    question: 'Según Mateo 6:24, ¿cuántos señores puede servir una persona a la vez?',
    options: ['A) Dos', 'B) Muchos', 'C) Ninguno, solo uno ✅', 'D) Cuatro'],
  },
  {
    number: 27,
    question: 'Según Mateo 6:26, ¿qué ejemplo usa Jesús para mostrar que Dios provee?',
    options: ['A) Las estrellas', 'B) Las aves del cielo ✅', 'C) Los ríos', 'D) Las montañas'],
  },
  {
    number: 28,
    question: 'Según Mateo 6:28, ¿qué flores menciona Jesús al hablar de la confianza en Dios?',
    options: ['A) Rosas', 'B) Margaritas', 'C) Lirios del campo ✅', 'D) Girasoles'],
  },
  {
    number: 29,
    question: 'Según Mateo 6:34, ¿por qué no debemos preocuparnos por el mañana?',
    options: ['A) Porque no existe', 'B) Porque cada día tiene ya sus propios problemas ✅', 'C) Porque Dios no lo ve', 'D) Porque todo será igual'],
  },
  {
    number: 30,
    question: 'Según Mateo 5:16, ¿qué deben hacer nuestras buenas acciones?',
    options: ['A) Hacernos famosos', 'B) Brillar para que otros alaben a Dios ✅', 'C) Ser secretas', 'D) Sorprender a los demás'],
  },
  {
    number: 31,
    question: 'Según Mateo 5:23–24, si estás ofreciendo algo en el altar y recuerdas que alguien tiene algo contra ti, ¿qué debes hacer primero?',
    options: ['A) Ignorarlo', 'B) Reconciliarte con esa persona ✅', 'C) Terminar la ofrenda', 'D) Orar más'],
  },
  {
    number: 32,
    question: 'Según Mateo 5:28, ¿qué dice Jesús sobre mirar a una mujer con deseo?',
    options: ['A) Que es normal', 'B) Que ya se ha cometido adulterio en el corazón ✅', 'C) Que no tiene importancia', 'D) Que puede evitarse con oración'],
  },
  {
    number: 33,
    question: 'Según Mateo 5:37, ¿qué debe significar nuestro "sí" y nuestro "no"?',
    options: ['A) Depende del momento', 'B) Simplemente sí o no, nada más ✅', 'C) Lo que convenga', 'D) Lo que los demás quieran oír'],
  },
  {
    number: 34,
    question: 'Según Mateo 7:3, ¿qué compara Jesús con una "viga"?',
    options: ['A) El pecado grande de los demás', 'B) Los errores que no vemos en nosotros mismos ✅', 'C) Las leyes antiguas', 'D) La fe de los hipócritas'],
  },
  {
    number: 35,
    question: 'Según Mateo 7:6, ¿qué dice Jesús que no demos a los perros o a los cerdos?',
    options: ['A) Pan', 'B) Oro', 'C) Cosas sagradas o valiosas ✅', 'D) Piedras'],
  },
  {
    number: 36,
    question: 'Según Mateo 7:15, ¿de qué advierte Jesús a sus seguidores?',
    options: ['A) De las tentaciones', 'B) De los falsos profetas vestidos como ovejas ✅', 'C) De los soldados romanos', 'D) De los escribas'],
  },
];

export default function Presentacion() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleQuestionClick = (questionNumber: number) => {
    setSelectedQuestion(questionNumber);
    setShowOptions(false);
  };

  const handleBack = () => {
    setSelectedQuestion(null);
    setShowOptions(false);
  };

  const currentQuestion = selectedQuestion
    ? questions.find(q => q.number === selectedQuestion)
    : null;

  if (selectedQuestion && currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-red-800 to-blue-900 flex flex-col items-center justify-center p-8">
        {/* Question Display */}
        <div className="w-full max-w-7xl">
          <div className="bg-white rounded-3xl shadow-2xl p-16 mb-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-700 text-white text-6xl font-bold px-12 py-6 rounded-full mb-8">
                Pregunta #{currentQuestion.number}
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-bold text-blue-900 text-center leading-tight mb-12">
              {currentQuestion.question}
            </h1>

            {showOptions && (
              <div className="mt-16 space-y-6">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-8 rounded-xl text-5xl text-gray-800 font-semibold"
                  >
                    {option.replace(' ✅', '')}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-6 justify-center">
            <button
              onClick={handleBack}
              className="bg-white text-red-700 px-12 py-6 rounded-xl text-3xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              ← Volver al Grid
            </button>
            {!showOptions && (
              <button
                onClick={() => setShowOptions(true)}
                className="bg-green-600 text-white px-12 py-6 rounded-xl text-3xl font-bold hover:bg-green-700 transition-colors shadow-lg"
              >
                Mostrar Opciones
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-2xl p-12">
          <h1 className="text-6xl font-bold text-red-700 mb-6 text-center">
            📺 Modo Presentación
          </h1>
          <p className="text-center text-gray-600 text-2xl mb-12">
            Selecciona el número de pregunta para mostrarla en pantalla completa
          </p>

          <div className="grid grid-cols-6 md:grid-cols-9 gap-4">
            {questions.map((q) => (
              <button
                key={q.number}
                onClick={() => handleQuestionClick(q.number)}
                className="aspect-square bg-gradient-to-br from-red-600 to-red-700 text-white text-4xl font-bold rounded-xl hover:from-red-700 hover:to-red-800 hover:scale-110 transition-all shadow-lg border-4 border-red-900"
              >
                {q.number}
              </button>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-blue-900 text-xl">
              <strong>Instrucciones:</strong> Haz clic en un número para mostrar la pregunta en modo presentación.
              Una vez en la pregunta, puedes mostrar las opciones múltiples si es necesario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
