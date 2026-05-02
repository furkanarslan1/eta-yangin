"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/constants/hero";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  function goTo(index: number) {
    setCurrent(index);
    startTimer();
  }

  function goPrev() {
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  }

  function goNext() {
    goTo((current + 1) % heroSlides.length);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  }

  const slide = heroSlides[current];

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((s, index) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Siyah overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* İçerik */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-24 md:pb-0 text-center text-white">
        <h1 className="mb-4 max-w-3xl text-2xl font-bold leading-tight transition-all duration-700 md:text-6xl">
          {slide.title}
        </h1>
        <p className="max-w-xl text-sm text-gray-200 transition-all duration-700 md:text-xl">
          {slide.description}
        </p>
      </div>

      {/* Sol / Sağ oklar — sadece desktop */}
      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 md:flex items-center justify-center w-11 h-11 rounded-full border border-white/40 bg-black/30 text-white hover:bg-red-700 hover:border-red-700 transition-all duration-300"
        aria-label="Önceki slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 md:flex items-center justify-center w-11 h-11 rounded-full border border-white/40 bg-black/30 text-white hover:bg-red-700 hover:border-red-700 transition-all duration-300"
        aria-label="Sonraki slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide göstergeleri */}
      <div className="absolute bottom-28 md:bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="flex items-center justify-center"
            aria-label={`Slide ${index + 1}`}
          >
            {index === current ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              </span>
            ) : (
              <span className="h-3 w-3 rounded-full bg-white/50 transition-all" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}