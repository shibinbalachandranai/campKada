import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, products } from "@/lib/data/products";
import Badge from "@/components/shared/Badge";
import EnquiryFormBase from "@/components/shared/EnquiryFormBase";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "Product Not Found" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-sand-light">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sand">
              <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-bark/50 uppercase tracking-widest mb-1">{product.category}</p>
            <h1 className="text-3xl font-bold text-bark">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-extrabold text-forest">{formatPrice(product.price)}</span>
              <Badge variant={product.inStock ? "in-stock" : "out-of-stock"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </div>

          <p className="text-bark/70 leading-relaxed">{product.description}</p>

          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>
          )}

          <div className="border-t border-sand/60 pt-6">
            <h2 className="text-lg font-semibold text-bark mb-4">Enquire About This Product</h2>
            <EnquiryFormBase type="shop" item={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
