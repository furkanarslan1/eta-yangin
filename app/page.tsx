import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title:
    "ETA Yangın | Yangın Söndürme Sistemleri ve Güvenlik Ekipmanları - Ankara",
  description:
    "ETA Yangın — Ankara'da FM200 gazlı söndürme, davlumbaz söndürme sistemleri, yangın tüpleri, itfaiye malzemeleri ve iş güvenliği ekipmanları. ISO 9001:2015 belgeli profesyonel hizmet. Hemen teklif alın.",
  alternates: { canonical: "https://www.etayangin.com.tr" },
  openGraph: {
    url: "https://www.etayangin.com.tr",
    title:
      "ETA Yangın | Yangın Söndürme Sistemleri ve Güvenlik Ekipmanları - Ankara",
    description:
      "Ankara'da FM200, davlumbaz söndürme, yangın tüpü, itfaiye malzemeleri ve iş güvenliği ekipmanları. ISO 9001:2015 belgeli hizmet.",
  },
};
import ProductList from "@/components/ProductList";
import References from "@/components/References";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <ProductList />
      <Banner2 />
      <References />
      <Services />
    </div>
  );
}
