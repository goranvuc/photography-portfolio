// "Fog & Field" — Nordic Atmospheric Minimalism
// Improvement Page — Constructive critique, section-by-section

import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { photos } from "@/lib/photos";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface CritiqueSection {
  id: string;
  category: string;
  title: string;
  rating: "Strong" | "Good" | "Developing" | "Opportunity";
  summary: string;
  observations: string[];
  recommendations: string[];
  examplePhotoId?: string;
  exampleCaption?: string;
}

const critiqueSections: CritiqueSection[] = [
  {
    id: "composition",
    category: "01",
    title: "Composition & Framing",
    rating: "Good",
    summary: "Your compositional instincts are well-developed, with consistent use of leading lines, layered depth, and the rule of thirds. The primary area for growth is foreground interest — many landscape images lack a compelling near element to anchor the viewer's eye.",
    observations: [
      "Leading lines are used effectively in multiple images: the winding road in 'Morning Haze', the vineyard rows in 'Vineyard in Fog', and the fisherman's footprints in 'The Fisherman's Walk' all guide the eye through the frame with purpose.",
      "Layered depth (foreground/midground/background) is a consistent strength, particularly visible in the telephoto mountain and valley shots.",
      "Several landscape images — particularly 'Storm Over the Fields' and 'Frost at Dusk' — lack a strong foreground element, leaving the lower third of the frame visually empty and less engaging.",
      "Horizon placement is generally good, but in a few images ('Cracked Earth', 'Golden River') the horizon sits very close to the center, reducing the dynamic tension between sky and land.",
      "The minimalist compositions ('Crow in Winter', 'Solitude on Still Water') demonstrate excellent restraint and an understanding that negative space is compositional, not empty."
    ],
    recommendations: [
      "When shooting landscapes, actively seek foreground interest: rocks, flowers, frost patterns, or water reflections that can anchor the lower third of the frame and create a sense of entry into the scene.",
      "Experiment with more extreme horizon placement — placing the horizon at the very bottom 20% when the sky is exceptional, or at the very top 20% when the foreground is the story.",
      "Before pressing the shutter, consciously ask: 'What is in the foreground, and does it serve the composition?' This single habit can transform good landscape shots into great ones.",
      "Consider the 'frame within a frame' technique — using natural elements like tree branches, archways, or rock formations to create a secondary frame around your subject."
    ],
    examplePhotoId: "IMG_4379",
    exampleCaption: "Morning Haze — strong leading line with the winding road, but the foreground field lacks a specific anchor point to draw the viewer in."
  },
  {
    id: "lighting",
    category: "02",
    title: "Light & Exposure",
    rating: "Good",
    summary: "Your understanding of natural light is sophisticated — you clearly know how to work golden hour, blue hour, and atmospheric conditions. The main opportunity is in challenging midday and overcast light, where some images feel flat, and in managing the temptation to over-process dynamic range.",
    observations: [
      "Golden hour and blue hour work is consistently strong. 'Golden River', 'Lamplight in Snow', and 'Steel Bridge at Dusk' all demonstrate excellent timing and an understanding of how directional light creates mood.",
      "Backlit silhouette photography ('Golden River', 'Steel Bridge at Dusk') is handled with confidence — exposure is correctly placed on the background to render subjects as clean silhouettes.",
      "The midday 'Cracked Earth' image, while interesting documentarily, suffers from harsh overhead light that creates unflattering shadows and washes out the texture of the cracked mud.",
      "Several images show signs of HDR processing or aggressive tone-mapping: visible halos around high-contrast edges, over-saturated skies, and an artificial 'painted' quality that works against the naturalistic tone of your best work.",
      "Dynamic range management in winter scenes is excellent — the snow detail in 'The Fisherman's Walk' and 'Lamplight in Snow' is preserved without blowing out highlights."
    ],
    recommendations: [
      "Reduce HDR processing or tone-mapping intensity by 30-40%. Your strongest images have a natural, film-like quality that heavy processing undermines. Trust the light you captured rather than trying to manufacture drama in post.",
      "For midday documentary shooting, seek open shade or use the harsh light intentionally — high-contrast black-and-white conversion can transform a flat midday shot into a graphic, powerful image.",
      "Experiment with intentional underexposure (1/3 to 2/3 stop) in golden hour shooting. Slightly underexposed golden hour images retain richer color saturation and a more cinematic quality than correctly exposed ones.",
      "Consider shooting RAW exclusively if you are not already — the additional dynamic range headroom will allow more nuanced shadow recovery without introducing the artifacts that come from heavy JPEG processing."
    ],
    examplePhotoId: "IMG_9496",
    exampleCaption: "Frost at Dusk — exceptional atmospheric light, but the sky shows signs of tone-mapping that introduce a slight artificial quality. The image would be even stronger with more restrained processing."
  },
  {
    id: "wildlife",
    category: "03",
    title: "Wildlife & Action Photography",
    rating: "Developing",
    summary: "Your wildlife work shows genuine patience and an understanding of animal behavior — you clearly spend time in the field and know where and when to find your subjects. The primary technical limitation is shutter speed: several wildlife images show motion blur that softens critical details.",
    observations: [
      "'Heron in Flight' is your strongest wildlife image — the timing is excellent, the composition is beautiful, and the atmospheric morning light creates a painterly quality. However, the heron's wing tips show slight motion blur, suggesting the shutter speed was marginally too slow.",
      "The 'Heron on Ruins' image demonstrates good patience and positioning — waiting for the bird to adopt an interesting pose against a clean background — but the image is slightly soft overall, possibly due to camera shake at a long focal length.",
      "'Crow in Winter' is a masterpiece of minimalist wildlife photography. The composition, the negative space, the tonal restraint — this image is portfolio-defining. The bird is sharp and the background is beautifully rendered.",
      "The 'Swans at the Tower' image is charming but compositionally static — the swans are centered and the scene lacks the dynamic tension of your best work.",
      "Wildlife images would benefit from more consistent use of burst mode to capture peak action moments."
    ],
    recommendations: [
      "For birds in flight, aim for a minimum shutter speed of 1/1600s, and ideally 1/2000s or faster. In low light, accept higher ISO (3200-6400 on modern cameras) to achieve this — modern noise is far preferable to motion blur.",
      "Use continuous autofocus (AI Servo on Canon, AF-C on Nikon/Sony) with subject tracking for all moving wildlife. Single-shot AF is appropriate only for stationary subjects.",
      "When photographing stationary birds, use a shutter speed of at least 1/(2 × focal length) to eliminate camera shake. At 400mm, that means 1/800s minimum.",
      "Study animal behavior to anticipate action moments — the moment before a heron takes flight, the instant a bird turns its head. Anticipation, not reaction, produces the best wildlife images.",
      "For the 'Swans at the Tower' type of shot, try waiting for the swans to interact with each other or with the environment — a swan stretching its wings, or swimming toward the tower — to add dynamic interest."
    ],
    examplePhotoId: "IMG_3176",
    exampleCaption: "Heron in Flight — beautiful composition and atmospheric light, but the wing tips show slight motion blur. A shutter speed of 1/2000s would have frozen the motion completely."
  },
  {
    id: "postprocessing",
    category: "04",
    title: "Post-Processing & Editing",
    rating: "Developing",
    summary: "Your editing has a clear aesthetic direction and the dual warm/cool palette is well-executed. The main area for improvement is restraint — knowing when to stop. Several images are over-processed in ways that undermine the naturalistic quality that makes your best work so compelling.",
    observations: [
      "The best-processed images in the portfolio — 'Crow in Winter', 'Solitude on Still Water', 'The Fisherman's Walk' — are characterized by restraint. They feel like photographs of real moments, not digital paintings.",
      "Several landscape images ('Storm Over the Fields', 'Frost at Dusk', 'The Vast Beyond') show aggressive clarity/texture sliders and over-saturated skies that give them a characteristic 'HDR look' — recognizable and somewhat dated.",
      "Color grading is generally consistent within each seasonal register, which is a strength. The warm amber palette and the cool blue-grey palette are both well-defined and applied with consistency.",
      "Some images show over-sharpening artifacts, particularly in sky areas where noise has been amplified by sharpening.",
      "The converted TIF file ('Autumn Portrait') shows excellent tonal control — the skin tones and shadow detail are well-managed, suggesting strong technical skill when processing is applied with care."
    ],
    recommendations: [
      "Adopt a 'less is more' philosophy for landscape editing. After completing your edit, reduce all adjustments by 20% — clarity, texture, saturation, contrast. This single step will move your work from 'impressive' to 'timeless'.",
      "Avoid the clarity/texture slider above +30 in most cases. These sliders enhance micro-contrast in ways that quickly become obvious and artificial-looking.",
      "For sky editing, use graduated filters or masking rather than global adjustments. This allows you to enhance the sky without affecting the foreground, avoiding the characteristic HDR 'painted' look.",
      "Consider developing a consistent Lightroom/Capture One preset that embodies your aesthetic — this will improve consistency across the portfolio and speed up your editing workflow.",
      "Study the work of photographers whose editing you admire — Sebastião Salgado's black-and-white, or the muted naturalism of Finn Beales — and analyze what they do and don't do in post-processing."
    ],
    examplePhotoId: "IMG_1797",
    exampleCaption: "Storm Over the Fields — strong composition and dramatic sky, but the HDR processing creates halos around the tree and an artificial quality that works against the image's power."
  },
  {
    id: "narrative",
    category: "05",
    title: "Narrative & Storytelling",
    rating: "Good",
    summary: "Your documentary work shows a genuine storytelling instinct — people are observed, not directed, and their relationship to their environment is always the real subject. The opportunity is to push further: to create more sustained narrative sequences rather than isolated single images.",
    observations: [
      "'Into the Mist' is your strongest narrative image — the two figures walking into the fog create an immediate story with multiple interpretations: a journey, a relationship, a disappearance into the unknown.",
      "The environmental documentary images ('Cracked Earth', 'Low Water') demonstrate an awareness of ecological themes — drought, low water levels — that gives the work a dimension beyond pure aesthetics.",
      "Several images tell their story primarily through atmosphere rather than action, which is a valid and sophisticated approach, but can occasionally feel static.",
      "The 'River Swing' image captures a genuine moment of joy and summer freedom — this kind of candid human moment is relatively rare in the portfolio, and its presence is welcome.",
      "The portfolio as a whole lacks a sustained narrative thread — it reads as a collection of strong individual images rather than a coherent series with a beginning, middle, and end."
    ],
    recommendations: [
      "Consider developing a photo essay or series around a single subject, location, or theme — returning to the same place across seasons, or following a specific community or activity over time. This sustained engagement produces work of greater depth than single-visit photography.",
      "When photographing people in their environment, try to capture three moments: the approach (person arriving), the engagement (person interacting with environment), and the departure (person leaving). This creates a natural narrative arc.",
      "Explore the space between landscape and documentary more deliberately. Your 'Low Water' aerial image is a powerful example of environmental storytelling — the tiny human figures against the vast exposed riverbed make a statement about scale and ecological change.",
      "Consider adding brief, handwritten-style captions or location notes to your images when sharing them. Context transforms a beautiful photograph into a document of a specific time and place."
    ],
    examplePhotoId: "IMG_2084",
    exampleCaption: "Into the Mist — your strongest narrative image. The two figures, the misty forest, and the sense of journey create a story that extends beyond the frame."
  },
  {
    id: "portfolio",
    category: "06",
    title: "Portfolio Curation & Consistency",
    rating: "Good",
    summary: "The portfolio shows a strong overall identity, but could benefit from tighter curation. A few images feel like they belong to a different photographer — the 'Heron on Ruins' and 'Riverside Layers' images, while technically competent, lack the atmospheric intensity of your best work.",
    observations: [
      "The strongest 10-12 images in this portfolio are genuinely exceptional — they would hold their own in any serious photography context. The challenge is that the remaining images dilute the overall impression.",
      "There is a slight inconsistency in aspect ratio and orientation — some images are vertical, some horizontal, and the mix can feel unresolved when viewed as a sequence.",
      "The portfolio spans multiple genres (landscape, wildlife, documentary, architecture) in a way that feels authentic rather than scattered, because the atmospheric and contemplative quality unifies them.",
      "A few images feel like 'record shots' — technically competent documentation of a scene or subject without a strong compositional or emotional point of view.",
      "The winter work is consistently the strongest — consider whether a dedicated winter series might be a more focused and powerful presentation of your best work."
    ],
    recommendations: [
      "Apply a ruthless 'top 15' edit to your portfolio. Show only the images where you cannot identify a single thing you would change. This is harder than it sounds, but the result is a portfolio that commands respect rather than simply demonstrating range.",
      "Consider organizing your portfolio into themed series rather than presenting all work together. A 'Winter' series, a 'River Life' series, and a 'Seasons' series would each be more powerful than a mixed collection.",
      "Develop a consistent aspect ratio for your primary portfolio presentation — either 3:2 landscape or 4:5 portrait for vertical images. Consistency in presentation signals professionalism and intentionality.",
      "For each image you consider including, ask: 'Does this image say something that no other image in the portfolio says?' If the answer is no, consider whether it earns its place."
    ],
    examplePhotoId: "IMG_5070_DxO",
    exampleCaption: "Autumn Portrait — technically accomplished and tonally rich, but its inclusion raises the question of whether portraiture fits the portfolio's dominant landscape/wildlife identity."
  }
];

const ratingColors: Record<string, string> = {
  "Strong": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Good": "text-primary bg-primary/5 border-primary/20",
  "Developing": "text-amber-700 bg-amber-50 border-amber-200",
  "Opportunity": "text-blue-700 bg-blue-50 border-blue-200",
};

export default function Improvement() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["composition"]));

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-3">Constructive Critique</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
              Areas for Growth
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              A specific, section-by-section critique of your photographic practice — identifying concrete opportunities to strengthen your work across composition, light, technique, and storytelling.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule-amber mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Overview Summary */}
      <section className="mb-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {critiqueSections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  toggleSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="text-left p-4 border border-border hover:border-primary/40 transition-colors"
              >
                <span className="font-ui text-xs text-muted-foreground block mb-1" style={{ letterSpacing: "0.1em" }}>
                  {section.category}
                </span>
                <span className="font-display text-sm font-medium text-foreground block mb-2 leading-tight">
                  {section.title}
                </span>
                <span className={`font-ui text-xs px-2 py-0.5 border ${ratingColors[section.rating]}`} style={{ letterSpacing: "0.06em" }}>
                  {section.rating}
                </span>
              </button>
            ))}
          </div>

          {/* Overall note */}
          <div className="bg-secondary/40 border border-border p-6 max-w-3xl">
            <p className="section-label mb-2">A Note on This Critique</p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              The observations below are grounded in the specific photographs in this portfolio. Every critique is paired with a concrete recommendation. The goal is not to change your photographic voice — which is already distinctive and authentic — but to help you express it with greater technical precision and intentionality.
            </p>
          </div>
        </div>
      </section>

      {/* Critique Sections */}
      <section className="mb-20">
        <div className="container">
          <div className="space-y-4">
            {critiqueSections.map(section => {
              const isOpen = openSections.has(section.id);
              const examplePhoto = section.examplePhotoId ? photos.find(p => p.id === section.examplePhotoId) : null;

              return (
                <div key={section.id} id={section.id} className="border border-border">
                  {/* Section Header — always visible */}
                  <button
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center gap-5 flex-1 min-w-0">
                      <span className="font-ui text-2xl font-light text-border flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {section.category}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
                            {section.title}
                          </h3>
                          <span className={`font-ui text-xs px-2 py-0.5 border flex-shrink-0 ${ratingColors[section.rating]}`} style={{ letterSpacing: "0.06em" }}>
                            {section.rating}
                          </span>
                        </div>
                        {!isOpen && (
                          <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block" style={{ fontFamily: "'Source Serif 4', serif" }}>
                            {section.summary}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4 text-muted-foreground">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="border-t border-border">
                      <div className="p-6 md:p-8">
                        {/* Summary */}
                        <p className="text-base text-foreground/80 leading-relaxed mb-8 max-w-3xl" style={{ fontFamily: "'Source Serif 4', serif" }}>
                          {section.summary}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          {/* Observations */}
                          <div>
                            <p className="section-label mb-4">Observations</p>
                            <ol className="space-y-4">
                              {section.observations.map((obs, i) => (
                                <li key={i} className="flex gap-4">
                                  <span className="font-ui text-xs text-muted-foreground flex-shrink-0 mt-1 w-5 text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {i + 1}.
                                  </span>
                                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                                    {obs}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </div>

                          {/* Recommendations */}
                          <div>
                            <p className="section-label mb-4">Recommendations</p>
                            <ol className="space-y-4">
                              {section.recommendations.map((rec, i) => (
                                <li key={i} className="flex gap-4">
                                  <span className="font-ui text-xs text-primary flex-shrink-0 mt-1 w-5 text-right" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    →
                                  </span>
                                  <p className="text-sm text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                                    {rec}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>

                        {/* Example Photo */}
                        {examplePhoto && (
                          <div className="mt-8 pt-8 border-t border-border">
                            <p className="section-label mb-4">Reference Image</p>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                              <div className="flex-shrink-0 w-full md:w-64">
                                <div className="overflow-hidden">
                                  <img
                                    src={examplePhoto.src}
                                    alt={examplePhoto.title}
                                    className="w-full h-48 object-cover"
                                    style={{ filter: "saturate(0.85)" }}
                                  />
                                </div>
                              </div>
                              <div>
                                <p className="font-display text-base font-medium text-foreground mb-2">{examplePhoto.title}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
                                  {section.exampleCaption}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Closing Summary */}
      <section className="mb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">In Summary</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Path Forward
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Your photography already possesses the most important quality: a genuine, personal vision. The technical refinements outlined above are not corrections to a flawed approach — they are tools to help you express what you already see more precisely and powerfully.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', serif" }}>
              The single most impactful change you could make is to reduce post-processing intensity by 20-30% across the board. Your best images — the minimalist winter shots, the atmospheric fog work — succeed because they feel real. Trust the light you captured. The camera, the lens, and your eye have already done the work.
            </p>

            {/* Three priority actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                { num: "I", title: "Reduce Processing", body: "Apply a -20% reduction to all clarity, texture, and saturation adjustments. Let the natural light speak." },
                { num: "II", title: "Faster Shutter Speeds", body: "For wildlife, target 1/2000s minimum. Accept higher ISO — modern noise is better than motion blur." },
                { num: "III", title: "Foreground First", body: "Before every landscape shot, identify a foreground element. This single habit will transform your landscape work." }
              ].map(item => (
                <div key={item.num} className="border border-border p-5">
                  <span className="font-display text-3xl text-border/60 block mb-3">{item.num}</span>
                  <h4 className="font-display text-base font-medium text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-20 border-t border-border pt-12">
        <div className="container flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/analysis">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all" style={{ letterSpacing: "0.15em" }}>
              <ArrowLeft size={12} /> Style Analysis
            </span>
          </Link>
          <Link href="/">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all" style={{ letterSpacing: "0.15em" }}>
              Back to Gallery <ArrowRight size={12} />
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">Through the Lens</span>
          <span className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
            Areas for Growth · 6 Critique Sections
          </span>
        </div>
      </footer>
    </div>
  );
}
