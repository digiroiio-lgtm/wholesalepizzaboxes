import Link from "next/link";
import { Section } from "@/components/Section";
import { locationCities, locationStates, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Wholesale Pizza Boxes by Location",
  description: "Regional wholesale pizza box supply and freight coverage across top US states and metro markets.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Locations</h1>
      <h2 className="mb-3 text-xl font-bold">State Pages</h2>
      <div className="mb-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {locationStates.map((slug) => <Link key={slug} href={`/locations/${slug}`} className="text-emerald-800 hover:underline">{pageLabel(slug)}</Link>)}
      </div>
      <h2 className="mb-3 text-xl font-bold">City Pages</h2>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {locationCities.map((slug) => <Link key={slug} href={`/locations/${slug}`} className="text-emerald-800 hover:underline">{pageLabel(slug)}</Link>)}
      </div>
    </Section>
  );
}
