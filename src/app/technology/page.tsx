import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { TECH_IMG } from "@/lib/products";
import PageHeader from "@/components/PageHeader";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Technology & Specifications",
  description:
    "Q STONE quartz technology — Mohs hardness 7, 75% glossiness, non-porous surface, heat resistant. State-of-the-art 15,000 Sq.Mtr plant in Himatnagar with world-class polishing line.",
  path: "/technology",
  keywords: ["quartz technical specs", "Mohs hardness quartz", "engineered stone technology", "Q Stone specifications"],
});

const specs = [
  { label: "Hardness", value: "7 Mohs", detail: "Harder than most metals and natural stone alternatives", pct: 90 },
  { label: "Glossiness", value: "Up to 75%", detail: "Achieved via world-class polishing line — best in industry", pct: 75 },
  { label: "Heat Resistance", value: "High", detail: "Withstands high temperatures without warping or discolouration", pct: 85 },
  { label: "Water Absorption", value: "< 0.05%", detail: "Non-porous composition — zero bacteria or liquid penetration", pct: 99 },
  { label: "Flexural Strength", value: "High", detail: "Engineered composite provides superior structural integrity", pct: 88 },
  { label: "Chemical Resistance", value: "Excellent", detail: "Resistant to acids, alkalis and common household chemicals", pct: 92 },
];

const features = [
  {
    title: "World-Class Polishing Line",
    desc: "We have installed the best polishing line available globally, delivering up to 75% surface glossiness on every slab we produce — a benchmark unmatched in the Indian quartz industry.",
  },
  {
    title: "15,000 Sq.Mtr Plant",
    desc: "Our state-of-the-art manufacturing facility in Himatnagar, Northern Gujarat, is spread over 15,000 square metres, equipped with the latest machinery and international technology.",
  },
  {
    title: "Non-Porous Composition",
    desc: "Q STONE's engineered composition creates a fully non-porous surface — permanently hygienic, stain-proof, and requiring no sealing or special maintenance.",
  },
  {
    title: "International Technology",
    desc: "Technology collaborations with the best organisations in the world ensure our production setup remains at the cutting edge of engineered stone manufacturing.",
  },
  {
    title: "4,800 Sq.Ft Daily Output",
    desc: "High-capacity automated production lines deliver 4,800 square feet of quality-checked quartz stone per day, ensuring reliable supply for large-scale projects.",
  },
  {
    title: "Rigorous QC Process",
    desc: "Every slab is tested for colour consistency, dimensional accuracy, surface finish, and structural integrity before it is approved for dispatch.",
  },
];

const comparisons = [
  { property: "Scratch Resistance", qstone: true, natural: false, laminate: false },
  { property: "Stain Proof (Non-Porous)", qstone: true, natural: false, laminate: false },
  { property: "Heat Tolerance", qstone: true, natural: true, laminate: false },
  { property: "No Sealing Required", qstone: true, natural: false, laminate: true },
  { property: "Consistent Pattern", qstone: true, natural: false, laminate: true },
  { property: "UV Stable", qstone: true, natural: true, laminate: false },
  { property: "Low Maintenance", qstone: true, natural: false, laminate: true },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        title="Technology & Specifications"
        subtitle="Advanced manufacturing technology and rigorous quality control — the foundation of every Q STONE slab."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }, { label: "Technology" }]}
      />

      {/* Tech image + intro */}
      <section className="py-20 bg-bg">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideLeft>
            <div className="relative rounded-sm overflow-hidden bg-white border border-border p-4">
              <Image
                src={TECH_IMG}
                alt="Safayar Ceramics Q Stone technical specifications"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </SlideLeft>
          <SlideRight>
            <div className="section-tag mb-4">Engineered Excellence</div>
            <h2 className="font-display text-4xl font-light text-ink mb-5">
              Built for Performance,<br />
              <em className="not-italic text-gradient-accent">Finished to Perfection</em>
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Q STONE by Safayar Ceramics is manufactured using a sophisticated process that combines
              93–95% natural quartz crystals with high-performance polymer resins, processed under vacuum
              vibro-compaction and high pressure to create a non-porous, ultra-dense slab.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              The result is a surface that outperforms natural stone on every practical metric — harder,
              more hygienic, more consistent, and far easier to maintain.
            </p>
            <Link href="/contact" className="btn-primary text-sm">
              Request Technical Sheet <ArrowRight size={14} />
            </Link>
          </SlideRight>
        </div>
      </section>

      {/* Spec meters */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-narrow">
          <FadeUp className="mb-10">
            <div className="section-tag mb-3">Performance Metrics</div>
            <h2 className="font-display text-3xl font-light text-ink">Technical Specifications</h2>
          </FadeUp>
          <div className="space-y-5">
            {specs.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.05}>
                <div className="bg-bg rounded-sm p-5 border border-border hover:border-accent/30 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-3 gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-medium text-ink">{s.label}</span>
                        <span className="font-display text-lg font-light text-accent">{s.value}</span>
                      </div>
                      <p className="text-xs text-muted mt-0.5">{s.detail}</p>
                    </div>
                    <span className="text-xs text-muted font-medium">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 bg-bg border-t border-border">
        <div className="container-narrow">
          <FadeUp className="mb-10">
            <div className="section-tag mb-3">Manufacturing Highlights</div>
            <h2 className="font-display text-3xl font-light text-ink">What Sets Us Apart</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-white border border-border rounded-sm p-6 h-full hover:border-accent hover:shadow-card transition-all duration-300 group">
                  <div className="w-1 h-8 bg-accent mb-4 group-hover:h-10 transition-all duration-300" />
                  <h3 className="font-display text-xl font-light text-ink mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-narrow">
          <FadeUp className="mb-8">
            <div className="section-tag mb-3">Material Comparison</div>
            <h2 className="font-display text-3xl font-light text-ink">Q STONE vs Other Surfaces</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-sm overflow-hidden">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="text-left px-5 py-3.5 font-medium text-xs tracking-wider">Property</th>
                    <th className="px-5 py-3.5 font-medium text-xs tracking-wider text-center text-accent-light">Q STONE</th>
                    <th className="px-5 py-3.5 font-medium text-xs tracking-wider text-center text-white/60">Natural Stone</th>
                    <th className="px-5 py-3.5 font-medium text-xs tracking-wider text-center text-white/60">Laminate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.property} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                      <td className="px-5 py-3.5 text-ink font-medium text-xs">{row.property}</td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={`text-sm ${row.qstone ? "text-accent" : "text-muted/40"}`}>
                          {row.qstone ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={`text-sm ${row.natural ? "text-ink/60" : "text-muted/30"}`}>
                          {row.natural ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={`text-sm ${row.laminate ? "text-ink/60" : "text-muted/30"}`}>
                          {row.laminate ? "✓" : "✗"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-accent">
        <div className="container-narrow text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-light text-white mb-3">
              Need Full Technical Documentation?
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Contact us for complete technical data sheets, test certificates, and installation guidelines.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors duration-200 rounded-sm">
              Request Documentation <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
