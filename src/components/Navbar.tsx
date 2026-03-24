"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { LOGO } from "@/lib/products";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Profile", href: "/about" },
      { label: "Mission & Vision", href: "/mission" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    label: "Gallery",
    href: "#",
    children: [
      { label: "Our Products", href: "/gallery" },
      { label: "Interior", href: "/interior" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={LOGO}
            alt="Safayar Ceramics"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <>
                  <button
                    onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                    className={clsx(
                      "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                      dropdown === link.label ? "text-accent" : "text-muted hover:text-ink"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={clsx(
                        "transition-transform duration-200",
                        dropdown === link.label && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border shadow-hover rounded-sm overflow-hidden z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={clsx(
                            "block px-4 py-2.5 text-sm transition-colors duration-150",
                            pathname === child.href
                              ? "text-accent bg-accent-light font-medium"
                              : "text-muted hover:text-ink hover:bg-bg"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors duration-200",
                    pathname === link.href ? "text-accent" : "text-muted hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
          Get a Quote
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-ink"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={clsx(
                          "transition-transform",
                          dropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    {dropdown === link.label &&
                      link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block pl-4 py-2 text-sm text-muted hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={clsx(
                      "block py-2.5 text-sm font-medium",
                      pathname === link.href ? "text-accent" : "text-ink hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary text-center mt-2 text-xs py-2.5">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
