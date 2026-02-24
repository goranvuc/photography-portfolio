// "Fog & Field" — Nordic Atmospheric Minimalism
// Početna stranica — Premium galerija sa asimetričnim editorial rasporedom
// Dizajn: topla kameno-bela pozadina, obilno belo polje, hover efekat desaturacija→živost

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Lightbox from "@/components/Lightbox";
import { photos, categories, Photo } from "@/lib/photos";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [visiblePhotos, setVisiblePhotos] = useState<Set<string>>(new Set());
  const photoRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredPhotos = activeCategory === "Sve"
    ? photos
    : photos.filter(p => p.category === activeCategory);

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

  // Hero fotografija — minimalistična ptica na jezeru u magli
  const heroPhoto = photos.find(p => p.id === "IMG_7274")!;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero sekcija — puna fotografija */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={heroPhoto.src}
          alt={heroPhoto.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.85)" }}
        />
        {/* Gradijentni overlay — tamno dole za tekst */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

        {/* Hero tekst — dole levo */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-2xl">
            <p className="section-label text-white/70 mb-3">Fotografski portfolio</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight mb-4">
              Kroz<br />objektiv
            </h1>
            <p className="font-body text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Pejzaži, divlja priroda i trenuci samoće — zabeleženi kroz godišnja doba i svetlost.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/analysis">
                <span className="inline-flex items-center gap-2 font-ui text-xs tracking-widest uppercase text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-5 py-3 transition-all" style={{ letterSpacing: "0.15em" }}>
                  Analiza stila <ArrowRight size={12} />
                </span>
              </Link>
              <Link href="/improvement">
                <span className="inline-flex items-center gap-2 font-ui text-xs tracking-widest uppercase text-white/60 hover:text-white/80 transition-all px-5 py-3" style={{ letterSpacing: "0.15em" }}>
                  Oblasti rasta <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Indikator skrolovanja */}
        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-50">
          <span className="font-ui text-white text-xs" style={{ letterSpacing: "0.15em", writingMode: "vertical-rl" }}>SKROLUJ</span>
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Sekcija galerije */}
      <section className="pt-20 pb-32">
        <div className="container">
          {/* Zaglavlje sekcije */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-2">Kolekcija</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
                25 fotografija
              </h2>
            </div>

            {/* Filter kategorija */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-ui text-xs px-4 py-2 transition-all border ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                  style={{ letterSpacing: "0.08em" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <hr className="rule-amber mb-12" />

          {/* Asimetrična masonry galerija */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                data-photo-id={photo.id}
                ref={el => { if (el) photoRefs.current.set(photo.id, el); }}
                className={`photo-card break-inside-avoid mb-4 overflow-hidden cursor-pointer group relative transition-all duration-700 ${
                  visiblePhotos.has(photo.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${(index % 6) * 60}ms` }}
                onClick={() => setLightboxPhoto(photo)}
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                {/* Natpis koji se pojavljuje na hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <p className="font-display text-white text-sm font-medium">{photo.title}</p>
                    <p className="font-ui text-white/60 text-xs mt-0.5" style={{ letterSpacing: "0.1em" }}>
                      {photo.category} · {photo.season}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Donja navigacija */}
          <div className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analysis">
              <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all" style={{ letterSpacing: "0.15em" }}>
                Pogledaj analizu stila <ArrowRight size={12} />
              </span>
            </Link>
            <Link href="/improvement">
              <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all" style={{ letterSpacing: "0.15em" }}>
                Oblasti rasta <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Podnožje */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">Kroz objektiv</span>
          <span className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
            25 fotografija · Pejzaž · Divlja priroda · Dokumentarno
          </span>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          photos={filteredPhotos}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={setLightboxPhoto}
        />
      )}
    </div>
  );
}
