"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigations } from "@/lib/constants/navigation";
import { products } from "@/lib/constants/products";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const alwaysRed = products.some((p) => p.href === pathname);
  const [scrolled, setScrolled] = useState(alwaysRed);

  useEffect(() => {
    if (alwaysRed) {
      setScrolled(true);
      return;
    }
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysRed]);

  return (
    <div
      className={`fixed top-0 left-0 z-20 flex w-full items-center justify-between md:justify-around px-6 h-16 text-white transition-colors duration-300 ${
        scrolled ? "bg-red-700" : "bg-transparent"
      }`}
    >
      {/* BRAND */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="eta-yangin-logo"
          width={90}
          height={90}
          style={{ width: "auto", height: "auto" }}
          priority
          loading="eager"
        />

        <span
          className={`text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${
            scrolled
              ? "text-white"
              : "bg-linear-to-r from-red-400 via-red-300 to-red-400 bg-clip-text text-transparent animate-gradient"
          }`}
        >
          ETA YANGIN
        </span>
      </Link>

      {/* Desktop: Linkler */}
      <div className="hidden md:flex items-center gap-6">
        {navigations.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`relative group text-white text-md font-medium tracking-wide pb-0.5 ${
              pathname === nav.href
                ? `border-b-2 ${scrolled ? "border-white" : "border-red-600"}`
                : ""
            }`}
          >
            {nav.name}
            {pathname !== nav.href && (
              <span
                className={`absolute left-1/2 bottom-0 h-0.5 w-0 group-hover:w-full group-hover:left-0 transition-all duration-500 ${scrolled ? "bg-white" : "bg-red-600"}`}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Desktop: İletişim */}
      <div
        className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl transition-colors duration-300 ${
          scrolled ? "bg-white text-red-600" : "bg-white text-red-600"
        }`}
      >
        <a
          href="tel:+905111111111"
          className="flex items-center gap-1.5 hover:text-red-900 transition-all duration-300 group"
        >
          <Phone size={15} className="text-red-400 group-hover:text-red-900" />
          <span className="text-sm">Müşteri Hizmetleri</span>
        </a>
      </div>

      {/* Mobil: Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Menüyü aç" className="text-white p-1">
              <Menu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            aria-describedby={undefined}
            className="w-72 p-0 bg-white border-neutral-200 flex flex-col"
          >
            {/* Üst: Marka + Kapat */}
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <SheetTitle className="font-bold tracking-wide text-base bg-linear-to-r from-red-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
                  Ayşe Yılmaz
                </SheetTitle>
                <SheetClose asChild>
                  <button
                    aria-label="Kapat"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-100"
                  >
                    ✕
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            {/* Navigasyon Linkleri */}
            <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
              {navigations.map((nav) => (
                <SheetClose asChild key={nav.href}>
                  <Link
                    href={nav.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      pathname === nav.href
                        ? "bg-red-600/10 text-red-600"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        pathname === nav.href
                          ? "bg-red-600"
                          : "bg-neutral-300 group-hover:bg-red-600"
                      }`}
                    />
                    {nav.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* Alt: Telefon */}
            <div className="px-6 py-5 border-t border-neutral-200">
              <a
                href="tel:+905111111111"
                className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600/10">
                  <Phone size={15} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 leading-none mb-0.5">
                    Bizi Arayın
                  </p>
                  <p className="text-sm font-medium text-neutral-800">
                    0511 111 11 11
                  </p>
                </div>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
