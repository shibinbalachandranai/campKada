import type { Product } from "@/types";

// Helper — converts a Google Drive share link file ID to a direct image URL
function gdrive(id: string): string {
  return `https://lh3.googleusercontent.com/d/${id}`;
}

export const products: Product[] = [
  {
    slug: "snatch-block",
    name: "Snatch Block",
    description:
      "A heavy-duty pulley used in vehicle recovery and lifting applications. Commonly used in off-road situations with a winch to double pulling power or change the direction of a winch line.",
    price: 2999,
    inStock: true,
    images: [gdrive("1uJXp7T-4yqvxhfcimDoIbKz46Db3mgsP")],
    category: "Vehicle Recovery",
    tags: ["off-road", "winch", "recovery", "4x4"],
  },
  {
    slug: "roof-top-tent",
    name: "Roof Top Tent (RTT)",
    description:
      "A roof-mounted camping tent installed on top of a vehicle (SUV, Jeep, pickup). Folds open to create an elevated sleeping space and includes a ladder for access and an awning for shade and rain protection.",
    price: 44999,
    inStock: true,
    images: [gdrive("1UgWV2ilvgyTLvtd7rZxiPO1MFq1ER8Ec")],
    category: "Rooftop Tents",
    tags: ["RTT", "overlanding", "vehicle camping", "SUV"],
  },
  {
    slug: "swag-tent",
    name: "Swag Tent (Single Person)",
    description:
      "A compact, all-in-one sleeping tent designed for one person. Combines a tent, mattress, and sleeping space in a single roll-up unit. Popular for overlanding and minimalist camping.",
    price: 8999,
    inStock: true,
    images: [gdrive("1OMzrOJhFyUZ2DUqsnwUtlQUUAFsSn5PP")],
    category: "Tents & Shelters",
    tags: ["solo", "minimalist", "camping", "overlanding"],
  },
  {
    slug: "pop-up-privacy-tent",
    name: "Pop-Up Privacy Tent",
    description:
      "A lightweight, instant-setup privacy shelter used outdoors for changing clothes, using a portable toilet, or showering. Uses a spring-loaded pop-up frame — opens in seconds without any assembly.",
    price: 2499,
    inStock: true,
    images: [gdrive("12x522qKvl75JRXNaej4LMMEq83-K9tsJ")],
    category: "Tents & Shelters",
    tags: ["privacy", "portable toilet", "changing tent", "camping"],
  },
  {
    slug: "family-camping-tent",
    name: "Family Camping Tent (10-Person)",
    description:
      "Spacious 10-person tent with a vestibule, 84\" center height, 14ft × 10ft floor area, and a 41.2 lb build designed for durability. Perfect for large groups and family basecamp setups.",
    price: 15999,
    inStock: true,
    images: [gdrive("1AvFK3oCeVKOrDzxUr0XqbR0xB9r3MzBt")],
    category: "Tents & Shelters",
    tags: ["family", "group", "basecamp", "large tent"],
  },
  {
    slug: "aluminum-hardshell-roof-top-tent",
    name: "Aluminum Hardshell Roof Top Tent",
    description:
      "A premium aluminum hardshell rooftop tent with full customization options — choose your size, body canvas, rainfly, ladder style, and LED strips. Aerodynamic when closed, spacious when open.",
    price: 64999,
    inStock: true,
    images: [gdrive("1cqqI4ehFm0ScWrDBvCkExM7Uln_MPFSJ")],
    category: "Rooftop Tents",
    tags: ["RTT", "hardshell", "aluminum", "overlanding", "custom"],
  },
  {
    slug: "camping-chairs",
    name: "Camping Chairs",
    description:
      "Brand-specialised outdoor camping chairs built for comfort and portability. Easy to set up and fold down — ideal for campsites, overlanding trips, and outdoor events.",
    price: 1999,
    inStock: true,
    images: [gdrive("1Dx46wODJgQlsW4o04XiZmpXqc2x0pMM5")],
    category: "Seating & Comfort",
    tags: ["chair", "camping", "portable", "seating"],
  },
  {
    slug: "off-road-vehicle-roof-rack",
    name: "Off-Road Vehicle Roof Rack",
    description:
      "Designed for Jeep Wrangler, Toyota FJ Cruiser, Mitsubishi Pajero, and similar off-road vehicles. Features a robust base and reinforcing ribs for heavy loads on rough terrain.",
    price: 18999,
    inStock: true,
    images: [gdrive("18x-l1NFv7AMLFpyKOV1mnE8a2PqQSoyu")],
    category: "Vehicle Accessories",
    tags: ["roof rack", "Jeep", "Toyota", "4x4", "off-road"],
  },
  {
    slug: "camping-lantern",
    name: "Camping Lantern",
    description:
      "Portable camping lantern for reliable outdoor lighting. Compact and easy to carry — suitable for campsites, tent interiors, and off-grid setups.",
    price: 1499,
    inStock: true,
    images: [gdrive("1uhLT3JJbOILnf0wVDdR9xhY2fkAwzENo")],
    category: "Lighting",
    tags: ["lantern", "lighting", "camping", "off-grid"],
  },
  {
    slug: "rope-device",
    name: "Rope Device",
    description:
      "Specialized technical gear compatible with rope diameters of 10–12 mm. Suitable for rappelling, rescue, and vertical adventure applications.",
    price: 3499,
    inStock: true,
    images: [gdrive("1WzUS3BpcG0X-zdYWrdnTJ2YuqvNQJNpo")],
    category: "Technical Gear",
    tags: ["rope", "rappelling", "rescue", "climbing"],
  },
  {
    slug: "mini-camping-stool",
    name: "Mini Camping Stool",
    description:
      "A portable, stable, and durable camping or fishing stool. Lightweight enough to throw in a pack — great for quick stops, fishing, or any trip where you need a seat.",
    price: 999,
    inStock: true,
    images: [gdrive("1Wvp1_obuuCRt-5c0T2OS-jqTpjOm4sWi")],
    category: "Seating & Comfort",
    tags: ["stool", "fishing", "portable", "camping"],
  },
  {
    slug: "hard-shell-roof-top-tent-clamshell",
    name: "Hard Shell Roof Top Tent (Clamshell)",
    description:
      "A premium rooftop tent with a rigid aluminum or ABS outer shell that opens like a clamshell using gas struts. Extremely fast setup, aerodynamic when closed, and weatherproof in all conditions.",
    price: 74999,
    inStock: true,
    images: [gdrive("1yoPXLNBTEGRrdN3isf3aOWWXYw6EVEOd")],
    category: "Rooftop Tents",
    tags: ["RTT", "clamshell", "hardshell", "gas struts", "overlanding"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
