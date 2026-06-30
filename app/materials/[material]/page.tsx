import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { QuoteForm } from "@/components/QuoteForm";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { Table, Td, Th, Tr } from "@/components/ui/table";
import { pageMetadata } from "@/lib/metadata";
import { materialMap, materials } from "@/lib/data/clusters";
import { pageLabel } from "@/lib/data/site";

export function generateStaticParams() {
  return materials.map((m) => ({ material: m.slug }));
}

export function generateMetadata({ params }: { params: { material: string } }) {
  const mat = materialMap[params.material];
  if (!mat) return {};
  return pageMetadata({
    title: `${mat.name} for Pizza Boxes — Board Grade, Printability & Specs`,
    description: mat.description,
    path: `/materials/${mat.slug}`,
  });
}

export default function MaterialDetailPage({ params }: { params: { material: string } }) {
  const mat = materialMap[params.material];
  if (!mat) notFound();

  const specs = [
    { spec: "Board grade", detail: mat.boardGrade },
    { spec: "Strength", detail: mat.strength },
    { spec: "Food safety", detail: mat.foodSafety },
    { spec: "Printability", detail: mat.printability },
    { spec: "Cost", detail: mat.cost },
    { spec: "Sustainability", detail: mat.sustainability },
  ];

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Materials", href: "/materials" }, { label: mat.name }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{mat.name} for Pizza Boxes</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{mat.description}</p>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Board Specifications</h2>
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
      <Section>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">Applications</h2>
        <ul className="space-y-2 text-slate-700">
          {mat.applications.map((app) => (
            <li key={app}>• {app}</li>
          ))}
        </ul>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-3">
        <RelatedLinks
          title="Primary Product Clusters"
          links={[
            { href: "/white-pizza-boxes", label: "White Pizza Boxes" },
            { href: "/kraft-pizza-boxes", label: "Kraft Pizza Boxes" },
            { href: "/clay-coated-pizza-boxes", label: "Clay-Coated Pizza Boxes" },
            { href: "/custom-printed-pizza-boxes", label: "Custom Printed Pizza Boxes" },
            { href: "/premium-pizza-boxes", label: "Premium Pizza Boxes" },
          ]}
        />
        <RelatedLinks
          title="Printing Methods"
          links={[
            { href: "/printing/flexographic", label: "Flexographic Printing" },
            { href: "/printing/offset", label: "Offset Lithography" },
            { href: "/printing/digital", label: "Digital Printing" },
          ]}
        />
        <RelatedLinks
          title="Other Materials"
          links={materials.filter((m) => m.slug !== mat.slug).map((m) => ({ href: `/materials/${m.slug}`, label: m.name }))}
        />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Get a Quote for {mat.name} Pizza Boxes</h2>
        <QuoteForm compact />
      </Section>
      <FinalCTA />
    </>
  );
}
