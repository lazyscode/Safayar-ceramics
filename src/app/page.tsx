import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS, ABOUT_IMG, BASE } from "@/lib/products";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Premium Q STONE Quartz Manufacturer & Exporter",
  description:
    "Safayar Ceramics Pvt Ltd — manufacturer and global exporter of premium engineered Q STONE quartz from Gujarat, India. 97+ colours, 15,000 Sq.Mtr plant. Supplying kitchens, hotels, airports worldwide.",
  path: "/",
});

const featuredProducts = PRODUCTS.filter((p) =>
  ["Golden Brown", "Golden Yellow", "Shine Grey", "Shine Black", "Silver Light Grey", "Silver Black", "Galaxy Crema", "Glassiya White"].includes(p.name)
).slice(0, 6);

const stats = [
  { num: "15,000", unit: "Sq. Mtr.", label: "Plant Area" },
  { num: "4,800", unit: "Sq. Ft./Day", label: "Production Capacity" },
  { num: "97+", unit: "Colours", label: "Product Range" },
  { num: "2011", unit: "", label: "Established" },
];

const applications = [
  { icon: "🍳", label: "Kitchen Countertops" },
  { icon: "🚿", label: "Bathroom Surfaces" },
  { icon: "🏪", label: "Restaurants & Bars" },
  { icon: "🏦", label: "Banks & Offices" },
  { icon: "🏥", label: "Hospitals & Labs" },
  { icon: "✈️", label: "Airports" },
  { icon: "🏨", label: "Hotels & Lobbies" },
  { icon: "🏛️", label: "Exhibition Halls" },
];

const highlights = [
  "Scratch resistant — Mohs hardness 7",
  "Stain proof non-porous surface",
  "Heat tolerant & UV stable",
  "75% glossiness world-class polishing",
  "International export quality",
  "Technical support on selection",
];

export default function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F2F0EC]">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#1C1C1C 1px,transparent 1px),linear-gradient(90deg,#1C1C1C 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Soft orb */}
        <div className="absolute top-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[0%] w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />

        <div className="container-narrow relative z-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <FadeUp delay={0.1}>
              <div className="section-tag mb-5">Premium Quartz Manufacturer · Est. 2011</div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-ink">
                Surfaces
                <br />
                <em className="text-gradient-accent not-italic">Crafted</em>
                <br />
                for the World
              </h1>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="mt-6 text-base text-muted leading-relaxed max-w-[440px]">
                Q STONE by Safayar Ceramics — engineered quartz manufactured in Gujarat, India and
                exported globally. 97+ colours. Unmatched quality.
              </p>
            </FadeUp>
            <FadeUp delay={0.45}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/gallery" className="btn-primary">
                  View Collection <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get a Quote
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.55}>
              <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — floating image collage */}
          <SlideRight delay={0.3} className="relative hidden lg:block">
            <div className="relative h-[520px]">
              {/* Main image */}
              <ScaleIn delay={0.4} className="absolute top-0 right-0 w-[68%] aspect-[3/4] rounded-sm overflow-hidden shadow-hover">
                <Image
                  src={`${BASE}/portfolio/LAST 7/Golden Brown.jpg`}
                  alt="Q Stone Golden Brown quartz"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </ScaleIn>
              {/* Secondary */}
              <ScaleIn delay={0.55} className="absolute bottom-0 left-0 w-[48%] aspect-square rounded-sm overflow-hidden shadow-hover">
                <Image
                  src={`${BASE}/portfolio/LAST 7/Shine Grey.jpg`}
                  alt="Q Stone Shine Grey quartz"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </ScaleIn>
              {/* Badge */}
              <FadeUp delay={0.7} className="absolute top-1/2 left-[28%] -translate-x-1/2 -translate-y-1/2">
                <div className="glass rounded-sm shadow-glass px-4 py-3 text-center">
                  <div className="font-display text-3xl font-light text-accent">97+</div>
                  <div className="text-[0.65rem] text-muted tracking-wider uppercase mt-0.5">Colours</div>
                </div>
              </FadeUp>
            </div>
          </SlideRight>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-ink/30 animate-pulse" />
          <span className="text-[0.6rem] tracking-widest uppercase text-ink/50">Scroll</span>
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <div className="bg-accent overflow-hidden py-3">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(3)].map((_, rep) =>
              ["Q Stone Premium Quartz", "Safayar Ceramics Pvt Ltd", "Made in Gujarat, India", "International Exports", "15,000 Sq.Mtr Plant", "97+ Colours", "Kitchen Countertops", "Commercial Flooring"].map((t) => (
                <span key={`${rep}-${t}`} className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase px-8 flex items-center gap-8">
                  <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ====== STATS ====== */}
      <section className="bg-white border-b border-border">
        <div className="container-narrow">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="py-10 px-8 text-center">
                  <div className="font-display text-4xl font-light text-accent">
                    {s.num}
                    {s.unit && <span className="text-xl ml-1 text-muted/60">{s.unit}</span>}
                  </div>
                  <div className="text-xs text-muted tracking-wider uppercase mt-2">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section className="py-20 bg-bg">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideLeft>
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src={ABOUT_IMG}
                  alt="Safayar Ceramics manufacturing plant"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-[85%] h-[85%] border border-accent/20 rounded-sm -z-10" />
              {/* Glass badge */}
              <div className="absolute bottom-6 left-6 glass rounded-sm px-5 py-3 shadow-glass">
                <div className="font-display text-2xl font-light text-accent">5,000 Sq.M</div>
                <div className="text-[0.65rem] text-muted uppercase tracking-wider">Slab Display Area</div>
              </div>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="section-tag mb-4">About Safayar Ceramics</div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-ink leading-tight mb-5">
              Engineered in Gujarat,
              <br />
              <em className="not-italic text-gradient-accent">Trusted Worldwide</em>
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Safayar Ceramics Pvt Ltd is promoted by a group of experienced industrialists with a clear
              objective — to manufacture and market premium quartz stone under the brand name{" "}
              <strong className="text-ink font-medium">Q STONE</strong> in both domestic and international
              markets since 2011.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Our state-of-the-art plant spans <strong className="text-ink font-medium">15,000 Sq.Mtr</strong>{" "}
              in Himatnagar, Northern Gujarat, with the best polishing line in the world achieving up to{" "}
              <strong className="text-ink font-medium">75% glossiness</strong> on every slab.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-7">
              With a gigantic slab display area showcasing over 5,000 Sq.M of quartz, our technical team
              is ready to support you at every step of selection and installation.
            </p>
            <div className="flex gap-3">
              <Link href="/about" className="btn-primary text-sm">
                Our Profile <ArrowRight size={14} />
              </Link>
              <Link href="/technology" className="btn-outline text-sm">
                Technology
              </Link>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section className="py-20 bg-white">
        <div className="container-narrow">
          <FadeUp>
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="section-tag mb-3">Q Stone Collection</div>
                <h2 className="font-display text-4xl font-light text-ink">Featured Colours</h2>
              </div>
              <Link
                href="/gallery"
                className="hidden sm:flex items-center gap-2 text-sm text-accent hover:text-ink transition-colors duration-200 font-medium"
              >
                View all {PRODUCTS.length} colours <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {featuredProducts.map((p) => (
              <StaggerItem key={p.id}>
                <Link href="/gallery" className="product-card group block">
                  <div className="aspect-square rounded-sm overflow-hidden bg-bg relative">
                    <Image
                      src={p.file}
                      alt={`${p.name} quartz stone`}
                      fill
                      className="product-card-img object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
                  </div>
                  <div className="mt-2.5 px-0.5">
                    <p className="text-sm font-medium text-ink">{p.name}</p>
                    <p className="text-xs text-muted">{p.category}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2}>
            <div className="mt-8 text-center sm:hidden">
              <Link href="/gallery" className="btn-outline text-sm">
                View All {PRODUCTS.length} Colours <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====== APPLICATIONS ====== */}
      <section className="py-20 bg-bg">
        <div className="container-narrow">
          <FadeUp className="text-center mb-12">
            <div className="section-tag mb-3 justify-center">Where We Perform</div>
            <h2 className="font-display text-4xl font-light text-ink">Ideal for Every Space</h2>
            <p className="mt-3 text-sm text-muted max-w-md mx-auto">
              From residential kitchens to international airports — Q Stone surfaces are engineered to
              perform beautifully in any application.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applications.map((app) => (
              <StaggerItem key={app.label}>
                <div className="group bg-white border border-border rounded-sm p-5 text-center hover:border-accent hover:shadow-card transition-all duration-300 cursor-default">
                  <div className="text-2xl mb-2.5">{app.icon}</div>
                  <div className="text-xs font-medium text-ink group-hover:text-accent transition-colors duration-200">
                    {app.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== INTERIOR PREVIEW ====== */}
      <section className="py-20 bg-white">
        <div className="container-narrow">
          <FadeUp className="flex items-end justify-between mb-10">
            <div>
              <div className="section-tag mb-3">Installed Interiors</div>
              <h2 className="font-display text-4xl font-light text-ink">See It In Space</h2>
            </div>
            <Link
              href="/interior"
              className="hidden sm:flex items-center gap-2 text-sm text-accent hover:text-ink transition-colors duration-200 font-medium"
            >
              View all <ArrowRight size={14} />
            </Link>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <StaggerItem key={n}>
                <Link href="/interior" className="group block aspect-square rounded-sm overflow-hidden bg-bg relative">
                  <Image
                    src={`${BASE}/interior/${n}.png`}
                    alt={`Safayar Ceramics interior application ${n}`}
                    fill
                    className="object-cover product-card-img"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="py-20 bg-accent">
        <div className="container-narrow text-center">
          <FadeUp>
            <div className="section-tag mb-4 justify-center text-white/70">
              <span className="w-5 h-px bg-white/50 inline-block" />
              International Supply
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
              Ready to Source Premium Quartz?
            </h2>
            <p className="text-white/70 text-sm max-w-md mx-auto mb-8">
              Contact our sales team for pricing, samples, and technical assistance. We export to
              clients worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors duration-200 rounded-sm"
              >
                Enquire Now <ArrowRight size={14} />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
              >
                Browse Catalogue
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
