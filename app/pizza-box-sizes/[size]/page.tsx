import { notFound } from "next/navigation";
import { CommercialPageTemplate } from "@/components/templates/CommercialPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { sizes } from "@/lib/data/site";

export function generateStaticParams() {
  return sizes.map((size) => ({ size }));
}

export function generateMetadata({ params }: { params: { size: string } }) {
  if (!sizes.includes(params.size)) return {};
  const label = params.size.replace("-", " ");
  return pageMetadata({
    title: `${label} Pizza Boxes`,
    description: `Wholesale ${label} pizza boxes with material and print options for B2B procurement teams.`,
    path: `/pizza-box-sizes/${params.size}`,
  });
}

export default function SizeDetailPage({ params }: { params: { size: string } }) {
  if (!sizes.includes(params.size)) notFound();

  return (
    <CommercialPageTemplate
      title={`${params.size.replace("-", " ")} Pizza Boxes`}
      intro={`Secure reliable supply of ${params.size.replace("-", " ")} pizza boxes with wholesale pricing and custom print support.`}
      slug={params.size}
    />
  );
}
