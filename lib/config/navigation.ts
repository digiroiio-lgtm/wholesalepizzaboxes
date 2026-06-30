import type { FooterColumn, NavLink } from "@/lib/types";

/**
 * Primary navigation.
 * The children array enables a mega-nav dropdown without component changes.
 * Add new top-level categories here; the Header component reads this at runtime.
 */
export const navLinks: NavLink[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "White Pizza Boxes", href: "/white-pizza-boxes" },
      { label: "Kraft Pizza Boxes", href: "/kraft-pizza-boxes" },
      { label: "Clay-Coated Pizza Boxes", href: "/clay-coated-pizza-boxes" },
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
      { label: "Premium Pizza Boxes", href: "/premium-pizza-boxes" },
      { label: "View All Products", href: "/products" },
    ],
  },
  {
    label: "Materials",
    href: "/materials",
    children: [
      { label: "White Board", href: "/materials/white-board" },
      { label: "Kraft Board", href: "/materials/kraft-board" },
      { label: "Clay-Coated Board", href: "/materials/clay-coated-board" },
      { label: "Corrugated Board", href: "/materials/corrugated-board" },
      { label: "Recycled Board", href: "/materials/recycled-board" },
      { label: "FSC Certified", href: "/materials/fsc-certified" },
    ],
  },
  {
    label: "Printing",
    href: "/printing",
    children: [
      { label: "Flexographic", href: "/printing/flexographic" },
      { label: "Offset Lithography", href: "/printing/offset" },
      { label: "Digital Printing", href: "/printing/digital" },
      { label: "Pantone Matching", href: "/printing/pantone" },
      { label: "CMYK Process", href: "/printing/cmyk" },
    ],
  },
  { label: "Sizes", href: "/pizza-box-sizes" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Locations", href: "/locations" },
  { label: "Get Quote", href: "/get-quote" },
];

/**
 * Footer link columns.
 * Add/remove columns or links here; the Footer component iterates this array.
 */
export const footerColumns: FooterColumn[] = [
  {
    heading: "Primary Products",
    links: [
      { label: "White Pizza Boxes", href: "/white-pizza-boxes" },
      { label: "Kraft Pizza Boxes", href: "/kraft-pizza-boxes" },
      { label: "Clay-Coated Pizza Boxes", href: "/clay-coated-pizza-boxes" },
      { label: "Custom Printed Pizza Boxes", href: "/custom-printed-pizza-boxes" },
      { label: "Premium Pizza Boxes", href: "/premium-pizza-boxes" },
    ],
  },
  {
    heading: "Shop By",
    links: [
      { label: "Materials", href: "/materials" },
      { label: "Printing Methods", href: "/printing" },
      { label: "Pizza Box Sizes", href: "/pizza-box-sizes" },
      { label: "Industries", href: "/industries" },
      { label: "Applications", href: "/applications" },
      { label: "Benefits", href: "/benefits" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Buying Guides", href: "/guides" },
      { label: "Resource Library", href: "/resources" },
      { label: "Compare Options", href: "/compare" },
      { label: "FAQ", href: "/faq" },
      { label: "Download Catalog", href: "/download-catalog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Locations", href: "/locations" },
      { label: "Contact", href: "/contact" },
      { label: "Get Quote", href: "/get-quote" },
    ],
  },
];
