/**
 * Generador de Keywords para SEO - TikSnap
 *
 * Uso: node scripts/generate-keywords.js
 *
 * Toma palabras clave base y genera todas las combinaciones posibles
 * con prefijos, sufijos, variaciones geográficas y variantes gramaticales.
 */

const baseKeywords = [
  "tiktok",
  "tik tok",
  "tiktok video",
  "video tiktok",
];

const actions = [
  "descargar",
  "bajar",
  "guardar",
  "descarga",
  "download",
  "downloader",
];

const objects = [
  "videos",
  "video",
  "fotos",
  "foto",
  "imagenes",
  "imagen",
  "carrusel",
  "slider",
  "musica",
  "audio",
  "canciones",
];

const modifiers = [
  "sin marca de agua",
  "sin watermark",
  "en hd",
  "hd",
  "en alta calidad",
  "gratis",
  "online",
  "sin limite",
  "ilimitado",
  "sin registro",
  "rapido",
  "mp4",
  "mp3",
];

const negations = [
  "quitar marca de agua",
  "remover marca de agua",
  "eliminar marca de agua",
  "sin logo",
];

const latamCountries = [
  "republica dominicana",
  "rd",
  "latam",
  "argentina",
  "chile",
  "colombia",
  "peru",
  "mexico",
  "venezuela",
  "ecuador",
  "guatemala",
  "honduras",
  "el salvador",
  "nicaragua",
  "costa rica",
  "panama",
  "puerto rico",
  "cuba",
  "bolivia",
  "paraguay",
  "uruguay",
];

const platforms = [
  "tiktok",
  "tik tok",
];

function combine(...arrays) {
  const result = [];
  for (const arr of arrays) {
    if (arr.length === 0) continue;
    for (const item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }
  return result;
}

function generateCombinations() {
  const keywords = new Set();

  // 1. action + object + modifiers
  for (const action of actions) {
    for (const obj of objects) {
      keywords.add(`${action} ${obj} de tiktok`);
      keywords.add(`${action} ${obj} de tik tok`);
      for (const mod of modifiers) {
        keywords.add(`${action} ${obj} de tiktok ${mod}`);
        keywords.add(`${action} ${obj} de tik tok ${mod}`);
        keywords.add(`${action} tiktok ${obj} ${mod}`);
        for (const neg of negations) {
          keywords.add(`${neg} ${action} ${obj} tiktok`);
        }
      }
    }
  }

  // 2. negations + object
  for (const neg of negations) {
    for (const obj of objects) {
      keywords.add(`${neg} ${obj} tiktok`);
      keywords.add(`${neg} ${obj} de tiktok`);
      keywords.add(`tiktok ${neg} ${obj}`);
    }
  }

  // 3. "tiktok downloader" variants
  for (const mod of modifiers) {
    keywords.add(`tiktok downloader ${mod}`);
    keywords.add(`tiktok video downloader ${mod}`);
    keywords.add(`descargador de tiktok ${mod}`);
    keywords.add(`descargador de videos tiktok ${mod}`);
    for (const obj of objects) {
      keywords.add(`tiktok downloader ${obj} ${mod}`);
    }
  }

  // 4. platform + action combinations
  for (const plat of platforms) {
    keywords.add(`descargar ${plat}`);
    keywords.add(`bajar ${plat}`);
    keywords.add(`guardar ${plat}`);
    keywords.add(`download ${plat}`);
  }

  // 5. Country / LATAM specific
  for (const country of latamCountries) {
    keywords.add(`descargar tiktok ${country}`);
    keywords.add(`descargar videos de tiktok ${country}`);
    keywords.add(`tiktok downloader ${country}`);
    keywords.add(`bajar videos de tiktok ${country}`);
    keywords.add(`descargar tik tok ${country}`);
  }

  // 6. Short / long tail specific
  for (const obj of objects) {
    keywords.add(`como ${actions[0]} ${obj} de tiktok`);
    keywords.add(`como ${actions[0]} ${obj} de tik tok`);
    keywords.add(`${actions[0]} ${obj} de tiktok sin marca de agua`);
    keywords.add(`${actions[0]} ${obj} de tiktok mp4`);
    keywords.add(`${actions[0]} ${obj} de tiktok mp3`);
  }

  // 7. Image / carrusel specific
  keywords.add("descargar carrusel de fotos tiktok");
  keywords.add("descargar slider tiktok");
  keywords.add("descargar fotos de tiktok sin marca de agua");
  keywords.add("descargar imagenes de tiktok");
  keywords.add("descargar multiple fotos tiktok");
  keywords.add("bajar fotos de tiktok");
  keywords.add("guardar fotos de tiktok");
  keywords.add("descargar todas las fotos de un tiktok");
  keywords.add("descargar slideshow tiktok");
  keywords.add("photo dump tiktok descargar");

  // 8. Competitor brand variations
  keywords.add("ssstik");
  keywords.add("snaptik");
  keywords.add("tiksnap");
  keywords.add("ssstik alternativo");
  keywords.add("snaptik alternativo");
  keywords.add("como ssstik");
  keywords.add("alternativa a ssstik");

  return [...keywords].sort();
}

const allKeywords = generateCombinations();

console.log("=== KEYWORDS GENERADOS PARA TIKSnap ===\n");
console.log(`Total: ${allKeywords.length} keywords\n`);

// Group by category for analysis
const grouped = {
  "Descarga general": allKeywords.filter(k =>
    k.startsWith("descargar") && !k.includes("carrusel") && !k.includes("foto") && !k.includes("imagen")
  ),
  "Fotos / Carruseles": allKeywords.filter(k =>
    k.includes("foto") || k.includes("imagen") || k.includes("carrusel") || k.includes("slider") || k.includes("slideshow") || k.includes("photo dump") || k.includes("multiple fotos")
  ),
  "Quitar marca de agua": allKeywords.filter(k =>
    k.includes("quitar") || k.includes("remover") || k.includes("eliminar") || k.includes("sin marca")
  ),
  "LATAM / RD": allKeywords.filter(k =>
    latamCountries.some(c => k.includes(c))
  ),
  "Downloader / Inglés": allKeywords.filter(k =>
    k.includes("downloader") || k.includes("download")
  ),
  "Competitors": allKeywords.filter(k =>
    k.includes("ssstik") || k.includes("snaptik") || k.includes("alternativa")
  ),
};

for (const [group, items] of Object.entries(grouped)) {
  console.log(`\n--- ${group} (${items.length}) ---`);
  items.forEach(k => console.log(`  "${k}",`));
}

console.log("\n\n=== TODAS LAS KEYWORDS (formato array) ===\n");
console.log("[\n" + allKeywords.map(k => `  "${k}"`).join(",\n") + "\n]");
