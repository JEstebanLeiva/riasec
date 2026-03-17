export interface VocationalProfile {
  code: string; // canonical code e.g. "R-I-A"
  name: string;
  description: string;
  disciplines: string;
  letters: string[]; // sorted letters for matching
}

const rawProfiles: Omit<VocationalProfile, 'letters'>[] = [
  {
    code: "R-I-A",
    name: "Realista – Investigativo – Artístico",
    description: "Te gusta hacer, entender y crear. Disfrutas usar tus manos, preguntarte cómo funcionan las cosas y darles un toque original. Aprendes mejor cuando puedes experimentar y crear algo propio.",
    disciplines: "Ingenierías, arquitectura, artes, diseño, tecnología.",
  },
  {
    code: "R-I-S",
    name: "Realista – Investigativo – Social",
    description: "Te interesa resolver problemas reales y que eso ayude a otras personas. Combinas la práctica con el análisis y el deseo de aportar. Te motiva aprender cosas nuevas para aplicarlas en la vida diaria.",
    disciplines: "Ingenierías, ciencias de la salud, ciencias sociales, tecnología.",
  },
  {
    code: "R-I-E",
    name: "Realista – Investigativo – Emprendedor",
    description: "Te gusta entender cómo funcionan las cosas y buscar formas de mejorarlas. No te asusta tomar decisiones ni asumir retos si hay un objetivo claro.",
    disciplines: "Ingenierías, tecnología, negocios, mercadeo, comunicación.",
  },
  {
    code: "R-I-C",
    name: "Realista – Investigativo – Convencional",
    description: "Eres una persona práctica y ordenada. Te sientes cómodo trabajando con datos, sistemas y procesos claros. Te gusta que las cosas tengan lógica y estructura.",
    disciplines: "Ingenierías, matemáticas, administración, procesamiento de datos.",
  },
  {
    code: "R-A-S",
    name: "Realista – Artístico – Social",
    description: "Te gusta crear con tus manos y, al mismo tiempo, ayudar a otros. Encuentras satisfacción cuando lo que haces tiene un impacto positivo en las personas.",
    disciplines: "Artes, diseño, ciencias de la salud, docencia, cosmetología.",
  },
  {
    code: "R-A-E",
    name: "Realista – Artístico – Emprendedor",
    description: "Eres creativo, activo y con iniciativa. Te gusta producir cosas, proponer ideas y llevarlas a la acción. Disfrutas ver resultados concretos de tu creatividad.",
    disciplines: "Artes, diseño, arquitectura, mercadeo, comunicación.",
  },
  {
    code: "R-A-C",
    name: "Realista – Artístico – Convencional",
    description: "Te gusta crear, pero también tener orden. Prefieres expresarte dentro de estructuras claras y con objetivos definidos.",
    disciplines: "Arquitectura, diseño, artes aplicadas, áreas administrativas.",
  },
  {
    code: "R-S-E",
    name: "Realista – Social – Emprendedor",
    description: "Te gusta actuar, liderar y trabajar con personas. Disfrutas organizar actividades y ver resultados reales en grupos o comunidades.",
    disciplines: "Ciencias sociales, comunicación, negocios, ciencias de la salud.",
  },
  {
    code: "R-S-C",
    name: "Realista – Social – Convencional",
    description: "Eres responsable y colaborador. Te gusta ayudar desde roles claros y organizados, donde sabes qué hacer y cómo hacerlo bien.",
    disciplines: "Ciencias sociales, salud, administración, educación.",
  },
  {
    code: "R-E-C",
    name: "Realista – Emprendedor – Convencional",
    description: "Te sientes cómodo organizando, planificando y ejecutando. Te gusta que las cosas funcionen bien y cumplir objetivos de forma eficiente.",
    disciplines: "Administración, economía, negocios, áreas técnicas.",
  },
  {
    code: "I-A-S",
    name: "Investigativo – Artístico – Social",
    description: "Eres curioso, creativo y sensible a las personas. Te interesa entender el mundo y expresarlo de formas que ayuden o inspiren a otros.",
    disciplines: "Ciencias sociales, artes, escritura, docencia, psicología.",
  },
  {
    code: "I-A-E",
    name: "Investigativo – Artístico – Emprendedor",
    description: "Te encanta pensar ideas nuevas y encontrar la forma de llevarlas a la realidad. Combinas análisis, creatividad y liderazgo.",
    disciplines: "Comunicación, mercadeo, tecnología, artes, negocios.",
  },
  {
    code: "I-A-C",
    name: "Investigativo – Artístico – Convencional",
    description: "Te gusta investigar, crear y organizar. Prefieres proyectos donde puedas pensar, imaginar y estructurar todo con claridad.",
    disciplines: "Investigación, diseño, tecnología, administración, escritura.",
  },
  {
    code: "I-S-E",
    name: "Investigativo – Social – Emprendedor",
    description: "Te interesa entender a las personas y liderar cambios. Te gusta analizar situaciones sociales y buscar soluciones prácticas.",
    disciplines: "Ciencias sociales, educación, salud, comunicación, ciencias políticas.",
  },
  {
    code: "I-S-C",
    name: "Investigativo – Social – Convencional",
    description: "Eres analítico y colaborador. Te gusta ayudar a otros desde el conocimiento y el orden, siguiendo procesos claros.",
    disciplines: "Ciencias sociales, salud, educación, administración.",
  },
  {
    code: "I-E-C",
    name: "Investigativo – Emprendedor – Convencional",
    description: "Te gusta analizar información, planificar y tomar decisiones con lógica. Prefieres trabajar con objetivos claros y bien organizados.",
    disciplines: "Economía, administración, matemáticas, tecnología.",
  },
  {
    code: "A-S-E",
    name: "Artístico – Social – Emprendedor",
    description: "Eres expresivo, comunicativo y líder. Te gusta conectar con las personas, inspirarlas y mover ideas creativas.",
    disciplines: "Artes, comunicación, mercadeo, docencia, ciencias sociales.",
  },
  {
    code: "A-S-C",
    name: "Artístico – Social – Convencional",
    description: "Te gusta ayudar y expresarte, pero dentro de estructuras claras. Encuentras seguridad cuando sabes qué se espera de ti.",
    disciplines: "Artes, educación, ciencias sociales, áreas administrativas.",
  },
  {
    code: "A-E-C",
    name: "Artístico – Emprendedor – Convencional",
    description: "Eres creativo, pero también organizado. Te gusta liderar ideas y convertirlas en proyectos bien estructurados.",
    disciplines: "Comunicación, diseño, mercadeo, administración.",
  },
  {
    code: "S-E-C",
    name: "Social – Emprendedor – Convencional",
    description: "Te gusta trabajar con personas, liderar y organizar. Disfrutas coordinar equipos y mantener el orden en grupos o instituciones.",
    disciplines: "Ciencias sociales, educación, administración, negocios.",
  },
];

export const profiles: VocationalProfile[] = rawProfiles.map((p) => ({
  ...p,
  letters: p.code.split("-").sort(),
}));

export function findProfile(input: string): VocationalProfile | null {
  const cleaned = input.toUpperCase().replace(/[^A-Z]/g, "");
  if (cleaned.length !== 3) return null;

  const validLetters = new Set(["R", "I", "A", "S", "E", "C"]);
  const letters = cleaned.split("");
  if (!letters.every((l) => validLetters.has(l))) return null;
  if (new Set(letters).size !== 3) return null;

  const sorted = [...letters].sort();
  return profiles.find((p) => p.letters.join("") === sorted.join("")) ?? null;
}
