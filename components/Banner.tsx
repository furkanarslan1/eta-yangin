import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-red-950 to-neutral-900 py-16 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10">
        {/* Metin */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Ankara'nın Güvenilir Yangın Güvenliği Firması
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Yangın Söndürme <br className="hidden md:block" />
            <span className="text-red-400">Sistemleri</span> ve <br className="hidden md:block" />
            Güvenlik Ekipmanları
          </h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            FM200 gazlı söndürme, davlumbaz söndürme, yangın tüpleri, itfaiye
            malzemeleri ve iş güvenliği ekipmanlarında ISO&nbsp;9001:2015
            belgeli profesyonel hizmet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/905448092050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 transition-colors duration-200"
            >
              Teklif Alın
            </a>
            <Link
              href="/urunlerimiz"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 hover:border-white/50 text-white font-semibold px-6 py-3 transition-colors duration-200"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>

        {/* Resim */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-115 lg:h-115 animate-float">
            <Image
              src="/yangin-no-bg.webp"
              alt="Yangın söndürme tüpü ve güvenlik ekipmanları"
              fill
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 460px"
              className="object-contain drop-shadow-2xl"
              fetchPriority="low"
            />
          </div>
        </div>
      </div>
    </section>
  );
}