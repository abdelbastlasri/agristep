"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useState } from "react";

const productImages = [
  "/images/produits/phytostep.png",
  "/images/produits/phytostep-10000.png",
  "/images/produits/phytostep-2000.png",
];

export default function BestSellerSection() {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section className="section-padding bg-premium-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-premium-green" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
              Best Seller
            </span>
            <span className="w-10 h-px bg-premium-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Notre Produit Phare
          </h2>
          <div className="w-16 h-0.5 bg-premium-green/50 mx-auto mb-6" />
          <p className="text-premium-text max-w-2xl mx-auto">
            Découvrez notre solution de lutte biologique la plus demandée
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card-premium p-6 sm:p-10 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-square max-w-sm mx-auto bg-white rounded-2xl overflow-hidden">
                <Image
                  src={productImages[imgIndex]}
                  alt="PHYTOSTEP"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {productImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === imgIndex
                        ? "bg-premium-green w-6"
                        : "bg-premium-green/30 hover:bg-premium-green/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-premium-green fill-premium-green" />
                <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
                  PHYTOSTEP
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-white">
                Phytoseiulus persimilis
              </h3>
              <p className="text-sm sm:text-base text-premium-text leading-relaxed">
                Produit PHYTOSTEP Contre les Acariens tétranyques et Rouges. Acarien prédateur utilisé en lutte biologique contre{" "}
                <span className="italic">Tetranychus urticae</span> (acarien jaune).
              </p>

              <div className="bg-premium-dark/40 rounded-xl p-4 space-y-2">
                <p className="text-xs text-premium-green font-semibold uppercase tracking-wider">
                  Deux formats disponibles
                </p>
                <ul className="space-y-1">
                  <li className="text-sm text-premium-text flex items-start gap-2">
                    <span className="text-premium-green mt-0.5">•</span>
                    PHYTOSTEP/10000 — 10 000 individus
                  </li>
                  <li className="text-sm text-premium-text flex items-start gap-2">
                    <span className="text-premium-green mt-0.5">•</span>
                    PHYTOSTEP/2000 — 2 000 individus
                  </li>
                </ul>
              </div>

              <Link
                href="/produits/phytostep"
                className="btn-premium btn-premium-primary text-sm group inline-flex"
              >
                Voir le produit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
