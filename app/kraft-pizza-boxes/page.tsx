import { ClusterPageTemplate } from "@/components/templates/ClusterPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { primaryClusterMap } from "@/lib/data/clusters";

const cluster = primaryClusterMap["kraft-pizza-boxes"];

export const metadata = pageMetadata({
  title: cluster.metaTitle,
  description: cluster.metaDescription,
  path: "/kraft-pizza-boxes",
});

export default function KraftPizzaBoxesPage() {
  return <ClusterPageTemplate cluster={cluster} />;
}
