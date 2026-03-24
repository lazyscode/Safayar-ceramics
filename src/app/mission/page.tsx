import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap, Globe, Users, Award } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Mission & Vision",
  description:
    "Safayar Ceramics mission is to be the industry leader in quartz stone and provide customers with the finest products and unsurpassed support in domestic and international markets.",
  path: "/mission",
  keywords: ["Safayar Ceramics mission", "quartz manufacturer vision", "Q Stone values"],
});

const values = [
  { icon: Award, title: "Quality First", desc: "Every slab undergoes strict quality checks before leaving our facility. No compromise on surface finish, dimensional accuracy, or consistency." },
  { icon: Globe, title: "Global Reach", desc: "We supply Q STONE to international markets with reliable logistics, proper documentation, and export-grade packaging." },
  { icon: Users, title: "Customer Focus", desc: "Our technical team provides full guidance on product selection, installation advice, and after-sales support." },
  { icon: Zap, title: "Technology Driven", desc: "International technology partnerships and constant R&D keep our production at the cutting edge of the industry." },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        title="Mission & Vision"
        subtitle="Our purpose, values, and the principles that guide every decision at Safayar Ceramics."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }, { label: "Mission & Vision" }]}
      />

      {/* Mission & Vision cards */}
      <section className="py-20 bg-bg">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SlideLeft>
            <div className="h-full bg-accent rounded-sm p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/4 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/4 -translate-x-1/4" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-sm px-3 py-1.5 mb-6">
                  <Target size={14} className="text-white" />
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">Our Mission</span>
                </div>
                <h2 className="font-display text-4xl font-light text-white leading-tight mb-5">
                  Industry Leader in Quartz
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our mission and goal is to be the <strong className="text-white">industry leader</strong> in
                  the quartz stone product line — providing our customers with the finest products and
                  unsurpassed customer support, both domestically and in international markets.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-4">
                  We are committed to ensuring a reliable supply of quartz stones with superior quality,
                  manufactured with international technology at our state-of-the-art facility in Gujarat.
                </p>
              </div>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="h-full bg-white border border-border rounded-sm p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/5 -translate-y-1/4 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent/5 translate-y-1/4 -translate-x-1/4" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-sm px-3 py-1.5 mb-6">
                  <Eye size={14} className="text-accent" />
                  <span className="text-accent text-xs font-semibold tracking-wider uppercase">Our Vision</span>
                </div>
                <h2 className="font-display text-4xl font-light text-ink leading-tight mb-5">
                  Empowering Through Technology
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Empowering business with technology has been our driving force — and this has been
                  achieved by translating expertise into <strong className="text-ink">value-based, cost-effective solutions</strong>{" "}
                  that best fit our customers' requirements.
                </p>
                <p className="text-muted text-sm leading-relaxed mt-4">
                  We envision a future where Safayar's Q STONE becomes the benchmark for engineered quartz
                  quality in global markets — synonymous with precision, beauty, and reliability.
                </p>
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-narrow">
          <FadeUp className="mb-10">
            <div className="section-tag mb-3">What Drives Us</div>
            <h2 className="font-display text-3xl font-light text-ink">Core Values</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="group bg-bg border border-border rounded-sm p-6 hover:border-accent hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-light text-ink mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Promise section */}
      <section className="py-16 bg-bg border-t border-border">
        <div className="container-narrow max-w-2xl mx-auto text-center">
          <FadeUp>
            <div className="section-tag mb-4 justify-center">Our Promise</div>
            <h2 className="font-display text-3xl font-light text-ink mb-5">
              Highest Integrity &amp; Commitment
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              A group of successful entrepreneurs came together to produce a unique product line in the
              ceramics world — with the highest integrity and commitment to customers. That ethos remains
              at the heart of everything Safayar Ceramics does, from the factory floor to international
              delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/technology" className="btn-primary text-sm">
                Our Technology <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline text-sm">
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
