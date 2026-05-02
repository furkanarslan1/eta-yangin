import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "ETA Yangın hakkında — ISO 9001:2015 belgeli şirketimiz, müşteri memnuniyeti odaklı yangın güvenliği çözümleri sunar. Ankara merkezli uzman ekibimizle güvenilir, planlı ve zamanında hizmet veriyoruz.",
  alternates: { canonical: "https://www.etayangin.com.tr/hakkimizda/" },
  openGraph: {
    url: "https://www.etayangin.com.tr/hakkimizda/",
    title: "Hakkımızda | ETA Yangın",
    description:
      "ISO 9001:2015 belgeli ETA Yangın, müşteri memnuniyeti odaklı yangın güvenliği çözümleri sunan Ankara merkezli profesyonel bir firmadır.",
  },
};

const commitments = [
  "Yaptığımız çalışmalarda müşteri memnuniyetini her şeyden üstün tutmayı,",
  "Teknolojik gelişmeyi yakından takip ederek sürekli iyileştirme bilinciyle güvenilir, dürüst, planlı ve zamanında istenen hizmeti gerçekleştirmeyi,",
  "Kuruluşumuzda çalışan personelin gelişimini ve kariyerini ilerletmek için planlanan aralıklarla eğitimlere önem vererek eğitimli personel ile çalışmayı,",
  "Yasal şart ve mevzuatlara uygun hareket etmeyi,",
];

const qualityCommitments = [
  "Yaptığımız çalışmalarda müşteri memnuniyetini her şeyden üstün tutmayı,",
  "Teknolojik gelişmeyi yakından takip ederek sürekli iyileştirme bilinciyle güvenilir, dürüst, planlı ve zamanında istenen hizmeti gerçekleştirmeyi,",
  "Kuruluşumuzda çalışan personelin gelişimini ve kariyerini ilerletmek için planlanan aralıklarla eğitimlere önem vererek eğitimli personel ile çalışmayı,",
];

export default function HakkimizdaPage() {
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
            Hakkımızda
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Anasayfaya Dön
        </Link>

        {/* Hakkımızda bölümü */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-8 rounded-full bg-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Hakkımızda</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <p className="text-gray-600 leading-relaxed mb-8">
              Yaptığımız çalışmalarda müşteri memnuniyetini her şeyden üstün
              tutmayı, teknolojik gelişmeyi yakından takip ederek sürekli
              iyileştirme bilinciyle güvenilir, dürüst, planlı ve zamanında
              istenen hizmeti gerçekleştirmeyi; kuruluşumuzda çalışan personelin
              gelişimini ve kariyerini ilerletmek için planlanan aralıklarla
              eğitimlere önem vererek eğitimli personel ile çalışmayı ve yasal
              şart ve mevzuatlara uygun hareket etmeyi taahhüt ederiz.
            </p>

            <ul className="space-y-3">
              {commitments.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-red-500 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-red-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Genel Müdür
                </p>
                <p className="text-xs text-gray-400">ETA Yangın</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kalite Politikası bölümü */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-8 rounded-full bg-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Kalite Politikamız
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Metin kartı */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-gray-800">
                  ISO 9001:2015 Kalite Yönetim Sistemi
                </span>{" "}
                aracılığıyla kaliteyi olmazsa olmaz bir zorunluluk olarak
                görüyor ve bu çerçevede aşağıdakileri taahhüt ediyoruz:
              </p>

              <ul className="space-y-4">
                {qualityCommitments.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Genel Müdür
                  </p>
                  <p className="text-xs text-gray-400">ETA Yangın</p>
                </div>
              </div>
            </div>

            {/* ISO sertifika resmi */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src="/iso.webp"
                  alt="ISO 9001:2015 Sertifikası"
                  width={480}
                  height={640}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-gray-400 text-center">
                ISO 9001:2015 Kalite Yönetim Sistemi Belgesi
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}