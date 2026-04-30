import Link from "next/link";
import { products } from "@/lib/constants/products";
import { ArrowRight } from "lucide-react";

export default function ProductList() {
  return (
    <section className="relative w-full py-20 px-6 bg-neutral-900 overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-red-800/40 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-900/35 blur-3xl animate-blob-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-red-700/30 blur-3xl animate-blob-3 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ürün Kategorilerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:border-red-400/40 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold text-white/90 group-hover:text-red-400 transition-colors duration-300">
                {product.title}
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 text-red-400  -translate-x-1 transition-all duration-300  group-hover:translate-x-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
