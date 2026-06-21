"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import ImageSlideshow from "./ImageSlideshow";

function AnimatedNumber({ value }: { value: string }) {
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(num);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isNumeric || num === 0) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(String(start));
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{display}</>;
}

const heroStats = [
  { number: "2020", label: "Fondation" },
  { number: "16", label: "Produits" },
  { number: "5+", label: "Ans d'expérience" },
  { number: "Bio", label: "Solutions durables" },
];

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
  const [countStarted, setCountStarted] = useState(false);
  const [particles] = useState(generateParticles);

  useEffect(() => {
    const timer = setTimeout(() => setCountStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Glass panel behind text */}
      <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="backdrop-blur-sm bg-premium-dark/20 rounded-3xl p-8 md:p-12 border border-premium-border/30">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-10 h-px bg-premium-green/60" />
                <span className="text-xs uppercase tracking-[0.25em] text-premium-green font-medium">
                  SARL Agricole — Chtouka Ait Baha
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
                Spécialiste en solutions agricoles biologiques : auxiliaires, biostimulants et conseil personnalisé pour une agriculture durable au Maroc.
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
      </div>
      </div>

      {/* Floating stats cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="backdrop-blur-md bg-premium-dark/40 border border-premium-border rounded-2xl p-4 text-center"
              >
                <div className="font-heading text-2xl md:text-3xl text-premium-green mb-1">
                  {countStarted ? <AnimatedNumber value={stat.number} /> : "0"}
                </div>
                <div className="text-xs text-premium-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-premium-dark via-premium-dark/60 to-transparent pointer-events-none" />
    </section>
  );
}
