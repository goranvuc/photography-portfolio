// "Fog & Field" — Nordic Atmospheric Minimalism
// Stranica analize — Potpuni pregled fotografskog stila sa vizuelnim komentarima (srpski)

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

// Odabrane fotografije za stranicu analize
const showcasePhotos = [
  photos.find(p => p.id === "IMG_3240")!, // Zlatna reka
  photos.find(p => p.id === "IMG_7274")!, // Samoća na mirnoj vodi
  photos.find(p => p.id === "IMG_9755")!, // Beskrajni horizont
  photos.find(p => p.id === "IMG_5504")!, // Svetiljke u snegu
  photos.find(p => p.id === "IMG_3176")!, // Čaplja u letu
  photos.find(p => p.id === "IMG_9496")!, // Mraz u sumrak
];

export default function Analysis() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Zaglavlje stranice */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-3">Fotografski profil</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
              Analiza stila
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Sveobuhvatan pregled vašeg fotografskog glasa — ponavljajuće teme, tehnički potpisi i emocionalni kvaliteti koji definišu vaš rad kroz 25 fotografija.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule-amber mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Pregled — horizontalni niz odabranih fotografija */}
      <section className="mb-20">
        <div className="container mb-8">
          <p className="section-label mb-2">Odabrana dela</p>
          <h2 className="font-display text-2xl font-medium text-foreground">Definišuće fotografije</h2>
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

      {/* Fotografov glas — pisana analiza */}
      <section className="mb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">Fotografov glas</p>
              <h2 className="font-display text-3xl font-medium text-foreground mb-6">
                Vizija zasnovana na tišini
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                <p>
                  Vaša fotografija je definisana dubokom usklađenošću sa atmosferom i samoćom. Kroz 25 slika koje obuhvataju četiri godišnja doba, pojavljuje se dosledan glas: onaj koji pronalazi smisao u odnosu između malih, usamljenih subjekata — usamljene ptice, jednog planinara, ribara u sumrak — i ogromne, ravnodušne veličine prirodnog sveta.
                </p>
                <p>
                  Teleobjektiv je vaš primarni instrument, i njime vladajte sa samopouzdanjem. Kompresija spljoštava prostor u grafičke slojeve, pretvarajući planinsku dolinu u niz povlačećih ravni, ili scenu uz reku u složene horizontalne pojaseve. Ova tehnika nije samo tehnička — ona je filozofska, sugerirajući da su distanca i posmatranje sami po sebi oblici intimnosti.
                </p>
                <p>
                  Vaša paleta oscilira između dva emocionalna registra: toplog jantara i zlata letnjeg i jesenjeg zlatnog časa, i hladnog plavo-sivog zimske magle i snega. Ovo nisu slučajni izbori — oni odražavaju fotografa koji razume da je svetlost raspoloženje, a raspoloženje je značenje.
                </p>
                <blockquote className="border-l-2 border-primary/40 pl-5 italic text-foreground/80 my-6">
                  "Najupečatljiviji kvalitet vašeg rada je njegova strpljivost. Ovo su fotografije koje su čekale — pravo svetlo, pravi trenutak, pravo atmosfersko stanje."
                </blockquote>
                <p>
                  Ponavljajuće prisustvo vode — reka, jezera, zaleđenih potoka, maglovitih površina — sugeriše fotografa privučenog refleksivnim, liminalnim prostorima. Voda u vašem radu retko je burna; ona je mirna, nalik ogledalu ili omekšana maglom. Funkcioniše kao metafora za kontemplaciju samu po sebi.
                </p>
              </div>
            </div>

            {/* Desna kolona — istaknuta fotografija */}
            <div className="sticky top-20">
              <div className="overflow-hidden mb-3">
                <img
                  src={photos.find(p => p.id === "IMG_7274")!.src}
                  alt="Samoća na mirnoj vodi"
                  className="w-full h-auto"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <p className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                Samoća na mirnoj vodi — najemblematičnija fotografija portfolija, koja kombinuje ekstremni minimalizam, atmosfersku maglu i usamljenu belu pticu kao jedinu tačku života u monohromnom svetu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Ponavljajuće teme */}
      <section className="mb-20">
        <div className="container">
          <p className="section-label mb-3">Tematski obrasci</p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-10">
            Ponavljajuće teme
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TraitCard
              icon="◉"
              title="Samoća i razmera"
              description="Usamljene figure — ljudske ili životinjske — postavljene nasuprot ogromnih prirodnih pozadina. Kontrast između malog subjekta i ogromnog okruženja stvara osećaj ranjivosti i slobode."
              examples={["Planinar na vrhu", "Ribar u sumrak", "Vrana u zimi", "Ptica na maglovitom jezeru"]}
            />
            <TraitCard
              icon="◎"
              title="Atmosferski uslovi"
              description="Magla, sneg i dramatični oblaci pojavljuju se kao aktivni kompozicioni elementi, a ne samo kao vremenske prilike. Atmosfera se koristi za stvaranje dubine, misterije i emocionalne rezonancije."
              examples={["Vinograd u magli", "Plava šuma", "Jutarnja izmaglica", "Planinska zima"]}
            />
            <TraitCard
              icon="◈"
              title="Voda kao ogledalo"
              description="Reke, jezera i zaleđeni potoci ponavljaju se kroz portfolio. Voda je dosljedno mirna ili refleksivna, funkcionišući kao metafora za kontemplaciju i tišinu."
              examples={["Maglovito jezero", "Zlatna reka", "Zaleđeni potok", "Čaplja u letu"]}
            />
            <TraitCard
              icon="◇"
              title="Sezonski ekstremi"
              description="Snažna sklonost ka dramatičnim polovima godine — duboka zima i zlatna jesen. Leto se pojavljuje uglavnom u kontekstu zlatnog časa i dokumentarnog rada."
              examples={["Mraz u sumrak", "Svetiljke u snegu", "Oluja nad njivama", "Jesenji pejzaž"]}
            />
            <TraitCard
              icon="◆"
              title="Slojevita dubina"
              description="Kompozicije dosljedno koriste prednji plan, srednji plan i pozadinu kao različite vizuelne ravni, stvarajući osećaj trodimenzionalnog prostora unutar ravne slike."
              examples={["Planinska dolina", "Slojevi uz reku", "Redovi vinograda", "Njive"]}
            />
            <TraitCard
              icon="◐"
              title="Dokumentarna iskrenost"
              description="Kada se pojavljuju ljudi, nikada nisu pozirali. Posmatraju se — kako hodaju, u pokretu, apsorbovani u sopstvenom svetu. Fotograf je nevidljivi svedok."
              examples={["U magli", "Ljuljanje nad rekom", "Ispucala zemlja", "Pas na stazi"]}
            />
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Tehničke ocene */}
      <section className="mb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Tehnička procena</p>
              <h2 className="font-display text-3xl font-medium text-foreground mb-8">
                Ocene veština
              </h2>

              <ScoreBar
                label="Kompozicija"
                score={8.5}
                description="Snažan instinkt za slojevitu dubinu, vodeće linije i pravilo trećine. Asimetrično pozicioniranje subjekata je dosljedno i samopouzdano. Negativni prostor se koristi namjerno, posebno u zimskim minimalističkim snimcima."
              />
              <ScoreBar
                label="Svetlost i ekspozicija"
                score={8.0}
                description="Odlično razumevanje svetlosti zlatnog i plavog časa. Siluete osvetljene s leđa se obrađuju sa veštinom. Upravljanje dinamičkim opsegom je generalno snažno, mada je povremeno vidljiva preterana HDR obrada."
              />
              <ScoreBar
                label="Atmosfersko pripovedanje"
                score={9.0}
                description="Ovo je vaša najveća snaga. Sposobnost prepoznavanja i hvatanja atmosferskih uslova — magle, mraza, dramatičnog neba — i korišćenja kao kompozicionih alata je izuzetna i dosledna."
              />
              <ScoreBar
                label="Divlja priroda i akcija"
                score={7.0}
                description="Snimci čaplje u letu i ljuljanja nad rekom demonstriraju strpljenje i tajming. Neki snimci divlje prirode pokazuju blagu mekoću, što sugeriše prilike za veće brzine zatvarača u teškim svetlosnim uslovima."
              />
              <ScoreBar
                label="Post-obrada"
                score={7.5}
                description="Samopouzdana i ekspresivna obrada sa jasnim estetskim pravcem. Dvojna topla/hladna paleta je dobro izvedena. Neke slike pokazuju HDR oreole ili prezasićena neba koja blago narušavaju naturalističke kvalitete najboljeg rada."
              />
              <ScoreBar
                label="Narativna kohezija"
                score={8.0}
                description="Portfolio se čita kao ujedinjena celina. Ponavljajući subjekti, dosljedno tonski opsezi i zajednički emocionalni registar stvaraju snažan osećaj autorskog identiteta kroz raznolike subjekte i godišnja doba."
              />
            </div>

            {/* Raspodela žanrova */}
            <div>
              <p className="section-label mb-3">Sastav portfolija</p>
              <h2 className="font-display text-3xl font-medium text-foreground mb-8">
                Raspodela žanrova
              </h2>

              {[
                { genre: "Pejzaž", count: 9, pct: 36, color: "oklch(0.52 0.06 155)" },
                { genre: "Divlja priroda", count: 5, pct: 20, color: "oklch(0.65 0.08 155)" },
                { genre: "Dokumentarno", count: 7, pct: 28, color: "oklch(0.72 0.12 75)" },
                { genre: "Zimske scene", count: 3, pct: 12, color: "oklch(0.82 0.025 220)" },
                { genre: "Arhitektura", count: 2, pct: 8, color: "oklch(0.35 0.04 155)" },
              ].map(item => (
                <div key={item.genre} className="mb-5">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-ui text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.genre}</span>
                    <span className="font-ui text-xs text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.count} foto · {item.pct}%</span>
                  </div>
                  <div className="score-bar">
                    <div className="score-bar-fill" style={{ width: `${item.pct * 2.5}%`, background: item.color }} />
                  </div>
                </div>
              ))}

              <div className="mt-10 p-6 bg-secondary/50 border border-border">
                <p className="section-label mb-3">Potpis stila</p>
                <p className="font-display text-xl font-medium text-foreground mb-3">
                  Kontemplativni naturalista
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Vaš rad stoji na raskrsnici pejzažne fotografije i ekološkog dokumentarizma. Privlači vas prirodni svet ne kao spektakl, već kao prostor za razmišljanje. Kamera je vaš dnevnik; ove fotografije su unosi u tekuću meditaciju o vremenu, vremenskim prilikama i malosti ljudskog prisustva unutar prirode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Analiza boje i svetlosti */}
      <section className="mb-20">
        <div className="container">
          <p className="section-label mb-3">Vizuelni jezik</p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-10">
            Paleta boja i svetlosti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Topla paleta */}
            <div>
              <div className="flex gap-2 mb-4">
                {["#c8a96e", "#d4884a", "#8a6a3a", "#f0c878", "#5a4020"].map(color => (
                  <div key={color} className="flex-1 h-12" style={{ backgroundColor: color }} />
                ))}
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Topli registar</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Zlatni jantar, izgoreli sijena i topla okra dominiraju vašim letnjim i jesenjim radom. Ova paleta pojavljuje se u 14 od 25 slika — u zalascima sunca, njivama zlatnog časa, jesenjem lišću i toplom sjaju svetiljki na snegu. Komunicira nostalgiju, toplinu i prolazni kvalitet dobrog svetla.
              </p>
            </div>

            {/* Hladna paleta */}
            <div>
              <div className="flex gap-2 mb-4">
                {["#2a3a4a", "#4a6070", "#8090a0", "#b8c8d8", "#e8f0f8"].map(color => (
                  <div key={color} className="flex-1 h-12" style={{ backgroundColor: color }} />
                ))}
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Hladni registar</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Duboka mornarica, čelično plavo i bledo sivo karakterišu vaš zimski rad. Ova paleta pojavljuje se u 11 od 25 slika — u zimskim scenama, maglovitim jezerima i pejzažima plavog časa. Komunicira samoću, tišinu i meditativni kvalitet hladnih, mirnih okruženja.
              </p>
            </div>
          </div>

          {/* Poređenje bok uz bok */}
          <div className="grid grid-cols-2 gap-3 mt-10">
            <div>
              <div className="overflow-hidden">
                <img
                  src={photos.find(p => p.id === "IMG_3240")!.src}
                  alt="Primer toplog registra"
                  className="w-full h-48 md:h-64 object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <p className="font-ui text-xs text-muted-foreground mt-2" style={{ letterSpacing: "0.08em" }}>Topli registar · Zlatna reka</p>
            </div>
            <div>
              <div className="overflow-hidden">
                <img
                  src={photos.find(p => p.id === "IMG_5876")!.src}
                  alt="Primer hladnog registra"
                  className="w-full h-48 md:h-64 object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <p className="font-ui text-xs text-muted-foreground mt-2" style={{ letterSpacing: "0.08em" }}>Hladni registar · Plava šuma</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-sage mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Rezime snaga */}
      <section className="mb-20">
        <div className="container">
          <p className="section-label mb-3">Osnovne snage</p>
          <h2 className="font-display text-3xl font-medium text-foreground mb-10">
            U čemu ste izuzetno dobri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Atmosfersko majstorstvo",
                body: "Vaša sposobnost prepoznavanja i iskorišćavanja izuzetnih atmosferskih uslova — magle, mraza, dramatičnog olujnog svetla, snežnog plavog časa — je definišuća snaga vašeg portfolija. Slike poput 'Samoće na mirnoj vodi' i 'Mraza u sumrak' demonstriraju razumevanje atmosfere koje većina fotografa razvija godinama."
              },
              {
                num: "02",
                title: "Teleobjektivna vizija",
                body: "Internalizovali ste teleobjektivnu estetiku: kompresiju, izolaciju, slojevitost. Vaše najbolje slike koriste efekat spljoštavanja objektiva za stvaranje grafičkih, gotovo slikarskih kompozicija. Snimak planinske doline i slojeva uz reku su udžbenički primeri teleobjektiva korišćenog kao kreativnog alata, a ne samo sredstva za približavanje."
              },
              {
                num: "03",
                title: "Minimalistička uzdržanost",
                body: "Nekoliko vaših najjačih slika — vrana na gredi prekrivenoj snegom, usamljena ptica na maglovitom jezeru — demonstriraju retku sposobnost odupiranja iskušenju da se kadar popuni. Hrabrost da se ostavi ogromni prazan prostor je znak zrelog fotografa koji razume da odsustvo može biti jednako snažno kao i prisustvo."
              },
              {
                num: "04",
                title: "Sezonska osetljivost",
                body: "Jasno ste fotograf koji radi tokom cele godine, i vaša sezonska svest se vidi. Svako godišnje doba je uhvaćeno u svom najkarakterističnijem i emocionalno najrezonantnijim trenutku — ne razgledničnoj verziji, već verziji koja se oseća istinito prema proživljenom iskustvu."
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

      {/* Donja navigacija */}
      <section className="pb-20 border-t border-border pt-12">
        <div className="container flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all" style={{ letterSpacing: "0.15em" }}>
              <ArrowLeft size={12} /> Nazad na galeriju
            </span>
          </Link>
          <Link href="/improvement">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all" style={{ letterSpacing: "0.15em" }}>
              Oblasti rasta <ArrowRight size={12} />
            </span>
          </Link>
        </div>
      </section>

      {/* Podnožje */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">Kroz objektiv</span>
          <span className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
            Analiza stila · 25 fotografija
          </span>
        </div>
      </footer>
    </div>
  );
}
