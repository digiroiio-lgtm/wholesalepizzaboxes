/**
 * Core TypeScript type definitions for the Wholesale Pizza Boxes platform.
 *
 * Separation of concerns:
 *   • Types live here — never in data files or components.
 *   • Data lives in lib/config/ — imported into pages/templates.
 *   • Components reference types via this barrel.
 *
 * Architecture is intentionally food-packaging-agnostic so the codebase
 * can expand to Burger Boxes, Bakery Boxes, Chicken Boxes, etc. without
 * restructuring. See ProductCategory for the extensibility hook.
 */

// ─── Navigation ───────────────────────────────────────────────────────────────

export type NavLink = {
  label: string;
  href: string;
  /** Optional dropdown items for mega-nav expansion */
  children?: NavLink[];
};

export type FooterColumn = {
  heading: string;
  links: Link[];
};

// ─── Primitives ───────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type FAQ = { question: string; answer: string };

export type Testimonial = { name: string; role?: string; quote: string };

export type SpecRow = { spec: string; detail: string };

export type ComparisonRow = { criteria: string; left: string; right: string };

export type Comparison = {
  left: string;
  right: string;
  rows: ComparisonRow[];
};

// ─── Product Architecture ─────────────────────────────────────────────────────

/**
 * A ClusterData entry represents one SEO pillar page.
 * Adding a new cluster requires only a new data object — no new page file.
 */
export type ClusterData = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  buyerIntent: string[];
  topics: Link[];
  advantages: string[];
  materials: string[];
  printingOptions: string[];
  applications: string[];
  industriesServed: string[];
  /** Rendered in the specifications table — fully data-driven */
  specs: SpecRow[];
  comparison: Comparison;
  faqs: FAQ[];
  relatedProducts: Link[];
  relatedResources: Link[];
  relatedGuides: Link[];
};

/**
 * Top-level packaging category.
 * Extend this array to add entirely new verticals (Burger Boxes, Bakery Boxes…)
 * without changing any page or template code.
 */
export type ProductCategory = {
  /** Machine-readable id: "pizza-boxes", "burger-boxes", etc. */
  id: string;
  name: string;
  description: string;
  /** URL prefix under which clusters live, e.g. "" (root) or "/burger-boxes" */
  basePath: string;
  clusters: ClusterData[];
};

/** Flat catalog entry used for the [slug] catch-all and product listing page */
export type ProductEntry = {
  slug: string;
  name: string;
  description: string;
  /** True when this slug has a corresponding ClusterData entry */
  isCluster?: boolean;
};

// ─── Materials ────────────────────────────────────────────────────────────────

export type MaterialData = {
  slug: string;
  name: string;
  description: string;
  /** Normalised SpecRow[] instead of individual fields for consistent rendering */
  specs: SpecRow[];
  applications: string[];
};

// ─── Printing ─────────────────────────────────────────────────────────────────

export type PrintingMethodData = {
  slug: string;
  name: string;
  description: string;
  advantages: string[];
  /** Cost, MOQ, lead time, quality — all as SpecRow[] for table rendering */
  specs: SpecRow[];
  bestFor: string[];
};

// ─── Industries ───────────────────────────────────────────────────────────────

export type IndustryData = {
  slug: string;
  name: string;
  description: string;
  painPoints: string[];
  recommendedBoxes: Link[];
};

// ─── Applications ─────────────────────────────────────────────────────────────

export type ApplicationData = {
  slug: string;
  name: string;
  description: string;
  keyRequirements: string[];
  recommendedBoxes: Link[];
};

// ─── Buyers ───────────────────────────────────────────────────────────────────

export type BuyerData = {
  slug: string;
  name: string;
  description: string;
  painPoints: string[];
  recommendedSolutions: Link[];
};

// ─── Benefits ─────────────────────────────────────────────────────────────────

export type BenefitData = {
  slug: string;
  name: string;
  description: string;
  keyPoints: string[];
  relevantProducts: Link[];
};

// ─── Geography ────────────────────────────────────────────────────────────────

export type LocationData = {
  slug: string;
  name: string;
  type: "state" | "city";
};

// ─── Content ──────────────────────────────────────────────────────────────────

export type ResourceData = {
  slug: string;
  name: string;
  description?: string;
};

export type GuideData = {
  slug: string;
  name: string;
  description?: string;
};

export type ComparisonPageData = {
  slug: string;
  name: string;
  comparison: Comparison;
};

export type SizeData = {
  slug: string;
  name: string;
  dimensions: string;
  commonUses: string[];
};

// ─── SEO ──────────────────────────────────────────────────────────────────────

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

/** Untyped JSON-LD object — schema generators return this */
export type SchemaOrg = Record<string, unknown>;
