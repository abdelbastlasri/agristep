"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Lightbulb, Globe } from "lucide-react";

const items = [
  { key: "expertise", icon: Target },
  { key: "quality", icon: ShieldCheck },
  { key: "innovation", icon: Lightbulb },
  { key: "planet", icon: Globe },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PourquoiSection() {
  const t = useTranslations("home.why");

  return (
    <section className="section-padding bg-premium-secondary relative overflow-hidden section-wave section-wave-dark">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url(/images/leaf-pattern.svg)`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Pourquoi nous
            </span>
            <span className="w-10 h-px bg-premium-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            {t("title")}
          </h2>
          <div className="w-16 h-0.5 bg-premium-green/50 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.key} variants={itemVariants}>
                <div className="card-premium p-6 sm:p-8 text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                    <Icon size={28} className="text-premium-green" />
                  </div>
                  <h3 className="font-heading text-lg text-white mb-3">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="text-sm text-premium-text leading-relaxed">
                    {t(`${item.key}.text`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
