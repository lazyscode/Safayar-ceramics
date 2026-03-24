import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { ABOUT_IMG, BANNER_IMG } from "@/lib/products";
import PageHeader from "@/components/PageHeader";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Company Profile",
  description:
    "Safayar Ceramics Pvt Ltd — promoted by experienced industrialists since 2011. 15,000 Sq.Mtr manufacturing plant in Himatnagar, Gujarat. Q STONE premium quartz manufacturer and international exporter.",
  path: "/about",
  keywords: ["quartz manufacturer profile", "Safayar Ceramics history", "Q Stone brand India"],
});

const milestones = [
  { year: "2011", event: "Safayar Ceramics Pvt Ltd founded in Himatnagar, Gujarat" },
  { year: "2012", event: "Q STONE brand launched in the domestic market" },
  { year: "2014", event: "State-of-the-art 15,000 Sq.Mtr manufacturing plant commissioned" },
  { year: "2015", event: "World-class polishing line installed — 75% surface glossiness achieved" },
  { year: "2018", event: "5,000 Sq.M slab display area inaugurated for customers" },
  { year: "2020+", event: "International export operations expanded" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Company Profile"
        subtitle="A group of experienced industrialists committed to manufacturing premium quartz surfaces for domestic and international markets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }, { label: "Profile" }]}
      />

      {/* Main content */}
      <section className="py-20 bg-bg">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SlideLeft>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={ABOUT_IMG}
                  alt="Safayar Ceramics manufacturing plant Himatnagar"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-accent/20 rounded-sm -z-10" />
            </div>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { num: "15,000", unit: "Sq. Mtr.", label: "Plant Area" },
                { num: "4,800", unit: "Sq. Ft./Day", label: "Daily Production" },
                { num: "75%", unit: "", label: "Surface Glossiness" },
                { num: "5,000", unit: "Sq. M.", label: "Display Area" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-border rounded-sm p-5">
                  <div className="font-display text-3xl font-light text-accent">
                    {s.num}
                    {s.unit && <span className="text-base text-muted ml-1">{s.unit}</span>}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-4">
              <div className="section-tag mb-4">Who We Are</div>
              <p>
                <strong className="text-ink">Safayar Ceramics Pvt Ltd</strong> is a modernised manufacturer
                of Quartz stone since 2011 under the brand name{" "}
                <strong className="text-ink">Q STONE</strong>. The company is promoted by a group of
                experienced industrialists whose primary objective is to manufacture and market quartz stone
                in both the domestic and international markets.
              </p>
              <p>
                Safayar Ceramics has the most sophisticated technology support and collaborations towards
                its production setup with the best organisations in the world, including the most experienced
                experts. Our team is ready to support our customers and provide all necessary technical
                assistance required — including guidance on the selection of appropriate products and
                detailed information on individual products and their applications.
              </p>
              <p>
                Safayar has a state-of-the-art manufacturing plant spread over{" "}
                <strong className="text-ink">15,000 Sq.Mtr</strong>, located in the northern part of
                Gujarat state, West of India. Using international technology, our facility is where your
                desire takes shape.
              </p>
              <p>
                Our production capacity is{" "}
                <strong className="text-ink">4,800 Sq.Ft. per day</strong>. The best polishing line in the
                world has been installed, which provides up to{" "}
                <strong className="text-ink">75% glossiness</strong> to our quartz stone — committed to
                ensuring a reliable supply of stones with superior quality.
              </p>
              <p>
                To ensure customers can make informed choices, we maintain a gigantic slab display area
                showcasing over <strong className="text-ink">5,000 Sq.M.</strong> of quartz.
              </p>
              <p>
                A group of successful entrepreneurs came together to produce a unique product line in the
                ceramics world, with the highest integrity and commitment to customers — that formed
                Safayar Ceramics Pvt Ltd.
              </p>
            </div>

            {/* Contact for products */}
            <div className="mt-8 p-5 bg-white border border-border rounded-sm">
              <p className="text-xs text-muted uppercase tracking-wider mb-2 font-medium">Product Information</p>
              <p className="text-sm text-ink font-medium">Tushar H. Raval — Managing Director</p>
              <a href="tel:+919909999373" className="text-sm text-accent hover:underline">
                +91 99099-99373
              </a>
              <br />
              <a href="mailto:info@safayarceramics.com" className="text-sm text-accent hover:underline">
                info@safayarceramics.com
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <Link href="/gallery" className="btn-primary text-sm">
                View Products <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline text-sm">
                Contact Us
              </Link>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-narrow">
          <FadeUp className="mb-10">
            <div className="section-tag mb-3">Our Journey</div>
            <h2 className="font-display text-3xl font-light text-ink">Company Milestones</h2>
          </FadeUp>
          <StaggerContainer className="relative">
            {/* Timeline line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <StaggerItem key={m.year}>
                  <div className="flex gap-6 items-start">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="font-display text-lg font-light text-accent">{m.year}</span>
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-8 flex-shrink-0 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-white ring-1 ring-accent" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-sm text-ink">{m.event}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Banner */}
      <FadeUp>
        <div className="relative h-40 overflow-hidden">
          <Image src={BANNER_IMG} alt="Safayar Ceramics banner" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-accent/80 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-display text-2xl font-light">Ready to Partner With Us?</p>
              <Link href="/contact" className="mt-3 inline-flex items-center gap-2 text-sm border border-white/50 px-5 py-2 hover:bg-white hover:text-accent transition-all duration-200 rounded-sm">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </>
  );
}
