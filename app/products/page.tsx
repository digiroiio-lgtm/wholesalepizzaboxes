import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { products, pageLabel } from "@/lib/data/site";

export const metadata = pageMetadata({
  title: "Wholesale Pizza Box Products",
  description: "Browse wholesale pizza box product categories, materials, and custom print options for B2B buyers.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Wholesale Pizza Box Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((slug) => <ProductCard key={slug} title={pageLabel(slug)} href={`/${slug}`} />)}
      </div>
    </Section>
  );
}
