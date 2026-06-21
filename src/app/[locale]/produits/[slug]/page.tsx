import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import ProductGrid from "@/components/produits/ProductGrid";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { generateWhatsAppUrl } from "@/lib/utils";
import { Icon } from "@/components/ui/IconSvg";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produit non trouvé" };
  return {
    title: `${product.name} — Agristep`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Agristep`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  const t = await getTranslations({ locale, namespace: "products" });
  const ct = await getTranslations({ locale, namespace: "products.categories" });
  const pt = await getTranslations({ locale, namespace: "pages" });

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const whatsappUrl = generateWhatsAppUrl(
    "212528815207",
    `${t("orderPrefix")} ${product.name}`
  );

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
          <Link
            href={`/produits/categorie/${product.category}`}
            className="hover:text-white transition-colors"
          >
            {ct(product.category)}
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12 lg:mb-20">
          <div
            className="relative rounded-2xl p-4 sm:p-6 lg:p-10 flex items-center justify-center min-h-[220px] sm:min-h-[350px] lg:min-h-[450px] bg-white"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.15em] text-premium-green font-semibold">
              {ct(product.category)}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-6">
              {product.name}
            </h1>

            <p className="text-premium-text leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {product.targetCrops.map((crop) => (
                <span
                  key={crop}
                  className="px-3 py-1 bg-premium-green/10 border border-premium-green/20 rounded-full text-xs text-premium-green font-medium"
                >
                  {crop}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-premium-muted font-semibold mb-4">
                  {t("composition")}
                </h2>
                <div className="bg-premium-card/40 rounded-xl p-5 space-y-2">
                  {product.composition.map((comp, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-sm py-1.5 border-b border-premium-border last:border-0"
                    >
                      <span className="text-white">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-premium-muted font-semibold mb-4">
                  {t("application")}
                </h2>
                <ul className="space-y-2">
                  {product.application.map((app, i) => (
                    <li
                      key={i}
                      className="text-sm text-premium-text pl-4 border-l-2 border-premium-green/30 py-1"
                    >
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-premium-border">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-premium-primary btn-shine btn-lift"
              >
                <Icon name="messageCircle" size={18} />
                {t("order")}
              </a>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-premium-border pt-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-premium-green" />
                <h2 className="font-heading text-2xl text-white">
                  {t("related")}
                </h2>
                <span className="w-8 h-px bg-premium-green" />
              </div>
            </div>
            <ProductGrid products={related} showCategory={false} />
          </div>
        )}
      </div>
    </div>
  );
}
