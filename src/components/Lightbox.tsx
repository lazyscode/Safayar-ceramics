"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string; name?: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Card */}
      <div
        className="relative max-w-2xl w-[90vw] bg-white rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors duration-150 rounded-sm"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative aspect-square bg-bg">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 90vw, 640px"
            unoptimized
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 bg-white border-t border-border">
          <div>
            {current.name && (
              <p className="text-sm font-medium text-ink">{current.name}</p>
            )}
            <p className="text-xs text-muted">
              {index + 1} / {images.length}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              className="w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-150 rounded-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={onNext}
              className="w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-150 rounded-sm"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
