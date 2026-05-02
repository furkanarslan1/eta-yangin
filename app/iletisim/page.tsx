import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "ETA Yangın iletişim bilgileri — Ankara İvedik OSB Mah. 1443. Cad. No: 9, Yenimahalle. Tel: +90 312 395 3383. Yangın güvenliği ürün ve hizmetleri için hemen iletişime geçin.",
  alternates: { canonical: "https://www.etayangin.com.tr/iletisim/" },
  openGraph: {
    url: "https://www.etayangin.com.tr/iletisim/",
    title: "İletişim | ETA Yangın",
    description:
      "Ankara İvedik OSB'de hizmet veren ETA Yangın'a ulaşın. Tel: +90 312 395 3383 | info@etayangin.com.tr",
  },
};

const contactItems = [
  {
    icon: MapPin,
    label: "Adres",
    value: "İvedik OSB Mah. 1443. Cad. No: 9 Yenimahalle / ANKARA",
    href: "https://maps.google.com/?q=İvedik+OSB+Mah.+1443.+Cad.+No:+9+Yenimahalle+ANKARA",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (312) 395 3383",
    href: "tel:+903123953383",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "info@etayangin.com.tr",
    href: "mailto:info@etayangin.com.tr",
  },
];

export default function IletisimPage() {
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
            İletişim
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* İletişim bilgileri */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-8 rounded-full bg-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Bize Ulaşın</h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Yangın güvenliği, ürün ve hizmetlerimiz hakkında bilgi almak için
              aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Adres" ? "_blank" : undefined}
                  rel={label === "Adres" ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-red-600 shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-gray-800 leading-snug">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Google Harita */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-8 rounded-full bg-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Konumumuz</h2>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full h-80 md:h-96">
              <iframe
                title="ETA Yangın Konum"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=İvedik+OSB+Mah.+1443.+Cad.+No:9+Yenimahalle+Ankara&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
