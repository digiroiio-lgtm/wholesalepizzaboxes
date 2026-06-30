import { ClusterPageTemplate } from "@/components/templates/ClusterPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { primaryClusterMap } from "@/lib/data/clusters";

const cluster = primaryClusterMap["clay-coated-pizza-boxes"];

export const metadata = pageMetadata({
  title: cluster.metaTitle,
  description: cluster.metaDescription,
  path: "/clay-coated-pizza-boxes",
});

export default function ClayCoatedPizzaBoxesPage() {
  return <ClusterPageTemplate cluster={cluster} />;
}
