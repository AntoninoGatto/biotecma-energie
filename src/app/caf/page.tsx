import type { Metadata } from "next";
import Link from "next/link";
import { cafContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "CAF, patronati e famiglie",
  description:
    "Testi pronti per lo sportello e guida essenziale in inglese sull'idoneità alloggiativa a Vigevano.",
};

export default function CafPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        CAF e famiglie
      </p>
      <h1 className="section-title mt-3 max-w-3xl">{cafContent.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {cafContent.subtitle}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-line bg-surface p-7">
          <h2 className="text-xl font-semibold text-ink">Testo per lo sportello</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            {cafContent.sportello}
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-surface p-7">
          <h2 className="text-xl font-semibold text-ink">Testo per la famiglia</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            {cafContent.famiglia}
          </p>
        </article>
      </div>

      <section className="mt-6 rounded-3xl border border-line bg-[color-mix(in_oklab,var(--brand)_8%,white)] p-7">
        <h2 className="text-xl font-semibold text-ink">
          English · {cafContent.english.title}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {cafContent.english.text}
        </p>
        <p className="mt-4 text-sm text-muted">Fonte · {cafContent.fonte}</p>
        <Link
          href="/richiesta/idoneita-alloggiativa"
          className="btn btn-primary mt-6"
        >
          Scheda rapida con i campi CAF
        </Link>
      </section>
    </div>
  );
}
