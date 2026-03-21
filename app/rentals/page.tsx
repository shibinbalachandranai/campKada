import { rentals } from "@/lib/data/rentals";
import ItemCard from "@/components/shared/ItemCard";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Rentals" };

export default function RentalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <SectionHeading
        title="Gear Rentals"
        subtitle="Premium gear, no long-term commitment. Rent for the duration you need."
        className="mb-10"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rentals.map((rental) => (
          <ItemCard key={rental.slug} variant="rental" item={rental} />
        ))}
      </div>
    </div>
  );
}
