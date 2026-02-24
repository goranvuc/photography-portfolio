// "Fog & Field" — Nordic Atmospheric Minimalism
// Analysis Page — Full photographic style breakdown with visual commentary

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { photos } from "@/lib/photos";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ScoreBarProps {
  label: string;
  score: number;
  description: string;
}

function ScoreBar({ label, score, description }: ScoreBarProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-ui text-sm font-medium text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {label}
        </span>
        <span className="font-ui text-xs text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {score}/10
        </span>
      </div>
      <div className="score-bar mb-2">
        <div
          className="score-bar-fill"
          style={{ width: animated ? `${score * 10}%` : "0%" }}
        />
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
        {description}
      </p>
    </div>
  );
}

interface TraitCardProps {
  icon: string;
  title: string;
  description: string;
  examples: string[];
}

function TraitCard({ icon, title, description, examples }: TraitCardProps) {
  return (
    <div className="border border-border p-6 hover:border-primary/40 transition-colors">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-display text-lg font-medium text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', serif" }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {examples.map(ex => (
          <span key={ex} className="font-ui text-xs text-primary border border-primary/30 px-2 py-1" style={{ letterSpacing: "0.06em" }}>
            {ex}
          </span>
        ))}
      </div>
    </div>
  );
}

// Select showcase photos for the analysis page
const showcasePhotos = [
  photos.find(p => p.id === "IMG_3240")!, // Golden sunset
  photos.find(p => p.id === "IMG_7274")!, // Minimalist bird
  photos.find(p => p.id === "IMG_9755")!, // Epic mountain
  photos.find(p => p.id === "IMG_5504")!, // Lamplight snow
  photos.find(p => p.id === "IMG_3176")!, // Heron in flight
  photos.find(p => p.id === "IMG_9496")!, // Frost at dusk
];

export default function Analysis() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-3">Photographic Profile</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
              Style Analysis
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              A comprehensive breakdown of your photographic voice — the recurring themes, technical signatures, and emotional qualities that define your work across 25 photographs.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule-amber mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Overview — Showcase Strip */}
      <section className="mb-20">
        <div className="container mb-8">
          <p className="section-label mb-2">Selected Works</p>
          <h2 className="font-display text-2xl font-medium text-foreground">Defining Images</h2>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3 px-6 md:px-12 lg:px-24" style={{ width: "max-content" }}>
            {showcasePhotos.map((photo, i) => (
              <div key={photo.id} className="flex-shrink-0 w-64 md:w-80">
                <div className="overflow-hidden mb-2">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-48 md:h-56 object-cover"
                    style={{ filter: "saturate(0.85)" }}
                  />
                </div>
                <p className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                  {String(i + 1).padStart(2, "0")} · {photo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photographer's Voice — Written Analysis */}
      <section className="mb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">The Photographer's Voice</p>
              <h2 className="font-display text-3xl font-medium text-foreground mb-6">
                A Vision Rooted in Stillness
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                <p>
                  Your photography is defined by a deep attunement to atmosphere and solitude. Across 25 images spanning four seasons, a consistent voice emerges: one that finds meaning in the relationship between small, solitary subjects — a lone bird, a single hiker, a fisherman at dusk — and the vast, indifferent grandeur of the natural world.
                </p>
                <p>
                  The telephoto lens is your primary instrument, and you wield it with confidence. Compression flattens space into graphic layers, turning a mountain valley into a series of receding planes, or a riverside scene into stacked horizontal bands. This technique is not merely technical — it is philosophical, suggesting that distance and observation are themselves modes of intimacy.
                </p>
                <p>
                  Your palette oscillates between two emotional registers: the warm amber and gold of summer and autumn golden hours, and the cool blue-grey of winter fog and snow. These are not arbitrary choices — they reflect a photographer who understands that light is mood, and mood is meaning.
                </p>
                <blockquote className="border-l-2 border-primary/40 pl-5 italic text-foreground/80 my-6">
                  "The most striking quality of your work is its patience. These are photographs that waited — for the right light, the right moment, the right atmospheric condition."
                </blockquote>
                <p>
                  The recurring presence of water — rivers, lakes, frozen streams, misty surfaces — suggests a photographer drawn to reflective, liminal spaces. Water in your work is rarely turbulent; it is still, mirror-like, or softened by fog. It functions as a metaphor for contemplation itself.
                </p>
              </div>
            </div>

            {/* Right column — showcase image */}
            <div className="sticky top-20">
              <div className="overflow-hidden mb-3">
                <img
                  src={photos.find(p => p.id === "IMG_7274")!.src}
                  alt="Solitude on Still Water"
                  className="w-full h-auto"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <p className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                Solitude on Still Water — the portfolio's most emblematic image, combining extreme minimalism, atmospheric mist, and the lone white bird as a single point of life in a monochromatic world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Recurring Themes */}
      <section className="mb-20">
        <div className="container">
          <p className="section-label mb-3">Thematic Patterns</p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-10">
            Recurring Themes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TraitCard
              icon="◉"
              title="Solitude & Scale"
              description="Lone figures — human or animal — placed against vast natural backdrops. The contrast between small subject and immense environment creates a sense of both vulnerability and freedom."
              examples={["Hiker on summit", "Fisherman at sunset", "Crow in winter", "Bird on misty lake"]}
            />
            <TraitCard
              icon="◎"
              title="Atmospheric Conditions"
              description="Fog, mist, snow, and dramatic storm clouds appear as active compositional elements, not merely weather. Atmosphere is used to create depth, mystery, and emotional resonance."
              examples={["Vineyard in fog", "Blue forest", "Morning haze", "Mountain winter"]}
            />
            <TraitCard
              icon="◈"
              title="Water as Mirror"
              description="Rivers, lakes, and frozen streams recur throughout the portfolio. Water is consistently calm or reflective, functioning as a metaphor for contemplation and stillness."
              examples={["Misty lake", "Golden river", "Frozen stream", "Heron in flight"]}
            />
            <TraitCard
              icon="◇"
              title="Seasonal Extremes"
              description="A strong preference for the dramatic poles of the year — deep winter and golden autumn. Summer appears primarily in golden-hour and documentary contexts."
              examples={["Frost at dusk", "Lamplight in snow", "Storm over fields", "Autumn morning"]}
            />
            <TraitCard
              icon="◆"
              title="Layered Depth"
              description="Compositions consistently employ foreground, midground, and background as distinct visual planes, creating a sense of three-dimensional space within a flat image."
              examples={["Mountain valley", "Riverside layers", "Vineyard rows", "Agricultural fields"]}
            />
            <TraitCard
              icon="◐"
              title="Documentary Candor"
              description="When people appear, they are never posed. They are observed — walking away, in motion, absorbed in their own world. The photographer is an invisible witness."
              examples={["Into the mist", "River swing", "Cracked earth", "Dog on path"]}
            />
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Technical Scores */}
      <section className="mb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Technical Assessment</p>
              <h2 className="font-display text-3xl font-medium text-foreground mb-8">
                Skill Scores
              </h2>

              <ScoreBar
                label="Composition"
                score={8.5}
                description="Strong instinct for layered depth, leading lines, and the rule of thirds. Asymmetric placement of subjects is consistent and confident. Negative space is used purposefully, particularly in winter minimalist shots."
              />
              <ScoreBar
                label="Light & Exposure"
                score={8.0}
                description="Excellent understanding of golden hour and blue-hour light. Backlit silhouettes are handled with skill. Dynamic range management is generally strong, though occasional HDR over-processing is visible."
              />
              <ScoreBar
                label="Atmospheric Storytelling"
                score={9.0}
                description="This is your greatest strength. The ability to recognize and capture atmospheric conditions — fog, mist, frost, dramatic skies — and use them as compositional tools is exceptional and consistent."
              />
              <ScoreBar
                label="Wildlife & Action"
                score={7.0}
                description="The heron-in-flight and river-swing captures demonstrate patience and timing. Some wildlife shots show slight softness, suggesting opportunities to push shutter speed further in challenging light."
              />
              <ScoreBar
                label="Post-Processing"
                score={7.5}
                description="Confident and expressive editing with a clear aesthetic direction. The dual warm/cool palette is well-executed. Some images show HDR halos or over-saturated skies that slightly undermine the naturalistic quality of the best work."
              />
              <ScoreBar
                label="Narrative Cohesion"
                score={8.0}
                description="The portfolio reads as a unified body of work. Recurring subjects, consistent tonal ranges, and a shared emotional register create a strong sense of authorial identity across diverse subjects and seasons."
              />
            </div>

            {/* Genre breakdown */}
            <div>
              <p className="section-label mb-3">Portfolio Composition</p>
              <h2 className="font-display text-3xl font-medium text-foreground mb-8">
                Genre Breakdown
              </h2>

              {[
                { genre: "Landscape", count: 9, pct: 36, color: "oklch(0.52 0.06 155)" },
                { genre: "Wildlife", count: 5, pct: 20, color: "oklch(0.65 0.08 155)" },
                { genre: "Documentary", count: 7, pct: 28, color: "oklch(0.72 0.12 75)" },
                { genre: "Winter Scenes", count: 3, pct: 12, color: "oklch(0.82 0.025 220)" },
                { genre: "Architecture", count: 2, pct: 8, color: "oklch(0.35 0.04 155)" },
              ].map(item => (
                <div key={item.genre} className="mb-5">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-ui text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.genre}</span>
                    <span className="font-ui text-xs text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.count} photos · {item.pct}%</span>
                  </div>
                  <div className="score-bar">
                    <div className="score-bar-fill" style={{ width: `${item.pct * 2.5}%`, background: item.color }} />
                  </div>
                </div>
              ))}

              <div className="mt-10 p-6 bg-secondary/50 border border-border">
                <p className="section-label mb-3">Signature Style</p>
                <p className="font-display text-xl font-medium text-foreground mb-3">
                  Contemplative Naturalist
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Your work sits at the intersection of landscape photography and environmental documentary. You are drawn to the natural world not as spectacle, but as a space for reflection. The camera is your journal; these photographs are entries in an ongoing meditation on time, weather, and the smallness of human presence within nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Color & Light Analysis */}
      <section className="mb-20">
        <div className="container">
          <p className="section-label mb-3">Visual Language</p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-10">
            Color & Light Palette
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Warm palette */}
            <div>
              <div className="flex gap-2 mb-4">
                {["#c8a96e", "#d4884a", "#8a6a3a", "#f0c878", "#5a4020"].map(color => (
                  <div key={color} className="flex-1 h-12" style={{ backgroundColor: color }} />
                ))}
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Warm Register</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Golden amber, burnt sienna, and warm ochre dominate your summer and autumn work. This palette appears in 14 of 25 images — in sunsets, golden-hour fields, autumn foliage, and the warm glow of lamplight against snow. It communicates nostalgia, warmth, and the fleeting quality of good light.
              </p>
            </div>

            {/* Cool palette */}
            <div>
              <div className="flex gap-2 mb-4">
                {["#2a3a4a", "#4a6070", "#8090a0", "#b8c8d8", "#e8f0f8"].map(color => (
                  <div key={color} className="flex-1 h-12" style={{ backgroundColor: color }} />
                ))}
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Cool Register</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Deep navy, steel blue, and pale grey characterize your winter work. This palette appears in 11 of 25 images — in snow scenes, misty lakes, and blue-hour landscapes. It communicates solitude, silence, and the meditative quality of cold, still environments.
              </p>
            </div>
          </div>

          {/* Side-by-side comparison */}
          <div className="grid grid-cols-2 gap-3 mt-10">
            <div>
              <div className="overflow-hidden">
                <img
                  src={photos.find(p => p.id === "IMG_3240")!.src}
                  alt="Warm register example"
                  className="w-full h-48 md:h-64 object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <p className="font-ui text-xs text-muted-foreground mt-2" style={{ letterSpacing: "0.08em" }}>Warm Register · Golden River</p>
            </div>
            <div>
              <div className="overflow-hidden">
                <img
                  src={photos.find(p => p.id === "IMG_5876")!.src}
                  alt="Cool register example"
                  className="w-full h-48 md:h-64 object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <p className="font-ui text-xs text-muted-foreground mt-2" style={{ letterSpacing: "0.08em" }}>Cool Register · Blue Forest</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Strengths Summary */}
      <section className="mb-20">
        <div className="container">
          <p className="section-label mb-3">Core Strengths</p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-10">
            What You Do Exceptionally Well
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Atmospheric Mastery",
                body: "Your ability to recognize and capitalize on exceptional atmospheric conditions — fog, frost, dramatic storm light, blue-hour snow — is the defining strength of your portfolio. Images like 'Solitude on Still Water' and 'Frost at Dusk' demonstrate an understanding of atmosphere that most photographers spend years developing."
              },
              {
                num: "02",
                title: "Telephoto Vision",
                body: "You have internalized the telephoto aesthetic: compression, isolation, layering. Your best images use the lens's flattening effect to create graphic, almost painterly compositions. The mountain valley shot and the riverside layers image are textbook examples of telephoto used as a creative tool rather than merely a means of getting closer."
              },
              {
                num: "03",
                title: "Minimalist Restraint",
                body: "Several of your strongest images — the crow on the snow-covered beam, the lone bird on the misty lake — demonstrate a rare ability to resist the temptation to fill the frame. The courage to leave vast empty space is a mark of a mature photographer who understands that absence can be as powerful as presence."
              },
              {
                num: "04",
                title: "Seasonal Sensitivity",
                body: "You are clearly a photographer who works across the full year, and your seasonal awareness shows. Each season is captured at its most characteristic and emotionally resonant moment — not the postcard version, but the version that feels true to lived experience."
              }
            ].map(item => (
              <div key={item.num} className="flex gap-5">
                <span className="font-ui text-3xl font-light text-border flex-shrink-0 leading-none mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-20 border-t border-border pt-12">
        <div className="container flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all" style={{ letterSpacing: "0.15em" }}>
              <ArrowLeft size={12} /> Back to Gallery
            </span>
          </Link>
          <Link href="/improvement">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all" style={{ letterSpacing: "0.15em" }}>
              Areas for Growth <ArrowRight size={12} />
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">Through the Lens</span>
          <span className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
            Style Analysis · 25 Photographs
          </span>
        </div>
      </footer>
    </div>
  );
}
