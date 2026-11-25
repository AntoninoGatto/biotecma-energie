import type { Metadata } from "next";
import Link from "next/link";
import { energiaService, impiantoServices } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Impianti elettrici, LED, fotovoltaico, Vimar Plana, videosorveglianza e videocitofoni a Vigevano e in Lomellina.",
};

export default function ServiziPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        Servizi
      </p>
      <h1 className="section-title mt-3 max-w-3xl">
        Impianti e interventi tecnologici
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Dal quadro elettrico all&apos;illuminazione, fino a energia e sicurezza:
        ogni percorso ha una scheda per la prima valutazione.
      </p>

      <section className="mt-12 rounded-3xl border border-line bg-surface p-7 md:p-9">
        <h2 className="display text-3xl text-brand md:text-4xl">
          {energiaService.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{energiaService.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-ink">
              {energiaService.fv.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              {energiaService.fv.text}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">
              {energiaService.ricarica.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              {energiaService.ricarica.text}
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Cosa inviare · {energiaService.inviare}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/richiesta/fotovoltaico-accumulo-ricarica"
            className="btn btn-primary"
          >
            Richiedi una valutazione
          </Link>
          <a
            href={whatsappUrl(
              "Buongiorno Biotecma Energie, vorrei una valutazione per fotovoltaico, accumulo o ricarica.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {impiantoServices.map((service) => (
          <Link
            key={service.slug}
            href={`/servizi/${service.slug}`}
            className="group rounded-2xl border border-line bg-[color-mix(in_oklab,white_70%,var(--bg))] p-6 transition hover:-translate-y-0.5 hover:border-brand/40"
          >
            <h2 className="text-xl font-semibold text-ink group-hover:text-brand">
              {service.title}
            </h2>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-soft">
              {service.aiuto}
            </p>
            <span className="mt-5 inline-block text-sm font-semibold text-brand">
              Apri il servizio →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
