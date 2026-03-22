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
            title="The Soul of a Journey"
            subtitle="Travel is not a hobby for us. It is a calling."
            className="mb-10"
          />

          {/* Story */}
          <div className="prose prose-bark max-w-none space-y-6 text-bark/70 leading-relaxed">
            <p>
              Born from real journeys through mountains, forests, snow, and star-filled nights, Camp Kada is inspired by moments when we wished we had the right gear to travel safer and better. Our treks to Kedarkantha and Everest Base Camp gifted us unforgettable views — and taught us powerful lessons.
            </p>
            <p>
              We learned that no journey is complete without proper planning and reliable equipment. That realization gave birth to Camp Kada — a place where all camping and trekking essentials come together under one roof, with uncompromised quality.
            </p>
            <p>
              Camp Kada doesn&apos;t just sell gear. We create journeys. We help create memories.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="mt-10 border-l-4 border-forest pl-6 italic text-bark/60 leading-relaxed">
            &ldquo;From the moment you pack your bag to the stories you bring back home — Camp Kada is your silent travel companion.&rdquo;
          </blockquote>

          {/* Mission & Vision */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-forest p-7 text-white">
              <h3 className="text-lg font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                <li>
                  <span className="font-semibold text-white">Elevating the Journey —</span> Provide high-quality, durable, and safe camping and outdoor adventure gear all under one roof for every travel enthusiast.
                </li>
                <li>
                  <span className="font-semibold text-white">Nature with Comfort —</span> Committed to respecting nature while transforming every journey into a seamless, comfortable, and unforgettable experience.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-bark p-7 text-white">
              <h3 className="text-lg font-bold mb-4">Our Vision</h3>
              <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                <li>
                  <span className="font-semibold text-white">India&apos;s Premier Choice —</span> Establish CampKada as India&apos;s most trusted and inspiring camping and outdoor lifestyle brand.
                </li>
                <li>
                  <span className="font-semibold text-white">Adventure as a Lifestyle —</span> Redefine camping, trekking, and off-road adventures — moving them beyond &ldquo;luxury&rdquo; to make them an accessible lifestyle for everyone.
                </li>
              </ul>
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
