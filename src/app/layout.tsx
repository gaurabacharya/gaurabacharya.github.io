import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  variable: "--font-flourish",
});

const SITE_TITLE = "Gaurab Acharya — AI Engineering Lead";
const SITE_DESCRIPTION =
  "Gaurab Acharya is an AI Engineering Lead building across the AI stack — data pipelines, retrieval systems and agents, and the web apps that put them in front of people.";
const THUMBNAIL = "/images/tumbnail.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurabacharya.github.io"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Gaurab Acharya",
    type: "website",
    images: [{ url: THUMBNAIL, width: 2880, height: 1528, alt: "Gaurab Acharya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [THUMBNAIL],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
      <body className="font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
