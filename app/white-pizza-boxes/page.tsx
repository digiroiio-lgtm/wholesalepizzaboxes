import { ClusterPageTemplate } from "@/components/templates/ClusterPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { primaryClusterMap } from "@/lib/data/clusters";

const cluster = primaryClusterMap["white-pizza-boxes"];

export const metadata = pageMetadata({
  title: cluster.metaTitle,
  description: cluster.metaDescription,
  path: "/white-pizza-boxes",
});

export default function WhitePizzaBoxesPage() {
  return <ClusterPageTemplate cluster={cluster} />;
}
