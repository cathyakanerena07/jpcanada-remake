import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Libre_Baskerville,
  Jost,
  Noto_Serif_JP,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";
import "./responsive.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp-serif",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jp-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JPcanada — カナダで、もうひとつの日常を。",
  description: "カナダに住む日本人のためのコミュニティ。掲示板、求人、賃貸、イベント情報。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${libreBaskerville.variable} ${jost.variable} ${notoSerifJP.variable} ${notoSansJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
