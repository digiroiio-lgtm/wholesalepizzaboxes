import type { PrintingMethodData } from "@/lib/types";

export const printingMethods: PrintingMethodData[] = [
  {
    slug: "flexographic",
    name: "Flexographic Printing",
    description:
      "Flexographic (flexo) printing is the workhorse of corrugated pizza box production — a relief printing process using flexible plates and fast-drying inks, optimised for high-speed, high-volume runs.",
    advantages: [
      "Extremely cost-effective for high-volume runs (pallet+ quantities)",
      "Fast production speed after plates are produced",
      "Works directly on corrugated board without lamination",
      "Durable inks with excellent lightfastness",
      "Wide substrate compatibility",
    ],
    specs: [
      { spec: "Cost", detail: "Low per-unit at volume; plate setup amortised over run length" },
      { spec: "MOQ", detail: "Pallet quantities typical; plate investment favours longer runs" },
      { spec: "Lead time", detail: "2–4 weeks including plate production" },
      { spec: "Print quality", detail: "Good — logos, spot colors, clean graphics; limited photographic detail" },
      { spec: "Color range", detail: "1–4 spot colors; Pantone matching available" },
    ],
    bestFor: ["High-volume restaurant programs", "Pizza chain standardisation", "Spot color logo printing", "Budget-conscious branded boxes"],
  },
  {
    slug: "offset",
    name: "Offset Lithography",
    description:
      "Offset lithography delivers the highest print quality available for pizza packaging — photo-realistic imagery, sharp text, accurate Pantone colors, and premium surface treatments on clay-coated substrates.",
    advantages: [
      "Photo-realistic full-color printing capability",
      "Pantone and CMYK color accuracy for brand standards compliance",
      "Supports specialty finishes: spot UV, lamination, foil, embossing",
      "Consistent quality across large print runs",
      "Ideal for premium and luxury packaging programs",
    ],
    specs: [
      { spec: "Cost", detail: "Higher per-unit than flexo; economical at larger volumes" },
      { spec: "MOQ", detail: "Higher minimum runs to justify offset setup costs" },
      { spec: "Lead time", detail: "3–5 weeks including proofing and production" },
      { spec: "Print quality", detail: "Superior — gold standard for premium pizza packaging" },
      { spec: "Color range", detail: "Full CMYK + unlimited Pantone spot colors" },
    ],
    bestFor: ["Premium restaurant packaging", "Luxury food brands", "Retail pizza packaging", "Full-color branding campaigns"],
  },
  {
    slug: "digital",
    name: "Digital Printing",
    description:
      "Digital printing eliminates plate costs, enabling economical short runs, rapid turnaround, and variable data printing — ideal for samples, seasonal campaigns, and test programs.",
    advantages: [
      "No plate setup costs — economical for short runs",
      "Fastest turnaround available",
      "Full-color capability from a single copy",
      "Variable data printing for personalisation",
      "Ideal for prototyping and pre-production samples",
    ],
    specs: [
      { spec: "Cost", detail: "Higher per-unit than flexo at volume; competitive for short runs" },
      { spec: "MOQ", detail: "No minimum — even single units for samples" },
      { spec: "Lead time", detail: "3–7 business days" },
      { spec: "Print quality", detail: "Very good — approaches offset quality at high resolution" },
      { spec: "Color range", detail: "Full CMYK; Pantone simulation available" },
    ],
    bestFor: ["Samples and prototypes", "Short-run seasonal boxes", "Test campaigns", "Variable data and personalisation"],
  },
  {
    slug: "pantone",
    name: "Pantone Color Matching",
    description:
      "Pantone Matching System (PMS) ensures your brand colors print consistently across every production run — critical for franchise systems, chains, and brand-standards-driven buyers.",
    advantages: [
      "Color consistency across batches and production runs",
      "Cross-supplier reproducibility for franchise systems",
      "Eliminates visual inconsistency across multi-location operations",
      "Industry-standard reference for brand guidelines",
    ],
    specs: [
      { spec: "Cost", detail: "Premium over standard process; standard for professional programs" },
      { spec: "MOQ", detail: "Integrated into flexo and offset programs" },
      { spec: "Lead time", detail: "Built into standard print workflow" },
      { spec: "Print quality", detail: "Brand-accurate with documented PMS specifications" },
      { spec: "Color range", detail: "3,000+ Pantone colors supported" },
    ],
    bestFor: ["Franchise packaging programs", "Multi-location chains", "Brand-standards-driven operators"],
  },
  {
    slug: "cmyk",
    name: "CMYK Process Printing",
    description:
      "CMYK process color printing reproduces the full visual spectrum through four-color halftone separation, enabling photographic imagery and complex graphic artwork on pizza packaging.",
    advantages: [
      "Full-color photographic reproduction capability",
      "Complex multi-color artwork without individual spot plates",
      "Industry-standard digital file compatibility",
      "Cost-effective for complex designs at volume",
    ],
    specs: [
      { spec: "Cost", detail: "Standard offset or digital pricing" },
      { spec: "MOQ", detail: "Offset programs at standard run lengths; digital for short runs" },
      { spec: "Lead time", detail: "Integrated into standard print workflow" },
      { spec: "Print quality", detail: "Excellent for photographic and complex artwork" },
      { spec: "Color range", detail: "Full photographic spectrum; less precise than Pantone for brand colors" },
    ],
    bestFor: ["Full-color photography", "Complex artwork", "Marketing campaign packaging", "Seasonal promotional boxes"],
  },
  {
    slug: "inside-printing",
    name: "Inside Printing",
    description:
      "Inside printing applies brand messaging, promotions, or nutritional information to the interior of the pizza box — a high-impact touchpoint at the moment of opening.",
    advantages: [
      "Surprise-and-delight brand moment at box opening",
      "Promotional and marketing messaging without exterior clutter",
      "Loyalty program, coupon, or QR code placement",
      "Differentiating brand experience for premium operators",
    ],
    specs: [
      { spec: "Cost", detail: "Additional setup over exterior-only programs" },
      { spec: "MOQ", detail: "Integrated into standard print program volumes" },
      { spec: "Lead time", detail: "Built into standard production workflow" },
      { spec: "Print quality", detail: "Matches exterior print quality" },
      { spec: "Options", detail: "Flexo or offset inside print; full-color available" },
    ],
    bestFor: ["Premium restaurant brands", "Loyalty and promotion programs", "Customer experience-focused operators"],
  },
  {
    slug: "outside-printing",
    name: "Outside Printing",
    description:
      "Exterior printing places your brand identity and marketing content on the face panels visible during delivery and at point of service — the standard branded pizza box configuration.",
    advantages: [
      "Maximum brand visibility during delivery",
      "Customer-facing at every order touchpoint",
      "Multi-panel artwork for full brand storytelling",
      "Top, side, and bottom panel options",
    ],
    specs: [
      { spec: "Cost", detail: "Standard print program pricing" },
      { spec: "MOQ", detail: "Standard pallet program quantities" },
      { spec: "Lead time", detail: "Standard production timelines" },
      { spec: "Print quality", detail: "Flexo for volume efficiency; offset for premium quality" },
      { spec: "Panel coverage", detail: "Top panel, side panels, bottom panel available" },
    ],
    bestFor: ["All branded pizza box programs", "Restaurant chain standardisation", "Marketing and promotional packaging"],
  },
];

export const printingSlugs: string[] = printingMethods.map((p) => p.slug);
export const printingMap: Record<string, PrintingMethodData> = Object.fromEntries(
  printingMethods.map((p) => [p.slug, p])
);
