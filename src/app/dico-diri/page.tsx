import type { Metadata } from "next";
import Link from "next/link";
import { dicoDiri } from "@/lib/content";

export const metadata: Metadata = {
  title: "DiCo e DiRi",
  description:
    "Differenza tra Dichiarazione di conformità e Dichiarazione di rispondenza, e cosa fare se manca il documento.",
};

export default function DicoDiriPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        Dichiarazioni
      </p>
      <h1 className="section-title mt-3 max-w-3xl">{dicoDiri.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {dicoDiri.intro}
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="rounded-3xl border border-line bg-surface p-7">
          <h2 className="display text-2xl text-brand md:text-3xl">
            {dicoDiri.dico.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {dicoDiri.dico.text}
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-surface p-7">
          <h2 className="display text-2xl text-brand md:text-3xl">
            {dicoDiri.diri.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {dicoDiri.diri.text}
          </p>
        </article>
      </div>

      <section className="mt-10 max-w-3xl rounded-3xl border border-line bg-[color-mix(in_oklab,var(--accent)_10%,white)] p-7">
        <h2 className="text-2xl font-semibold text-ink">
          {dicoDiri.missing.title}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {dicoDiri.missing.text}
        </p>
        <p className="mt-4 text-sm text-muted">Fonte · {dicoDiri.fonte}</p>
        <Link href="/richiesta/dico-diri" className="btn btn-primary mt-6">
          Scegli la scheda adatta
        </Link>
      </section>
    </div>
  );
}
