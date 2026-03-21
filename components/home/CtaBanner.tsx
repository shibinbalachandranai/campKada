import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-forest py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Ready for your next adventure?
        </h2>
        <p className="mt-4 text-lg text-cream/75">
          Browse gear, plan a rental, or book a guided experience — we&apos;ll handle the rest.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="rounded-xl bg-sand px-8 py-3.5 text-sm font-semibold text-bark hover:bg-sand-light transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
