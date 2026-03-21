import type { Rental } from "@/types";

export const rentals: Rental[] = [
  {
    slug: "mountaineering-tent-4p",
    name: "Mountaineering Tent 4P",
    description:
      "4-person expedition tent rated to heavy snowfall and 80 km/h winds. Includes footprint and guy lines.",
    pricePerDay: 499,
    available: true,
    images: ["/images/rentals/mountaineering-tent-4p.webp"],
    category: "Shelter",
    tags: ["tent", "group", "high altitude"],
  },
  {
    slug: "camera-tripod-carbon",
    name: "Carbon Fibre Camera Tripod",
    description:
      "Lightweight carbon tripod, 155 cm max height, twist-lock legs, ball head with Arca-Swiss plate.",
    pricePerDay: 299,
    available: true,
    images: ["/images/rentals/camera-tripod-carbon.jpg"],
    category: "Photography",
    tags: ["tripod", "photography", "landscape"],
  },
  {
    slug: "kayak-sit-on-top",
    name: "Sit-On-Top Kayak",
    description:
      "Stable 3-metre sit-on-top kayak ideal for lakes and calm rivers. Paddle, life jacket, and spray skirt included.",
    pricePerDay: 699,
    available: true,
    images: ["/images/rentals/kayak-sit-on-top.jpg"],
    category: "Water Sports",
    tags: ["kayak", "water", "lake"],
  },
  {
    slug: "camping-stove-set",
    name: "Camping Stove Set",
    description:
      "2-burner compact stove with windshield, 2 gas canisters, and a hard-anodised cookset for 4.",
    pricePerDay: 199,
    available: false,
    images: ["/images/rentals/camping-stove-set.jpg"],
    category: "Cooking",
    tags: ["stove", "cooking", "group"],
  },
  {
    slug: "snowshoes-adult",
    name: "Adult Snowshoes (pair)",
    description:
      "Aluminium-frame snowshoes for adults up to 100 kg. Bindings fit standard hiking boots. Poles optional add-on.",
    pricePerDay: 349,
    available: true,
    images: ["/images/rentals/snowshoes-adult.jpeg"],
    category: "Winter",
    tags: ["snowshoes", "winter", "hiking"],
  },
  {
    slug: "slr-binoculars-10x42",
    name: "10x42 SLR Binoculars",
    description:
      "Roof-prism binoculars with BAK4 glass, phase coating, and nitrogen-purged waterproofing. Perfect for wildlife.",
    pricePerDay: 249,
    available: true,
    images: ["/images/rentals/slr-binoculars-10x42.jpeg"],
    category: "Optics",
    tags: ["binoculars", "wildlife", "birding"],
  },
  {
    slug: "portable-solar-charger",
    name: "Portable Solar Charger 20W",
    description:
      "Foldable 20W solar panel with USB-A and USB-C ports. Charges a phone in 2 hours under direct sun.",
    pricePerDay: 149,
    available: true,
    images: ["/images/rentals/portable-solar-charger.jpg"],
    category: "Power",
    tags: ["solar", "charging", "off-grid"],
  },
];

export function getRentalBySlug(slug: string): Rental | undefined {
  return rentals.find((r) => r.slug === slug);
}
