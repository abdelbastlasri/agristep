"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import ImageSlideshow from "./ImageSlideshow";

function generateParticles() {
  return Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${20 + Math.random() * 60}%`,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 4,
  }));
}

export default function HeroSection() {
  const t = useTranslations("home.hero");
  const [particles] = useState(generateParticles);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-premium-dark">
      <div className="absolute inset-0">
        <ImageSlideshow />
      </div>

      {/* Subtle top-right glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-premium-green/8 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-premium-green/20"
            style={{
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero text content - full width, no glass panel */}
      <div className="absolute inset-x-4 md:inset-x-8 top-[70%] -translate-y-1/2 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-premium-green/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-premium-green font-medium">
                {t("tagline")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8"
            >
              {t("title")}
              <span className="inline text-premium-green-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-4 font-sans font-light">{t("subtitle")}</span>
            </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-premium-text/90 font-light leading-relaxed mb-10 max-w-2xl"
              >
                {t("description")}
              </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/produits"
                className="btn-premium btn-premium-primary text-sm group"
              >
                {t("cta")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/catalogue-agristep-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-premium-outline text-sm group"
              >
                <FileText size={16} />
                Notre catalogue
              </a>
              <Link
                href="/a-propos"
                className="btn-premium btn-lift text-sm text-premium-text border border-premium-border hover:bg-white/5 hover:text-white"
              >
                Notre histoire
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-premium-dark via-premium-dark/60 to-transparent pointer-events-none" />
    </section>
  );
}
