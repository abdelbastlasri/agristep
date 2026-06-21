"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { categories, getProductsByCategory } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categoryIcons: Record<string, string> = {
  "inducteur-resistance": "🛡️",
  "amendements-organiques": "🌱",
  "correcteur-ph": "⚗️",
  biostimulants: "⚡",
  "correcteur-carences": "💧",
  "qualite-fruits": "🍎",
};

export default function CategoriesSection() {
  const t = useTranslations("products");
  const ct = useTranslations("products.categories");
  const cd = useTranslations("products.desc");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-premium-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-green" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
              Catalogue
            </span>
            <span className="w-8 h-px bg-premium-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-premium-dark mt-2 mb-4">
            {t("title")}
          </h2>
          <div className="w-12 h-0.5 bg-premium-green mx-auto mb-6" />
          <p className="text-premium-muted max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {categories.map((cat) => {
            const productCount = getProductsByCategory(cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/produits/categorie/${cat.id}`}
                className="card-premium p-5 sm:p-6 md:p-8 group"
              >
                <div className="text-3xl mb-6">{categoryIcons[cat.id]}</div>
                <h3 className="font-heading text-xl text-premium-dark mb-3 group-hover:text-premium-green transition-colors">
                  {ct(cat.id)}
                </h3>
                <p className="text-sm text-premium-muted mb-6 leading-relaxed">
                  {cd(cat.id)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-premium-green font-medium">
                    {productCount} produit{productCount > 1 ? "s" : ""}
                  </span>
                  <span className="text-premium-green group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
