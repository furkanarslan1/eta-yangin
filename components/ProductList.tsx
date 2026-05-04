import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/constants/products";

export default function ProductList() {
  return (
    <section className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-red-100/70 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-200/50 blur-3xl animate-blob-2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ürün Kategorilerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:border-red-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Resim alanı */}
              <div className="relative h-44 w-full overflow-hidden bg-neutral-100">
                {product.categoryImage ? (
                  <Image
                    src={product.categoryImage}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs text-neutral-600">Resim yakında</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
              </div>

              {/* Başlık alanı */}
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="text-sm font-semibold text-neutral-800 group-hover:text-red-600 transition-colors duration-300">
                  {product.title}
                </span>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-red-500 -translate-x-1 transition-all duration-300 group-hover:translate-x-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
