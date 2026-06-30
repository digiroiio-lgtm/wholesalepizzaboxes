import type { IndustryData } from "@/lib/types";

export const industries: IndustryData[] = [
  {
    slug: "pizzerias",
    name: "Pizzerias",
    description: "Independent pizzerias need reliable wholesale pizza box supply with flexible custom print options that fit their brand without enterprise-scale MOQs.",
    painPoints: ["Retail pricing for commercial volumes", "Inconsistent local supplier quality", "No custom print option at small scale"],
    recommendedBoxes: [
      { label: "White Pizza Boxes", href: "/white-pizza-boxes" },
      { label: "Kraft Pizza Boxes", href: "/kraft-pizza-boxes" },
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
    ],
  },
  {
    slug: "pizza-chains",
    name: "Pizza Chains",
    description: "Multi-location chains require system-wide packaging standardisation, Pantone-matched brand colors, and volume pricing that supports chain economics.",
    painPoints: ["Color inconsistency across locations", "Supply shortages disrupting operations", "SKU proliferation without program management"],
    recommendedBoxes: [
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
      { label: "Premium Pizza Boxes", href: "/premium-pizza-boxes" },
      { label: "Pantone Matching", href: "/printing/pantone" },
    ],
  },
  {
    slug: "restaurant-groups",
    name: "Restaurant Groups",
    description: "Multi-concept restaurant groups need flexible packaging programs that can serve multiple brands from one supplier relationship.",
    painPoints: ["Multiple brand packaging from separate suppliers", "Inconsistent quality across brands", "Lack of consolidated procurement visibility"],
    recommendedBoxes: [
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
      { label: "White Pizza Boxes", href: "/white-pizza-boxes" },
    ],
  },
  {
    slug: "ghost-kitchens",
    name: "Ghost Kitchens",
    description: "Ghost kitchen operators need flexible, cost-effective packaging that supports multiple brands from one facility with fast turnaround options.",
    painPoints: ["Multi-brand packaging from one location", "Fast program change requirements", "Delivery-focused structural requirements"],
    recommendedBoxes: [
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
      { label: "Plain Pizza Boxes", href: "/plain-pizza-boxes" },
    ],
  },
  {
    slug: "frozen-pizza-manufacturers",
    name: "Frozen Pizza Manufacturers",
    description: "Frozen pizza packaging needs moisture resistance, cold-chain structural integrity, and retail shelf appeal with full regulatory compliance.",
    painPoints: ["Moisture barrier requirements for freezer environment", "Retail compliance and shelf dimensions", "FDA documentation for frozen food"],
    recommendedBoxes: [
      { label: "Clay-Coated Pizza Boxes", href: "/clay-coated-pizza-boxes" },
      { label: "Premium Pizza Boxes", href: "/premium-pizza-boxes" },
    ],
  },
  {
    slug: "food-distributors",
    name: "Food Distributors",
    description: "Packaging distributors need wholesale pizza box programs with factory-direct pricing, private label options, and reliable supply for their foodservice customer base.",
    painPoints: ["Margins compressed by middlemen", "Limited custom program support", "No private label options"],
    recommendedBoxes: [
      { label: "Wholesale Pizza Boxes", href: "/wholesale-pizza-boxes" },
      { label: "Private Label Pizza Boxes", href: "/private-label-pizza-boxes" },
    ],
  },
  {
    slug: "foodservice",
    name: "Foodservice Operators",
    description: "Institutional foodservice buyers need reliable, food-safe pizza boxes in bulk with consistent lead times for high-frequency programs.",
    painPoints: ["Inconsistent supplier lead times", "Volume pricing not reflecting actual scale", "Food-safety documentation gaps"],
    recommendedBoxes: [
      { label: "Wholesale Pizza Boxes", href: "/wholesale-pizza-boxes" },
      { label: "Bulk Pizza Boxes", href: "/bulk-pizza-boxes" },
    ],
  },
  {
    slug: "convenience-stores",
    name: "Convenience Stores",
    description: "C-store foodservice programs need durable pizza boxes for hot-hold and takeout formats with clean shelf presentation.",
    painPoints: ["Retail shelf presentation requirements", "Foodservice-quality at retail economics", "Small SKU footprint required"],
    recommendedBoxes: [
      { label: "White Pizza Boxes", href: "/white-pizza-boxes" },
      { label: "Plain Pizza Boxes", href: "/plain-pizza-boxes" },
    ],
  },
  {
    slug: "private-label",
    name: "Private Label Brands",
    description: "Private label pizza box programs allow distributors, retailers, and foodservice companies to brand packaging under their own name.",
    painPoints: ["Brand exclusivity requirements", "IP protection for custom designs", "MOQ alignment with distribution volume"],
    recommendedBoxes: [
      { label: "Private Label Pizza Boxes", href: "/private-label-pizza-boxes" },
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
    ],
  },
  {
    slug: "franchises",
    name: "Franchise Systems",
    description: "Franchise operators need packaging that meets franchisor brand standards while managing local supply logistics and controlling spend.",
    painPoints: ["Brand standards compliance complexity", "Local supply chain gaps", "Per-location ordering complexity"],
    recommendedBoxes: [
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
      { label: "Pantone Matching", href: "/printing/pantone" },
    ],
  },
];

export const industrySlugs: string[] = industries.map((i) => i.slug);
export const industryMap: Record<string, IndustryData> = Object.fromEntries(
  industries.map((i) => [i.slug, i])
);
