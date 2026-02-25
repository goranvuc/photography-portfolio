import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * About Page — Goran's Story
 * 
 * Design Philosophy: "Fog & Field" — Nordic Atmospheric Minimalism
 * - Warm stone-white background with dark slate text
 * - Generous whitespace and editorial typography
 * - Playfair Display for headers, Source Serif 4 for body
 * - Subtle paper-grain texture overlay
 * - Desaturate-to-color hover effects on images
 */

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-lg font-serif font-bold text-foreground hover:text-muted-foreground transition-colors">
              Kroz objektiv
            </a>
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/">
              <a className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Galerija
              </a>
            </Link>
            <Link href="/analysis">
              <a className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Analiza stila
              </a>
            </Link>
            <Link href="/improvement">
              <a className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Oblasti rasta
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm uppercase tracking-wider text-accent font-semibold">
                O meni
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-foreground">
              O meni
            </h1>
            <p className="text-lg text-muted-foreground font-serif italic">
              Kako je fotografija i planinarenje pomoglo da uzdem života vratim u sopstvene ruke
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-lg leading-relaxed">
            {/* Paragraph 1 */}
            <p className="text-foreground font-serif">
              Moje putanje nisu bile ravne. Studirao sam mašinstvo sa stipendijom, zatim informatiku. Rat, vojska, preispitivanja — to je bilo moje početne godine. Ali iz toga je izašla jasna stvar: informatika je moja strast. Postao sam uspešan programer, prvo u velikim firmama sa kompleksnim sistemima, a zatim sam pokrenuo svoju firmu.
            </p>

            {/* Paragraph 2 */}
            <p className="text-foreground font-serif">
              Dvadeset godina je prošlo u radu — noću, vikendom, bez granica. Prvo izgorevanje je došlo kada sam shvatio da veliki informacioni sistemi, iako izazovni, nose sa sobom ogroman stres i odgovornost. Dao sam otkaz, tri meseca sam bio kod kuće, projektovao sam budući sistem, i otvorio sam svoju firmu. Mislio sam da će biti drugačije.
            </p>

            {/* Paragraph 3 */}
            <p className="text-foreground font-serif">
              Ali ponovo je došlo do istoga. Sa 150 aktivnih klijenata, radio sam sam. Bukvalno nisam znao kako se zovem. Tada je, pre tri godine, došlo do drugog izgorevanja — onog koji je bio presudno drugačiji. U tom trenutku sam presekao i rekao sam sebi: <span className="italic">"Ne dam više nikom svoje slobodno vreme."</span>
            </p>

            {/* Divider */}
            <div className="h-px bg-border/30 my-12" />

            {/* Paragraph 4 */}
            <p className="text-foreground font-serif">
              Fotografija i šetnje po Fruškoj gori nisu bile nove — ljubav i želja za njima postoje od malih nogu. Ali nikada nisam imao vreme. Obezbedio sam vreme. To je bilo ključno.
            </p>

            {/* Paragraph 5 */}
            <p className="text-foreground font-serif">
              Prestao sam da uzimam nove klijente. Sa nekima sam se pozdravio, sa nekima sam dogovorio novi sistem saradnje. Sada mogu da živim — ne samo da preživim. Često idem u šetnje i tokom radne nedelje, posle radnog dana. Vodim sina Gavrila u prirodu. Fotografiram — minimalistički zimski snimci, atmosferske magle, dokumentarne trenutke sa porodicom.
            </p>

            {/* Paragraph 6 */}
            <p className="text-foreground font-serif">
              Fotografija je za mene postala jezik. Nije samo tehnička veština — to je način da vidim svet. Pronalazim smisao u odnosu između malih, usamljenih subjekata — usamljene ptice, jednog planinara, ribara u sumrak — i ogromne, ravnodušne veličine prirodnog sveta. U toj kontrastu je nešto duboko istinito.
            </p>

            {/* Paragraph 7 */}
            <p className="text-foreground font-serif">
              Supruga me podržava u potpunosti. Delimo obaveze, delimo vreme. Ona je svojevremeno dala otkaz da bismo kao porodica mogli da se postavimo na noge. Sada se to vraća — ne novcem, već vremenom, mirom i zajedničkim šetnjama.
            </p>

            {/* Paragraph 8 */}
            <p className="text-foreground font-serif">
              Često čujem: "Ljudi koji idu vikendom u prirodu jesu bogati ljudi u tom smislu." Ja sam se odlučio da budem bogat. Nije to bila laka odluka — bila je potrebna odlučnost, preispitivanje, i volja da se vrati kontrola nad sopstvenim životom. Ali to je bilo moguće jer sam imao osnovno — ljubav i želju. Trebalo je samo da obezbedim vreme.
            </p>

            {/* Paragraph 9 */}
            <p className="text-foreground font-serif">
              Ove fotografije nisu samo snimci. Svaka je deo tog putanja — pronalaženja smisla, pronalaženja sebe, pronalaženja mira u prirodi. Nadajem se da kroz njih vidite ono što ja vidim: da je moguće da se vrati kontrola, da se obezbedi vreme za ono što je bitno, i da se živi — pravo živi — bez odlaganja.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-12 border-t border-border/20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© Goran Vučićević · O meni · 91 fotografija · Kroz objektiv</p>
        </div>
      </footer>
    </div>
  );
}
