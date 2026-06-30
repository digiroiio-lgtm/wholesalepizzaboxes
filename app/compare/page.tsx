import Link from "next/link";
import { Section } from "@/components/Section";
import { comparisons, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pizza Box Comparisons",
  description: "Comparison guides for material, print method, sourcing model, and wholesale vs retail pizza box procurement decisions.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Comparison Center</h1>
      <div className="grid gap-2 md:grid-cols-2">
        {comparisons.map((slug) => <Link key={slug} href={`/compare/${slug}`} className="text-emerald-800 hover:underline">{pageLabel(slug)}</Link>)}
      </div>
    </Section>
  );
}
