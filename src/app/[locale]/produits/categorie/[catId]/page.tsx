import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import ProductGrid from "@/components/produits/ProductGrid";
import { categories, getProductsByCategory } from "@/data/products";
import type { ProductCategory } from "@/data/products";
import { Icon } from "@/components/ui/IconSvg";

export const dynamic = "force-dynamic";

const catIcons: Record<string, "shield" | "sprout" | "flask" | "zap" | "droplet" | "apple"> = {
  "inducteur-resistance": "shield",
  "amendements-organiques": "sprout",
  "correcteur-ph": "flask",
  biostimulants: "zap",
  "correcteur-carences": "droplet",
  "qualite-fruits": "apple",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ catId: string; locale: string }>;
}) {
  const { catId, locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const ct = await getTranslations({ locale, namespace: "products.categories" });
  const cd = await getTranslations({ locale, namespace: "products.desc" });
  const pt = await getTranslations({ locale, namespace: "pages" });

  const category = categories.find((c) => c.id === catId) as
    | { id: ProductCategory; icon: string }
    | undefined;
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="section-padding bg-premium-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-premium-muted mb-12 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            {pt("breadcrumb.home")}
          </Link>
          <span>/</span>
          <Link
            href="/produits"
            className="hover:text-white transition-colors"
          >
            {pt("breadcrumb.products")}
          </Link>
          <span>/</span>
          <span className="text-white">{ct(catId)}</span>
        </div>

        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-6">
            <Icon name={catIcons[catId] || "leaf"} size={30} className="text-premium-green" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mt-2 mb-4">
            {ct(catId)}
          </h1>
          <div className="w-12 h-0.5 bg-premium-green mx-auto mb-6" />
          <p className="text-premium-text max-w-2xl mx-auto">
            {cd(catId)}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} showCategory={false} />
        ) : (
          <p className="text-center text-premium-muted">
            {t("notFound")}
          </p>
        )}
      </div>
    </div>
  );
}
