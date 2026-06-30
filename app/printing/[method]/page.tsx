import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { QuoteForm } from "@/components/QuoteForm";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { Table, Td, Th, Tr } from "@/components/ui/table";
import { pageMetadata } from "@/lib/metadata";
import { printingMethodMap, printingMethods } from "@/lib/data/clusters";

export function generateStaticParams() {
  return printingMethods.map((m) => ({ method: m.slug }));
}

export function generateMetadata({ params }: { params: { method: string } }) {
  const method = printingMethodMap[params.method];
  if (!method) return {};
  return pageMetadata({
    title: `${method.name} for Pizza Boxes — Cost, MOQ & Print Quality`,
    description: method.description,
    path: `/printing/${method.slug}`,
  });
}

export default function PrintingMethodPage({ params }: { params: { method: string } }) {
  const method = printingMethodMap[params.method];
  if (!method) notFound();

  const specs = [
    { spec: "Cost", detail: method.cost },
    { spec: "MOQ", detail: method.moq },
    { spec: "Lead time", detail: method.leadTime },
    { spec: "Print quality", detail: method.printQuality },
  ];

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Printing", href: "/printing" }, { label: method.name }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{method.name} for Pizza Boxes</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{method.description}</p>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Advantages</h2>
          <ul className="space-y-2 text-slate-700">
            {method.advantages.map((adv) => (
              <li key={adv}>• {adv}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Best For</h2>
          <ul className="space-y-2 text-slate-700">
            {method.bestFor.map((use) => (
              <li key={use}>• {use}</li>
            ))}
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Cost, MOQ & Lead Times</h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <Table>
            <thead>
              <Tr><Th>Specification</Th><Th>Details</Th></Tr>
            </thead>
            <tbody>
              {specs.map((row) => (
                <Tr key={row.spec}><Td className="font-medium">{row.spec}</Td><Td>{row.detail}</Td></Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-3">
        <RelatedLinks
          title="Primary Product Clusters"
          links={[
            { href: "/white-pizza-boxes", label: "White Pizza Boxes" },
            { href: "/kraft-pizza-boxes", label: "Kraft Pizza Boxes" },
            { href: "/clay-coated-pizza-boxes", label: "Clay-Coated Pizza Boxes" },
            { href: "/custom-printed-pizza-boxes", label: "Custom Printed Pizza Boxes" },
          ]}
        />
        <RelatedLinks
          title="Related Resources"
          links={[
            { href: "/resources/pizza-box-printing", label: "Pizza Box Printing Guide" },
            { href: "/resources/moq-guide", label: "MOQ Guide" },
            { href: "/resources/lead-times", label: "Lead Times" },
          ]}
        />
        <RelatedLinks
          title="Other Print Methods"
          links={printingMethods.filter((m) => m.slug !== method.slug).map((m) => ({ href: `/printing/${m.slug}`, label: m.name }))}
        />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Get a Custom Print Quote</h2>
        <QuoteForm compact />
      </Section>
      <FinalCTA />
    </>
  );
}
