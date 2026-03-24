import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-5">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-light text-accent/20 mb-4">404</div>
        <h1 className="font-display text-3xl font-light text-ink mb-3">Page Not Found</h1>
        <p className="text-sm text-muted leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Browse our quartz collection or get in touch with
          our team.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary text-sm">
            Back to Home <ArrowRight size={14} />
          </Link>
          <Link href="/gallery" className="btn-outline text-sm">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
