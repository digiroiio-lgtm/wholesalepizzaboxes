import type { Metadata } from "next";
import { formatTitle } from "@/lib/utils";

const BASE_URL = "https://wholesalepizzaboxes.com";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${BASE_URL}${path}`;

  return {
    title: formatTitle(title),
    description,
    alternates: { canonical },
    openGraph: {
      title: formatTitle(title),
      description,
      url: canonical,
      siteName: "Wholesale Pizza Boxes",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: formatTitle(title),
      description,
    },
  };
}
