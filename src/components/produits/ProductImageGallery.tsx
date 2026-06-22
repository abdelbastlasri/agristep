"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const productImageGalleries: Record<string, string[]> = {
  phytostep: [
    "/images/produits/phytostep.png",
    "/images/produits/phytostep-10000.png",
    "/images/produits/phytostep-2000.png",
  ],
};

interface ProductImageGalleryProps {
  productId: string;
  productName: string;
  defaultImage: string;
}

export default function ProductImageGallery({
  productId,
  productName,
  defaultImage,
}: ProductImageGalleryProps) {
  const images = productImageGalleries[productId];
  const [imgIndex, setImgIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!images) {
    return (
      <Image
        src={defaultImage}
        alt={productName}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setImgIndex((prev) => (prev + 1) % images.length);
      } else {
        setImgIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };

  const goTo = (index: number) => {
    setImgIndex(index);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={prev}
        className="absolute left-3 z-10 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        aria-label="Image précédente"
      >
        <ChevronLeft size={18} />
      </button>
      <Image
        src={images[imgIndex]}
        alt={`${productName} - Image ${imgIndex + 1}`}
        fill
        className="object-contain select-none"
        sizes="(max-width: 768px) 100vw, 50vw"
        draggable={false}
      />
      <button
        onClick={next}
        className="absolute right-3 z-10 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        aria-label="Image suivante"
      >
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-4 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); goTo(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === imgIndex ? "bg-premium-green scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
