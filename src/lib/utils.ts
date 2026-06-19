import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateWhatsAppUrl(
  phone: string,
  message: string
): string {
  const cleaned = phone.replace(/[+\s]/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
