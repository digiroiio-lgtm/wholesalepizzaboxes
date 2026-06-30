import type { GuideData } from "@/lib/types";

export const guides: GuideData[] = [
  {
    slug: "wholesale-pizza-box-buying-guide",
    name: "Wholesale Pizza Box Buying Guide",
    description: "Step-by-step guide for procurement teams buying wholesale pizza boxes for the first time or switching suppliers.",
  },
  {
    slug: "restaurant-packaging-guide",
    name: "Restaurant Packaging Guide",
    description: "How restaurants, pizzerias, and fast-casual operators should evaluate and source packaging programs.",
  },
  {
    slug: "private-label-pizza-box-guide",
    name: "Private Label Pizza Box Guide",
    description: "Everything distributors and brands need to know about building a private label pizza box program.",
  },
  {
    slug: "custom-printing-guide",
    name: "Custom Printing Guide",
    description: "Artwork requirements, print processes, color matching, and lead times for custom printed pizza boxes.",
  },
  {
    slug: "pizza-franchise-packaging-guide",
    name: "Pizza Franchise Packaging Guide",
    description: "How franchise operators manage brand-standard packaging across multiple locations.",
  },
  {
    slug: "foodservice-packaging-guide",
    name: "Foodservice Packaging Guide",
    description: "Packaging program strategies for large-scale foodservice operations and contract food companies.",
  },
];

export const guideSlugs: string[] = guides.map((g) => g.slug);
export const guideMap: Record<string, GuideData> = Object.fromEntries(
  guides.map((g) => [g.slug, g])
);
