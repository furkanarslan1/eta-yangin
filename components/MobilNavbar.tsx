"use client";

import { navigations } from "@/lib/constants/navigation";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.098 1.523 5.821L.057 23.428a.75.75 0 0 0 .915.915l5.607-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.518-5.16-1.42l-.37-.22-3.329.871.871-3.33-.22-.37A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function NavBtn({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative z-10 flex flex-col items-center gap-0.5 group"
    >
      <div
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-white shadow-sm transition-transform duration-200 group-hover:scale-105"
      >
        <span className="text-red-600">
          {children}
        </span>
      </div>
      <span className="text-[9px] text-white">
        {label}
      </span>
    </Link>
  );
}

export default function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-88">
        <div className="relative flex items-center justify-between h-16 px-5 rounded-full bg-linear-to-br from-neutral-900 via-red-950/80 to-neutral-900 border border-red-800/30 shadow-2xl shadow-red-950/50">
          {/* Blob'lar kendi overflow-hidden kutusunda */}
          <div className="absolute inset-0 z-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-red-600/70 blur-2xl animate-blob-1" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-red-900/80 blur-2xl animate-blob-2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-red-700/60 blur-2xl animate-blob-3" />
          </div>
          {/* Mail */}
          <NavBtn
            href="mailto:info@etayangin.com.tr"
            label="Mail"
          >
            <Mail size={16} />
          </NavBtn>

          {/* Konum */}
          <NavBtn
            href="https://maps.google.com/?q=ETA+Yangın+Ankara"
            label="Konum"
            external
          >
            <MapPin size={16} />
          </NavBtn>

          {/* Orta boşluk */}
          <div className="relative z-10 w-14" />

          {/* Telefon */}
          <NavBtn
            href="tel:+903123953383"
            label="Ara"
          >
            <Phone size={16} />
          </NavBtn>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="relative z-10 flex flex-col items-center gap-0.5 group"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Menu size={16} className="text-red-600" />
            </div>
            <span className="text-[9px] text-white">Menü</span>
          </button>

          {/* Orta: WhatsApp yükseltilmiş */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6">
            <div className="relative w-14 h-14">
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: "#25D36640" }}
              />
              <Link
                href="https://wa.me/905448092050"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: "#25D366" }}
              >
                <WhatsAppIcon />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label="Menüyü kapat"
            className="fixed inset-0 z-40 bg-black/10"
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-menu"
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col overflow-hidden border-l border-white/10 bg-neutral-900 text-sm shadow-lg"
          >
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-red-800/40 blur-3xl animate-blob-1 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-red-900/35 blur-3xl animate-blob-2 pointer-events-none" />

            <div className="relative z-10 px-6 pt-6 pb-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <p className="font-bold tracking-wide text-base text-white">
                  ETA Yangın
                </p>
                <button
                  type="button"
                  aria-label="Kapat"
                  onClick={() => setOpen(false)}
                  className="text-white/75 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-2 px-3 py-4 flex-1">
              {navigations.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium backdrop-blur-sm border transition-all duration-200 ${
                    pathname === nav.href
                      ? "bg-red-600/30 border-red-500/40 text-white"
                      : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      pathname === nav.href ? "bg-red-400" : "bg-white/30"
                    }`}
                  />
                  {nav.name}
                </Link>
              ))}
            </div>

            <div className="relative z-10 px-6 py-5 border-t border-white/10">
              <a
                href="tel:+903123953383"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600/20 border border-red-500/30">
                  <Phone size={15} className="text-red-400" />
                </div>
                <div>
                  <p className="text-xs text-white/60 leading-none mb-0.5">
                    Bizi Arayın
                  </p>
                  <p className="text-sm font-medium text-white/80">
                    0312 395 38 83
                  </p>
                </div>
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
