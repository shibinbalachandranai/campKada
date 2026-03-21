import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-forest">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/80" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-sand/20 px-4 py-1 text-sm font-medium text-sand mb-6">
            Outdoor Gear · Rentals · Guided Experiences
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Adventure starts with the right gear.
          </h1>
          <p className="mt-6 text-lg text-cream/80 md:text-xl">
            CampKada equips you for every trail, summit, and river — whether you&apos;re buying, renting, or joining a guided experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-xl bg-sand px-7 py-3.5 text-sm font-semibold text-bark hover:bg-sand-light transition-colors"
            >
              Shop Gear
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
            >
              View Experiences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
