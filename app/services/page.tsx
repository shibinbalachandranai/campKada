import { services } from "@/lib/data/services";
import ItemCard from "@/components/shared/ItemCard";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <SectionHeading
        title="Guided Experiences"
        subtitle="Expert-led treks, climbs, and river adventures across India."
        className="mb-10"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ItemCard key={service.slug} variant="service" item={service} />
        ))}
      </div>
    </div>
  );
}
