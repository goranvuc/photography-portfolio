// "Fog & Field" — Nordic Atmospheric Minimalism
// O meni — Bento Hub: interesovanja organizovana kao vizuelne pločice

import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
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
  content: React.ReactNode;
};

/* ────────────────────────────────────────────
   Sadržaj pločica
   ──────────────────────────────────────────── */

function BioContent() {
  return (
    <>
      <h2>Put od koda do prirode</h2>
      <p>
        Moje putanje nisu bile ravne. Studirao sam mašinstvo sa stipendijom,
        zatim informatiku. Rat, vojska, preispitivanja — to je bilo moje početne
        godine. Ali iz toga je izašla jasna stvar: informatika je moja strast.
        Postao sam uspešan programer, prvo u velikim firmama sa kompleksnim
        sistemima, a zatim sam pokrenuo svoju firmu.
      </p>
      <p>
        Dvadeset godina je prošlo u radu — noću, vikendom, bez granica. Prvo
        izgorevanje je došlo kada sam shvatio da veliki informacioni sistemi,
        iako izazovni, nose sa sobom ogroman stres i odgovornost. Dao sam otkaz,
        tri meseca sam bio kod kuće, projektovao sam budući sistem, i otvorio sam
        svoju firmu. Mislio sam da će biti drugačije.
      </p>
      <p>
        Ali ponovo je došlo do istoga. Sa 150 aktivnih klijenata, radio sam sam.
        Bukvalno nisam znao kako se zovem. Tada je, pre tri godine, došlo do
        drugog izgorevanja — onog koji je bio presudno drugačiji. U tom trenutku
        sam presekao i rekao sam sebi:{" "}
        <em>"Ne dam više nikom svoje slobodno vreme."</em>
      </p>
      <hr />
      <p>
        Fotografija i šetnje po Fruškoj gori nisu bile nove — ljubav i želja za
        njima postoje od malih nogu. Ali nikada nisam imao vreme. Obezbedio sam
        vreme. To je bilo ključno.
      </p>
      <p>
        Prestao sam da uzimam nove klijente. Sa nekima sam se pozdravio, sa
        nekima sam dogovorio novi sistem saradnje. Sada mogu da živim — ne samo
        da preživim. Često idem u šetnje i tokom radne nedelje, posle radnog
        dana. Vodim sina Gavrila u prirodu. Fotografiram — minimalistički zimski
        snimci, atmosferske magle, dokumentarne trenutke sa porodicom.
      </p>
      <p>
        Fotografija je za mene postala jezik. Nije samo tehnička veština — to je
        način da vidim svet. Pronalazim smisao u odnosu između malih, usamljenih
        subjekata — usamljene ptice, jednog planinara, ribara u sumrak — i
        ogromne, ravnodušne veličine prirodnog sveta. U toj kontrastu je nešto
        duboko istinito.
      </p>
      <p>
        Supruga me podržava u potpunosti. Delimo obaveze, delimo vreme. Ona je
        svojevremeno dala otkaz da bismo kao porodica mogli da se postavimo na
        noge. Sada se to vraća — ne novcem, već vremenom, mirom i zajedničkim
        šetnjama.
      </p>
      <p>
        Često čujem: "Ljudi koji idu vikendom u prirodu jesu bogati ljudi u tom
        smislu." Ja sam se odlučio da budem bogat. Nije to bila laka odluka —
        bila je potrebna odlučnost, preispitivanje, i volja da se vrati kontrola
        nad sopstvenim životom. Ali to je bilo moguće jer sam imao osnovno —
        ljubav i želju. Trebalo je samo da obezbedim vreme.
      </p>
      <p>
        Ove fotografije nisu samo snimci. Svaka je deo tog putanja —
        pronalaženja smisla, pronalaženja sebe, pronalaženja mira u prirodi.
        Nadajem se da kroz njih vidite ono što ja vidim: da je moguće da se
        vrati kontrola, da se obezbedi vreme za ono što je bitno, i da se živi —
        pravo živi — bez odlaganja.
      </p>
    </>
  );
}

function DevContent() {
  return (
    <>
      <h2>Arhitektura digitalnih svetova</h2>
      <p>
        Počeo sam da kodiram pre nego što sam znao da to tako zovem. Mašinstvo
        mi je dalo disciplinu, ali informatika mi je dala jezik. Dvadeset godina
        sam gradio sisteme — kompleksne, žive organizme od podataka i logike.
        MSSQL baze koje dišu pod opterećenjem od hiljada upita. Integracije koje
        povezuju stvari koje nikad nisu bile zamišljene da rade zajedno.
      </p>
      <p>
        Ono što sam naučio nije samo sintaksa — to je način razmišljanja.
        Arhitektura je odluka o tome šta je bitno, a šta može da čeka.
        Svaki dobar sistem koji sam napravio imao je istu osobinu: bio je
        jednostavniji nego što je morao da bude.
      </p>
      <blockquote>
        Najbolji kod koji sam napisao je onaj koji sam obrisao.
      </blockquote>
      <hr />
      <h3>Beleške</h3>
      <ul>
        <li>Sistemi, integracije, automatizacije — dvadeset godina iskustva</li>
        <li>MSSQL, Docker, RAG arhitekture</li>
        <li>Od velikih firmi do sopstvene — i nazad ka ravnoteži</li>
        <li>Komponente kao mini-aplikacije: svaka ima svoju priču</li>
      </ul>
    </>
  );
}

function AIContent() {
  return (
    <>
      <h2>Novi horizonti kognicije</h2>
      <p>
        Veštačka inteligencija nije za mene samo alat — to je sagovornik u
        procesu razmišljanja. Koristim je svakodnevno, ne da zameni misao, nego
        da je produbi. RAG sistemi, agenti, evaluacije — sve su to načini da
        strukturiram ono što znam i otkrijem ono što ne znam.
      </p>
      <p>
        Fascinira me tačka preseka: gde prestaje moje znanje a počinje mašinsko.
        Tu negde, u tom prostoru između, nastaju najinteresantnije stvari.
        Preciznost i poetičnost nisu suprotnosti — najbolji promptovi imaju obe
        osobine.
      </p>
      <blockquote>
        AI nije zamena za razmišljanje. To je ogledalo koje ti pokazuje kako
        zapravo razmišljaš.
      </blockquote>
      <hr />
      <h3>Pravci</h3>
      <ul>
        <li>RAG arhitekture za lične baze znanja</li>
        <li>Agentski sistemi — komponente koje same odlučuju</li>
        <li>Evaluacija kvaliteta: kako meriti ono što je subjektivno</li>
        <li>Povezivanje AI sa svakodnevnim alatima i tokovima rada</li>
      </ul>
    </>
  );
}

function HikeContent() {
  return (
    <>
      <h2>Vertikalni mir</h2>
      <p>
        Fruška gora je moj stalni saputnik. Nije spektakularna na način na koji
        su to Alpi ili Himalaji — ali ima nešto dublje. Blaga uzvišenja,
        bukove šume koje menjaju boju svake nedelje, potoci koji nestaju u lišću.
        Ovde se ne osvaja vrh. Ovde se sluša.
      </p>
      <p>
        Planinarenje me je naučilo nečemu što programiranje nije moglo: da
        vrednost nije u rezultatu, nego u procesu. Sat vremena hoda kroz maglu
        vredi više od svake optimizacije. Vodim sina na te staze — ne da bi
        stigao negde, nego da bi video kako izgledaju koraci bez cilja.
      </p>
      <blockquote>
        Na Fruškoj gori nema vrha koji se osvaja. Ima samo staza koja te
        vraća sebi.
      </blockquote>
      <hr />
      <h3>Beleške sa staza</h3>
      <ul>
        <li>Fruška gora — nedeljne šetnje, svaka sezona drugi svet</li>
        <li>Fotografija u pokretu: kad se zaustavi korak, pojavi se kadar</li>
        <li>Šetnje sa Gavrilom — učiti ga da gleda, ne da juri</li>
        <li>Tempo: 4–5 km/h, ali bitnije je koliko puta zastaneš</li>
      </ul>
    </>
  );
}

function MushContent() {
  return (
    <>
      <h2>Mikologija u fokusu</h2>
      <p>
        Gljive su me fascinirale oduvek — ali ne kao hrana, već kao fenomen.
        Micelij ispod zemlje je mreža koja povezuje drveće, razmenjuje hranjive
        materije, komunicira bez reči. Šuma koju vidimo je samo površina.
        Ispod je čitav svet koji ne razumemo dovoljno.
      </p>
      <p>
        U šetnjama po Fruškoj gori sam počeo da ih primećujem svuda. Na
        trulim panjevima, u lišću, na mestima gde se niko ne saginje da
        pogleda. Svaki nalaz je mala zagonetkа — boja šešira, miris, struktura
        listića — i svaki put me podseti koliko malo znam.
      </p>
      <blockquote>
        Gljive te uče poniznosti. Koliko god da misliš da znaš, šuma uvek ima
        nešto što nisi video.
      </blockquote>
      <hr />
      <h3>Beleške</h3>
      <ul>
        <li>Micelij kao "internet šume" — mreža ispod površine</li>
        <li>Jesen na Fruškoj gori: sezona otkrića</li>
        <li>Fotografisanje gljiva — makro svet u detalju</li>
        <li>Od fascinacije do sistematskog učenja</li>
      </ul>
    </>
  );
}

function OrchContent() {
  return (
    <>
      <h2>Egzotična preciznost</h2>
      <p>
        Orhideje su paradoks: izgledaju krhko, a zapravo su neverovatno
        otporne. Preživljavaju uslove u kojima bi većina biljaka odustala —
        ali pod jednim uslovom: da ih razumeš. Svaka vrsta ima svoj ritam,
        svoju potrebu za svetlom, vodom, temperaturom.
      </p>
      <p>
        Moja mala kolekcija je počela slučajno, sa jednom Phalaenopsis koja je
        odbijala da umre. Sada ih imam više — ne mnogo, ali dovoljno da svako
        jutro bude malo drugačije. Promatranje cveta koji se otvara tokom
        nedelju dana je lekcija o strpljenju koju nikakav kod ne može da nauči.
      </p>
      <blockquote>
        Orhideje ne trpe žurbu. One cvetaju kad su spremne, ne kad ti to
        želiš.
      </blockquote>
      <hr />
      <h3>Kolekcija</h3>
      <ul>
        <li>Phalaenopsis — stabilna temperatura, indirektno svetlo</li>
        <li>Cattleya — voli jače svetlo, suvlji ciklus</li>
        <li>Dendrobium — prati sezonalnost, različite podvrste</li>
        <li>Beleške o nezi: ritam zalivanja, supstrat, presađivanje</li>
      </ul>
    </>
  );
}

function HistContent() {
  return (
    <>
      <h2>Odjeci prošlosti</h2>
      <p>
        Istorija me privlači ne kao niz datuma i bitaka, nego kao priča o
        odlukama. Zašto je neko u određenom trenutku izabrao baš to? Koji su
        pritisci bili, koje informacije je imao, čega se plašio? Kada čitam
        istoriju, čitam psihologiju — samo na većoj skali.
      </p>
      <p>
        Posebno me fascinira prostor u kome živim — Vojvodina, Fruška gora,
        slojevi kultura koji su se smenjivali na ovom tlu. Rimski put prolazi
        pored manastira koji je gradio srednjovekovni vladar. Na istom brdu
        gde ja šetam, neko je pre pet vekova donosio odluke od kojih zavise
        naše granice danas.
      </p>
      <blockquote>
        Istorija nije prošlost. To je kontekst u kome živimo, samo ga
        uglavnom ne primećujemo.
      </blockquote>
      <hr />
      <h3>Teme</h3>
      <ul>
        <li>Vojvodina kroz vekove — slojevi kultura na jednom mestu</li>
        <li>Fruškogorski manastiri — duhovnost i strategija</li>
        <li>20. vek: odluke koje su oblikovale svet u kome živim</li>
        <li>Veza između geografije i sudbine</li>
      </ul>
    </>
  );
}

function MusicContent() {
  return (
    <>
      <h2>Zvučni pejzaži</h2>
      <p>
        Muzika je za mene pozadina svega. Kad kodiram — slušam. Kad šetam —
        slušam. Kad fotografišem — ponekad slušam, ponekad je tišina
        dovoljna. Interesuju me zvuci koji nisu očigledni: terenski snimci,
        ambijentalna elektronika, teksture koje više liče na pejzaž nego na
        pesmu.
      </p>
      <p>
        Postoji veza između atmosferske fotografije i ambijentalne muzike koja
        me stalno vraća istoj tački: oboje se bave onim što je između.
        Između nota, između kadrova — u tom prostoru se dešava ono što je
        zapravo bitno.
      </p>
      <blockquote>
        Najlepša muzika liči na maglu — ne vidiš je jasno, ali osećaš da je
        svuda oko tebe.
      </blockquote>
      <hr />
      <h3>Inspiracije</h3>
      <ul>
        <li>Ambijentalna elektronika — teksture iznad melodije</li>
        <li>Terenski snimci: vetar, kiša, koraci po lišću</li>
        <li>Filmska muzika kao narativ bez reči</li>
        <li>Veza zvuka i slike u fotografskom procesu</li>
      </ul>
    </>
  );
}

function FilmContent() {
  return (
    <>
      <h2>Pokretne slike</h2>
      <p>
        Film me je naučio da gledam pre nego što sam počeo da fotografišem.
        Kompozicija, svetlo, ritam montaže — sve to sam upijao godinama bez
        svesti da će jednoga dana postati deo mog vizuelnog jezika. Kad kadriam
        fotografiju, u glavi mi je filmski kadar.
      </p>
      <p>
        Ne privlače me spektakli. Privlače me filmovi u kojima se ništa ne
        dešava — a zapravo se dešava sve. Duga scena bez dijaloga. Čovek koji
        gleda kroz prozor. Svetlo koje se menja dok kamera stoji. U tom
        strpljenju je istina koju nikakva akcija ne može da pruži.
      </p>
      <blockquote>
        Najbolji filmovi te ne zabavljaju. Oni te menjaju — tiho, bez da
        primetiš.
      </blockquote>
      <hr />
      <h3>Teme</h3>
      <ul>
        <li>Kompozicija i kadriranje — lekcije za fotografiju</li>
        <li>Atmosfera iznad radnje: filmovi koji dišu</li>
        <li>Svetlo i kontrast kao narativni alati</li>
        <li>Ritam montaže — kad pauzirati, kad seći</li>
      </ul>
    </>
  );
}

function TravelContent() {
  return (
    <>
      <h2>Nomadski dijalog</h2>
      <p>
        Putovanja za mene nisu puko sakupljanje destinacija ili pečata u pasošu.
        To su trenuci izmeštenosti — kada poznati pejzaži nestanu, a čula se
        izostre. U dalekim predelima, bilo da su to maglovite obale severa ili
        prašnjavi putevi juga, tražim istu stvar: atmosferu koja prevazilazi
        lokaciju.
      </p>
      <p>
        Fotografija na putovanju je proces prepoznavanja. Tražim univerzalnu
        usamljenost subjekta u ogromnom prostoru. Ribar na Islandu ili
        pastir na Durmitoru pričaju istu priču o odnosu čoveka i prirode.
        To su susreti koji me menjaju, podsećajući me na moju malu, ali dragocenu
        poziciju u svetu.
      </p>
      <blockquote>
        Ne putuje se da bi se videlo nešto novo, već da bi se svet video na
        nov način.
      </blockquote>
      <hr />
      <h3>Zabeleške sa putovanja</h3>
      <ul>
        <li>Nordijski minimalizam: potraga za tišinom u magli</li>
        <li>Mediteranski kontrasti: oštro svetlo i duboke senke</li>
        <li>Balkanske planine: sirova snaga i nepredvidivost prirode</li>
        <li>Oprema: minimalna, da ne bi stala između oka i sveta</li>
      </ul>
    </>
  );
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
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/bio",
    icon: <BookOpen className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: <BioContent />,
  },
  {
    key: "dev",
    title: "Programiranje",
    subtitle: "Arhitektura digitalnih svetova",
    description: "Arhitektura kompleksnih sistema i čist kod.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/dev",
    icon: <Code2 className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: <DevContent />,
  },
  {
    key: "ai",
    title: "Veštačka inteligencija",
    subtitle: "Novi horizonti kognicije",
    description: "Sagovornik u procesu razmišljanja i kognicije.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/ai",
    icon: <Brain className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2 md:row-span-2",
    content: <AIContent />,
  },
  {
    key: "hike",
    title: "Planinarenje",
    subtitle: "Vertikalni mir",
    description: "Vertikalni mir na stazama Fruške gore.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/hike",
    icon: <Mountain className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: <HikeContent />,
  },
  {
    key: "mush",
    title: "Gljive",
    subtitle: "Mikologija u fokusu",
    description: "Istraživanje skrivenih mreža šumskog ekosistema.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/mushroom",
    icon: <Leaf className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: <MushContent />,
  },
  {
    key: "orch",
    title: "Orhideje",
    subtitle: "Egzotična preciznost",
    description: "Lekcije o strpljenju kroz krhku lepotu cveta.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/orchid",
    icon: <Flower2 className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: <OrchContent />,
  },
  {
    key: "travel",
    title: "Putovanja",
    subtitle: "Nomadski dijalog",
    description: "Nomadski duh i potraga za atmosferom u dalekim predelima.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/travel",
    icon: <Compass className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-2",
    content: <TravelContent />,
  },
  {
    key: "hist",
    title: "Istorija",
    subtitle: "Odjeci prošlosti",
    description: "Razumevanje sadašnjosti kroz slojeve prošlih odluka.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/history",
    icon: <Clock className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-6",
    content: <HistContent />,
  },
  {
    key: "music",
    title: "Muzika",
    subtitle: "Zvučni pejzaži",
    description: "Ambijentalni pejzaži kao zvučna podloga života.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/music",
    icon: <Music2 className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: <MusicContent />,
  },
  {
    key: "film",
    title: "Film",
    subtitle: "Pokretne slike",
    description: "Vizuelni jezik strpljenja i tišine na ekranu.",
    imageUrl: "https://res.cloudinary.com/dwfcr7rxo/image/upload/f_auto,q_auto,w_1200/portfolio/about/film",
    icon: <Film className="h-4 w-4" />,
    gridClass: "col-span-2 md:col-span-3",
    content: <FilmContent />,
  },
];

/* ────────────────────────────────────────────
   Bento pločica
   ──────────────────────────────────────────── */

function TileCard({
  tile,
  onOpen,
}: {
  tile: TileData;
  onOpen: () => void;
}) {
  const directions = [
    "translate-x-full",
    "-translate-x-full",
    "translate-y-full",
    "-translate-y-full",
  ];
  const [direction] = useState(
    () => directions[Math.floor(Math.random() * directions.length)],
  );

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative flex h-full w-full flex-col p-6 text-left",
        "border border-border bg-secondary/30",
        "transition-all duration-500 ease-out",
        "hover:border-primary/30 hover:bg-secondary/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "min-h-[160px]",
        tile.gridClass,
      )}
    >
      {/* Background Image Effect (Clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute inset-0 z-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-40 group-hover:translate-x-0 group-hover:translate-y-0",
            direction,
          )}
        >
          <img
            src={tile.imageUrl}
            alt=""
            className="h-full w-full object-cover grayscale brightness-75"
          />
        </div>
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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
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
      role="dialog"
      aria-modal="true"
      aria-label={tile.title}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="story-close-btn"
        onClick={onClose}
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
          <div className="story-content">{tile.content}</div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Glavna stranica
   ──────────────────────────────────────────── */

export default function About() {
  const [openKey, setOpenKey] = useState<TileKey | null>(null);

  const openTile = TILES.find((t) => t.key === openKey) ?? null;

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
            {TILES.map((tile) => (
              <TileCard
                key={tile.key}
                tile={tile}
                onOpen={() => setOpenKey(tile.key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Overlay */}
      {openTile && (
        <TileOverlay tile={openTile} onClose={() => setOpenKey(null)} />
      )}

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
