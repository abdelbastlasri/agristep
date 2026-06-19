import { products } from "@/data/products";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default function sitemap() {
  const baseUrl = "https://agristep.ma";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as ChangeFreq, priority: 1 },
    { url: `${baseUrl}/produits`, lastModified: new Date(), changeFrequency: "weekly" as ChangeFreq, priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: "monthly" as ChangeFreq, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as ChangeFreq, priority: 0.8 },
  ];

  const categoryPages = [
    { id: "inducteur-resistance", url: `${baseUrl}/produits/categorie/inducteur-resistance` },
    { id: "amendements-organiques", url: `${baseUrl}/produits/categorie/amendements-organiques` },
    { id: "correcteur-ph", url: `${baseUrl}/produits/categorie/correcteur-ph` },
    { id: "biostimulants", url: `${baseUrl}/produits/categorie/biostimulants` },
    { id: "correcteur-carences", url: `${baseUrl}/produits/categorie/correcteur-carences` },
    { id: "qualite-fruits", url: `${baseUrl}/produits/categorie/qualite-fruits` },
  ].map((cat) => ({
    url: cat.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.8,
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/produits/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}