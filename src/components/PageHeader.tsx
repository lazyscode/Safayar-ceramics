import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="pt-28 pb-14 bg-white border-b border-border">
      <div className="container-narrow">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-xs text-muted hover:text-accent transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-xs text-ink font-medium">{crumb.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <ChevronRight size={12} className="text-muted/50" />
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <div className="section-tag mb-3">{breadcrumbs[breadcrumbs.length - 1].label}</div>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-ink leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base text-muted leading-relaxed max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
