export type Question = {
  id: number;
  question: string;
  options: string[];
  correct?: number;
};

export const round1: Question[] = [
  { id: 1, question: 'Según Mateo 6:33, ¿qué debemos buscar primero?', options: ['El pan diario', 'La fama', 'El reino de Dios y su justicia', 'Los bienes materiales'], correct: 2 },
  { id: 2, question: 'Según Mateo 5:5, ¿qué heredarán los humildes?', options: ['El cielo', 'La ciudad santa', 'Toda la tierra', 'Una corona'], correct: 2 },
  { id: 3, question: 'Según Mateo 7:7, Jesús dice: "Pidan, y…"', options: ['No se les dará', 'Recibirán', 'Buscarán', 'Esperarán en vano'], correct: 1 },
  { id: 4, question: 'Según Mateo 5:3, "Dios bendice a los que son pobres en espíritu…". ¿Qué les pertenece?', options: ['La tierra', 'El consuelo', 'El reino del cielo', 'La misericordia'], correct: 2 },
  { id: 5, question: 'Según Mateo 5:13, Jesús dice que sus seguidores son "la sal de…"', options: ['La vida', 'Jerusalén', 'La tierra', 'La ley'], correct: 2 },
  { id: 6, question: 'Según Mateo 6:6, cuando oremos debemos hacerlo…', options: ['En la calle', 'En voz alta', 'En privado, en nuestra habitación', 'En grupo'], correct: 2 },
  { id: 7, question: 'Según Mateo 5:7, los compasivos recibirán…', options: ['Paz', 'Compasión', 'Riquezas', 'Visión'], correct: 1 },
  { id: 8, question: 'Según Mateo 7:24, ¿a qué compara Jesús a quien escucha sus palabras y las pone en práctica?', options: ['A un sembrador', 'A un hombre prudente que construyó su casa sobre la roca', 'A un pescador', 'A un profeta'], correct: 1 },
  { id: 9, question: 'Según Mateo 6:21, ¿dónde estará tu corazón?', options: ['Donde estén tus pensamientos', 'Donde esté tu tesoro', 'Donde esté tu familia', 'Donde esté tu casa'], correct: 1 },
  { id: 10, question: 'Según Mateo 5:9, los que trabajan por la paz serán llamados…', options: ['Siervos fieles', 'Hijos de Dios', 'Profetas', 'Discípulos de Juan'], correct: 1 },
  { id: 11, question: 'Según Mateo 5:17, Jesús vino no para abolir sino para cumplir…', options: ['Las tradiciones', 'Las parábolas', 'La ley y los profetas', 'Los pactos humanos'], correct: 2 },
  { id: 12, question: 'Según Mateo 6:19, ¿qué no debemos hacer?', options: ['Trabajar demasiado', 'Acumular tesoros en la tierra', 'Compartir con los demás', 'Orar en público'], correct: 1 },
  { id: 13, question: 'Según Mateo 5:8, los de corazón puro verán…', options: ['Ángeles', 'A Dios', 'El reino humano', 'La ciudad de David'], correct: 1 },
  { id: 14, question: 'Según Mateo 5:10, ¿a quiénes bendice Dios por causa de la justicia?', options: ['A los pobres', 'A los humildes', 'A los perseguidos', 'A los sabios'], correct: 2 },
  { id: 15, question: 'Según Mateo 6:9–10, ¿cómo comienza el Padre Nuestro?', options: ['"Padre amado del cielo"', '"Padre nuestro que estás en los cielos…"', '"Dios todopoderoso y justo"', '"Oh Señor celestial"'], correct: 1 },
  { id: 16, question: 'Según Mateo 5:6, los que tienen hambre y sed de justicia serán…', options: ['Perdonados', 'Saciados', 'Exaltados', 'Librados'], correct: 1 },
  { id: 17, question: 'Según Mateo 5:39, ¿qué dice Jesús que hagamos si alguien nos da una bofetada en la mejilla derecha?', options: ['Golpearlo de vuelta', 'Ofrecer la otra mejilla también', 'Llamar a los guardias', 'Ignorarlo'], correct: 1 },
  { id: 18, question: 'Según Mateo 7:12, ¿cómo se llama la enseñanza "trata a los demás como quieres que te traten"?', options: ['Mandamiento nuevo', 'Regla de oro', 'Parábola de oro', 'Ley de Moisés'], correct: 1 },
  { id: 19, question: 'Según Mateo 5:4, ¿qué reciben los que lloran?', options: ['Justicia', 'Consuelo', 'Pan', 'Riquezas'], correct: 1 },
  { id: 20, question: 'Según Mateo 5:14, Jesús dice que sus seguidores son "la luz de…"', options: ['Israel', 'El mundo', 'El templo', 'Los cielos'], correct: 1 },
  { id: 21, question: 'Según Mateo 7:1, ¿qué no debemos hacer para no ser juzgados?', options: ['Mentir', 'Juzgar a los demás', 'Callar', 'Criticar a los amigos'], correct: 1 },
  { id: 22, question: 'Según Mateo 5:1, ¿quién subió a la ladera de la montaña y se sentó para enseñar?', options: ['Juan', 'Pedro', 'Jesús', 'Moisés'], correct: 2 },
  { id: 23, question: 'Según Mateo 5:44, ¿a quién debemos amar?', options: ['A los amigos', 'A los que nos aman', 'A nuestros enemigos', 'A los ricos'], correct: 2 },
  { id: 24, question: 'Según Mateo 6:1, ¿qué advierte Jesús sobre hacer buenas acciones?', options: ['Que las publiquemos', 'Que no las hagamos para que otros nos vean', 'Que las contemos', 'Que las escribamos'], correct: 1 },
  { id: 25, question: 'Según Mateo 6:20, ¿dónde debemos acumular nuestros tesoros?', options: ['En cofres cerrados', 'En la tierra', 'En el cielo', 'En la familia'], correct: 2 },
  { id: 26, question: 'Según Mateo 6:24, ¿cuántos señores puede servir una persona a la vez?', options: ['Dos', 'Muchos', 'Ninguno, solo uno', 'Cuatro'], correct: 2 },
  { id: 27, question: 'Según Mateo 6:26, ¿qué ejemplo usa Jesús para mostrar que Dios provee?', options: ['Las estrellas', 'Las aves del cielo', 'Los ríos', 'Las montañas'], correct: 1 },
  { id: 28, question: 'Según Mateo 6:28, ¿qué flores menciona Jesús al hablar de la confianza en Dios?', options: ['Rosas', 'Margaritas', 'Lirios del campo', 'Girasoles'], correct: 2 },
  { id: 29, question: 'Según Mateo 6:34, ¿por qué no debemos preocuparnos por el mañana?', options: ['Porque no existe', 'Porque cada día tiene ya sus propios problemas', 'Porque Dios no lo ve', 'Porque todo será igual'], correct: 1 },
  { id: 30, question: 'Según Mateo 5:16, ¿qué deben hacer nuestras buenas acciones?', options: ['Hacernos famosos', 'Brillar para que otros alaben a Dios', 'Ser secretas', 'Sorprender a los demás'], correct: 1 },
  { id: 31, question: 'Según Mateo 5:23–24, si estás ofreciendo algo en el altar y recuerdas que alguien tiene algo contra ti, ¿qué debes hacer primero?', options: ['Ignorarlo', 'Reconciliarte con esa persona', 'Terminar la ofrenda', 'Orar más'], correct: 1 },
  { id: 32, question: 'Según Mateo 5:28, ¿qué dice Jesús sobre mirar a una mujer con deseo?', options: ['Que es normal', 'Que ya se ha cometido adulterio en el corazón', 'Que no tiene importancia', 'Que puede evitarse con oración'], correct: 1 },
  { id: 33, question: 'Según Mateo 5:37, ¿qué debe significar nuestro "sí" y nuestro "no"?', options: ['Depende del momento', 'Simplemente sí o no, nada más', 'Lo que convenga', 'Lo que los demás quieran oír'], correct: 1 },
  { id: 34, question: 'Según Mateo 7:3, ¿qué compara Jesús con una "viga"?', options: ['El pecado grande de los demás', 'Los errores que no vemos en nosotros mismos', 'Las leyes antiguas', 'La fe de los hipócritas'], correct: 1 },
  { id: 35, question: 'Según Mateo 7:6, ¿qué dice Jesús que no demos a los perros o a los cerdos?', options: ['Pan', 'Oro', 'Cosas sagradas o valiosas', 'Piedras'], correct: 2 },
  { id: 36, question: 'Según Mateo 7:15, ¿de qué advierte Jesús a sus seguidores?', options: ['De las tentaciones', 'De los falsos profetas vestidos como ovejas', 'De los soldados romanos', 'De los escribas'], correct: 1 },
];

export const round3Prompts = [
  'En Mateo 5:13, Jesús dice que si la sal pierde su sabor "ya no sirve para nada". ¿Qué significa esto en relación con la vida del creyente?',
  'Según Mateo 7:21–23, no todos los que dicen "Señor, Señor" entrarán al Reino de los Cielos. ¿Qué distingue a los verdaderos discípulos?',
  'En Mateo 7:16–20, Jesús dice "por sus frutos los conocerán". ¿Qué representa el "fruto" en la vida de una persona?',
  'En Mateo 5:38–39, Jesús enseña a "poner la otra mejilla". ¿Cómo interpretas esto?',
  'En Mateo 7:13–14, Jesús menciona la puerta angosta y la puerta ancha. ¿Qué representa realmente esa metáfora?',
  'En Mateo 6:19–21, Jesús dice que donde está tu tesoro, allí estará tu corazón. ¿Qué significa eso?'
];

export default { round1, round3Prompts };
