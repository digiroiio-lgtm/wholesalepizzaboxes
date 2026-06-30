import { ClusterPageTemplate } from "@/components/templates/ClusterPageTemplate";
import { pageMetadata } from "@/lib/metadata";
import { primaryClusterMap } from "@/lib/data/clusters";

const cluster = primaryClusterMap["custom-printed-pizza-boxes"];

export const metadata = pageMetadata({
  title: cluster.metaTitle,
  description: cluster.metaDescription,
  path: "/custom-printed-pizza-boxes",
});

export default function CustomPrintedPizzaBoxesPage() {
  return <ClusterPageTemplate cluster={cluster} />;
}
