import { notFound } from "next/navigation";
import { products } from "@/lib/constants/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";

type Props = {
  params: Promise<{ kategori: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    kategori: product.href.replace("/", ""),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { kategori } = await params;
  const product = products.find((p) => p.href === `/${kategori}`);
  if (!product) return {};

  const BASE = "https://www.etayangin.com.tr";
  const url = `${BASE}${product.href}/`;
  const itemCount = product.items.length;
  const description = `ETA Yangın ${product.title} ürünleri — ${
    itemCount > 0
      ? `${itemCount} farklı ürün seçeneği ile`
      : "Profesyonel yangın güvenliği çözümleriyle"
  } Ankara'da hizmetinizdeyiz. Teklif almak için hemen iletişime geçin.`;

  return {
    title: product.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${product.title} | ETA Yangın`,
      description,
      images: product.categoryImage
        ? [{ url: product.categoryImage, alt: product.title }]
        : undefined,
    },
  };
}

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  const category = products.find((p) => p.href === `/${kategori}`);

  if (!category) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/urunlerimiz/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Kategorilere Dön
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {category.title}
        </h1>

        {category.items.length === 0 ? (
          <p className="text-gray-400">
            Bu kategori için ürünler yakında eklenecek.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group flex flex-col rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <ImageWithSkeleton
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="relative h-52 w-full bg-gray-50"
                />

                <div className="flex flex-col flex-1 p-4 gap-4">
                  <p className="text-sm font-semibold text-gray-800 leading-snug flex-1">
                    {item.title}
                  </p>
                  <a
                    href={`https://wa.me/905448092050?text=${encodeURIComponent(`Merhaba, "${item.title}" ürünü hakkında teklif almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl py-2.5 text-sm font-semibold text-white text-center bg-linear-to-r from-red-700 via-red-600 to-red-500 hover:from-red-800 hover:to-red-600 transition-all duration-300"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
