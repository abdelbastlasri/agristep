export type ProductCategory =
  | "inducteur-resistance"
  | "amendements-organiques"
  | "correcteur-ph"
  | "biostimulants"
  | "correcteur-carences"
  | "qualite-fruits"
  | "auxiliaires";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  composition: string[];
  targetCrops: string[];
  application: string[];
  image: string;
}

export const products: Product[] = [
  // ── 1. INDUCTEUR DE RÉSISTANCE ──
  {
    id: "pirostep",
    slug: "pirostep",
    name: "PIROSTEP",
    category: "inducteur-resistance",
    description:
      "Désinfectant puissant à base de peroxyde d'hydrogène et d'acide acétique, utilisé pour la désinfection des sols et des serres.",
    composition: [
      "Peroxyde d'hydrogène : 20% (P/v)",
      "Acide acétique : 5% (P/v)",
    ],
    targetCrops: ["Serres", "Maraîchage"],
    application: [
      "Désinfection des serres : 2%",
      "Maraîchage : 5 Litre/Ha",
    ],
    image: "/images/produits/page1_img10_433x569.png",
  },
  {
    id: "phospot-30-20",
    slug: "phospot-30-20",
    name: "PHOSPOT 30-20",
    category: "inducteur-resistance",
    description:
      "Engrais phospho-potassique concentré pour renforcer la floraison et la maturation des fruits.",
    composition: [
      "Anhydride Phosphorique (P2O5) : 30%",
      "Oxyde de Potassium (K2O) : 20%",
    ],
    targetCrops: ["Grandes cultures", "Maraîchage", "Arboriculture"],
    application: [
      "Application racinaire : 4 à 6 litres par hectare",
      "Application foliaire : 300 à 400 cc/hectolitre",
    ],
    image: "/images/produits/page1_img11_1170x827.png",
  },
  {
    id: "stepos-cu",
    slug: "stepos-cu",
    name: "STEPOS CU",
    category: "inducteur-resistance",
    description:
      "Correcteur cuprique et zincique enrichi en acides aminés pour renforcer les défenses naturelles des plantes.",
    composition: [
      "Cuivre : 4.5% (P/v)",
      "Zinc : 2.5% (P/v)",
      "Acides aminés : 2% (P/v)",
      "Carbone Organique : 10% (P/v)",
    ],
    targetCrops: ["Grandes cultures", "Maraîchage", "Arboriculture"],
    application: [
      "Application racinaire : 3 à 5 L/ha",
      "Application foliaire : 150 à 250 cc/hl",
    ],
    image: "/images/produits/page1_img3_601x774.png",
  },

  // ── 2. AMENDEMENTS ORGANIQUES ──

  {
    id: "humiful",
    slug: "humiful",
    name: "HUMIFUL",
    category: "amendements-organiques",
    description:
      "Amendement riche en acides humiques et fulviques pour améliorer la structure du sol et stimuler la vie microbienne.",
    composition: [
      "Acides humique et fulvique : 15% (P/v)",
      "Oxyde de potassium : 12%",
    ],
    targetCrops: [
      "Cultures maraîchères",
      "Bananier",
      "Agrumes",
      "Arbres fruitières",
    ],
    application: [
      "Cultures maraîchères et bananier : 70 à 100 L/ha/cycle",
      "Agrumes et arbres fruitières : 50 à 80 L/ha/cycle",
    ],
    image: "/images/produits/page1_img13_628x698.png",
  },
  {
    id: "orgastep",
    slug: "orgastep",
    name: "ORGASTEP",
    category: "amendements-organiques",
    description:
      "Fertilisant organique concentré riche en polysaccharides et oligo-éléments pour une nutrition équilibrée.",
    composition: [
      "Matière organique : 50% p/v",
      "Azote total : 2.5% p/v",
      "Oligo-éléments : qsp",
      "Riche en Polysaccharides",
    ],
    targetCrops: ["Maraîchage", "Arbres fruitières"],
    application: [
      "Maraîchage : 40-60 litres/ha/cycle",
      "Arbres fruitières : 60-80 litres/ha/cycle",
    ],
    image: "/images/produits/page1_img12_598x712.png",
  },

  // ── 3. CORRECTEUR DE PH ──

  {
    id: "ph-step",
    slug: "ph-step",
    name: "PH STEP",
    category: "correcteur-ph",
    description:
      "Régulateur de pH à base d'acides organiques et de potassium pour optimiser l'absorption des nutriments.",
    composition: [
      "Oxyde de potassium (K2O) : 10% (P/v)",
      "Acide organique : 10% (P/v)",
    ],
    targetCrops: ["Grandes cultures", "Maraîchage", "Arboriculture"],
    application: ["50 cc à 150 cc/hl"],
    image: "/images/produits/page1_img2_543x697.png",
  },

  // ── 4. BIOSTIMULANTS ──

  {
    id: "aminostep",
    slug: "aminostep",
    name: "AMINOSTEP",
    category: "biostimulants",
    description:
      "Biostimulant à base d'acides aminés et de matière organique pour favoriser la croissance végétative et la résistance au stress.",
    composition: [
      "Acides Aminés : 12% (P/v)",
      "Matière Organique : 20% (P/v)",
      "Oligo-éléments : qsp",
    ],
    targetCrops: ["Agrumes", "Arbres fruitiers", "Maraîchage", "Fraise"],
    application: [
      "Agrumes et fruitiers — Foliaire : 200 à 350 cc/hl",
      "Agrumes et fruitiers — Injection : 4 à 6 litre/ha",
      "Maraîchage et fraise — Foliaire : 150 à 250 cc/hl",
      "Maraîchage et fraise — Injection : 3 à 5 litre/ha",
    ],
    image: "/images/produits/page2_img0_515x694.png",
  },
  {
    id: "algastep",
    slug: "algastep",
    name: "ALGASTEP",
    category: "biostimulants",
    description:
      "Extrait d'algues marines enrichi en bore et molybdène pour stimuler la floraison, la nouaison et le grossissement des fruits.",
    composition: [
      "Extrait d'algues : 20% (P/v)",
      "Extrait organique : 10% (P/v)",
      "Bore : 1.5% (P/v)",
      "Molybdène : 2% (P/v)",
    ],
    targetCrops: ["Maraîchage", "Arboriculture"],
    application: [
      "Foliaire maraîchage : 200 cc/hl (préfloraison, croissance, maturation)",
      "Foliaire arboriculture : 200 à 300 cc/hl (préfloraison, nouaison, grossissement)",
      "Injection cultures maraîchères : 4 L/ha (préfloraison, croissance, maturation)",
    ],
    image: "/images/produits/page2_img10_1173x1594.png",
  },
  {
    id: "radistep",
    slug: "radistep",
    name: "RADISTEP",
    category: "biostimulants",
    description:
      "Complexe oligo-éléments et acides aminés pour stimuler le développement racinaire et améliorer la résistance au stress hydrique.",
    composition: [
      "Fer (Fe) : 0.5% (P/v)",
      "Manganèse (Mn) : 0.5% (P/v)",
      "Zinc (Zn) : 0.5% (P/v)",
      "Acides aminés : 7% (P/v)",
      "Matière organique : 20% (P/v)",
    ],
    targetCrops: ["Maraîchère", "Fraise", "Arbres fruitiers", "Agrumes"],
    application: [
      "Maraîchère et fraise : 5 à 7 L/ha",
      "Arbres fruitiers et agrumes : 7 à 10 L/ha",
    ],
    image: "/images/produits/page2_img1_605x792.png",
  },
  {
    id: "mix-step",
    slug: "mix-step",
    name: "MIX-STEP",
    category: "biostimulants",
    description:
      "Mélange complet d'oligo-éléments pour corriger les carences multiples et optimiser la nutrition des cultures.",
    composition: [
      "Fer : 7% (p/p)",
      "Zinc : 5.5% (p/p)",
      "Manganèse : 4% (p/p)",
      "Cuivre : 0.5% (p/p)",
      "Bore : 1% (p/p)",
      "Molybdène : 0.05% (p/p)",
      "Magnésium : 3% (p/p)",
    ],
    targetCrops: ["Cultures maraîchères", "Arbres fruitiers", "Agrumes"],
    application: [
      "Injection cultures maraîchères : 200 à 300 g/ha/jour",
      "Arbres fruitiers et Agrumes : 30 à 45 kg/ha/cycle",
    ],
    image: "/images/produits/page2_img17_690x721.png",
  },

  // ── 5. CORRECTEUR DE CARENCES ──

  {
    id: "molystep",
    slug: "molystep",
    name: "MOLYSTEP",
    category: "correcteur-carences",
    description:
      "Correcteur de carence en molybdène, essentiel pour la réduction des nitrates et la synthèse des protéines.",
    composition: ["Molybdène : 5% (P/v)"],
    targetCrops: ["Cucurbitacées", "Fraises", "Arbres Fruitiers"],
    application: [
      "Cucurbitacées : 120 à 150 cc/hl",
      "Fraises : 120 à 150 cc/hl",
      "Arbres Fruitiers : 150 à 200 cc/hl",
    ],
    image: "/images/produits/page2_img14_1687x2215.png",
  },
  {
    id: "stepbore",
    slug: "stepbore",
    name: "STEPBORE",
    category: "correcteur-carences",
    description:
      "Bore micro-granulé hautement concentré pour corriger les carences et améliorer la floraison et la nouaison.",
    composition: ["Bore micro-granulé : 17.5% (P/P)"],
    targetCrops: [
      "Maraîchage",
      "Betterave",
      "Légumineuses",
      "Arbres Fruitiers",
      "Vigne",
    ],
    application: [
      "Maraîchage : 100 à 150 g/hl",
      "Betterave, légumineuses : 150 à 300 g/hl",
      "Arbres Fruitiers et Vigne : 150 à 200 g/hl",
    ],
    image: "/images/produits/page2_img13_520x523.png",
  },
  {
    id: "hidro-zn-mn",
    slug: "hidro-zn-mn",
    name: "HIDRO ZN-MN",
    category: "correcteur-carences",
    description:
      "Complexe zinc-manganèse enrichi en bore et magnésium pour prévenir les carences et renforcer la croissance.",
    composition: [
      "Zinc : 9% (p/p)",
      "Manganèse : 6.5% (p/p)",
      "Bore : 2.5% (p/p)",
      "Magnésium : 2.5% (p/p)",
      "Acide organique : 4% (p/p)",
    ],
    targetCrops: ["Grandes cultures", "Maraîchage", "Arboriculture"],
    application: [
      "Foliaire : 150 à 250 g/hl",
      "Injection : 3 à 5 kg par application (2 à 3 applications par cycle)",
    ],
    image: "/images/produits/page2_img12_719x796.png",
  },
  {
    id: "ferstep",
    slug: "ferstep",
    name: "FERSTEP",
    category: "correcteur-carences",
    description:
      "Chélate de fer EDDHA hautement stable pour corriger la chlorose ferrique dans les sols calcaires.",
    composition: ["Fer (Fe EDDHA) : 6%"],
    targetCrops: [
      "Arbres fruitiers",
      "Agrumes",
      "Olivier",
      "Vigne",
      "Cultures maraîchères",
    ],
    application: [
      "Arboriculture fruitière, Agrumes : 15-50 g/arbre",
      "Olivier : 15-50 g/arbre",
      "Vigne : 10-25 g/pied",
      "Cultures maraîchères : 2 à 3 kg/ha/application",
    ],
    image: "/images/produits/page2_img8_1200x1600.png",
  },

  // ── 6. QUALITE DES FRUITS ──

  {
    id: "calistep",
    slug: "calistep",
    name: "CALISTEP",
    category: "qualite-fruits",
    description:
      "Calcium concentré pour renforcer les parois cellulaires, améliorer la tenue des fruits et prévenir les maladies physiologiques.",
    composition: ["Calcium : 15% (P/v)"],
    targetCrops: ["Maraîchage", "Arboriculture", "Grandes cultures"],
    application: [
      "Injection : 4 à 6 litres par hectare",
      "Foliaire : 200 à 300 cc/hl",
    ],
    image: "/images/produits/page2_img16_540x709.png",
  },
  {
    id: "potastep",
    slug: "potastep",
    name: "POTASTEP",
    category: "qualite-fruits",
    description:
      "Potassium hautement concentré pour améliorer le calibre, la coloration et la qualité gustative des fruits.",
    composition: ["Oxyde de potassium : 46% (P/v)"],
    targetCrops: [
      "Cultures maraîchères",
      "Agrumes",
      "Arbres fruitières",
    ],
    application: [
      "Cultures maraîchères — Injection : 3 à 4 L/ha pendant le grossissement",
      "Cultures maraîchères — Foliaire : 250 à 350 cc/hl",
      "Agrumes et arbres fruitières — Foliaire : 250 à 350 cc/hl",
    ],
    image: "/images/produits/page2_img15_521x700.png",
  },

  // ── 7. AUXILIAIRES DE CULTURE ──
  {
    id: "phytostep",
    slug: "phytostep",
    name: "PHYTOSTEP",
    category: "auxiliaires",
    description:
      "PHYTOSTEP est un acarien prédateur utilisé en lutte biologique et intégrée contre les acariens tétranyques (acariens rouges)",
    composition: [
      "PHYTOSTEP/10000 : 10 000 individus par emballage",
      "PHYTOSTEP/2000 : 2 000 individus par emballage",
    ],
    targetCrops: ["Framboise", "Poivron", "Concombre", "Fraise", "Culture sous serre"],
    application: [
      "Introduire dès l'apparition des premiers foyers",
      "La dose d'auxiliaire à introduire dépend de l'attaque de ravageurs",
    ],
    image: "/images/produits/phytostep.png",
  },
];

export const categories: {
  id: ProductCategory;
  icon: string;
}[] = [
  { id: "auxiliaires", icon: "🐞" },
  { id: "inducteur-resistance", icon: "🛡️" },
  { id: "amendements-organiques", icon: "🌱" },
  { id: "correcteur-ph", icon: "⚗️" },
  { id: "biostimulants", icon: "⚡" },
  { id: "correcteur-carences", icon: "💧" },
  { id: "qualite-fruits", icon: "🍎" },
];

export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(
  product: Product,
  count: number = 3
): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}
