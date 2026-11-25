"use client";

import Link from "next/link";
import { useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/documenti", label: "Documenti" },
  { href: "/dico-diri", label: "DiCo e DiRi" },
  { href: "/caf", label: "CAF" },
  { href: "/richiesta", label: "Richieste" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-[color-mix(in_oklab,var(--bg)_88%,white)] backdrop-blur-md">
      <div className="site-shell flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="display block text-[1.35rem] text-brand md:text-[1.55rem]">
            {site.name}
          </span>
          <span className="block text-xs text-muted md:text-sm">
            di {site.owner} · {site.area}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent !py-2.5 !text-sm"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="btn btn-ghost !px-3 !py-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line/70 bg-[color-mix(in_oklab,var(--bg)_95%,white)] lg:hidden"
        >
          <nav className="site-shell flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2.5 font-semibold text-ink-soft hover:bg-white/60 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-2"
              onClick={() => setOpen(false)}
            >
              Apri WhatsApp · {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
