import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = buildMetadata({
  title: "Our Products — Quartz Colour Gallery",
  description:
    "Browse 97+ premium Q STONE quartz colours by Safayar Ceramics — Galaxy, Glassiya, Onyx, Metallic, Odyssey, Rubby, Royal series and more. Filter by collection and click to zoom.",
  path: "/gallery",
  keywords: [
    "quartz colour catalogue", "Q Stone gallery", "engineered quartz colours",
    "Galaxy quartz", "Glassiya quartz", "Onyx quartz", "Metallic quartz",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="97+ premium engineered quartz colours across Galaxy, Glassiya, Onyx, Metallic, Odyssey, Rubby, Royal, Shell and more series."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }, { label: "Our Products" }]}
      />
      <section className="bg-bg min-h-screen pb-16">
        <GalleryClient />
      </section>
    </>
  );
}
