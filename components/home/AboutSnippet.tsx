import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-forest">Our Story</span>
            <h2 className="mt-3 text-3xl font-bold text-bark md:text-4xl">
              Born from a love of the outdoors.
            </h2>
            <p className="mt-4 text-bark/70 leading-relaxed">
              CampKada started as a group of friends who couldn&apos;t find reliable gear or trustworthy guides for our weekend escapes. We built what we wished existed — a single place for gear, rentals, and guided adventures, backed by people who&apos;ve actually been on the trail.
            </p>
            <p className="mt-3 text-bark/70 leading-relaxed">
              Every product we stock, every route we guide, and every item in our rental catalogue has been personally tested and vetted. No fluff, no filler — just gear and experiences that work.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-light transition-colors"
            >
              Read our story
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "500+", label: "Happy Adventurers" },
              { value: "50+", label: "Gear Items" },
              { value: "20+", label: "Guided Routes" },
              { value: "5 yrs", label: "On the Trail" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-sand-light p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-forest">{value}</p>
                <p className="mt-1 text-sm text-bark/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
