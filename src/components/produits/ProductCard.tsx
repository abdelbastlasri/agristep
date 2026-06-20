"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { Product } from "@/data/products";
import { generateWhatsAppUrl } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export default function ProductCard({
  product,
  showCategory = true,
}: ProductCardProps) {
  const t = useTranslations("products");
  const ct = useTranslations("products.categories");

  const whatsappUrl = generateWhatsAppUrl(
    "212528815207",
    `Bonjour, je souhaite commander ${product.name}`
  );

  return (
    <div className="card-premium overflow-hidden group flex flex-col h-full">
      <Link href={`/produits/${product.slug}`}>
        <div className="relative h-36 sm:h-44 lg:h-52 bg-gradient-to-br from-white to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        {showCategory && (
          <span className="inline-block text-xs uppercase tracking-wider text-premium-gold font-semibold mb-3">
            {ct(product.category)}
          </span>
        )}

        <h3 className="font-heading text-lg text-white mb-3">
          {product.name}
        </h3>

        <p className="text-sm text-premium-muted leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Composition */}
        {product.composition.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-premium-gold uppercase tracking-wider mb-2">
              {t("composition")}
            </h4>
            <ul className="space-y-1">
              {product.composition.map((item, i) => (
                <li key={i} className="text-xs text-premium-muted flex items-start gap-2">
                  <span className="text-premium-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Application */}
        {product.application.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-premium-gold uppercase tracking-wider mb-2">
              {t("application")}
            </h4>
            <ul className="space-y-1">
              {product.application.map((item, i) => (
                <li key={i} className="text-xs text-premium-muted flex items-start gap-2">
                  <span className="text-premium-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Target Crops - all */}
        {product.targetCrops.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.targetCrops.map((crop) => (
              <span
                key={crop}
                className="px-2.5 py-1 bg-premium-gold/10 border border-premium-gold/20 rounded text-xs text-premium-gold"
              >
                {crop}
              </span>
            ))}
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium btn-premium-gold w-full justify-center text-xs sm:text-sm mt-auto btn-shine"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t("order")}
        </a>
      </div>
    </div>
  );
}
