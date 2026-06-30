import Link from "next/link";
import { Section } from "@/components/Section";
import { aboutTopics, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Wholesale Pizza Boxes",
  description: "Learn about our manufacturing, quality, sustainability, and logistics systems for B2B pizza packaging supply.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section>
      <h1 className="mb-4 text-3xl font-extrabold">About Wholesale Pizza Boxes</h1>
      <p className="mb-6 text-slate-700">We are a B2B pizza packaging lead-generation platform focused on industrial sourcing outcomes: quality, print consistency, lead-time reliability, and wholesale procurement support.</p>
      <div className="grid gap-2 md:grid-cols-2">
        {aboutTopics.map((topic) => <Link key={topic} href={`/about/${topic}`} className="text-emerald-800 hover:underline">{pageLabel(topic)}</Link>)}
      </div>
    </Section>
  );
}
