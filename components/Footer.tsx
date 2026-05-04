import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { navigations } from "@/lib/constants/navigation";

const contactItems = [
  {
    icon: MapPin,
    value: "İvedik OSB Mah. 1443. Cad. No: 9 Yenimahalle / ANKARA",
    href: "https://maps.google.com/?q=İvedik+OSB+Mah.+1443.+Cad.+No:+9+Yenimahalle+ANKARA",
  },
  {
    icon: Phone,
    value: "+90 (312) 395 3383",
    href: "tel:+903123953383",
  },
  {
    icon: Mail,
    value: "info@etayangin.com.tr",
    href: "mailto:info@etayangin.com.tr",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-white/5">
      {/* Ana içerik */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marka */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src="/logo.png"
              alt="ETA Yangın Logo"
              width={178}
              height={125}
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold text-white tracking-wide">
              ETA YANGIN
            </span>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            Yangın güvenliği alanında ISO 9001:2015 belgeli hizmet anlayışıyla
            kurumsal ve bireysel müşterilerimize güvenilir çözümler sunuyoruz.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Image
              src="/iso.webp"
              alt="ISO 9001:2015"
              width={56}
              height={56}
              className="rounded-lg object-contain bg-white/10 p-1"
              style={{ width: "auto", height: "56px" }}
            />
            <span className="text-xs text-white/60 leading-snug">
              ISO 9001:2015<br />Kalite Yönetim Sistemi
            </span>
          </div>
        </div>

        {/* Hızlı linkler */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
            Sayfalar
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navigations.map((nav) => (
              <li key={nav.href}>
                <Link
                  href={nav.href}
                  className="text-sm text-white/70 hover:text-red-300 transition-colors duration-200"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
            İletişim
          </h3>
          <ul className="flex flex-col gap-4">
            {contactItems.map(({ icon: Icon, value, href }) => (
              <li key={value}>
                <a
                  href={href}
                  target={href.startsWith("https") ? "_blank" : undefined}
                  rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 text-sm text-white/70 hover:text-red-300 transition-colors duration-200"
                >
                  <Icon size={15} className="shrink-0 mt-0.5 text-red-400 group-hover:text-red-300 transition-colors" />
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ETA Yangın. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/55">
            Yangın Güvenliği · Ankara
          </p>
        </div>
      </div>
    </footer>
  );
}
