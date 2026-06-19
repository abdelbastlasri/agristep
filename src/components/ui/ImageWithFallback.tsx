"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  containerClassName?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fill = true,
  sizes = "100vw",
  priority = false,
  loading = "lazy",
  containerClassName = "",
}: Props) {
  const [error, setError] = useState(false);
  const initials = alt
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (error) {
    return (
      <div className={`flex items-center justify-center ${containerClassName || className}`}>
        <span className="text-4xl font-bold text-premium-green opacity-40">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      loading={loading}
      onError={() => setError(true)}
    />
  );
}