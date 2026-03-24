import type { Metadata } from "next";

const SITE_URL = "https://www.safayarceramics.com";
const SITE_NAME = "Safayar Ceramics Pvt Ltd";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${opts.path ?? ""}`;
  return {
    title: `${opts.title} | ${SITE_NAME}`,
    description: opts.description,
    keywords: [
      "quartz stone",
      "Q Stone",
      "Safayar Ceramics",
      "quartz supplier India",
      "quartz manufacturer Gujarat",
      "engineered quartz",
      "kitchen countertop",
      "quartz export",
      ...(opts.keywords ?? []),
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
      siteName: SITE_NAME,
      images: [
        {
          url: "https://www.safayarceramics.com/img/logo.png",
          width: 400,
          alt: "Safayar Ceramics Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
    },
    robots: { index: true, follow: true },
  };
}
