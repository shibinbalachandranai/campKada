import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

const offerings = [
  {
    href: "/shop",
    label: "Shop",
    emoji: "🛒",
    title: "Gear Shop",
    description: "Backpacks, tents, sleeping bags, headlamps and more — gear you'll use for years.",
    cta: "Browse Gear",
    bg: "bg-forest",
  },
  {
    href: "/rentals",
    label: "Rentals",
    emoji: "🎒",
    title: "Gear Rentals",
    description: "Rent premium gear for your next trip without the commitment of buying.",
    cta: "Rent Gear",
    bg: "bg-bark",
  },
  {
    href: "/services",
    label: "Services",
    emoji: "🏔️",
    title: "Guided Experiences",
    description: "Treks, climbs, and river adventures led by certified local guides.",
    cta: "Explore Experiences",
    bg: "bg-forest",
  },
];

export default function OfferingsOverview() {
  return (
    <section className="bg-sand-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Everything for the Outdoors"
          subtitle="One platform — gear to buy, gear to rent, and experiences to remember."
          centered
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {offerings.map(({ href, emoji, title, description, cta, bg }) => (
            <Link
              key={href}
              href={href}
              className="group relative overflow-hidden rounded-2xl p-8 text-white flex flex-col gap-4 hover:shadow-xl transition-shadow"
            >
              <div className={`absolute inset-0 ${bg} transition-opacity group-hover:opacity-90`} />
              <div className="relative">
                <span className="text-4xl">{emoji}</span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:gap-2 transition-all">
                  {cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
