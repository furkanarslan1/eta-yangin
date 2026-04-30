import Image from "next/image";

const logos = [
  { src: "/references/aselsan.jpg", alt: "Aselsan" },
  { src: "/references/enerjisa.jpg", alt: "Enerjisa" },
  { src: "/references/eti.jpg", alt: "Eti" },
  { src: "/references/tsk.jpg", alt: "TSK" },
  { src: "/references/sgk.jpg", alt: "SGK" },
  { src: "/references/netas.jpg", alt: "Netaş" },
  { src: "/references/yatas.jpg", alt: "Yataş" },
  { src: "/references/hosta.jpg", alt: "Hosta" },
  { src: "/references/otelcilik.jpg", alt: "Otelcilik" },
  { src: "/references/saglık-bak.jpg", alt: "Sağlık Bakanlığı" },
  { src: "/references/devlet-opera-bale.jpg", alt: "Devlet Opera ve Balesi" },
  { src: "/references/inonu-üni.jpg", alt: "İnönü Üniversitesi" },
  { src: "/references/golbası-bel.jpg", alt: "Gölbaşı Belediyesi" },
  { src: "/references/muhasebeciler-birl.jpg", alt: "Muhasebeciler Birliği" },
  { src: "/references/nufus-müd.jpg", alt: "Nüfus Müdürlüğü" },
  { src: "/references/büyük-miilet.jpg", alt: "Büyük Millet" },
  { src: "/references/sutb.jpg", alt: "SUTB" },
  { src: "/references/2-166x130.jpg", alt: "Referans" },
];

export default function References() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 mb-10">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Referanslarımız
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Sol ve sağ kenar silikleştirme */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-12 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative h-24 w-44 shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}