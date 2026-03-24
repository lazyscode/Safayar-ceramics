import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Enquiries & Quotes",
  description:
    "Contact Safayar Ceramics for Q STONE quartz enquiries, export quotes, and technical assistance. Managing Director: Tushar H. Raval. Plant: Himatnagar 383001, Gujarat, India.",
  path: "/contact",
  keywords: ["contact Safayar Ceramics", "Q Stone quote", "quartz supplier contact India", "Himatnagar quartz manufacturer"],
});

const contactDetails = [
  {
    icon: User,
    label: "Managing Director",
    lines: ["Tushar H. Raval"],
    link: null,
  },
  {
    icon: Phone,
    label: "Direct Mobile",
    lines: ["+91 99099-99373"],
    link: "tel:+919909999373",
  },
  {
    icon: Phone,
    label: "Plant Telephone",
    lines: ["+91 2772 225073", "+91 2772 225074"],
    link: "tel:+912772225073",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@safayarceramics.com", "safayar2011@gmail.com"],
    link: "mailto:info@safayarceramics.com",
  },
  {
    icon: MapPin,
    label: "Plant Location",
    lines: [
      "949/2 Gamdi-Viravada Road,",
      "Viravada, N.H. 08,",
      "Himatnagar 383001,",
      "Gujarat, India.",
    ],
    link: "https://maps.google.com/?q=Himatnagar+383001+Gujarat+India",
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"],
    link: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for pricing, samples, technical documentation, or export enquiries. Our team responds within 24 business hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 bg-bg">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact info */}
          <SlideLeft className="lg:col-span-2">
            <div className="section-tag mb-4">Reach Us</div>
            <h2 className="font-display text-3xl font-light text-ink mb-6">
              We&apos;re Here to Help
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-8">
              Whether you&apos;re an interior designer, contractor, hotel developer, or international buyer —
              our team is ready to provide full product and technical support.
            </p>

            <div className="space-y-5">
              {contactDetails.map(({ icon: Icon, label, lines, link }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-9 h-9 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-semibold text-muted uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    {lines.map((line, i) =>
                      link && i === 0 ? (
                        <a
                          key={i}
                          href={link}
                          target={link.startsWith("http") ? "_blank" : undefined}
                          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-sm text-accent hover:text-ink transition-colors duration-200"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-sm text-ink">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-sm overflow-hidden border border-border h-48 bg-white relative">
              <iframe
                title="Safayar Ceramics Plant Location"
                src="https://maps.google.com/maps?q=Himatnagar+383001+Gujarat+India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SlideLeft>

          {/* Right — form */}
          <SlideRight className="lg:col-span-3">
            <div className="bg-white border border-border rounded-sm p-8">
              <div className="section-tag mb-4">Send an Enquiry</div>
              <h2 className="font-display text-2xl font-light text-ink mb-6">
                Tell Us About Your Project
              </h2>
              <ContactForm />
            </div>
          </SlideRight>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white border-t border-border">
        <div className="container-narrow max-w-3xl">
          <FadeUp className="mb-8">
            <div className="section-tag mb-3">Common Questions</div>
            <h2 className="font-display text-3xl font-light text-ink">Frequently Asked</h2>
          </FadeUp>
          <div className="divide-y divide-border">
            {[
              {
                q: "Do you export internationally?",
                a: "Yes — we export Q STONE quartz to international clients with proper export documentation, quality certificates, and reliable logistics.",
              },
              {
                q: "Can we get samples before ordering?",
                a: "Yes, we can provide samples of our quartz colours. Please contact us with your preferred colours and delivery address.",
              },
              {
                q: "What is the minimum order quantity?",
                a: "Minimum order quantities vary by product series. Contact our sales team for specific requirements based on your project.",
              },
              {
                q: "Do you provide technical installation guidance?",
                a: "Absolutely. Our technical team provides full guidance on product selection, fabrication, and installation for every application type.",
              },
              {
                q: "How long does delivery take?",
                a: "Domestic delivery timelines depend on location and quantity. For international orders, please contact us to discuss shipping logistics and lead times.",
              },
            ].map(({ q, a }) => (
              <FadeUp key={q}>
                <div className="py-5">
                  <p className="text-sm font-medium text-ink mb-1.5">{q}</p>
                  <p className="text-sm text-muted leading-relaxed">{a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
