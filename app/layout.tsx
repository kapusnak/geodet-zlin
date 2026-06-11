import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geodet-zlin.cz"),
  title: "Geodetické práce – Ing. Martin Šmíd | Geodet Zlín",
  description:
    "Geodetické práce ve Zlíně – katastr nemovitostí, inženýrská geodézie, vyhotovení geometrických plánů, vytýčení hranic pozemků a poradenství. Ing. Martin Šmíd, Zlín.",
  keywords: [
    "geodet Zlín",
    "geodetické práce",
    "katastr nemovitostí",
    "inženýrská geodézie",
    "geometrický plán",
    "vytýčení hranice pozemku",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.geodet-zlin.cz",
    siteName: "Geodetické práce – Ing. Martin Šmíd",
    title: "Geodetické práce – Ing. Martin Šmíd | Geodet Zlín",
    description:
      "Geodetické práce v katastru nemovitostí a inženýrské geodézii ve Zlíně. Geometrické plány, vytýčení hranic pozemků, poradenství.",
    images: [
      {
        url: "/images/leica-hero.png",
        width: 1024,
        height: 437,
        alt: "Totální stanice Leica na stavbě",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geodetické práce – Ing. Martin Šmíd | Geodet Zlín",
    description:
      "Geodetické práce v katastru nemovitostí a inženýrské geodézii ve Zlíně.",
    images: ["/images/leica-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Geodetické práce – Ing. Martin Šmíd",
  description:
    "Geodetické práce v katastru nemovitostí, inženýrská geodézie a poradenství v oblasti zeměměřictví.",
  url: "https://www.geodet-zlin.cz",
  telephone: "+420775986485",
  email: "smid.geodet@seznam.cz",
  vatID: "CZ830531438",
  identifier: "74843940",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Přístav 552",
    addressLocality: "Zlín",
    postalCode: "760 01",
    addressCountry: "CZ",
  },
  areaServed: "Zlínský kraj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
