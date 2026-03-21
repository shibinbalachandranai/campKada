import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "western-ghats-3day-trek",
    name: "Western Ghats 3-Day Trek",
    description:
      "A guided 3-day trail through misty rainforest, river crossings, and scenic ridgelines in the Western Ghats. All meals and camp setup included.",
    difficulty: "intermediate",
    duration: "3 days / 2 nights",
    images: ["/images/services/western-ghats-3day-trek.avif"],
    highlights: [
      "Guided by certified naturalists",
      "All meals included",
      "Camping gear provided",
      "Wildlife spotting opportunities",
    ],
  },
  {
    slug: "beginner-rock-climbing",
    name: "Beginner Rock Climbing Day",
    description:
      "Learn the basics of rock climbing on a natural outdoor face under expert instruction. Harness, helmet, and chalk bag provided.",
    difficulty: "beginner",
    duration: "1 day",
    images: ["/images/services/beginner-rock-climbing.jpg"],
    highlights: [
      "Certified climbing instructor",
      "All safety gear included",
      "Max 6 participants per batch",
      "No prior experience needed",
    ],
  },
  {
    slug: "coorg-cycling-tour",
    name: "Coorg Coffee Estate Cycling Tour",
    description:
      "Cycle through Coorg's rolling coffee estates, spice plantations, and tribal villages on a curated 40 km route.",
    difficulty: "intermediate",
    duration: "1 day",
    images: ["/images/services/coorg-cycling-tour.jpg"],
    highlights: [
      "Hybrid bicycles provided",
      "Guided by a local naturalist",
      "Plantation visit included",
      "Lunch at a homestay",
    ],
  },
  {
    slug: "himalayan-base-camp-7day",
    name: "Himalayan Base Camp — 7-Day Expedition",
    description:
      "A challenging 7-day high-altitude trek reaching 4,200 m. Acclimatisation days built in, certified mountain guide, and satellite communication.",
    difficulty: "advanced",
    duration: "7 days / 6 nights",
    images: ["/images/services/himalayan-base-camp-7day.jpg"],
    highlights: [
      "Certified high-altitude guide",
      "Acclimatisation protocol included",
      "Satellite communicator on all days",
      "Porters for base luggage",
    ],
  },
  {
    slug: "white-water-rafting-rishikesh",
    name: "White Water Rafting — Rishikesh",
    description:
      "Grade 3–4 rapids on the Ganges with an experienced rafting guide. Includes safety briefing, all equipment, and riverside lunch.",
    difficulty: "intermediate",
    duration: "Half day",
    images: ["/images/services/white-water-rafting-rishikesh.webp"],
    highlights: [
      "Grade 3–4 rapids",
      "All rafting gear provided",
      "Riverside lunch included",
      "Minimum age: 14 years",
    ],
  },
  {
    slug: "night-sky-photography-workshop",
    name: "Night Sky Photography Workshop",
    description:
      "A hands-on astrophotography workshop at a dark-sky site. Learn long-exposure Milky Way photography with a professional photographer.",
    difficulty: "beginner",
    duration: "1 night",
    images: ["/images/services/night-sky-photography-workshop.jpg"],
    highlights: [
      "Professional photographer guide",
      "Camera tripod provided",
      "Dark-sky location (3 hr from Bangalore)",
      "Post-processing tips shared",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
