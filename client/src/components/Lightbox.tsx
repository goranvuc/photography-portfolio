// "Fog & Field" — Nordic Atmospheric Minimalism
// Lightbox — full-screen photo viewer

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/lib/photos";

interface LightboxProps {
  photo: Photo;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export default function Lightbox({ photo, photos, onClose, onNavigate }: LightboxProps) {
  const currentIndex = photos.findIndex(p => p.id === photo.id);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(photos[currentIndex - 1]);
  }, [currentIndex, photos, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < photos.length - 1) onNavigate(photos[currentIndex + 1]);
  }, [currentIndex, photos, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={22} />
      </button>

      {/* Prev button */}
      {currentIndex > 0 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next button */}
      {currentIndex < photos.length - 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="max-w-full max-h-[75vh] object-contain"
          style={{ filter: "none" }}
        />
        <div className="text-center">
          <p className="font-display text-white/90 text-lg font-medium">{photo.title}</p>
          <p className="font-ui text-white/50 text-xs tracking-widest uppercase mt-1" style={{ letterSpacing: "0.15em" }}>
            {photo.category} · {photo.season} · {currentIndex + 1} / {photos.length}
          </p>
        </div>
      </div>
    </div>
  );
}
