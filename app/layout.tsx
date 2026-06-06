import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "All4biz — partner w rozwoju projektów handlowych",
  description:
    "All4biz wspiera rozwój projektów handlowych, łącząc potrzeby rynku, właściwych partnerów i konkretne możliwości biznesowe w obszarach IT, bezpieczeństwa, edukacji i kultury.",
  keywords: [
    "All4biz",
    "projekty handlowe",
    "współpraca biznesowa",
    "pośrednictwo handlowe",
    "rozwój projektów",
    "IT",
    "bezpieczeństwo osobiste",
    "edukacja",
    "wydarzenia kulturalne",
    "Polska",
  ],
  openGraph: {
    title: "All4biz — partner w rozwoju projektów handlowych",
    description:
      "Projektowe podejście do współpracy biznesowej w obszarach IT, bezpieczeństwa, edukacji i kultury.",
    type: "website",
    locale: "pl_PL",
    siteName: "All4biz",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
