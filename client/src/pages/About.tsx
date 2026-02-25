// "Fog & Field" — Nordic Atmospheric Minimalism
// O meni — Goranova priča

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { photos } from "@/lib/photos";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Zaglavlje */}
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <p className="section-label mb-3">Lična priča</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            O meni
          </h1>
          <p className="text-lg text-muted-foreground font-body italic">
            Kako je fotografija i planinarenje pomoglo da uzdem života vratim u sopstvene ruke
          </p>
        </div>
      </section>

      <hr className="rule-amber mx-6 md:mx-12 lg:mx-24 mb-16" />

      {/* Glavni sadržaj */}
      <section className="pb-20">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-lg leading-relaxed font-body">
            <p className="text-foreground">
              Moje putanje nisu bile ravne. Studirao sam mašinstvo sa stipendijom, zatim informatiku. Rat, vojska, preispitivanja — to je bilo moje početne godine. Ali iz toga je izašla jasna stvar: informatika je moja strast. Postao sam uspešan programer, prvo u velikim firmama sa kompleksnim sistemima, a zatim sam pokrenuo svoju firmu.
            </p>

            <p className="text-foreground">
              Dvadeset godina je prošlo u radu — noću, vikendom, bez granica. Prvo izgorevanje je došlo kada sam shvatio da veliki informacioni sistemi, iako izazovni, nose sa sobom ogroman stres i odgovornost. Dao sam otkaz, tri meseca sam bio kod kuće, projektovao sam budući sistem, i otvorio sam svoju firmu. Mislio sam da će biti drugačije.
            </p>

            <p className="text-foreground">
              Ali ponovo je došlo do istoga. Sa 150 aktivnih klijenata, radio sam sam. Bukvalno nisam znao kako se zovem. Tada je, pre tri godine, došlo do drugog izgorevanja — onog koji je bio presudno drugačiji. U tom trenutku sam presekao i rekao sam sebi: <span className="italic">"Ne dam više nikom svoje slobodno vreme."</span>
            </p>

            <div className="h-px bg-border/30 my-12" />

            <p className="text-foreground">
              Fotografija i šetnje po Fruškoj gori nisu bile nove — ljubav i želja za njima postoje od malih nogu. Ali nikada nisam imao vreme. Obezbedio sam vreme. To je bilo ključno.
            </p>

            <p className="text-foreground">
              Prestao sam da uzimam nove klijente. Sa nekima sam se pozdravio, sa nekima sam dogovorio novi sistem saradnje. Sada mogu da živim — ne samo da preživim. Često idem u šetnje i tokom radne nedelje, posle radnog dana. Vodim sina Gavrila u prirodu. Fotografiram — minimalistički zimski snimci, atmosferske magle, dokumentarne trenutke sa porodicom.
            </p>

            <p className="text-foreground">
              Fotografija je za mene postala jezik. Nije samo tehnička veština — to je način da vidim svet. Pronalazim smisao u odnosu između malih, usamljenih subjekata — usamljene ptice, jednog planinara, ribara u sumrak — i ogromne, ravnodušne veličine prirodnog sveta. U toj kontrastu je nešto duboko istinito.
            </p>

            <p className="text-foreground">
              Supruga me podržava u potpunosti. Delimo obaveze, delimo vreme. Ona je svojevremeno dala otkaz da bismo kao porodica mogli da se postavimo na noge. Sada se to vraća — ne novcem, već vremenom, mirom i zajedničkim šetnjama.
            </p>

            <p className="text-foreground">
              Često čujem: "Ljudi koji idu vikendom u prirodu jesu bogati ljudi u tom smislu." Ja sam se odlučio da budem bogat. Nije to bila laka odluka — bila je potrebna odlučnost, preispitivanje, i volja da se vrati kontrola nad sopstvenim životom. Ali to je bilo moguće jer sam imao osnovno — ljubav i želju. Trebalo je samo da obezbedim vreme.
            </p>

            <p className="text-foreground">
              Ove fotografije nisu samo snimci. Svaka je deo tog putanja — pronalaženja smisla, pronalaženja sebe, pronalaženja mira u prirodi. Nadajem se da kroz njih vidite ono što ja vidim: da je moguće da se vrati kontrola, da se obezbedi vreme za ono što je bitno, i da se živi — pravo živi — bez odlaganja.
            </p>
          </div>
        </div>
      </section>

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
          <span className="font-display text-sm text-muted-foreground">Kroz objektiv</span>
          <span className="font-ui text-xs text-muted-foreground tracking-[0.1em]">
            © Goran Vučićević · O meni · {photos.length} fotografija
          </span>
        </div>
      </footer>
    </div>
  );
}
