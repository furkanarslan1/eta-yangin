"use client";
import { navigations } from "@/lib/constants/navigation";
import { products } from "@/lib/constants/products";
import { Phone } from "lucide-react";
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
      className={`fixed top-0 left-0 z-20 flex w-full items-center justify-center md:justify-around px-6 h-16 text-white transition-colors duration-300 ${
        scrolled ? "bg-red-700" : "bg-transparent"
      }`}
    >
      {/* BRAND */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="ETA Yangın logo"
          width={178}
          height={125}
          className="h-10 w-auto"
          fetchPriority="high"
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
          href="tel:+903123953383"
          className="flex items-center gap-1.5 hover:text-red-900 transition-all duration-300 group"
        >
          <Phone size={15} className="text-red-400 group-hover:text-red-900" />
          <span className="text-sm">Müşteri Hizmetleri</span>
        </a>
      </div>

    </div>
  );
}
