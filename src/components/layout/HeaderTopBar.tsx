"use client";

import { useState, useEffect } from "react";

const WEATHER_CODES: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌦️",
  56: "🌦️",
  57: "🌦️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  66: "🌧️",
  67: "🌧️",
  71: "❄️",
  73: "❄️",
  75: "❄️",
  77: "❄️",
  80: "🌦️",
  81: "🌦️",
  82: "🌦️",
  85: "❄️",
  86: "❄️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️",
};

function getWeatherEmoji(code: number): string {
  return WEATHER_CODES[code] || "🌤️";
}

function getTime(): string {
  return new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
}

export default function HeaderTopBar() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTime());

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
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-premium-green-soft text-white/90 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-8 md:h-9">
        <div className="flex items-center gap-4 md:gap-6">
          {weather && (
            <span className="flex items-center gap-1.5">
              <span>{getWeatherEmoji(weather.code)}</span>
              <span className="hidden sm:inline font-medium">{weather.temp}°C</span>
              <span className="hidden md:inline text-white/70">— Chtouka Ait Baha</span>
            </span>
          )}
          {!weather && (
            <span className="text-white/50 text-[10px] sm:text-xs">Chargement…</span>
          )}
          <span className="hidden sm:flex items-center gap-1.5">
            <span>📞</span>
            <a
              href="tel:+212528815207"
              className="hover:text-white/80 transition-colors"
            >
              +212 5 28 81 52 07
            </a>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <span>✉️</span>
            <a
              href="mailto:ste.agristep@gmail.com"
              className="hover:text-white/80 transition-colors"
            >
              ste.agristep@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-medium">
          <span>🕐</span>
          <span className="tabular-nums">{time}</span>
        </div>
      </div>
    </div>
  );
}