import { Section } from "@/components/Section";
import { SizeCard } from "@/components/SizeCard";
import { pageMetadata } from "@/lib/metadata";
import { sizes } from "@/lib/data/site";

export const metadata = pageMetadata({
  title: "Pizza Box Sizes",
  description: "Compare pizza box dimensions from 8 inch to 20 inch for wholesale foodservice packaging programs.",
  path: "/pizza-box-sizes",
});

export default function SizesPage() {
  return (
    <Section>
      <h1 className="mb-4 text-3xl font-extrabold">Pizza Box Sizes</h1>
      <p className="mb-6 text-slate-700">Review standard pizza box size programs and request wholesale pricing by volume and print requirements.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sizes.map((size) => <SizeCard key={size} size={size} />)}
      </div>
    </Section>
  );
}
