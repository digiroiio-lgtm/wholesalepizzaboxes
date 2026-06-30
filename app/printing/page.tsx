import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { printingMethods } from "@/lib/data/clusters";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Pizza Box Printing Methods — Flexo, Offset, Digital & More",
  description:
    "Compare pizza box printing methods including flexographic, offset lithography, digital, Pantone, CMYK, inside printing, and outside printing. Find the right process for your volume and quality needs.",
  path: "/printing",
});

export default function PrintingPage() {
  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Printing" }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pizza Box Printing — Shop by Print Method</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Choosing the right printing process for your pizza boxes determines cost, quality, lead time, and MOQ. Explore each method to understand which fits your volume, design complexity, and budget requirements.
        </p>
      </Section>
      <Section>
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Printing Methods</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {printingMethods.map((method) => (
            <Link
              key={method.slug}
              href={`/printing/${method.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-700 hover:bg-emerald-50"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900">{method.name}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{method.description}</p>
              <div className="mt-3 grid grid-cols-2 gap-1 text-xs text-slate-500">
                <span>MOQ: <strong className="text-slate-700">{method.moq.split(";")[0]}</strong></span>
                <span>Quality: <strong className="text-slate-700">{method.printQuality.split(" — ")[0]}</strong></span>
              </div>
              <span className="mt-3 inline-block text-sm font-semibold text-emerald-800">View Method →</span>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Print Method Selection Guide</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For High Volume</h3>
            <p className="mt-2 text-sm text-slate-700"><Link href="/printing/flexographic" className="font-semibold text-emerald-800 hover:underline">Flexographic printing</Link> delivers the lowest cost-per-unit for high-volume restaurant and chain programs.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For Premium Quality</h3>
            <p className="mt-2 text-sm text-slate-700"><Link href="/printing/offset" className="font-semibold text-emerald-800 hover:underline">Offset lithography</Link> produces photo-realistic, Pantone-accurate results for premium and luxury packaging programs.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For Short Runs</h3>
            <p className="mt-2 text-sm text-slate-700"><Link href="/printing/digital" className="font-semibold text-emerald-800 hover:underline">Digital printing</Link> has no plate setup costs — ideal for samples, seasonal runs, and test campaigns.</p>
          </div>
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
