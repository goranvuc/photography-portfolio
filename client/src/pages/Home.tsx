// "Fog & Field" — Nordic Atmospheric Minimalism
// Početna stranica — Premium galerija sa asimetričnim editorial rasporedom

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Lightbox from "@/components/Lightbox";
import StoryView from "@/components/StoryView";
import { photos, categories, Photo } from "@/lib/photos";
import { ArrowRight, Maximize, BookOpen } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [storyPhoto, setStoryPhoto] = useState<Photo | null>(null);
  const [visiblePhotos, setVisiblePhotos] = useState<Set<string>>(new Set());
  const photoRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredPhotos = activeCategory === "Sve"
    ? photos
    : photos.filter(p => p.category === activeCategory);

  // Hero fotografija — minimalistična ptica na jezeru u magli
  const heroPhoto = photos.find(p => p.id === "IMG_7274");

  // Ref callback za čuvanje referenci na foto elemente
  const setPhotoRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      photoRefs.current.set(id, el);
    } else {
      photoRefs.current.delete(id);
    }
  }, []);

  // Intersection observer za scroll-triggered otkrivanje
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-photo-id");
            if (id) setVisiblePhotos(prev => { const next = new Set(prev); next.add(id); return next; });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    photoRefs.current.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredPhotos]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero sekcija — puna fotografija */}
      {heroPhoto && (
        <section className="relative h-screen overflow-hidden">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.title}
            className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-2xl">
              <p className="section-label text-white/70 mb-3">Fotografski portfolio</p>
              <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight mb-4">
                Kroz<br />objektiv
              </h1>
              <p className="font-body text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
                Pejzaži, divlja priroda i trenuci samoće — zabeleženi kroz godišnja doba i svetlost.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/analysis">
                  <span className="inline-flex items-center gap-2 font-ui text-xs tracking-[0.15em] uppercase text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-5 py-3 transition-all">
                    Analiza stila <ArrowRight size={12} />
                  </span>
                </Link>
                <Link href="/improvement">
                  <span className="inline-flex items-center gap-2 font-ui text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white/80 transition-all px-5 py-3">
                    Oblasti rasta <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
            <span className="font-ui text-white text-xs tracking-[0.15em] [writing-mode:vertical-rl]">SKROLUJ</span>
            <div className="w-px h-12 bg-white/50" />
          </div>
        </section>
      )}

      {/* Sekcija galerije */}
      <section className="pt-20 pb-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-2">Kolekcija</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
                {photos.length} fotografija
              </h2>
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategorija">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`font-ui text-xs px-4 py-2 transition-all border tracking-[0.08em] ${activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <hr className="rule-amber mb-12" />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                data-photo-id={photo.id}
                ref={setPhotoRef(photo.id)}
                className={`photo-card break-inside-avoid mb-4 overflow-hidden group relative transition-all duration-700 ${visiblePhotos.has(photo.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${(index % 6) * 60}ms` }}
              >
                <div className="overflow-hidden cursor-pointer" onClick={() => setLightboxPhoto(photo)}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay sa naslovom i akcionim ikonama */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4 pointer-events-none">
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-white text-sm font-medium">{photo.title}</p>
                    <p className="font-ui text-white/60 text-xs mt-0.5 tracking-[0.1em]">
                      {photo.category} · {photo.season}
                    </p>
                  </div>

                  {/* Akcione ikone — donji desni ćošak */}
                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    <button
                      className="photo-action-btn"
                      onClick={(e) => { e.stopPropagation(); setLightboxPhoto(photo); }}
                      aria-label="Pun prikaz"
                      title="Pun prikaz"
                    >
                      <Maximize size={15} />
                    </button>
                    {photo.story && (
                      <button
                        className="photo-action-btn"
                        onClick={(e) => { e.stopPropagation(); setStoryPhoto(photo); }}
                        aria-label="Prikaz sa pričom"
                        title="Prikaz sa pričom"
                      >
                        <BookOpen size={15} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Story badge — mala oznaka vidljiva i bez hovera */}
                {photo.story && (
                  <div className="absolute top-2.5 right-2.5 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <BookOpen size={11} className="text-amber-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analysis">
              <span className="inline-flex items-center gap-3 font-ui text-xs tracking-[0.15em] uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all">
                Pogledaj analizu stila <ArrowRight size={12} />
              </span>
            </Link>
            <Link href="/improvement">
              <span className="inline-flex items-center gap-3 font-ui text-xs tracking-[0.15em] uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all">
                Oblasti rasta <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">Kroz objektiv</span>
          <span className="font-ui text-xs text-muted-foreground tracking-[0.1em]">
            © Goran Vučićević · {photos.length} fotografija · Pejzaž · Divlja priroda · Dokumentarno
          </span>
        </div>
      </footer>

      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          photos={filteredPhotos}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={setLightboxPhoto}
        />
      )}

      {storyPhoto && (
        <StoryView
          photo={storyPhoto}
          onClose={() => setStoryPhoto(null)}
        />
      )}
    </div>
  );
}
