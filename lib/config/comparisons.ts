import type { ComparisonPageData } from "@/lib/types";

export const comparisons: ComparisonPageData[] = [
  {
    slug: "kraft-vs-white-pizza-boxes",
    name: "Kraft vs White Pizza Boxes",
    comparison: {
      left: "Kraft Pizza Boxes",
      right: "White Pizza Boxes",
      rows: [
        { criteria: "Appearance", left: "Natural brown, artisan", right: "Bright white, clean" },
        { criteria: "Print quality", left: "Good; warm tones", right: "Excellent; full-color" },
        { criteria: "Sustainability signal", left: "Strong eco appeal", right: "Neutral; certification-dependent" },
        { criteria: "Cost", left: "Often lower base cost", right: "Slightly higher" },
        { criteria: "FSC availability", left: "Widely available", right: "Available" },
      ],
    },
  },
  {
    slug: "printed-vs-plain-pizza-boxes",
    name: "Printed vs Plain Pizza Boxes",
    comparison: {
      left: "Custom Printed",
      right: "Plain Stock",
      rows: [
        { criteria: "Brand impact", left: "High — branded touchpoint", right: "None" },
        { criteria: "MOQ", left: "Higher due to print setup", right: "Lower" },
        { criteria: "Cost per unit", left: "Higher with print amortised", right: "Lower" },
        { criteria: "Lead time", left: "Longer — print production", right: "Faster — stock" },
        { criteria: "Best for", left: "Chains, brands, franchises", right: "Cost-focused, high-churn ops" },
      ],
    },
  },
  {
    slug: "china-vs-usa-pizza-boxes",
    name: "China vs USA Pizza Box Sourcing",
    comparison: {
      left: "Import (China)",
      right: "Domestic (USA)",
      rows: [
        { criteria: "Unit cost", left: "Lower at container volume", right: "Higher but predictable" },
        { criteria: "Lead time", left: "8–12+ weeks", right: "2–4 weeks" },
        { criteria: "Supply risk", left: "Higher — shipping variability", right: "Lower" },
        { criteria: "Compliance docs", left: "FDA import documentation required", right: "Straightforward" },
        { criteria: "Best for", left: "Large volume, planned programs", right: "Agile buyers, fast reorder" },
      ],
    },
  },
  {
    slug: "importer-vs-manufacturer",
    name: "Importer vs Direct Manufacturer",
    comparison: {
      left: "Direct Manufacturer",
      right: "Importer / Distributor",
      rows: [
        { criteria: "Pricing", left: "Factory-direct — best unit cost", right: "Markup layer" },
        { criteria: "Customisation", left: "Full structural + print control", right: "Limited to catalog" },
        { criteria: "Lead time visibility", left: "Direct production timeline", right: "Variable" },
        { criteria: "MOQ flexibility", left: "Negotiable at source", right: "Fixed program MOQs" },
      ],
    },
  },
  {
    slug: "offset-vs-flexo-printing",
    name: "Offset vs Flexographic Printing",
    comparison: {
      left: "Offset Lithography",
      right: "Flexographic",
      rows: [
        { criteria: "Print quality", left: "Superior — photo-realistic", right: "Good — logos & spot color" },
        { criteria: "Color accuracy", left: "Pantone-precise", right: "Good with spot inks" },
        { criteria: "Cost at volume", left: "Higher setup; competitive at scale", right: "Lower cost per unit" },
        { criteria: "MOQ", left: "Higher", right: "Lower" },
        { criteria: "Lead time", left: "3–5 weeks", right: "2–3 weeks" },
      ],
    },
  },
  {
    slug: "litho-vs-digital-printing",
    name: "Litho vs Digital Pizza Box Printing",
    comparison: {
      left: "Lithography (Offset)",
      right: "Digital Printing",
      rows: [
        { criteria: "MOQ", left: "Higher minimum runs", right: "No minimum — single unit" },
        { criteria: "Cost at volume", left: "Decreases sharply at scale", right: "Flat cost per unit" },
        { criteria: "Lead time", left: "3–5 weeks", right: "3–7 business days" },
        { criteria: "Quality", left: "Superior at scale", right: "Very good for short runs" },
        { criteria: "Best for", left: "High-volume programs", right: "Samples, test runs, seasonal" },
      ],
    },
  },
  {
    slug: "wholesale-vs-retail-pizza-boxes",
    name: "Wholesale vs Retail Pizza Box Buying",
    comparison: {
      left: "Wholesale Supply",
      right: "Retail Buying",
      rows: [
        { criteria: "Pricing", left: "Contracted volume tiers", right: "Retail unit pricing" },
        { criteria: "Customisation", left: "Full print and structural options", right: "Catalog only" },
        { criteria: "Supply reliability", left: "Forecasted production planning", right: "In-stock variability" },
        { criteria: "Best for", left: "Restaurants, chains, distributors", right: "One-off, low-volume" },
      ],
    },
  },
];

export const comparisonSlugs: string[] = comparisons.map((c) => c.slug);
export const comparisonMap: Record<string, ComparisonPageData> = Object.fromEntries(
  comparisons.map((c) => [c.slug, c])
);
