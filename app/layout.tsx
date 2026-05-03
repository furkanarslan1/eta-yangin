import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobilNavbar";

const BASE_URL = "https://www.etayangin.com.tr";
const GA_ID = "G-5LHF2CLBCV";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "ETA Yangın | Yangın Söndürme Sistemleri ve Güvenlik Ekipmanları - Ankara",
    template: "%s | ETA Yangın",
  },
  description:
    "ETA Yangın ve Güvenlik Teknolojileri — Ankara'da FM200 gazlı söndürme, yangın tüpleri, davlumbaz söndürme, itfaiye malzemeleri, yangın dolapları ve iş güvenliği ekipmanları. ISO 9001:2015 belgeli profesyonel hizmet.",
  keywords: [
    "yangın söndürme sistemleri",
    "FM200 yangın söndürme",
    "HFC 227ea söndürme",
    "yangın tüpü",
    "yangın söndürme cihazları",
    "itfaiye malzemeleri",
    "yangın dolapları",
    "yangın algılama sistemleri",
    "iş güvenliği ekipmanları",
    "davlumbaz söndürme sistemi",
    "karbondioksit söndürme",
    "sulu söndürme sistemi",
    "ankara yangın güvenliği",
    "ETA Yangın",
    "yangın güvenliği ankara",
    "FM200 gaz dolumu ankara",
  ],
  authors: [{ name: "ETA Yangın", url: BASE_URL }],
  creator: "ETA Yangın",
  publisher: "ETA Yangın",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "ETA Yangın",
    title:
      "ETA Yangın | Yangın Söndürme Sistemleri ve Güvenlik Ekipmanları - Ankara",
    description:
      "Ankara'da FM200, davlumbaz söndürme, yangın tüpü, itfaiye malzemeleri ve iş güvenliği ekipmanları. ISO 9001:2015 belgeli hizmet.",
    images: [
      {
        url: "/optimized/og-image.webp",
        width: 1200,
        height: 630,
        alt: "ETA Yangın - Yangın Söndürme Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETA Yangın | Yangın Söndürme Sistemleri - Ankara",
    description:
      "Ankara'da FM200, davlumbaz söndürme, yangın tüpü, itfaiye malzemeleri ve iş güvenliği ekipmanları.",
    images: ["/optimized/og-image.webp"],
  },
  verification: {
    yandex: "3a0882b6d65a537c",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "ETA Yangın ve Güvenlik Teknolojileri Mühendislik San. Tic. Ltd. Şti.",
  alternateName: "ETA Yangın",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  description:
    "Ankara'da yangın söndürme sistemleri, FM200 gazlı sistemler, davlumbaz söndürme, itfaiye malzemeleri, yangın dolapları ve iş güvenliği ekipmanları. ISO 9001:2015 belgeli hizmet.",
  telephone: "+903123953383",
  email: "info@etayangin.com.tr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İvedik OSB Mah. 1443. Cad. No: 9",
    addressLocality: "Yenimahalle",
    addressRegion: "Ankara",
    postalCode: "06378",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9534,
    longitude: 32.776,
  },
  hasMap: `https://maps.google.com/?q=İvedik+OSB+Mah.+1443.+Cad.+No:9+Yenimahalle+Ankara`,
  areaServed: {
    "@type": "City",
    name: "Ankara",
  },
  priceRange: "$$",
  currenciesAccepted: "TRY",
  paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Yangın Güvenliği Ürün ve Hizmetleri",
    itemListElement: [
      "Yangın Söndürme Cihazları",
      "FM200 Gazlı Söndürme Sistemleri",
      "Davlumbaz Söndürme Sistemleri",
      "Yangın Dolapları ve Hidrantları",
      "İtfaiye Malzemeleri",
      "Yangın Algılama ve İhbar Sistemleri",
      "İş Güvenliği Ekipmanları",
      "Acil Aydınlatma ve Yönlendirme",
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header>
          <Header />
        </header>
        {children}
        <Footer />
        <MobileNavbar />
      </body>

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </html>
  );
}
