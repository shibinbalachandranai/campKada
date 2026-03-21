import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <div className="mb-8">
            <Image
              src="/Logo.png"
              alt="CampKada"
              width={160}
              height={160}
              className="rounded-2xl"
            />
          </div>

          <SectionHeading
            title="About CampKada"
            subtitle="We're a team of passionate outdoor enthusiasts who couldn't find a one-stop shop for all things adventure — so we built it."
            className="mb-10"
          />

          <div className="prose prose-bark max-w-none space-y-6 text-bark/70 leading-relaxed">
            <p>
              CampKada started with a simple frustration: every time we planned a trip, we'd spend hours across multiple websites trying to find quality gear, a reliable rental, and an experienced guide. There had to be a better way.
            </p>
            <p>
              So in 2021, we built CampKada — an outdoor lifestyle platform that combines a curated gear shop, a short-term rental service, and guided experiences, all in one place. Every product we stock and every route we guide has been tested by our own team on actual trails.
            </p>
            <p>
              We partner with local guides who have deep knowledge of their regions, and we only stock gear from brands we personally trust. Our rental fleet is maintained after every use, so you can be confident in what you pick up.
            </p>
            <p>
              Whether you're a first-time camper or a seasoned mountaineer, CampKada is designed to meet you where you are and help you get outside more often, with less friction.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-forest p-7 text-white">
              <h3 className="text-lg font-bold mb-3">Our Mission</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Make camping accessible to everyone by providing reliable gear, transparent pricing, and simple experiences.
              </p>
            </div>
            <div className="rounded-2xl bg-bark p-7 text-white">
              <h3 className="text-lg font-bold mb-3">Our Vision</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                To build India&apos;s most trusted outdoor brand and inspire responsible, nature-first exploration.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "500+", label: "Happy Adventurers" },
              { value: "50+", label: "Gear Items" },
              { value: "20+", label: "Guided Routes" },
              { value: "5 yrs", label: "On the Trail" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-2xl bg-sand-light p-6 text-center">
                <p className="text-3xl font-extrabold text-forest">{value}</p>
                <p className="mt-1 text-sm text-bark/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
