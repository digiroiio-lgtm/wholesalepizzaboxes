export type FAQ = { question: string; answer: string };

export const site = {
  name: "Wholesale Pizza Boxes",
  domain: "https://wholesalepizzaboxes.com",
  phone: "(888) 936-BOXES",
  heroTitle: "Wholesale Pizza Boxes Direct for Restaurants, Chains & Foodservice Buyers",
  heroSubtitle:
    "Get durable, food-grade pizza boxes in bulk with custom printing, reliable supply, competitive wholesale pricing, and nationwide delivery.",
};

export const trustBullets = [
  "Bulk wholesale pricing",
  "Custom printed pizza boxes",
  "Kraft, white, corrugated & eco-friendly options",
  "Sizes from 8 inch to 20 inch",
  "Reliable supply for restaurants, franchises & distributors",
  "Fast quote response within 24 hours",
];

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Sizes", href: "/pizza-box-sizes" },
  { label: "Custom Printing", href: "/custom-pizza-boxes" },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturer", href: "/pizza-box-manufacturer" },
  { label: "Resources", href: "/resources" },
  { label: "Locations", href: "/locations" },
  { label: "Get Quote", href: "/get-quote" },
];

export const products = [
  "wholesale-pizza-boxes",
  "bulk-pizza-boxes",
  "custom-printed-pizza-boxes",
  "plain-pizza-boxes",
  "white-pizza-boxes",
  "kraft-pizza-boxes",
  "corrugated-pizza-boxes",
  "grease-resistant-pizza-boxes",
  "eco-friendly-pizza-boxes",
  "deep-dish-pizza-boxes",
  "pizza-slice-boxes",
  "window-pizza-boxes",
  "heavy-duty-pizza-boxes",
  "vented-pizza-boxes",
  "pizza-box-liners",
  "custom-pizza-boxes",
  "logo-pizza-boxes",
  "branded-pizza-boxes",
  "personalized-pizza-boxes",
  "full-color-pizza-boxes",
  "premium-pizza-boxes",
  "private-label-pizza-boxes",
  "pizza-box-manufacturer",
  "oem-pizza-boxes",
  "custom-manufacturing",
  "export",
  "factory",
  "quality-control",
  "certifications",
  "materials",
  "printing-capabilities",
];

export const productPageMap = Object.fromEntries(
  products.map((slug) => [
    slug,
    {
      slug,
      title: slug.replaceAll("-", " "),
      h1: slug
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" "),
      description: `Source ${slug.replaceAll("-", " ")} with bulk pricing, custom options, and nationwide delivery for US foodservice buyers.`,
    },
  ])
);

export const sizes = ["8-inch", "10-inch", "12-inch", "14-inch", "16-inch", "18-inch", "20-inch"];

export const industries = [
  "pizzerias",
  "pizza-chains",
  "restaurant-groups",
  "ghost-kitchens",
  "frozen-pizza-manufacturers",
  "food-distributors",
  "foodservice",
  "convenience-stores",
  "private-label",
  "franchises",
];

export const locationStates = [
  "california",
  "texas",
  "florida",
  "new-york",
  "illinois",
  "georgia",
  "pennsylvania",
  "ohio",
  "arizona",
  "north-carolina",
];

export const locationCities = [
  "chicago",
  "houston",
  "dallas",
  "miami",
  "orlando",
  "los-angeles",
  "phoenix",
  "atlanta",
  "new-york-city",
  "philadelphia",
];

export const resources = [
  "pizza-box-dimensions",
  "pizza-box-thickness",
  "corrugated-grades",
  "b-flute-vs-e-flute",
  "pizza-box-cost",
  "pizza-box-printing",
  "moq-guide",
  "lead-times",
  "fda-compliance",
  "fsc-certification",
  "how-to-store-pizza-boxes",
  "how-to-choose-pizza-boxes",
];

export const guides = [
  "wholesale-pizza-box-buying-guide",
  "restaurant-packaging-guide",
  "private-label-pizza-box-guide",
  "custom-printing-guide",
  "pizza-franchise-packaging-guide",
  "foodservice-packaging-guide",
];

export const comparisons = [
  "kraft-vs-white-pizza-boxes",
  "printed-vs-plain-pizza-boxes",
  "china-vs-usa-pizza-boxes",
  "importer-vs-manufacturer",
  "offset-vs-flexo-printing",
  "litho-vs-digital-printing",
  "wholesale-vs-retail-pizza-boxes",
];

export const aboutTopics = ["manufacturing", "sustainability", "quality", "logistics"];

export const globalFaqs: FAQ[] = [
  {
    question: "What is your minimum order quantity for wholesale pizza boxes?",
    answer: "MOQ depends on box style and print requirements, but most stock programs start at pallet-level volumes for best pricing.",
  },
  {
    question: "Can you provide custom printed pizza boxes with our logo?",
    answer: "Yes. We support one-color through full-color print programs with dieline support, proofing, and repeat order consistency.",
  },
  {
    question: "How fast can we get pricing?",
    answer: "Most quote requests are reviewed and answered within 24 hours by our wholesale packaging team.",
  },
  {
    question: "Do you ship nationwide in the USA?",
    answer: "Yes. We coordinate regional freight and scheduled deliveries for restaurants, chains, and distributors across the U.S.",
  },
];

export const testimonials = [
  {
    name: "Procurement Manager, Multi-Unit Pizza Chain",
    quote:
      "The team helped us standardize 12-inch, 14-inch, and 16-inch box SKUs across 60 stores while reducing packaging spend and improving print consistency.",
  },
  {
    name: "Director of Operations, Regional Food Distributor",
    quote:
      "Reliable lead times and clear communication made them a dependable packaging partner during our seasonal volume swings.",
  },
  {
    name: "Owner, Fast-Growing Pizzeria Group",
    quote:
      "We moved from retail carton buying to wholesale programs and immediately improved margins with better stock availability.",
  },
];

export function pageLabel(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function allPaths() {
  const base = [
    "/",
    "/products",
    "/pizza-box-sizes",
    "/custom-pizza-boxes",
    "/industries",
    "/locations",
    "/resources",
    "/guides",
    "/compare",
    "/about",
    "/testimonials",
    "/faq",
    "/contact",
    "/get-quote",
    "/download-catalog",
  ];

  return [
    ...base,
    ...products.map((p) => `/${p}`),
    ...sizes.map((s) => `/pizza-box-sizes/${s}`),
    ...industries.map((i) => `/industries/${i}`),
    ...locationStates.map((s) => `/locations/${s}`),
    ...locationCities.map((c) => `/locations/${c}`),
    ...resources.map((r) => `/resources/${r}`),
    ...guides.map((g) => `/guides/${g}`),
    ...comparisons.map((c) => `/compare/${c}`),
    ...aboutTopics.map((a) => `/about/${a}`),
  ];
}
