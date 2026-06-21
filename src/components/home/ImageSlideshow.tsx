"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/new-home/1.png", alt: "Agristep" },
  { src: "/images/slide-catalogue-1.png", alt: "Catalogue Agristep" },
  { src: "/images/slide-catalogue-2.png", alt: "Catalogue Agristep" },
  { src: "/images/new-home/11images.png", alt: "Agriculture" },
  { src: "/images/new-home/images.png", alt: "Agriculture" },
  { src: "/images/new-home/poivrons.png", alt: "Poivrons" },
  { src: "/images/new-home/framboises-683d6171a877e198868838.png", alt: "Framboises" },
  { src: "/images/new-home/tom-hermans-nM6qrtnVKn8-unsplash.png", alt: "Agriculture" },
];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <div className="absolute inset-0" style={{
            transform: i === current ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 6s linear',
          }}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-premium-dark/20 via-premium-dark/8 to-premium-gold/15" />
        </div>
      ))}
    </div>
  );
}
