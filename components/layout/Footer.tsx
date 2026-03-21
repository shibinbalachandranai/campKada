import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Explore",
    links: [
      { href: "/shop", label: "Shop Gear" },
      { href: "/rentals", label: "Rent Gear" },
      { href: "/services", label: "Guided Experiences" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/60 bg-bark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo.png" alt="CampKada" width={32} height={32} className="rounded-md opacity-90" />
              <span className="text-lg font-bold tracking-tight">CampKada</span>
            </Link>
            <p className="mt-3 text-sm text-cream/70 max-w-xs">
              Gear, rentals, and guided experiences for outdoor lovers across India.
            </p>
          </div>

          {/* Nav sections */}
          {sections.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-3">
                {title}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} CampKada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
