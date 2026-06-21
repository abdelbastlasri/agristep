import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { categories, getProductsByCategory } from "@/data/products";
import { Link } from "@/i18n/routing";
import { Icon } from "@/components/ui/IconSvg";

export const metadata: Metadata = {
  title: "Produits — Agristep",
  description: "Découvrez notre gamme complète de produits agricoles : inducteurs de résistance, amendements organiques, biostimulants et plus.",
  openGraph: {
    title: "Produits — Agristep",
    description: "Découvrez notre gamme complète de produits agricoles : inducteurs de résistance, amendements organiques, biostimulants et plus.",
  },
};

const icons: Record<string, "shield" | "sprout" | "flask" | "zap" | "droplet" | "apple"> = {
  "inducteur-resistance": "shield",
  "amendements-organiques": "sprout",
  "correcteur-ph": "flask",
  biostimulants: "zap",
  "correcteur-carences": "droplet",
  "qualite-fruits": "apple",
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const ct = await getTranslations({ locale, namespace: "products.categories" });
  const cd = await getTranslations({ locale, namespace: "products.desc" });
  const pt = await getTranslations({ locale, namespace: "pages" });

  return (
    <div className="section-padding bg-premium-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-premium-green" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
              {pt("hero.label")}
            </span>
            <span className="w-8 h-px bg-premium-green" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mt-2 mb-4">
            {t("title")}
          </h1>
          <div className="w-12 h-0.5 bg-premium-green mx-auto mb-6" />
          <p className="text-premium-text max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const count = getProductsByCategory(cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/produits/categorie/${cat.id}`}
                className="card-premium p-5 sm:p-6 md:p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-premium-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                  <Icon name={icons[cat.id]} size={26} className="text-premium-green" />
                </div>
                <h2 className="font-heading text-xl text-white mb-3 group-hover:text-premium-green transition-colors">
                  {ct(cat.id)}
                </h2>
                <p className="text-sm text-premium-text mb-6 leading-relaxed">
                  {cd(cat.id)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-premium-green font-medium">
                    {count} produit{count > 1 ? "s" : ""}
                  </span>
                  <span className="text-premium-green group-hover:translate-x-1 transition-transform">
                    <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
