import type { ResourceData } from "@/lib/types";

export const resources: ResourceData[] = [
  {
    slug: "pizza-box-dimensions",
    name: "Pizza Box Dimensions",
    description: "Standard and custom pizza box dimension reference for procurement and operations teams.",
  },
  {
    slug: "pizza-box-thickness",
    name: "Pizza Box Thickness",
    description: "Understanding flute thickness, wall grade, and how it affects structural performance.",
  },
  {
    slug: "corrugated-grades",
    name: "Corrugated Grades Explained",
    description: "B-flute, E-flute, double-wall — a practical guide to corrugated board grades for pizza boxes.",
  },
  {
    slug: "b-flute-vs-e-flute",
    name: "B-Flute vs E-Flute Pizza Boxes",
    description: "Compare B-flute and E-flute corrugated board for pizza box applications.",
  },
  {
    slug: "pizza-box-cost",
    name: "Pizza Box Cost Guide",
    description: "How pizza box cost is calculated — material, print, volume, freight, and total landed cost.",
  },
  {
    slug: "pizza-box-printing",
    name: "Pizza Box Printing Guide",
    description: "Flexo, offset, digital — understanding printing processes and their trade-offs for pizza boxes.",
  },
  {
    slug: "moq-guide",
    name: "MOQ Guide for Pizza Boxes",
    description: "How to align minimum order quantities with your demand forecast and procurement model.",
  },
  {
    slug: "lead-times",
    name: "Pizza Box Lead Times",
    description: "Typical production and delivery lead times for stock, semi-custom, and fully custom pizza boxes.",
  },
  {
    slug: "fda-compliance",
    name: "FDA Compliance for Pizza Boxes",
    description: "Food contact compliance requirements and documentation for pizza packaging buyers.",
  },
  {
    slug: "fsc-certification",
    name: "FSC Certification Guide",
    description: "What FSC certification means for pizza box buyers and how to request certified materials.",
  },
  {
    slug: "how-to-store-pizza-boxes",
    name: "How to Store Pizza Boxes",
    description: "Best practices for storing bulk pizza boxes in restaurant and warehouse environments.",
  },
  {
    slug: "how-to-choose-pizza-boxes",
    name: "How to Choose Pizza Boxes",
    description: "A buyer's framework for selecting the right pizza box material, size, and print option.",
  },
];

export const resourceSlugs: string[] = resources.map((r) => r.slug);
export const resourceMap: Record<string, ResourceData> = Object.fromEntries(
  resources.map((r) => [r.slug, r])
);
