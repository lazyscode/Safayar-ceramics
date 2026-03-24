"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import Lightbox from "@/components/Lightbox";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const searchMatch = query === "" || p.name.toLowerCase().includes(query.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const lightboxImages = filtered.map((p) => ({
    src: p.file,
    alt: `${p.name} quartz stone`,
    name: p.name,
  }));

  return (
    <>
      {/* Controls */}
      <div className="sticky top-16 z-30 bg-white border-b border-border">
        <div className="container-narrow py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colours..."
              className="form-input pl-8 pr-8 py-2 text-xs"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Count */}
          <span className="text-xs text-muted hidden sm:block">
            {filtered.length} of {PRODUCTS.length} colours
          </span>
        </div>

        {/* Category tabs */}
        <div className="container-narrow pb-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm border transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-muted border-border hover:border-accent/50 hover:text-ink"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 opacity-60">
                    ({PRODUCTS.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container-narrow py-8">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted text-sm">No colours match your search.</p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="mt-3 text-accent text-sm underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setLightboxIndex(idx)}
                className="product-card group text-left focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm"
              >
                <div className="aspect-square rounded-sm overflow-hidden bg-bg relative border border-border group-hover:border-accent/40 transition-colors duration-200">
                  <Image
                    src={product.file}
                    alt={`${product.name} quartz stone tile`}
                    fill
                    className="product-card-img object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/8 transition-colors duration-300" />
                </div>
                <div className="mt-2 px-0.5">
                  <p className="text-xs font-medium text-ink leading-tight">{product.name}</p>
                  <p className="text-[0.6rem] text-muted mt-0.5">{product.category}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev! - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((prev) => (prev! + 1) % filtered.length)}
        />
      )}
    </>
  );
}
