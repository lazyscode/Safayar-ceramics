import Link from "next/link";
import Image from "next/image";
import { FOOT_LOGO } from "@/lib/products";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Profile", href: "/about" },
    { label: "Mission & Vision", href: "/mission" },
    { label: "Technology", href: "/technology" },
    { label: "Contact Us", href: "/contact" },
  ],
  Gallery: [
    { label: "Our Products", href: "/gallery" },
    { label: "Interior", href: "/interior" },
  ],
  Applications: [
    "Kitchen Countertops",
    "Bathroom Surfaces",
    "Restaurants & Bars",
    "Hospitals & Labs",
    "Hotels & Lobbies",
    "Airports & Terminals",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      {/* Top band */}
      <div className="border-b border-white/8">
        <div className="container-narrow py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src={FOOT_LOGO}
              alt="Safayar Ceramics"
              width={130}
              height={44}
              className="h-10 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-sm leading-relaxed text-white/50 max-w-[220px]">
              Premium engineered quartz stone manufactured in Himatnagar, Gujarat — supplying
              domestic &amp; international markets since 2011.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/Safayarceramics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-200 rounded-sm"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Gallery
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Gallery.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4 mt-6">
              Applications
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.Applications.slice(0, 4).map((a) => (
                <li key={a} className="text-sm text-white/50">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-sm text-white/50">
                <MapPin size={15} className="flex-shrink-0 text-accent mt-0.5" />
                <span>
                  949/2 Gamdi-Viravada Road, Viravada, N.H. 08,
                  <br />
                  Himatnagar 383001, Gujarat, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+919909999373"
                  className="flex gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Phone size={15} className="flex-shrink-0 text-accent mt-0.5" />
                  <span>+91 99099-99373</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+912772225073"
                  className="flex gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Phone size={15} className="flex-shrink-0 text-accent mt-0.5" />
                  <span>+91 2772 225073 / 225074</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@safayarceramics.com"
                  className="flex gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} className="flex-shrink-0 text-accent mt-0.5" />
                  <span>info@safayarceramics.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-narrow py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Safayar Ceramics Pvt Ltd. All Rights Reserved.
        </p>
        <p className="text-xs text-white/25">Q STONE® — Engineered Quartz from Gujarat, India</p>
      </div>
    </footer>
  );
}
