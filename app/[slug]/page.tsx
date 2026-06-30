import { notFound } from "next/navigation";
import { CommercialPageTemplate } from "@/components/templates/CommercialPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { productPageMap, products, pageLabel } from "@/lib/data/site";

export function generateStaticParams() {
  return products.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = productPageMap[params.slug];
  if (!page) return {};

  return pageMetadata({
    title: pageLabel(params.slug),
    description: page.description,
    path: `/${params.slug}`,
  });
}

export default function DynamicCommercialPage({ params }: { params: { slug: string } }) {
  const page = productPageMap[params.slug];
  if (!page) notFound();

  return (
    <CommercialPageTemplate
      title={pageLabel(params.slug)}
      intro={`Source ${pageLabel(params.slug).toLowerCase()} for US operations that need wholesale pricing, consistent quality, and custom packaging support.`}
      slug={params.slug}
    />
  );
}
