import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "ETA Yangın referansları — Onlarca kurum, kuruluş ve sanayi tesisine yangın güvenliği hizmeti verdik. Güven duyulan müşteri portföyümüzü keşfedin.",
  alternates: { canonical: "https://www.etayangin.com.tr/referanslarimiz/" },
  openGraph: {
    url: "https://www.etayangin.com.tr/referanslarimiz/",
    title: "Referanslarımız | ETA Yangın",
    description:
      "Onlarca kurum ve kuruluşa yangın güvenliği hizmeti veren ETA Yangın'ın güven duyulan müşteri portföyü.",
  },
};

const references = Array.from({ length: 49 }, (_, i) => i + 1);

export default function ReferanslarimizPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <div className="relative h-52 md:h-64 w-full overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-linear-to-br from-red-950/80 via-neutral-900/90 to-neutral-900" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">
            ETA Yangın
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Referanslarımız
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Anasayfaya Dön
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <span className="w-1 h-8 rounded-full bg-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Güven Duyulan Kurumlar
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {references.map((n) => (
            <div
              key={n}
              className="flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:border-red-100 transition-all duration-300"
            >
              <div className="relative w-full h-20">
                <Image
                  src={`/reference-2/${n}.jpg`}
                  alt={`Referans ${n}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          {references.length} kuruma yangın güvenliği hizmeti sunduk.
        </p>
      </div>
    </main>
  );
}
