// "Fog & Field" — Nordic Atmospheric Minimalism
// StoryView — prikaz fotografije sa pričom (markdown)

import { useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import Markdown from "react-markdown";
import { Photo } from "@/lib/photos";

interface StoryViewProps {
    photo: Photo;
    onClose: () => void;
}

export default function StoryView({ photo, onClose }: StoryViewProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        // Focus close button on mount
        closeButtonRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [handleClose]);

    return (
        <div
            ref={overlayRef}
            className="story-overlay"
            onClick={(e) => {
                if (e.target === overlayRef.current) handleClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`Priča: ${photo.title}`}
        >
            {/* Close button */}
            <button
                ref={closeButtonRef}
                className="story-close-btn"
                onClick={handleClose}
                aria-label="Zatvori"
            >
                <X size={22} />
            </button>

            {/* Content wrapper */}
            <div className="story-scroll-container">
                <div className="story-inner">
                    {/* Hero image */}
                    <div className="story-image-wrapper">
                        <img
                            src={photo.src}
                            alt={photo.title}
                            className="story-image"
                        />
                        <div className="story-image-gradient" />
                    </div>

                    {/* Header */}
                    <div className="story-header">
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-white">
                            {photo.title}
                        </h2>
                        <p className="font-ui text-xs tracking-[0.15em] uppercase text-white/50 mt-2">
                            {photo.category} · {photo.season} · {photo.mood}
                        </p>
                    </div>

                    {/* Markdown story content */}
                    {photo.story && (
                        <div className="story-content">
                            <Markdown>{photo.story}</Markdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
