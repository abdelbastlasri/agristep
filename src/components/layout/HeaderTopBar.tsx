"use client";

import { useState, useEffect, type ElementType } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, Clock, Sun, CloudSun, CloudRain, CloudSnow, CloudFog, CloudLightning } from "lucide-react";

function getWeatherIcon(code: number): { icon: ElementType; label: string } {
  if (code === 0) return { icon: Sun, label: "Ensoleillé" };
  if (code <= 3) return { icon: CloudSun, label: "Partiellement nuageux" };
  if (code <= 48) return { icon: CloudFog, label: "Brumeux" };
  if (code <= 57) return { icon: CloudRain, label: "Bruine" };
  if (code <= 67) return { icon: CloudRain, label: "Pluie" };
  if (code <= 77) return { icon: CloudSnow, label: "Neige" };
  if (code <= 82) return { icon: CloudRain, label: "Averses" };
  if (code <= 86) return { icon: CloudSnow, label: "Neige" };
  if (code >= 95) return { icon: CloudLightning, label: "Orage" };
  return { icon: CloudSun, label: "Nuageux" };
}

function getTime(): string {
  return new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
}

export default function HeaderTopBar() {
  const t = useTranslations("header");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setMounted(true);
      setTime(getTime());
    }, 0);

    const timeInterval = setInterval(() => {
      setTime(getTime());
    }, 30000);

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=30.2196&longitude=-9.5338&current=temperature_2m,weather_code&timezone=Africa%2FCasablanca"
        );
        const data = await res.json();
        if (data?.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            code: data.current.weather_code,
          });
        }
      } catch {
        // silently fail — weather is optional
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 3600000);

    return () => {
      clearTimeout(mountTimer);
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative bg-premium-dark/80 text-premium-muted text-xs md:text-sm overflow-hidden border-b border-premium-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-9 py-1 gap-x-3 relative z-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {weather && (() => {
            const { icon: WeatherIcon, label } = getWeatherIcon(weather.code);
            return (
              <span className="flex items-center gap-1.5">
                <WeatherIcon size={14} className="text-premium-green" aria-label={label} />
                <span className="font-medium text-premium-text">{weather.temp}°C</span>
                <span className="text-premium-muted/60">— {t("location")}</span>
              </span>
            );
          })()}
          {!weather && (
            <span className="text-premium-muted/50 text-xs italic">{t("loading")}</span>
          )}
          <span className="hidden md:flex items-center gap-1.5">
            <Phone size={12} className="text-premium-green" />
            <a
              href="tel:+212666568879"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              +212 5 28 81 52 07
            </a>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Mail size={12} className="text-premium-green" />
            <a
              href="mailto:ste.agristep@gmail.com"
              className="hover:text-white transition-colors"
            >
contact@agristep.ma
            </a>
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-medium flex-shrink-0 text-premium-text">
          <Clock size={12} className="text-premium-green" />
          <span className="tabular-nums">{time}</span>
        </div>
      </div>
    </div>
  );
}
