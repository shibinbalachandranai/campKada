import { products } from "@/lib/data/products";
import ItemCard from "@/components/shared/ItemCard";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <SectionHeading
        title="Gear Shop"
        subtitle="Curated outdoor gear — tested, trusted, trail-ready."
        className="mb-10"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ItemCard key={product.slug} variant="shop" item={product} />
        ))}
      </div>
    </div>
  );
}
