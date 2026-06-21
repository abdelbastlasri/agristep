"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Shield, Sprout, FlaskConical, Zap, Droplets, Apple } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";

const categoryIcons: Record<string, typeof Shield> = {
  "inducteur-resistance": Shield,
  "amendements-organiques": Sprout,
  "correcteur-ph": FlaskConical,
  biostimulants: Zap,
  "correcteur-carences": Droplets,
  "qualite-fruits": Apple,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CategoriesSection() {
  const t = useTranslations("products");
  const ct = useTranslations("products.categories");
  const cd = useTranslations("products.desc");

  return (
    <section className="section-padding bg-premium-dark relative section-wave">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-premium-green" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
              Catalogue
            </span>
            <span className="w-10 h-px bg-premium-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            {t("title")}
          </h2>
          <div className="w-16 h-0.5 bg-premium-green/50 mx-auto mb-6" />
          <p className="text-premium-text max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const productCount = getProductsByCategory(cat.id).length;
            return (
              <motion.div key={cat.id} variants={itemVariants}>
                <Link
                  href={`/produits/categorie/${cat.id}`}
                  className="card-premium p-5 sm:p-6 md:p-8 group block"
                >
                  <div className="w-14 h-14 rounded-xl bg-premium-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                    <Icon size={26} className="text-premium-green" />
                  </div>
                  <h3 className="font-heading text-xl text-white mb-3 group-hover:text-premium-green transition-colors">
                    {ct(cat.id)}
                  </h3>
                  <p className="text-sm text-premium-text mb-6 leading-relaxed">
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
