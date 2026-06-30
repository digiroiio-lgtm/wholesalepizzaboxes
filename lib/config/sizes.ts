import type { SizeData } from "@/lib/types";

export const sizes: SizeData[] = [
  {
    slug: "8-inch",
    name: "8 Inch Pizza Boxes",
    dimensions: '8" × 8" × 1.75"',
    commonUses: ["Personal pizzas", "Mini deep dish", "Dessert pizza"],
  },
  {
    slug: "10-inch",
    name: "10 Inch Pizza Boxes",
    dimensions: '10" × 10" × 1.75"',
    commonUses: ["Small pizzas", "Appetizer portions", "Specialty pies"],
  },
  {
    slug: "12-inch",
    name: "12 Inch Pizza Boxes",
    dimensions: '12" × 12" × 1.75"',
    commonUses: ["Medium pizzas", "Standard delivery", "Takeout"],
  },
  {
    slug: "14-inch",
    name: "14 Inch Pizza Boxes",
    dimensions: '14" × 14" × 1.75"',
    commonUses: ["Large pizzas", "Family size", "High-volume delivery"],
  },
  {
    slug: "16-inch",
    name: "16 Inch Pizza Boxes",
    dimensions: '16" × 16" × 1.75"',
    commonUses: ["Extra-large pizzas", "Party size", "Catering"],
  },
  {
    slug: "18-inch",
    name: "18 Inch Pizza Boxes",
    dimensions: '18" × 18" × 2"',
    commonUses: ["Extra-large party pizza", "Specialty formats"],
  },
  {
    slug: "20-inch",
    name: "20 Inch Pizza Boxes",
    dimensions: '20" × 20" × 2"',
    commonUses: ["Jumbo party pizza", "Catering", "Special events"],
  },
];

export const sizeSlugs: string[] = sizes.map((s) => s.slug);
export const sizeMap: Record<string, SizeData> = Object.fromEntries(
  sizes.map((s) => [s.slug, s])
);
