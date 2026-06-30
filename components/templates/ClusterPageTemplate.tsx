import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { SpecTable } from "@/components/SpecTable";
import { Table, Td, Th, Tr } from "@/components/ui/table";
import type { ClusterData } from "@/lib/data/clusters";
import Link from "next/link";

export function ClusterPageTemplate({ cluster }: { cluster: ClusterData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cluster.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: cluster.h1,
    description: cluster.intro,
    brand: { "@type": "Brand", name: "Wholesale Pizza Boxes" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Wholesale Pizza Boxes" },
    },
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />

      {/* Breadcrumbs */}
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: cluster.h1.split("—")[0].trim() }]} />
      </Section>

      {/* H1 + Intro */}
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{cluster.h1}</h1>
        <p className="mt-4 max-w-4xl text-lg text-slate-700">{cluster.intro}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {cluster.buyerIntent.map((intent) => (
            <span key={intent} className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">{intent}</span>
          ))}
        </div>
      </Section>

      {/* Topic Map (Product Gallery) */}
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Explore {cluster.h1.split("—")[0].trim()} Topics</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cluster.topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
            >
              {topic.label} →
            </Link>
          ))}
        </div>
      </Section>

      {/* Advantages */}
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Advantages for Volume Buyers</h2>
          <ul className="space-y-2 text-slate-700">
            {cluster.advantages.map((adv) => (
              <li key={adv}>• {adv}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Applications</h2>
          <ul className="space-y-2 text-slate-700">
            {cluster.applications.map((app) => (
              <li key={app}>• {app}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Specifications */}
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Specifications</h2>
        <SpecTable slug={cluster.slug} />
      </Section>

      {/* Available Materials */}
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Available Materials</h2>
          <ul className="space-y-2 text-slate-700">
            {cluster.materials.map((mat) => (
              <li key={mat}>• {mat}</li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/materials" className="text-sm font-semibold text-emerald-800 hover:underline">Explore All Materials →</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Printing Options</h2>
          <ul className="space-y-2 text-slate-700">
            {cluster.printingOptions.map((opt) => (
              <li key={opt}>• {opt}</li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/printing" className="text-sm font-semibold text-emerald-800 hover:underline">Explore All Printing Methods →</Link>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Available Sizes</h2>
        <div className="grid gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {["8-inch", "10-inch", "12-inch", "14-inch", "16-inch", "18-inch", "20-inch"].map((size) => (
            <Link
              key={size}
              href={`/pizza-box-sizes/${size}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium text-slate-700 hover:border-emerald-700 hover:text-emerald-900"
            >
              {size.replace("-", " ")}
            </Link>
          ))}
        </div>
      </Section>

      {/* Industries Served */}
      <Section>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">Industries Served</h2>
        <ul className="flex flex-wrap gap-3">
          {cluster.industriesServed.map((ind) => (
            <li key={ind} className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700">{ind}</li>
          ))}
        </ul>
      </Section>

      {/* Comparison Table */}
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          {cluster.comparisonLeft} vs {cluster.comparisonRight}
        </h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <Table>
            <thead>
              <Tr>
                <Th>Criteria</Th>
                <Th>{cluster.comparisonLeft}</Th>
                <Th>{cluster.comparisonRight}</Th>
              </Tr>
            </thead>
            <tbody>
              {cluster.comparisonRows.map((row) => (
                <Tr key={row.criteria}>
                  <Td>{row.criteria}</Td>
                  <Td>{row.left}</Td>
                  <Td>{row.right}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>

      {/* Related Links: Products, Resources, Guides, Industries */}
      <Section className="grid gap-6 lg:grid-cols-4">
        <RelatedLinks title="Related Products" links={cluster.relatedProducts} />
        <RelatedLinks title="Related Resources" links={cluster.relatedResources} />
        <RelatedLinks title="Related Guides" links={cluster.relatedGuides} />
        <RelatedLinks
          title="Related Sizes"
          links={[
            { href: "/pizza-box-sizes/12-inch", label: "12 Inch Pizza Boxes" },
            { href: "/pizza-box-sizes/14-inch", label: "14 Inch Pizza Boxes" },
            { href: "/pizza-box-sizes/16-inch", label: "16 Inch Pizza Boxes" },
          ]}
        />
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <FAQAccordion faqs={cluster.faqs} />
      </Section>

      {/* Inline Quote Form */}
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Get Wholesale Pricing</h2>
        <p className="mb-6 text-slate-700">Fill out the form below to receive a bulk pricing quote for {cluster.h1.split("—")[0].trim().toLowerCase()}.</p>
        <QuoteForm compact />
      </Section>

      <FinalCTA />
    </>
  );
}
