import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import ProductGrid from "@/components/produits/ProductGrid";
import { categories, getProductsByCategory } from "@/data/products";
import type { ProductCategory } from "@/data/products";

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ catId: string; locale: string }>;
}) {
  const { catId, locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const ct = await getTranslations({ locale, namespace: "products.categories" });
  const cd = await getTranslations({ locale, namespace: "products.desc" });

  const category = categories.find((c) => c.id === catId) as
    | { id: ProductCategory; icon: string }
    | undefined;
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="section-padding bg-premium-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-premium-muted/60 mb-12 uppercase tracking-wider">
          <Link href="/" className="hover:text-premium-green transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link
            href="/produits"
            className="hover:text-premium-green transition-colors"
          >
            Produits
          </Link>
          <span>/</span>
          <span className="text-premium-dark">{ct(catId)}</span>
        </div>

        <div className="text-center mb-16">
          <span className="text-4xl block mb-4">{category.icon}</span>
          <h1 className="font-heading text-4xl md:text-5xl text-premium-dark mt-2 mb-4">
            {ct(catId)}
          </h1>
          <div className="w-12 h-0.5 bg-premium-green mx-auto mb-6" />
          <p className="text-premium-muted max-w-2xl mx-auto">
            {cd(catId)}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} showCategory={false} />
        ) : (
          <p className="text-center text-premium-muted/60">
            {t("notFound")}
          </p>
        )}
      </div>
    </div>
  );
}
