import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safayarceramics.com"),
  title: {
    default: "Safayar Ceramics Pvt Ltd | Premium Q STONE Quartz Manufacturer India",
    template: "%s | Safayar Ceramics",
  },
  description:
    "Safayar Ceramics Pvt Ltd manufactures and exports premium engineered quartz stone (Q STONE brand) from Himatnagar, Gujarat, India. 97+ colours, 15,000 sq.mtr plant, international quality.",
  keywords: [
    "quartz stone manufacturer India",
    "Q Stone quartz",
    "Safayar Ceramics",
    "engineered quartz Gujarat",
    "quartz countertop supplier",
    "quartz export India",
    "kitchen countertop manufacturer",
    "quartz slab Himatnagar",
  ],
  authors: [{ name: "Safayar Ceramics Pvt Ltd" }],
  creator: "Safayar Ceramics Pvt Ltd",
  publisher: "Safayar Ceramics Pvt Ltd",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.safayarceramics.com",
    siteName: "Safayar Ceramics",
    title: "Safayar Ceramics Pvt Ltd | Premium Q STONE Quartz",
    description: "Premium engineered quartz stone manufacturer & exporter from Gujarat, India.",
    images: [{ url: "https://www.safayarceramics.com/img/logo.png", alt: "Safayar Ceramics" }],
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "your-google-verification-code" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Safayar Ceramics Pvt Ltd",
  alternateName: "Q STONE",
  url: "https://www.safayarceramics.com",
  logo: "https://www.safayarceramics.com/img/logo.png",
  description: "Premium engineered quartz stone manufacturer and exporter from Himatnagar, Gujarat, India.",
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "949/2 Gamdi-Viravada Road, Viravada, N.H. 08",
    addressLocality: "Himatnagar",
    postalCode: "383001",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-99099-99373",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  ],
  sameAs: ["https://www.facebook.com/Safayarceramics"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.safayarceramics.com/img/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
