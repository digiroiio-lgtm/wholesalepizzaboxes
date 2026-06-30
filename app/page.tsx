import { pageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { TrustBadges } from "@/components/TrustBadges";
import { ProductCard } from "@/components/ProductCard";
import { SizeCard } from "@/components/SizeCard";
import { IndustryCard } from "@/components/IndustryCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ResourceCard } from "@/components/ResourceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { QuoteForm } from "@/components/QuoteForm";
import { FinalCTA } from "@/components/FinalCTA";
import { globalFaqs, industries, products, sizes, testimonials } from "@/lib/data/site";

export const metadata = pageMetadata({
  title: "Wholesale Pizza Boxes | Bulk & Custom Printed Pizza Boxes",
  description:
    "Get bulk and custom printed pizza boxes with dependable lead times, quality materials, and nationwide U.S. delivery for foodservice buyers.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Section><TrustBadges /></Section>
      <Section>
        <h2 className="mb-6 text-2xl font-bold">Wholesale Pizza Boxes Built for High-Volume Food Businesses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((slug) => <ProductCard key={slug} title={slug.replaceAll("-", " ")} href={`/${slug}`} />)}
        </div>
      </Section>
      <Section>
        <h2 className="mb-6 text-2xl font-bold">Shop Pizza Boxes by Size</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((size) => <SizeCard key={size} size={size} />)}
        </div>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-bold">Custom Printed Pizza Boxes for Your Brand</h2>
        <p className="text-slate-700">From one-color logo boxes to full-color campaigns, we help operators scale branded packaging with repeatable print quality and procurement-ready lead times.</p>
      </Section>
      <Section>
        <h2 className="mb-6 text-2xl font-bold">Packaging for Pizzerias, Chains & Distributors</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((industry) => <IndustryCard key={industry} slug={industry} />)}
        </div>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-bold">Why Buyers Choose Wholesale Pizza Boxes</h2>
        <ul className="grid gap-2 text-slate-700 md:grid-cols-2">
          <li>• Dedicated wholesale account support</li>
          <li>• Manufacturing-backed material and print options</li>
          <li>• Nationwide freight and delivery planning</li>
          <li>• Bulk pricing with transparent MOQ planning</li>
        </ul>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-bold">Manufacturing, Printing & Supply Capability</h2>
        <p className="text-slate-700">Industrial production planning, QA checkpoints, and print workflow controls support reliable packaging programs for multi-location operations.</p>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold">Compare Wholesale vs Retail Pizza Box Buying</h2>
        <ComparisonTable left="Wholesale Supplier" right="Retail Seller" />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold">Buyer Guide Preview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {["wholesale-pizza-box-buying-guide", "custom-printing-guide", "foodservice-packaging-guide"].map((slug) => (
            <ResourceCard key={slug} slug={slug} basePath="/guides" />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
        <FAQAccordion faqs={globalFaqs} />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => <TestimonialCard key={item.name} name={item.name} quote={item.quote} />)}
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold">Get Bulk Pricing on Pizza Boxes</h2>
        <QuoteForm compact />
      </Section>
      <FinalCTA />
    </>
  );
}
