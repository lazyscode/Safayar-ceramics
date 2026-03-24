"use client";
import { useState } from "react";
import Image from "next/image";
import { INTERIOR_IMAGES } from "@/lib/products";
import Lightbox from "@/components/Lightbox";

export default function InteriorClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages = INTERIOR_IMAGES.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <div className="container-narrow py-10 pb-16">
      {/* Masonry-style grid using CSS columns */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-0">
        {INTERIOR_IMAGES.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            className="break-inside-avoid mb-3 block w-full group focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm overflow-hidden"
          >
            <div className="relative overflow-hidden rounded-sm border border-border group-hover:border-accent/40 transition-colors duration-200">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover product-card-img"
                unoptimized
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 text-ink text-xs font-medium px-3 py-1.5 rounded-sm">
                  View
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) => (prev! - 1 + INTERIOR_IMAGES.length) % INTERIOR_IMAGES.length)
          }
          onNext={() =>
            setLightboxIndex((prev) => (prev! + 1) % INTERIOR_IMAGES.length)
          }
        />
      )}
    </div>
  );
}
