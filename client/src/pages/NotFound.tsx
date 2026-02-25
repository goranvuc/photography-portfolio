// "Fog & Field" — Nordic Atmospheric Minimalism
// 404 stranica

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-ui text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">Greška 404</p>
        <h1 className="font-display text-6xl md:text-8xl font-medium text-foreground mb-4">404</h1>
        <p className="font-body text-lg text-muted-foreground mb-10 max-w-md mx-auto">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>
        <Link href="/">
          <span className="inline-flex items-center gap-3 font-ui text-xs tracking-[0.15em] uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all">
            <ArrowLeft size={12} /> Nazad na galeriju
          </span>
        </Link>
      </div>
    </div>
  );
}
