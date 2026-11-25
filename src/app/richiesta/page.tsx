import type { Metadata } from "next";
import Link from "next/link";
import { moduleIndex, requestHowTo } from "@/lib/content";
import { site, whatsappUrl, whatsappTemplate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trova il tuo modulo",
  description:
    "Indice interattivo dei moduli compilabili Biotecma Energie da inviare via WhatsApp.",
};

export default function RichiestaIndexPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        Indice
      </p>
      <h1 className="section-title mt-3 max-w-3xl">Trova il tuo modulo</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Tocca il nome del servizio per aprire il relativo modulo compilabile.
        Poi invia scheda e foto su WhatsApp al {site.phone}.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {moduleIndex.map((item) => (
          <Link
            key={item.slug}
            href={`/richiesta/${item.slug}`}
            className="rounded-xl border border-line bg-surface px-5 py-4 font-semibold text-ink transition hover:border-brand/45 hover:text-brand"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="section-title text-[clamp(1.5rem,2.8vw,2.2rem)]">
          {requestHowTo.title}
        </h2>
        <ol className="mt-6 space-y-5">
          {requestHowTo.steps.map((step) => (
            <li key={step.title}>
              <h3 className="font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <a
          href={whatsappUrl(whatsappTemplate)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent mt-8"
        >
          Apri WhatsApp
        </a>
      </section>
    </div>
  );
}
