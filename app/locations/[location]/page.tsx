import { notFound } from "next/navigation";
import { CommercialPageTemplate } from "@/components/templates/CommercialPageTemplate";
import { locationCities, locationStates, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

const allLocations = [...locationStates, ...locationCities];

export function generateStaticParams() {
  return allLocations.map((location) => ({ location }));
}

export function generateMetadata({ params }: { params: { location: string } }) {
  if (!allLocations.includes(params.location)) return {};
  return pageMetadata({
    title: `Wholesale Pizza Boxes in ${pageLabel(params.location)}`,
    description: `Get bulk and custom printed pizza boxes in ${pageLabel(params.location)} with dependable lead times and freight support.`,
    path: `/locations/${params.location}`,
  });
}

export default function LocationPage({ params }: { params: { location: string } }) {
  if (!allLocations.includes(params.location)) notFound();

  return (
    <CommercialPageTemplate
      title={`Wholesale Pizza Boxes in ${pageLabel(params.location)}`}
      intro={`Support your ${pageLabel(params.location)} operations with wholesale pizza box programs built for recurring B2B demand.`}
      slug={params.location}
    />
  );
}
