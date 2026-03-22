import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import type { Product, Rental, Service } from "@/types";

type ShopProps = { variant: "shop"; item: Product };
type RentalProps = { variant: "rental"; item: Rental };
type ServiceProps = { variant: "service"; item: Service };
type ItemCardProps = ShopProps | RentalProps | ServiceProps;

const basePaths = { shop: "/shop", rental: "/rentals", service: "/services" };

export default function ItemCard({ variant, item }: ItemCardProps) {
  const href = `${basePaths[variant]}/${item.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand/60 transition hover:shadow-md hover:ring-sand"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-light">
        {item.images[0] ? (
          <Image
            src={item.images[0]}
            alt={item.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sand">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 gap-2">
        <h3 className="font-semibold text-bark group-hover:text-forest transition-colors line-clamp-2">
          {item.name}
        </h3>
        <p className="text-sm text-bark/60 line-clamp-2 flex-1">
          {item.description}
        </p>

        {/* Variant-specific metadata */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          {variant === "shop" && (
            <>
              <span className="text-sm text-bark/50 italic">Enquire for pricing</span>
              <Badge variant={(item as Product).inStock ? "in-stock" : "out-of-stock"}>
                {(item as Product).inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </>
          )}
          {variant === "rental" && (
            <>
              <span className="text-sm text-bark/50 italic">Enquire for pricing</span>
              <Badge variant={(item as Rental).available ? "available" : "unavailable"}>
                {(item as Rental).available ? "Available" : "Unavailable"}
              </Badge>
            </>
          )}
          {variant === "service" && (
            <>
              <Badge variant={(item as Service).difficulty}>
                {(item as Service).difficulty.charAt(0).toUpperCase() + (item as Service).difficulty.slice(1)}
              </Badge>
              <Badge variant="duration">{(item as Service).duration}</Badge>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
