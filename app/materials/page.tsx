import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { materials } from "@/lib/data/clusters";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Pizza Box Materials Guide — Board Types, Grades & Sustainability",
  description:
    "Explore pizza box materials including white board, kraft board, clay-coated, corrugated, recycled, and FSC-certified options. Compare board grades, printability, food safety, and sustainability.",
  path: "/materials",
});

export default function MaterialsPage() {
  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Materials" }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pizza Box Materials — Shop by Board Type</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          The material you choose for your pizza boxes determines print quality, structural performance, sustainability profile, and cost. Use this guide to compare board types and find the right specification for your wholesale program.
        </p>
      </Section>
      <Section>
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Board Types & Materials</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((mat) => (
            <Link
              key={mat.slug}
              href={`/materials/${mat.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-700 hover:bg-emerald-50"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900">{mat.name}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{mat.description}</p>
              <div className="mt-3 grid grid-cols-2 gap-1 text-xs text-slate-500">
                <span>Printability: <strong className="text-slate-700">{mat.printability.split(" — ")[0]}</strong></span>
                <span>Sustainability: <strong className="text-slate-700">{mat.sustainability.split(";")[0]}</strong></span>
              </div>
              <span className="mt-3 inline-block text-sm font-semibold text-emerald-800">View Material →</span>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Material Selection Guide</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For Maximum Print Quality</h3>
            <p className="mt-2 text-sm text-slate-700">Choose <Link href="/materials/clay-coated-board" className="font-semibold text-emerald-800 hover:underline">clay-coated board</Link> for offset lithography, spot UV, and premium finishes.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For Sustainability Goals</h3>
            <p className="mt-2 text-sm text-slate-700">Choose <Link href="/materials/kraft-board" className="font-semibold text-emerald-800 hover:underline">kraft board</Link> or <Link href="/materials/fsc-certified" className="font-semibold text-emerald-800 hover:underline">FSC-certified</Link> options to support eco claims and ESG reporting.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For Maximum Strength</h3>
            <p className="mt-2 text-sm text-slate-700">Choose <Link href="/materials/corrugated-board" className="font-semibold text-emerald-800 hover:underline">corrugated board</Link> (B-flute or double-wall) for delivery, stacking, and heavy-duty programs.</p>
          </div>
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
