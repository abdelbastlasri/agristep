"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { Product } from "@/data/products";
import { generateWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const productImageGalleries: Record<string, string[]> = {
  phytostep: [
    "/images/produits/phytostep.png",
    "/images/produits/phytostep-10000.png",
    "/images/produits/phytostep-2000.png",
  ],
};

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
  const [imgIndex, setImgIndex] = useState(0);

  const images = productImageGalleries[product.id];
  const hasGallery = !!images;

  const whatsappUrl = generateWhatsAppUrl(
    "212666568879",
    `Bonjour, je souhaite commander ${product.name}`
  );

  return (
    <div className="bg-premium-secondary/60 backdrop-blur-sm border border-premium-border rounded-2xl overflow-hidden group flex flex-col h-full hover:border-premium-green/30 hover:shadow-lg hover:shadow-black/10 transition-all duration-300">
      <Link href={`/produits/${product.slug}`}>
        <div className="relative h-36 sm:h-44 lg:h-52 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white">
          {hasGallery ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setImgIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-2 z-10 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft size={14} />
              </button>
              <Image
                src={images[imgIndex]}
                alt={`${product.name} - Image ${imgIndex + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setImgIndex((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-2 z-10 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight size={14} />
              </button>
              <div className="absolute bottom-2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === imgIndex ? "bg-premium-green" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        {showCategory && (
          <span className="inline-block text-xs uppercase tracking-wider text-premium-green font-semibold mb-3">
            {ct(product.category)}
          </span>
        )}

        <h3 className="font-heading text-lg text-white mb-3">
          {product.name}
        </h3>

        <p className="text-sm text-premium-text leading-relaxed mb-4">
          {product.description}
        </p>

        {product.composition.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-premium-green uppercase tracking-wider mb-2">
              {t("composition")}
            </h4>
            <ul className="space-y-1">
              {product.composition.map((item, i) => (
                <li key={i} className="text-xs text-premium-muted flex items-start gap-2">
                  <span className="text-premium-green mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.application.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-premium-green uppercase tracking-wider mb-2">
              {t("application")}
            </h4>
            <ul className="space-y-1">
              {product.application.map((item, i) => (
                <li key={i} className="text-xs text-premium-muted flex items-start gap-2">
                  <span className="text-premium-green mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.targetCrops.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.targetCrops.map((crop) => (
              <span
                key={crop}
                className="px-2.5 py-1 bg-premium-green/10 border border-premium-green/20 rounded text-xs text-premium-green"
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
          className="btn-premium btn-premium-primary w-full justify-center text-xs sm:text-sm mt-auto btn-shine"
        >
          <MessageCircle size={16} className="flex-shrink-0" />
          {t("order")}
        </a>
      </div>
    </div>
  );
}
