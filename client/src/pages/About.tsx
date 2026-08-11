// "Fog & Field" — Nordic Atmospheric Minimalism
// O meni — Bento Hub: interesovanja organizovana kao vizuelne pločice

import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Brain,
  Mountain,
  Leaf,
  Flower2,
  Clock,
  Music2,
  Film,
  X,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

// Markdown content imports
import bioMd from "@/content/about/bio.md?raw";
import devMd from "@/content/about/dev.md?raw";
import aiMd from "@/content/about/ai.md?raw";
import hikeMd from "@/content/about/hike.md?raw";
import mushMd from "@/content/about/mush.md?raw";
import orchMd from "@/content/about/orch.md?raw";
import travelMd from "@/content/about/travel.md?raw";
import histMd from "@/content/about/hist.md?raw";
import musicMd from "@/content/about/music.md?raw";
import filmMd from "@/content/about/film.md?raw";

/* ────────────────────────────────────────────
   Tipovi
   ──────────────────────────────────────────── */

type TileKey =
  | "bio"
  | "dev"
  | "ai"
  | "hike"
  | "mush"
  | "orch"
  | "travel"
  | "hist"
  | "music"
  | "film";

type TileData = {
  key: TileKey;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  gridClass: string;
  content: string; // Markdown content string
};

/* ────────────────────────────────────────────
   Deterministički direction za hover sliku
   — hash funkcija nad TileKey-vima (zamenjuje Math.random radi
   stabilnijeg rendering-a i predvidivijeg hash per pločicu)
   ──────────────────────────────────────────── */
const HOVER_DIRECTIONS = [
  "translate-x-full",
  "-translate-x-full",
  "translate-y-full",
  "-translate-y-full",
] as const;

function directionForKey(key: TileKey): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) | 0;
  }
  return HOVER_DIRECTIONS[Math.abs(h) % HOVER_DIRECTIONS.length];
}

/* ────────────────────────────────────────────
   Definicija pločica
   ──────────────────────────────────────────── */

const TILES: TileData[] = [
  {
    key: "bio",
    title: "Biografija",
    subtitle: "Put od koda do prirode",
    description: "Lični put od tehnologije do mira u prirodi.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/bio",
    icon: <BookOpen className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: bioMd,
  },
  {
    key: "dev",
    title: "Programiranje",
    subtitle: "Arhitektura digitalnih svetova",
    description: "Arhitektura kompleksnih sistema i čist kod.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/dev",
    icon: <Code2 className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: devMd,
  },
  {
    key: "ai",
    title: "Veštačka inteligencija",
    subtitle: "Novi horizonti kognicije",
    description: "Sagovornik u procesu razmišljanja i kognicije.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/ai",
    icon: <Brain className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2 md:row-span-2",
    content: aiMd,
  },
  {
    key: "hike",
    title: "Planinarenje",
    subtitle: "Vertikalni mir",
    description: "Vertikalni mir na stazama Fruške gore.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/hike",
    icon: <Mountain className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: hikeMd,
  },
  {
    key: "mush",
    title: "Gljive",
    subtitle: "Mikologija u fokusu",
    description: "Istraživanje skrivenih mreža šumskog ekosistema.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/mushroom",
    icon: <Leaf className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: mushMd,
  },
  {
    key: "orch",
    title: "Orhideje",
    subtitle: "Egzotična preciznost",
    description: "Lekcije o strpljenju kroz krhku lepotu cveta.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/orchid",
    icon: <Flower2 className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: orchMd,
  },
  {
    key: "travel",
    title: "Putovanja",
    subtitle: "Nomadski dijalog",
    description: "Nomadski duh i potraga za atmosferom u dalekim predelima.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/travel",
    icon: <Compass className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: travelMd,
  },
  {
    key: "hist",
    title: "Istorija",
    subtitle: "Odjeci prošlosti",
    description: "Razumevanje sadašnjosti kroz slojeve prošlih odluka.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/history",
    icon: <Clock className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-6",
    content: histMd,
  },
  {
    key: "music",
    title: "Muzika",
    subtitle: "Zvučni pejzaži",
    description: "Ambijentalni pejzaži kao zvučna podloga života.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/music",
    icon: <Music2 className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: musicMd,
  },
  {
    key: "film",
    title: "Film",
    subtitle: "Pokretne slike",
    description: "Vizuelni jezik strpljenja i tišine na ekranu.",
    imageUrl:
      "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/film",
    icon: <Film className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: filmMd,
  },
];

/* ────────────────────────────────────────────
   Bento pločica
   ──────────────────────────────────────────── */

function TileCard({ tile, onOpen }: { tile: TileData; onOpen: () => void }) {
  const direction = directionForKey(tile.key);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Lazy-load hover slike tek na prvi hover/focus (sprečava učitavanje 10 velikih
  // Cloudinary slika pri mount-u, posebno na mobilnom gde hover ionako ne postoji).
  // Jednom učitana slika ostaje montirana — čuvamo "ever hovered" flag.
  const [everHovered, setEverHovered] = useState(false);
  const shouldLoadImg = everHovered;

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setEverHovered(true)}
      onFocus={() => setEverHovered(true)}
      className={cn(
        "group relative flex h-full w-full flex-col p-6 text-left",
        "border border-border bg-secondary/30",
        "transition-all duration-500 ease-out",
        "hover:border-primary/30 hover:bg-secondary/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "min-h-[160px]",
        tile.gridClass
      )}
    >
      {/* Background Image Effect (Clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shouldLoadImg && (
          <div
            className={cn(
              "absolute inset-0 z-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-40 group-hover:translate-x-0 group-hover:translate-y-0",
              direction,
              imgLoaded && "opacity-40"
            )}
          >
            <img
              src={tile.imageUrl}
              alt=""
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className="h-full w-full object-cover grayscale brightness-75"
            />
          </div>
        )}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {/* Ikona i hint */}
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary/20">
            {tile.icon}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Naslov i subtitle */}
        <div className="mt-auto space-y-1.5">
          <h3 className="font-display text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
            {tile.title}
          </h3>
          <p className="text-sm text-muted-foreground">{tile.subtitle}</p>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-all duration-300 z-30">
        <div className="bg-background/95 backdrop-blur-sm border border-border px-3 py-1.5 shadow-xl text-[10px] uppercase tracking-[0.12em] text-muted-foreground whitespace-nowrap">
          {tile.description}
        </div>
      </div>
    </button>
  );
}

/* ────────────────────────────────────────────
   Overlay za sadržaj (StoryView stil)
   ──────────────────────────────────────────── */

function TileOverlay({
  tile,
  onClose,
}: {
  tile: TileData;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingId = `tile-overlay-title-${tile.key}`;

  const handleClose = useCallback(() => onClose(), [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }
      // Focus trap: Tab / Shift+Tab ostaje unutar overlay-a
      if (e.key !== "Tab" || !contentRef.current || !closeRef.current) return;
      const focusables = Array.from(
        contentRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => el.offsetParent !== null);
      // Dugme za zatvaranje je uvek prvo/poslednje fokusibilno (fiksno pozicionirano)
      const items = [closeRef.current, ...focusables].filter(
        (el, i, arr) => arr.indexOf(el) === i
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (!active || !contentRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      ref={overlayRef}
      className="story-overlay"
      onClick={e => {
        if (e.target === overlayRef.current) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="story-close-btn"
        onClick={handleClose}
        aria-label="Zatvori"
      >
        <X size={18} />
      </button>

      {/* Scroll container */}
      <div className="story-scroll-container">
        <div className="story-inner" style={{ paddingTop: "4rem" }}>
          {/* Header */}
          <div className="story-header" style={{ marginTop: 0 }}>
            <p
              className="font-ui text-xs font-medium uppercase tracking-[0.15em]"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              {tile.subtitle}
            </p>
            <h2
              id={headingId}
              className="font-display text-3xl font-semibold mt-3"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {tile.title}
            </h2>
            <div
              className="mt-6"
              style={{
                borderTop: "1px solid oklch(0.72 0.12 75 / 0.4)",
              }}
            />
          </div>

          {/* Content */}
          <div ref={contentRef} className="story-content">
            <ReactMarkdown>{tile.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Glavna stranica
   ──────────────────────────────────────────── */

const VALID_KEYS: TileKey[] = TILES.map(t => t.key);

function tileFromHash(hash: string): TileKey | null {
  if (!hash.startsWith("#")) return null;
  const key = hash.slice(1) as TileKey;
  return VALID_KEYS.includes(key) ? key : null;
}

export default function About() {
  const [location, navigate] = useLocation();
  const [openKey, setOpenKey] = useState<TileKey | null>(() =>
    tileFromHash(window.location.hash)
  );

  // Sync tile state sa URL hash-om — podržava permalink deljenje i back/forward
  useEffect(() => {
    const onHashChange = () => {
      setOpenKey(tileFromHash(window.location.hash));
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleOpen = useCallback(
    (key: TileKey) => {
      setOpenKey(key);
      // Ažuriraj URL bez skoka na vrh stranice
      if (window.location.hash !== `#${key}`) {
        navigate(`${location.split("#")[0]}#${key}`, { replace: true });
      }
    },
    [location, navigate]
  );

  const handleClose = useCallback(() => {
    setOpenKey(null);
    if (window.location.hash) {
      navigate(location.split("#")[0], { replace: true });
    }
  }, [location, navigate]);

  const openTile = TILES.find(t => t.key === openKey) ?? null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Zaglavlje */}
      <section className="pt-32 pb-16">
        <div className="container max-w-5xl">
          <p className="section-label mb-3">Lična mapa</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            O meni
          </h1>
          <p className="text-lg text-muted-foreground font-body italic max-w-2xl">
            Interesovanja, iskustva i refleksije — organizovane kao pločice.
            Klikni na bilo koju da saznaš više.
          </p>
        </div>
      </section>

      <hr className="rule-amber mx-6 md:mx-12 lg:mx-24 mb-12" />

      {/* Bento grid */}
      <section className="pb-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {TILES.map(tile => (
              <TileCard
                key={tile.key}
                tile={tile}
                onOpen={() => handleOpen(tile.key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Overlay */}
      {openTile && <TileOverlay tile={openTile} onClose={handleClose} />}

      {/* Donja navigacija */}
      <section className="pb-20 border-t border-border pt-12">
        <div className="container flex justify-center">
          <Link href="/">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-[0.15em] uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all">
              <ArrowLeft size={12} /> Nazad na galeriju
            </span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">
            Kroz objektiv
          </span>
          <span className="font-ui text-xs text-muted-foreground tracking-[0.1em]">
            © Goran Vučićević · O meni · {photos.length} fotografija
          </span>
        </div>
      </footer>
    </div>
  );
}
