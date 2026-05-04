import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/constants/products";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description:
    "ETA Yangın ürün kategorileri — FM200 gazlı sistemler, yangın tüpleri, dolaplar ve hidrantlar, itfaiye malzemeleri, yangın algılama sistemleri, iş güvenliği ekipmanları ve daha fazlası.",
  alternates: { canonical: "https://www.etayangin.com.tr/urunlerimiz/" },
  openGraph: {
    url: "https://www.etayangin.com.tr/urunlerimiz/",
    title: "Ürünlerimiz | ETA Yangın",
    description:
      "FM200 gazlı sistemler, yangın tüpleri, itfaiye malzemeleri ve iş güvenliği ekipmanları dahil tüm ürün kategorileri.",
  },
};

export default function UrunlerimizPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sayfa başlığı */}
      <div className="relative w-full py-24 px-6 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-red-900/20 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Tüm Kategoriler
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Ürünlerimiz
          </h1>
        </div>
      </div>

      {/* Kategori grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:border-red-400/60 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                {product.categoryImage ? (
                  <Image
                    src={product.categoryImage}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs text-neutral-600">
                      Resim yakında
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="text-sm font-semibold text-neutral-800 group-hover:text-red-600 transition-colors duration-300">
                  {product.title}
                </span>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-red-500 -translate-x-1 transition-all duration-300 group-hover:translate-x-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
