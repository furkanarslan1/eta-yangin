import Image from "next/image";
import Link from "next/link";

const systems = [
  {
    title: "FM200 Gazlı Söndürme",
    description:
      "Sunucu odaları, arşivler ve elektrik panoları için hasar bırakmayan hızlı gazlı söndürme sistemleri.",
    href: "/yangin-sondurme-sistemleri/",
  },
  {
    title: "Sprinkler Sistemleri",
    description:
      "Otomatik algılama ve söndürme özelliğiyle binalarda sürekli aktif yangın koruma.",
    href: "/yangin-sondurme-sistemleri/",
  },
  {
    title: "Yangın Algılama & İhbar",
    description:
      "Duman, ısı ve alev dedektörleri ile erken uyarı panelleri. Adresli ve konvansiyonel sistemler.",
    href: "/yangin-algilama-ihbar-sistemleri/",
  },
  {
    title: "Davlumbaz Söndürme",
    description:
      "Mutfak ve endüstriyel davlumbazlar için özel tasarlanmış otomatik söndürme sistemleri.",
    href: "/yangin-sondurme-sistemleri/",
  },
  {
    title: "Oda Sızdırmazlık Testi",
    description:
      "Gazlı söndürme yapılan mahallerde gazın yeterli süre korunmasını doğrulayan test hizmeti.",
    href: "/oda-sizdirmazlik-testi/",
  },
  {
    title: "Yangın Dolabı & Hidrant",
    description:
      "TS EN 671 standartlarında yangın dolapları, yeraltı ve yerüstü hidrant sistemleri.",
    href: "/yangin-dolaplari-ve-hidrantlari/",
  },
  {
    title: "Yangın Kapısı & Merdiven",
    description:
      "Yangına dayanıklı çelik kapılar ve kaçış merdivenleri ile yapısal pasif yangın güvenliği.",
    href: "/yangin-kapisi-ve-merdivenleri/",
  },
];

export default function Banner2() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-20 px-6">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-red-800/30 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-red-900/25 blur-3xl animate-blob-2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-start gap-12">

        {/* Sol: Metin + Kart listesi */}
        <div className="flex-1">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Yangın Güvenliği Sistemleri
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Profesyonel <span className="text-red-400">Söndürme</span> ve{" "}
            Koruma Çözümleri
          </h2>
          <p className="text-neutral-300 text-base mb-8 max-w-lg">
            Binalara, tesislere ve sanayi alanlarına özel yangın söndürme
            sistemleri tasarlıyor, kurulum ve periyodik bakımını yapıyoruz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {systems.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group border-b border-white/10 hover:border-red-500/40 px-1 py-4 transition-all duration-200"
              >
                <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors mb-1">
                  {s.title}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sağ: Resim + kırmızı arka plan aksanı */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-lg">
            <div className="absolute -bottom-5 -left-5 w-4/5 h-4/5 bg-red-600 rounded-lg" />
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/optimized/banners/og-image-900.webp"
                alt="ETA Yangın - Ankara yangın söndürme sistemleri ve güvenlik ekipmanları"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
