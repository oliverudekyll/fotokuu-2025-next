import localFont from "next/font/local";
import "./_reset.css";
import "./typography.css";
import "./variables.css";
import "./globals.css";

const tonka = localFont({
  src: "../public/assets/fonts/Tonka_2000VF.woff2",
  weight: "100 800",
  fallback: ["Helvetica, Arial, sans-serif"],
  axes: ["ital", "wdth"],
  variable: "--font-tonka",
  preload: true,
});

const gauch = localFont({
  src: [
    {
      path: "../public/assets/fonts/GauchvariablebetaVF.woff2",
      fallback: ["Helvetica, Arial, sans-serif"],
      weight: "400 1000",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Gauche0424-Italic.woff2",
      fallback: ["Helvetica, Arial, sans-serif"],
      style: "italic",
    },
  ],
  variable: "--font-gauch",
  preload: true,
});

export const metadata = {
  title: "Fotokuu 2025",
  description: "Kaasaegse kunsti biennaal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tonka.variable} ${gauch.variable}`}>{children}</body>
    </html>
  );
}
