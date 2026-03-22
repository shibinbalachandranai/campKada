import Image from "next/image";
import Link from "next/link";

const topProducts = [
  {
    title: "Camping Tents",
    subtitle: "Durable & Comfortable",
    image: "/images/home/camp_tents.png",
    href: "/shop",
  },
  {
    title: "Hiking Gear",
    subtitle: "Backpacks & Equipment",
    image: "/images/home/hiking_gear.png",
    href: "/shop",
  },
  {
    title: "Outdoor Gadgets",
    subtitle: "Tools & Accessories",
    image: "/images/home/outdoor_gadgets.png",
    href: "/shop",
  },
];

const services = [
  {
    title: "Gear Rentals",
    subtitle: "Rent Quality Camping Gear",
    image: "/images/home/gear_rentals.png",
    href: "/rentals",
  },
  {
    title: "Guided Tours",
    subtitle: "Exciting Adventures",
    image: "/images/home/guided_tours.png",
    href: "/services",
  },
  {
    title: "24/7 AI Assistant",
    subtitle: "Ask us anything, anytime",
    image: "/images/home/Ai_assistant.png",
    href: "/contact",
  },
];

function CardGrid({
  items,
  heading,
}: {
  items: typeof topProducts;
  heading: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bark mb-8 text-center">{heading}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map(({ title, subtitle, image, href }) => (
          <div
            key={title}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand/60 transition hover:shadow-md hover:ring-sand"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-light">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col items-center gap-1 p-5 text-center">
              <h3 className="font-semibold text-bark">{title}</h3>
              <p className="text-sm text-bark/55 mb-3">{subtitle}</p>
              <Link
                href={href}
                className="rounded-full bg-forest px-5 py-1.5 text-sm font-medium text-white transition hover:bg-forest/85"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col gap-16">
        <CardGrid items={topProducts} heading="Our Top Products" />
        <CardGrid items={services} heading="Our Services" />
      </div>
    </section>
  );
}
