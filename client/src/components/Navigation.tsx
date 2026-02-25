// "Fog & Field" — Nordic Atmospheric Minimalism
// Navigacija — ultra-tanka gornja traka, logo levo, linkovi desno

import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Galerija" },
    { href: "/analysis", label: "Analiza stila" },
    { href: "/improvement", label: "Oblasti rasta" },
    { href: "/about", label: "O meni" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/60">
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/">
            <span className="font-display text-base font-medium tracking-wide text-foreground hover:text-primary transition-colors">
              Kroz objektiv
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`font-ui text-xs font-500 tracking-widest uppercase transition-colors ${
                    location === link.href
                      ? "text-primary border-b border-primary pb-0.5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ letterSpacing: "0.12em" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Otvori meni"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/60">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`font-ui text-xs tracking-widest uppercase block py-1 transition-colors ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ letterSpacing: "0.12em" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
