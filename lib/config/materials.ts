import type { MaterialData } from "@/lib/types";

export const materials: MaterialData[] = [
  {
    slug: "white-board",
    name: "White Board",
    description:
      "White SBS (solid bleached sulfate) and white-top kraft board — the most popular pizza box substrate for clean presentation, superior print surfaces, and broad foodservice use.",
    specs: [
      { spec: "Board grade", detail: "SBS (C1S, C2S), white-top kraft" },
      { spec: "Strength", detail: "Excellent for standard pizza box applications" },
      { spec: "Food safety", detail: "FDA-compliant food contact grades available" },
      { spec: "Printability", detail: "Excellent — ideal for full-color flexo and offset" },
      { spec: "Cost", detail: "Mid-range; competitive at volume" },
      { spec: "Sustainability", detail: "Recyclable; FSC-certified grades available" },
    ],
    applications: ["Restaurant delivery boxes", "Chain pizza packaging", "Branded pizza boxes", "Full-color print programs"],
  },
  {
    slug: "kraft-board",
    name: "Kraft Board",
    description:
      "Natural unbleached kraft board — the eco-friendly choice for sustainable brands. Delivers structural performance with an authentic, natural aesthetic favoured by artisan and organic operators.",
    specs: [
      { spec: "Board grade", detail: "Natural kraft (unbleached), recycled kraft" },
      { spec: "Strength", detail: "Equivalent to white board at the same caliper" },
      { spec: "Food safety", detail: "Food-safe grades available; FDA-compliant" },
      { spec: "Printability", detail: "Good — warm tone printing; best for earth-tone palettes" },
      { spec: "Cost", detail: "Often cost-competitive; lower base than white SBS" },
      { spec: "Sustainability", detail: "Highly recyclable; FSC-certified widely available" },
    ],
    applications: ["Eco-friendly packaging programs", "Artisan pizzerias", "Organic food brands", "Natural grocery retail"],
  },
  {
    slug: "clay-coated-board",
    name: "Clay-Coated Board",
    description:
      "Clay-coated board provides a premium mineral-treated print surface enabling photo-realistic imagery and Pantone-accurate colors for luxury packaging programs.",
    specs: [
      { spec: "Board grade", detail: "Clay-coated SBS (C1S one side, C2S two sides)" },
      { spec: "Strength", detail: "Good; often laminated to corrugated for pizza boxes" },
      { spec: "Food safety", detail: "Food-safe coatings available; FDA-compliant" },
      { spec: "Printability", detail: "Superior — best substrate for offset, spot UV, and foil" },
      { spec: "Cost", detail: "Higher than uncoated stock; premium tier" },
      { spec: "Sustainability", detail: "Recyclable; FSC grades available" },
    ],
    applications: ["Premium restaurant packaging", "Luxury food brands", "Retail gourmet pizza boxes", "Award-quality print programs"],
  },
  {
    slug: "corrugated-board",
    name: "Corrugated Board",
    description:
      "Corrugated pizza box board provides backbone structural performance for delivery, transit, and stacking. Available in B-flute, E-flute, and double-wall configurations.",
    specs: [
      { spec: "Board grade", detail: "B-flute (3.5mm), E-flute (1.5mm), double-wall" },
      { spec: "Strength", detail: "Superior — primary choice for delivery and high-stack programs" },
      { spec: "Food safety", detail: "Food-contact grades available; FDA-compliant liners" },
      { spec: "Printability", detail: "Good — best with litho-laminated or coated outer liners" },
      { spec: "Cost", detail: "Competitive in volume programs" },
      { spec: "Sustainability", detail: "Highly recyclable; significant recycled fiber content" },
    ],
    applications: ["Pizza delivery boxes", "Heavy-duty programs", "Deep dish boxes", "Long-distance distribution"],
  },
  {
    slug: "recycled-board",
    name: "Recycled Board",
    description:
      "Recycled-content board incorporates post-consumer and post-industrial fibre, supporting circular economy goals for operators with sustainability procurement requirements.",
    specs: [
      { spec: "Board grade", detail: "Recycled fibre corrugated, 100% recycled SBS" },
      { spec: "Strength", detail: "Good for standard delivery applications" },
      { spec: "Food safety", detail: "Food-contact-safe grades available; FDA guidelines apply" },
      { spec: "Printability", detail: "Good — improved with white top liner" },
      { spec: "Cost", detail: "Competitive; often cost-advantageous at volume" },
      { spec: "Sustainability", detail: "Highest sustainability profile; supports recycled content claims" },
    ],
    applications: ["Eco-friendly programs", "Sustainability-committed brands", "Corporate green packaging initiatives"],
  },
  {
    slug: "fsc-certified",
    name: "FSC-Certified Board",
    description:
      "FSC (Forest Stewardship Council) certified board provides chain-of-custody documentation confirming responsibly managed forest sourcing — essential for brands with sustainability reporting requirements.",
    specs: [
      { spec: "Board grade", detail: "FSC-certified grades across white, kraft, corrugated" },
      { spec: "Strength", detail: "Same as equivalent non-certified grades" },
      { spec: "Food safety", detail: "Food-safe grades available" },
      { spec: "Printability", detail: "Same as underlying board type" },
      { spec: "Cost", detail: "Slight premium over non-certified grades" },
      { spec: "Sustainability", detail: "Gold standard for forest sourcing; supports ESG reporting" },
    ],
    applications: ["Sustainability-certified operations", "ESG-compliant procurement", "Organic and natural food brands"],
  },
];

export const materialSlugs: string[] = materials.map((m) => m.slug);
export const materialMap: Record<string, MaterialData> = Object.fromEntries(
  materials.map((m) => [m.slug, m])
);
