// "Fog & Field" — Nordic Atmospheric Minimalism
// Stranica oblasti rasta — Detaljna kritika po sekcijama (srpski)

import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { photos } from "@/lib/photos";
import { ArrowRight, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

interface CritiqueSection {
  id: string;
  category: string;
  title: string;
  rating: "Snažno" | "Dobro" | "U razvoju" | "Prilika";
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
    title: "Kompozicija i kadriranje",
    rating: "Dobro",
    summary: "Vaši kompozicioni instinkti su dobro razvijeni, sa doslednom upotrebom vodećih linija, slojevite dubine i pravila trećine. Primarna oblast za rast je interes prvog plana — mnoge pejzažne slike nemaju ubedljiv bliski element koji bi usidruo pogled posmatrača.",
    observations: [
      "Vodeće linije se efikasno koriste u više slika: vijugavi put u 'Jutarnjoj izmaglici', redovi vinograda u 'Vinogradu u magli' i tragovi stopala ribara u 'Ribarevom putu' vode oko kroz kadar sa svrhom.",
      "Slojevita dubina (prednji plan/srednji plan/pozadina) je dosledna snaga, posebno vidljiva u snimcima planina i dolina sa teleobjektivom.",
      "Nekoliko pejzažnih slika — posebno 'Oluja nad njivama' i 'Mraz u sumrak' — nemaju snažan element prvog plana, ostavljajući donju trećinu kadra vizuelno praznom i manje angažujućom.",
      "Postavljanje horizonta je generalno dobro, ali u nekoliko slika ('Ispucala zemlja', 'Zlatna reka') horizont sedi veoma blizu centra, smanjujući dinamičnu napetost između neba i zemlje.",
      "Minimalistične kompozicije ('Vrana u zimi', 'Samoća na mirnoj vodi') demonstriraju odličnu uzdržanost i razumevanje da je negativni prostor kompozicioni, a ne prazan."
    ],
    recommendations: [
      "Kada snimate pejzaže, aktivno tražite interes prvog plana: kamenje, cveće, uzorke mraza ili refleksije vode koji mogu usidriti donju trećinu kadra i stvoriti osećaj ulaska u scenu.",
      "Eksperimentišite sa ekstremnim postavljanjem horizonta — postavljajte horizont na samih 20% odozdo kada je nebo izuzetno, ili na samih 20% odozgo kada je priča u prednjem planu.",
      "Pre pritiskanja okidača, svesno se pitajte: 'Šta je u prednjem planu i da li služi kompoziciji?' Ova jedna navika može transformisati dobre pejzažne snimke u odlične.",
      "Razmotrite tehniku 'okvira unutar okvira' — koristite prirodne elemente poput grana drveća, lukova ili stenovitih formacija da stvorite sekundarni okvir oko vašeg subjekta."
    ],
    examplePhotoId: "IMG_4379",
    exampleCaption: "Jutarnja izmaglica — snažna vodeća linija sa vijugavim putem, ali prednjem planu nedostaje specifična tačka usidrenja koja bi privukla posmatrača."
  },
  {
    id: "light",
    category: "02",
    title: "Svetlost i ekspozicija",
    rating: "Dobro",
    summary: "Vaše razumevanje prirodnog svetla je sofisticirano — jasno znate kako da radite sa zlatnim i plavim časom i atmosferskim uslovima. Glavna prilika je u izazovnom podnevnom i oblačnom svetlu, gde neke slike izgledaju ravno, i u upravljanju iskušenjem da se preterano obradi dinamički opseg.",
    observations: [
      "Slike zlatnog časa su konzistentno jake: 'Zlatna reka', 'Mraz u sumrak' i 'Čelični most u sumrak' sve demonstriraju odlično razumevanje kako da se iskoristi kratki prozor zlatnog svetla.",
      "Atmosferska svetlost — difuzna magla, snežni odsjaj, dramatično olujno svetlo — se obrađuje sa izuzetnom veštinom. Ovo je oblast gde vaš rad nadmašuje većinu fotografa amaterskog i polu-profesionalnog nivoa.",
      "Nekoliko slika snimljenih u oštrom podnevnom svetlu ('Ispucala zemlja', 'Mala voda') imaju ravne, visoko-kontrastne tonove koji nedostaju atmosferske dubine vaših boljih radova.",
      "Neke zimske slike pokazuju znakove preterane HDR obrade — oreoli oko grana drveća, prenaglašene teksture oblaka — koji narušavaju naturalističke kvalitete koji čine vaš rad tako ubedljivim.",
      "Upravljanje ekspozicijom za siluete je generalno odlično, sa 'Zlatnom rekom' i 'Ribarevim putem' koji demonstriraju samopouzdano rukovanje scenama visokog kontrasta."
    ],
    recommendations: [
      "Za podnevno i oblačno svetlo, tražite prirodne difuzore: senku šume, maglu ili oblake koji omekšavaju direktno sunce. Alternativno, koristite ove uslove namerno za visoko-kontrastni, grafički stil.",
      "Smanjite intenzitet HDR obrade za 30-40% u zimskim snimcima. Vaš najjači zimski rad — 'Samoća na mirnoj vodi', 'Vrana u zimi' — uspeva jer se oseća stvarno. Veštačka tekstura narušava ovaj efekat.",
      "Eksperimentišite sa snimanjem u RAW formatu i obradom ekspozicije u post-produkciji umesto oslanjanja na kameru da automatski obradi dinamički opseg.",
      "Za dramatično olujno svetlo, pokušajte da snimate u momentu kada sunce probija oblake — ovaj 'prozor' svetla traje samo nekoliko minuta ali daje jedinstven, dramatičan efekat."
    ],
    examplePhotoId: "IMG_9496",
    exampleCaption: "Mraz u sumrak — odlično upravljanje dramatičnim olujnim svetlom, ali HDR obrada je blago prenaglašena u teksturi oblaka."
  },
  {
    id: "wildlife",
    category: "03",
    title: "Fotografija divlje prirode i akcije",
    rating: "U razvoju",
    summary: "Vaš rad sa divljom prirodom pokazuje iskreno strpljenje i razumevanje ponašanja životinja — jasno provodite vreme na terenu i znate gde i kada da pronađete subjekte. Primarna tehnička ograničenja su brzina zatvarača i fokus: nekoliko snimaka divlje prirode pokazuje zamućenje pokreta koje omekšava kritične detalje.",
    observations: [
      "Snimak čaplje u letu ('Čaplja u letu') demonstrira odlično predviđanje i tajming — uhvatiti pticu u letu sa teleobjektivom zahteva i tehničku veštinu i razumevanje ponašanja ptice.",
      "Snimak vrane ('Vrana u zimi') je jedan od najjačih u portfoliju — statični subjekt, ali kompozicija, atmosfera i emocionalni sadržaj su izuzetni.",
      "Nekoliko snimaka divlje prirode pokazuje blagu mekoću u kritičnim oblastima (oči, perje) što sugeriše da je brzina zatvarača bila preniska za ambijentalne svetlosne uslove.",
      "Snimak labudova ('Labudovi kod tornja') je tehnički solidan ali kompoziciono konvencionalan — subjekti su centrirani bez dinamičnog napetosti.",
      "Snimak čaplje na ruševinama ('Čaplja na ruševinama') pokazuje dobro razumevanje čekanja na pravi momenat, ali pozadinsko svetlo je izazovno i rezultat je kompromis."
    ],
    recommendations: [
      "Za fotografiju ptica u letu, ciljajte na minimum 1/2000s brzine zatvarača — prihvatite viši ISO (1600-3200 na modernim senzorima). Moderni šum je uvek bolji od zamućenja pokreta.",
      "Koristite kontinuirani autofokus (AI Servo na Canon, AF-C na Nikon/Sony) za sve pokretne subjekte. Ovo je posebno kritično za ptice u letu.",
      "Za labudove i vodene ptice, pokušajte sa nižim uglom snimanja — gotovo na nivou vode — za dramatičniju perspektivu i čišću pozadinu.",
      "Razmotrite upotrebu burst moda za akcione snimke: snimite seriju od 5-10 slika i odaberite onaj sa najboljim položajem krila i najoštrijom fokusnom tačkom."
    ],
    examplePhotoId: "IMG_3176",
    exampleCaption: "Čaplja u letu — odlično predviđanje i kompozicija, ali blago zamućenje pokreta na vrhovima krila sugeriše da je brzina zatvarača mogla biti viša."
  },
  {
    id: "postprocessing",
    category: "04",
    title: "Post-obrada i uređivanje",
    rating: "U razvoju",
    summary: "Vaše uređivanje ima jasan estetski pravac i dvojna topla/hladna paleta je dobro izvedena. Glavna oblast za poboljšanje je uzdržanost — znati kada stati. Nekoliko slika je preobrađeno na načine koji narušavaju naturalističke kvalitete koji čine vaš najjači rad tako ubedljivim.",
    observations: [
      "Dvojna topla/hladna paleta je dosljedno primenjena i funkcioniše dobro kao kohezivni estetski potpis kroz portfolio.",
      "Neke zimske slike pokazuju znakove preterane obrade: oreoli oko grana drveća, prenaglašene teksture oblaka, i prezasićene senke koje izgledaju nerealno.",
      "Vaš najjači rad — 'Samoća na mirnoj vodi', 'Vrana u zimi', 'Jutarnja izmaglica' — je tehnički najjednostavniji. Ovo nije slučajnost.",
      "Nekoliko slika ima prenaglašenu jasnoću (clarity) koja dodaje teksturu ali smanjuje atmosfersku mekoću koja je karakteristična za vaš stil.",
      "Konverzija u crno-belo je primenjena na nekoliko slika sa mešovitim rezultatima — 'Vrana u zimi' funkcioniše odlično, ali neke druge slike bi bile jače u boji."
    ],
    recommendations: [
      "Primenite pravilo '-20%': kada mislite da ste završili sa obradom slike, smanjite sve prilagođavanja jasnoće, teksture i zasićenosti za 20%. Ovo je gotovo uvek poboljšanje.",
      "Za zimske slike, koristite lokalne maske umesto globalnih prilagođavanja — primenite teksturu selektivno na nebo, a ostavite sneg i maglicu meke i čiste.",
      "Razvijte dosledan 'preset' ili stil obrade koji možete primeniti kao polaznu tačku za sve slike. Ovo će poboljšati koheziju portfolija i ubrzati vaš tok rada.",
      "Pre finalizacije obrade, pogledajte sliku u crno-beloj verziji — ovo otkriva tonske probleme koji su skriveni bojom, posebno u oblastima neba i senki."
    ],
    examplePhotoId: "IMG_5504",
    exampleCaption: "Svetiljke u snegu — odlična atmosfera i kompozicija, ali lokalna obrada neba mogla bi biti suptilnija da sačuva naturalističku mekoću scene."
  },
  {
    id: "narrative",
    category: "05",
    title: "Narativ i pripovedanje",
    rating: "Dobro",
    summary: "Vaš dokumentarni rad pokazuje iskreni instinkt za pripovedanje — ljudi se posmatraju, ne režiraju, i njihov odnos prema okruženju je uvek pravi subjekt. Prilika je da idete dalje: da stvarate više održivih narativnih sekvenci umesto izolovanih pojedinačnih slika.",
    observations: [
      "Dokumentarne slike su konzistentno jake u smislu autentičnosti — 'U magli', 'Ljuljanje nad rekom' i 'Ribarev put' sve imaju osećaj uhvaćenog trenutka, a ne postavljene scene.",
      "Odnos između ljudi i njihovog okruženja je uvek pravi subjekt — ovo je sofisticirani pristup dokumentarnoj fotografiji koji mnogi fotografa ne razvijaju.",
      "Portfolio bi imao koristi od više narativnih sekvenci — serije od 3-5 slika koje zajedno pričaju priču. Trenutno su sve slike izolovane, bez narativnog konteksta.",
      "Neke dokumentarne slike ('Ispucala zemlja', 'Mala voda') imaju snažan ekološki komentar koji je implicitan ali nikada eksplicitan — ovo je snaga, ali i propuštena prilika za dublje angažovanje.",
      "Odsustvo portreta lica je primetno — svi subjekti su okrenuti od kamere ili previše udaljeni da bi se videli detalji lica. Ovo je svesna estetska odluka, ali ograničava emocionalni opseg rada."
    ],
    recommendations: [
      "Razvijte jedan narativni projekat: odaberite temu (ribolov na reci, zimski život u selu, sezonske promene na jednom mestu) i snimajte je tokom 6-12 meseci sa ciljem stvaranja koherentne serije od 10-15 slika.",
      "Eksperimentišite sa portretima koji uključuju lice subjekta — čak i jedan ili dva portreta u portfoliju bi proširili emocionalni opseg i pokazali vašu svestranost.",
      "Za dokumentarne slike sa ekološkim temama, razmotrite dodavanje kontekstualnih informacija (lokacija, datum, kontekst) — ovo pretvara fotografije iz estetskih objekata u svedočanstva.",
      "Pokušajte sa tehnikama 'tihe prisutnosti' — provedite više vremena na jednoj lokaciji pre nego što počnete da snimate, da bi se subjekti navikli na vašu prisutnost i ponašali prirodnije."
    ],
    examplePhotoId: "IMG_2084",
    exampleCaption: "U magli — odlično uhvaćen autentičan trenutak, ali serija od 3-5 slika ovog izleta bila bi daleko moćnija od jedne izolovane slike."
  },
  {
    id: "curation",
    category: "06",
    title: "Kuracija portfolija i konzistentnost",
    rating: "Dobro",
    summary: "Portfolio pokazuje snažan ukupni identitet, ali bi imao koristi od strože kuracije. Nekoliko slika deluje kao da pripadaju drugom fotografu — 'Čaplja na ruševinama' i 'Slojevi uz reku', dok su tehnički kompetentne, nedostaje im atmosferski intenzitet vašeg najboljeg rada.",
    observations: [
      "Najjačih 10-12 slika u ovom portfoliju su zaista izuzetne — bile bi ravnopravne u svakom ozbiljnom fotografskom kontekstu. Izazov je što preostale slike razblažuju ukupni utisak.",
      "Postoji blaga nekonzistentnost u omjeru strana i orijentaciji — neke slike su vertikalne, neke horizontalne, i mešavina može delovati nerazrešeno kada se gleda kao sekvenca.",
      "Portfolio obuhvata više žanrova (pejzaž, divlja priroda, dokumentarno, arhitektura) na način koji deluje autentično, a ne raspršeno, jer ih atmosferski i kontemplativni kvalitet ujedinjuje.",
      "Nekoliko slika deluje kao 'dokumentacioni snimci' — tehnički kompetentna dokumentacija scene ili subjekta bez snažne kompozicione ili emocionalne tačke gledišta.",
      "Zimski rad je konzistentno najjači — razmotrite da li bi posvećena zimska serija bila fokusiranija i moćnija prezentacija vašeg najboljeg rada."
    ],
    recommendations: [
      "Primenite nemilosrdnu kuraciju 'top 15': pokazujte samo slike gde ne možete identifikovati ni jednu stvar koju biste promenili. Ovo je teže nego što zvuči, ali rezultat je portfolio koji zahteva poštovanje.",
      "Razmotrite organizovanje portfolija u tematske serije umesto prikazivanja svih radova zajedno. 'Zimska' serija, 'Rečni život' serija i 'Godišnja doba' serija bile bi svaka moćnija od mešovite kolekcije.",
      "Razvijte konzistentan omjer strana za vašu primarnu prezentaciju portfolija — 3:2 horizontalno ili 4:5 vertikalno za vertikalne slike. Konzistentnost u prezentaciji signalizuje profesionalnost.",
      "Za svaku sliku koju razmatrate za uključivanje, pitajte se: 'Da li ova slika govori nešto što nijedna druga slika u portfoliju ne govori?' Ako je odgovor ne, razmotrite da li zaslužuje svoje mesto."
    ],
    examplePhotoId: "IMG_5070_DxO",
    exampleCaption: "Jesenji portret — tehnički uspešan i tonski bogat, ali njegovo uključivanje postavlja pitanje da li portret odgovara dominantnom pejzažnom/divlje-prirodnom identitetu portfolija."
  }
];

const ratingColors: Record<string, string> = {
  "Snažno": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Dobro": "text-primary bg-primary/5 border-primary/20",
  "U razvoju": "text-amber-700 bg-amber-50 border-amber-200",
  "Prilika": "text-blue-700 bg-blue-50 border-blue-200",
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

      {/* Zaglavlje stranice */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-3">Konstruktivna kritika</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
              Oblasti rasta
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Specifična, sekcija-po-sekcija kritika vaše fotografske prakse — identifikovanje konkretnih prilika za jačanje rada u kompoziciji, svetlu, tehnici i pripovedanju.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule-amber mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Pregled rezimea */}
      <section className="mb-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {critiqueSections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  if (!openSections.has(section.id)) toggleSection(section.id);
                  setTimeout(() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
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

          {/* Napomena o kritici */}
          <div className="bg-secondary/40 border border-border p-6 max-w-3xl">
            <p className="section-label mb-2">Napomena o ovoj kritici</p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Zapažanja ispod su zasnovana na specifičnim fotografijama u ovom portfoliju. Svaka kritika je uparen sa konkretnom preporukom. Cilj nije promeniti vaš fotografski glas — koji je već distinktivan i autentičan — već vam pomoći da ga izrazite sa većom tehničkom preciznošću i namernošću.
            </p>
          </div>
        </div>
      </section>

      {/* Sekcije kritike */}
      <section className="mb-20">
        <div className="container">
          <div className="space-y-4">
            {critiqueSections.map(section => {
              const isOpen = openSections.has(section.id);
              const examplePhoto = section.examplePhotoId ? photos.find(p => p.id === section.examplePhotoId) : null;

              return (
                <div key={section.id} id={section.id} className="border border-border">
                  {/* Zaglavlje sekcije — uvek vidljivo */}
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
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
                            {section.summary}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4 text-muted-foreground">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Razvijeni sadržaj */}
                  {isOpen && (
                    <div className="px-6 pb-8 border-t border-border/50">
                      {/* Rezime */}
                      <p className="text-base text-muted-foreground leading-relaxed mt-6 mb-8 max-w-3xl" style={{ fontFamily: "'Source Serif 4', serif" }}>
                        {section.summary}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Zapažanja */}
                        <div>
                          <p className="section-label mb-4">Zapažanja</p>
                          <ol className="space-y-4">
                            {section.observations.map((obs, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="font-ui text-xs text-muted-foreground flex-shrink-0 mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                  {i + 1}.
                                </span>
                                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                                  {obs}
                                </p>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Preporuke */}
                        <div>
                          <p className="section-label mb-4">Preporuke</p>
                          <ol className="space-y-4">
                            {section.recommendations.map((rec, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="font-ui text-xs text-primary flex-shrink-0 mt-1">→</span>
                                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                                  {rec}
                                </p>
                              </li>
                            ))}
                          </ol>

                          {/* Referentna slika */}
                          {examplePhoto && (
                            <div className="mt-8">
                              <p className="section-label mb-3">Referentna slika</p>
                              <div className="overflow-hidden mb-2">
                                <img
                                  src={examplePhoto.src}
                                  alt={examplePhoto.title}
                                  className="w-full h-48 object-cover"
                                  style={{ filter: "saturate(0.85)" }}
                                />
                              </div>
                              <p className="font-ui text-xs text-muted-foreground leading-relaxed" style={{ letterSpacing: "0.06em" }}>
                                {examplePhoto.title} — {section.exampleCaption}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zaključni rezime */}
      <section className="mb-20">
        <div className="container">
          <div className="bg-secondary/30 border border-border p-8 md:p-12 max-w-4xl">
            <p className="section-label mb-4">U rezimeu</p>
            <h2 className="font-display text-3xl font-medium text-foreground mb-6">
              Put napred
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Vaša fotografija već poseduje najvažniji kvalitet: istinsku, ličnu viziju. Tehnička poboljšanja opisana gore nisu ispravke pogrešnog pristupa — to su alati koji vam pomažu da preciznije i moćnije izrazite ono što već vidite.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Jedna promena koja bi imala najveći uticaj je smanjenje intenziteta post-obrade za 20-30% u celom portfoliju. Vaše najbolje slike — minimalistični zimski snimci, atmosferski rad sa maglom — uspevaju jer deluju stvarno. Verujte svetlu koje ste uhvatili. Kamera, objektiv i vaše oko su već obavili posao.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { num: "I", title: "Smanjite obradu", body: "Primenite -20% redukciju na sva prilagođavanja jasnoće, teksture i zasićenosti. Neka prirodno svetlo govori." },
                { num: "II", title: "Brže brzine zatvarača", body: "Za divlju prirodu, ciljajte minimum 1/2000s. Prihvatite viši ISO — moderni šum je uvek bolji od zamućenja pokreta." },
                { num: "III", title: "Prednji plan na prvom mestu", body: "Pre svakog pejzažnog snimka, identifikujte element prvog plana. Ova jedna navika transformisaće vaš pejzažni rad." }
              ].map(item => (
                <div key={item.num} className="flex gap-4">
                  <span className="font-ui text-3xl font-light text-border flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.num}</span>
                  <div>
                    <h4 className="font-display text-base font-medium text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donja navigacija */}
      <section className="pb-20 border-t border-border pt-12">
        <div className="container flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/analysis">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-muted-foreground border border-border px-8 py-4 hover:border-foreground hover:text-foreground transition-all" style={{ letterSpacing: "0.15em" }}>
              <ArrowLeft size={12} /> Analiza stila
            </span>
          </Link>
          <Link href="/">
            <span className="inline-flex items-center gap-3 font-ui text-xs tracking-widest uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all" style={{ letterSpacing: "0.15em" }}>
              Nazad na galeriju <ArrowRight size={12} />
            </span>
          </Link>
        </div>
      </section>

      {/* Podnožje */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">Kroz objektiv</span>
          <span className="font-ui text-xs text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
            Oblasti rasta · 25 fotografija
          </span>
        </div>
      </footer>
    </div>
  );
}
