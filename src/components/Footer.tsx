import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line/80 bg-[color-mix(in_oklab,var(--brand)_92%,black)] text-[#e8f4f5]">
      <div className="site-shell grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-3xl text-white">{site.name}</p>
          <p className="mt-2 text-sm text-white/75">
            di {site.owner} · Impianti tecnologici a {site.area}
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-accent-soft underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/80">
          <p className="mb-1 font-semibold text-white">Pagine</p>
          <Link href="/servizi" className="hover:text-white">
            Servizi
          </Link>
          <Link href="/documenti" className="hover:text-white">
            Documenti e richieste
          </Link>
          <Link href="/dico-diri" className="hover:text-white">
            DiCo e DiRi
          </Link>
          <Link href="/caf" className="hover:text-white">
            CAF e famiglie
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/80">
          <p className="mb-1 font-semibold text-white">Contatti</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="hover:text-white"
          >
            Chiama {site.phone}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Richiedi un sopralluogo
          </a>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="site-shell py-4 text-xs text-white/55">
          © 2026 {site.name} di {site.owner}. Testi informativi: verifica
          sempre la procedura del caso concreto.
        </p>
      </div>
    </footer>
  );
}
