import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { guides } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Buyer Guides",
  description: "Buyer guides for wholesale pizza box sourcing, custom printing, private label packaging, and franchise packaging operations.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Buyer Guides</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((slug) => <ResourceCard key={slug} slug={slug} basePath="/guides" />)}
      </div>
    </Section>
  );
}
