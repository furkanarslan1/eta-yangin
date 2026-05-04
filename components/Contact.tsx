import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Adres",
    value: "İvedik OSB Mah. 1443. Cad. No: 9 Yenimahalle / ANKARA",
    href: "https://maps.google.com/?q=İvedik+OSB+Mah.+1443.+Cad.+No:9+Yenimahalle+ANKARA",
    external: true,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (312) 395 3383",
    href: "tel:+903123953383",
    external: false,
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "info@etayangin.com.tr",
    href: "mailto:info@etayangin.com.tr",
    external: false,
  },
];

export default function Contact() {
  return (
    <section className="relative w-full bg-white py-20 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-red-100/70 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-neutral-100 blur-3xl animate-blob-2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Bize Ulaşın
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            İletişim
          </h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto text-sm">
            Yangın güvenliği ürün ve hizmetleri hakkında bilgi almak için
            hemen iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* İletişim kartları */}
          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 bg-gray-50 hover:bg-white border border-gray-200 hover:border-red-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-red-600 shrink-0 transition-colors duration-300">
                  <Icon size={20} className="text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-900 leading-snug">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Harita */}
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm w-full h-72 md:h-full min-h-64">
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
    </section>
  );
}
