import type { ReactNode } from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const s = (d: string, s = 24) => ({ d, s });

const icons = {
  shield: s("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
  sprout: s("M7 20h10M10 20c5.5-2.5.8-6.4 3-10M12 20c-1.5-4.5-1-8.5 0-12 1.5-5.5 6-8 9-6 2 1 3 5 2 10-1 5-4.5 8-8 8"),
  flask: s("M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2M8.5 2h7M7 16h10"),
  zap: s("M13 2 3 14h9l-1 8 10-12h-9z"),
  droplet: s("M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12 2 12 2 9 8.5 7 10.5 5 14 5 15a7 7 0 0 0 7 7z"),
  apple: s("M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06ZM10 2c1 .5 2 2 2 5"),
  target: s("M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"),
  globe: s("M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"),
  handshake: s("M11 17a1 1 0 0 1-1-1c0-.5.34-1 .7-1.4l5.4-5.4a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-5.4 5.4a1 1 0 0 1-1.4 0L11 17ZM20.4 9.6 22 8l-5-5-1.6 1.6m-10.4 8.4 3-3 4.4 4.4M4 18h3M8 21h3"),
  trendingUp: s("M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6"),
  leaf: s("M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"),
  mapPin: s("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"),
  building2: s("M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"),
  phone: s("M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"),
  mail: s("M22 4H2v16h20V4ZM2 7l10 6 10-6"),
  messageCircle: s("M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2Z"),
  arrowRight: s("M5 12h14M12 5l7 7-7 7"),
  check: s("M20 6 9 17l-5-5"),
  star: s("M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"),
  linkedin: s("M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"),
  sparkles: s("M9.937 4.5a6.062 6.062 0 0 0 6.063 6.062 6.062 6.062 0 0 0-6.063 6.063A6.062 6.062 0 0 0 9.937 4.5ZM3 4.5a6.062 6.062 0 0 0 6.063 6.062A6.062 6.062 0 0 0 3 4.5Zm12.5 9a4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0-4.5 4.5 4.5 4.5 0 0 0-4.5-4.5 4.5 4.5 0 0 0 4.5-4.5Z"),
} as const;

type IconName = keyof typeof icons;

export function Icon({ name, size = 24, className = "" }: IconProps & { name: IconName }) {
  const icon = icons[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icon.d.split("M").filter(Boolean).map((seg, i) => (
        <path key={i} d={"M" + seg} />
      ))}
    </svg>
  );
}

export function Svg({ children, size = 24, className = "" }: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
