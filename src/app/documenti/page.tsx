import type { Metadata } from "next";
import Link from "next/link";
import { accordionSections, requestHowTo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Documenti e richieste",
  description:
    "Idoneità alloggiativa, compravendita, affitti, manutenzioni e pratiche per attività commerciali e industrie.",
};

export default function DocumentiPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        Documenti
      </p>
      <h1 className="section-title mt-3 max-w-3xl">
        Documenti e richieste per l&apos;immobile
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Scegli il percorso, apri la sezione e scarica la scheda compilabile. Per
        il sopralluogo prepara le foto indicate.
      </p>

      <div className="mt-10 max-w-3xl">
        {accordionSections.map((section) => (
          <details key={section.slug} className="acc">
            <summary>{section.title}</summary>
            <div className="acc-body space-y-4">
              <p>{section.intro}</p>
              <div>
                <h3 className="font-semibold text-ink">Documenti della pratica</h3>
                <p className="mt-1">{section.documenti}</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink">
                  Cosa inviare a Biotecma Energie
                </h3>
                <p className="mt-1">{section.inviare}</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink">
                  Foto per la prima valutazione
                </h3>
                <p className="mt-1">{section.foto}</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink">Come possiamo aiutarti</h3>
                <p className="mt-1">{section.aiuto}</p>
              </div>
              {section.fonti?.length ? (
                <p className="text-sm text-muted">
                  Fonte · {section.fonti.join(" · ")}
                </p>
              ) : null}
              <Link
                href={`/richiesta/${section.slug}`}
                className="btn btn-primary mt-2"
              >
                Apri il modulo compilabile
              </Link>
            </div>
          </details>
        ))}
      </div>

      <section className="mt-16 max-w-3xl border-t border-line pt-12">
        <h2 className="section-title">{requestHowTo.title}</h2>
        <div className="mt-8 space-y-6">
          {requestHowTo.steps.map((step, index) => (
            <article key={step.title}>
              <p className="text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
