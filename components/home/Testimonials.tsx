import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Priya Nair",
    location: "Bangalore",
    text: "Rented a tent and trekking poles for a Coorg trip — pristine condition, delivered on time. The guided trek was even better. Will be back!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    text: "The Western Ghats trek was an absolute highlight of my year. Small group, knowledgeable guide, and beautiful campsites. Highly recommend.",
    rating: 5,
  },
  {
    name: "Kavya Reddy",
    location: "Hyderabad",
    text: "Bought the Ultralight Tent and it's been on four trips already. Great quality and the team was super helpful in choosing the right size.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="From the Community"
          subtitle="Real adventurers, real experiences."
          centered
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ name, location, text, rating }) => (
            <div key={name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sand/60">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-bark/70 leading-relaxed">"{text}"</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-bark">{name}</p>
                <p className="text-xs text-bark/50">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
