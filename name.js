
const syllables = {
  first: {
      "Ae": ["lar", "lis", "mon"],
      "Ba": ["sil", "ron"],
      "El": ["ara", "wen", "dor", "i"],
      "Ka": ["rel", "rin", "el", "th"],
      "Bri": ["da", "an"],
      "Li": ["am", "ora"],
      "Ma": ["doc", "rion"], 
      "Ra": ["ven", "fael"],
      "Fa": ["elan", "ern"],
      "Ga": ["briel", "lad"],
      "Is": ["a", "olde", "ta", "el"],
      "Ja": ["red", "s"],
      "Ca": ["el", "leb", "ri"],
      "Da": ["rien", "vus", "mir"],
      "Vy": ["rae", "ree"],
      "Ja": ["cob", "red", "nis"],
      "Ky": ["ler", "ra"],
      "Ga": ["len", "bri"],
      "Tho": ["mas", "rin"],
      "Za": ["ra", "ne"],
      "Mel": ["da", "odie"],
      "Vi": ["gor", "ola"],
      "Tan": ["ya", "is"],
      // ... add more
  },
  middle: {
      "la": ["ri", "en"],
      "van": ["der", "da"],
      "es": ["ter", "tal"],
      "lin": ["da"],
      "el": ["ea", "ia", "da", "wen"],
      "wyn": ["dle", "ter"],
      "fa": ["lon"],
      "dor": ["ian"],
      "mer": ["lin"], 
      "wen": ["del", "don"],
      "frey": ["a"],
      "dred": ["en"],
      "stan": ["is"],
      "in": ["dor", "da"],
      "ar": ["dis", "wen", "ia"],
      "o": ["lin", "ren"],
      "al": ["da", "der"],
      // ... add more
  },
  last: {
    "ion": [], 
    "an": [],
    "is":[],
    "us": [],
    "el": [],
    "wen": [],
    "dor": [],
    "lin": [],
    "ras": [],
    "son":[],
    "mar": [],
    "lyn": [],
    "den": [],
    "gard": [],
    "or": [],
    "in": [],
    "eth": [],
    "al": [],
    "en": [],
    // ... add more
  },
  connectors: ["van", "de", "von", "Mc"]
};


function generateName(syllableSet) {
  let currentSyllable = randomKey(syllableSet);
  let name = currentSyllable;

  while (syllableSet[currentSyllable] && syllableSet[currentSyllable].length > 0) { // Modified check
      const nextSyllables = syllableSet[currentSyllable];
      currentSyllable = nextSyllables[Math.floor(Math.random() * nextSyllables.length)];
      name += currentSyllable;
  }

  return name;
}

function generateRandomName() {
  let firstName = capitalize(generateName(syllables.first));
  let lastName = capitalize(generateName(syllables.middle) + generateName(syllables.last));

  // Middle name or connector chance
  if (Math.random() < 0.2) { 
          const connector = syllables.connectors[Math.floor(Math.random() * syllables.connectors.length)];
          return `${firstName} ${connector}${lastName}`;
  } 

  return `${firstName} ${lastName}`;
}

// Helper Functions
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function randomKey(obj) {
  var keys = Object.keys(obj);
  return keys[ keys.length * Math.random() << 0];
};