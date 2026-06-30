import { ClusterPageTemplate } from "@/components/templates/ClusterPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { primaryClusterMap } from "@/lib/data/clusters";

const cluster = primaryClusterMap["premium-pizza-boxes"];

export const metadata = pageMetadata({
  title: cluster.metaTitle,
  description: cluster.metaDescription,
  path: "/premium-pizza-boxes",
});

export default function PremiumPizzaBoxesPage() {
  return <ClusterPageTemplate cluster={cluster} />;
}
