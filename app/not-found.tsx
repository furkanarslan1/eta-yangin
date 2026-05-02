import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-neutral-900 flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-red-800/40 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-900/35 blur-3xl animate-blob-2 pointer-events-none" />

      <div className="relative z-10 text-center">
        <p className="text-8xl font-black text-red-500 leading-none mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-neutral-400 mb-8 max-w-sm mx-auto">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 transition-colors duration-200"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </main>
  );
}
