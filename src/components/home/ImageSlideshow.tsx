"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

interface Slide {
  type: "image" | "video";
  src: string;
  alt?: string;
}

const slides: Slide[] = [
  { type: "video", src: "/videos/hero.mp4" },
  { type: "image", src: "/images/slide-catalogue-1.png", alt: "Catalogue Agristep" },
  { type: "image", src: "/images/slide-catalogue-2.png", alt: "Catalogue Agristep" },
  { type: "image", src: "/images/new-home/11images.png", alt: "Agriculture" },
  { type: "image", src: "/images/new-home/images.png", alt: "Agriculture" },
  { type: "image", src: "/images/new-home/poivrons.png", alt: "Poivrons" },
  { type: "image", src: "/images/new-home/framboises-683d6171a877e198868838.png", alt: "Framboises" },
  { type: "image", src: "/images/new-home/tom-hermans-nM6qrtnVKn8-unsplash.png", alt: "Agriculture" },
  { type: "image", src: "/images/slideshow/2.jpg", alt: "Agriculture Agristep" },
  { type: "image", src: "/images/slideshow/3.jpg", alt: "Agriculture Agristep" },
];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;

    const isVideo = slides[current].type === "video";
    const duration = isVideo ? 10000 : 6000;

    const timer = setInterval(next, duration);
    return () => clearInterval(timer);
  }, [paused, current, next]);

  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

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
          key={`${slide.type}-${i}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          {slide.type === "video" ? (
            <video
              ref={i === 0 ? videoRef : undefined}
              src={slide.src}
              muted
              playsInline
              loop={false}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                transform: i === current ? "scale(1.1)" : "scale(1)",
                transition: "transform 8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt || ""}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
