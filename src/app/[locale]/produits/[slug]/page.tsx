import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import ProductGrid from "@/components/produits/ProductGrid";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { generateWhatsAppUrl } from "@/lib/utils";

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

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const whatsappUrl = generateWhatsAppUrl(
    "212528815207",
    `Bonjour, je souhaite commander ${product.name}`
  );

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
          <Link
            href={`/produits/categorie/${product.category}`}
            className="hover:text-premium-green transition-colors"
          >
            {ct(product.category)}
          </Link>
          <span>/</span>
          <span className="text-premium-dark">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12 lg:mb-20">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-10 flex items-center justify-center min-h-[220px] sm:min-h-[350px] lg:min-h-[450px]">
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

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-premium-dark mt-3 mb-6">
              {product.name}
            </h1>

            <p className="text-premium-muted leading-relaxed mb-8">
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
                <div className="bg-gray-50 rounded-xl p-5 space-y-2">
                  {product.composition.map((comp, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-sm py-1.5 border-b border-premium-border last:border-0"
                    >
                      <span className="text-premium-dark">{comp}</span>
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
                      className="text-sm text-premium-muted pl-4 border-l-2 border-premium-green/30 py-1"
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
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
                <h2 className="font-heading text-2xl text-premium-dark">
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
