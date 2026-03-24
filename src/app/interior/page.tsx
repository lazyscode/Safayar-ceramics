import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import InteriorClient from "./InteriorClient";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Interior Applications Gallery",
  description:
    "See Safayar Ceramics Q STONE quartz installed in real kitchens, bathrooms, hotels, and commercial interiors. 16 curated interior application photos.",
  path: "/interior",
  keywords: ["quartz interior photos", "Q Stone kitchen", "quartz bathroom application", "engineered quartz interiors"],
});

export default function InteriorPage() {
  return (
    <>
      <PageHeader
        title="Interior Gallery"
        subtitle="Q STONE quartz surfaces installed in kitchens, bathrooms, hotels, and commercial spaces. See the quality in context."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }, { label: "Interior" }]}
      />
      <section className="bg-bg min-h-screen">
        <InteriorClient />

        <FadeUp>
          <div className="container-narrow pb-16 text-center border-t border-border pt-10">
            <p className="text-sm text-muted mb-4">
              Want to see our full range of colours?
            </p>
            <Link href="/gallery" className="btn-primary text-sm">
              Browse Product Catalogue <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
