import Image from "next/image";
import Link from "next/link";
import { homePillars, presentation } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2400&q=80"
            alt="Interno residenziale con illuminazione domestica"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07181d]/92 via-[#0b2d34]/78 to-[#0b2d34]/35" />
          <div className="hero-grid absolute inset-0 opacity-40" />
        </div>

        <div className="site-shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <p className="reveal display text-4xl text-white sm:text-5xl md:text-7xl">
            {site.name}
          </p>
          <div className="reveal reveal-delay-1 mt-4 h-1 w-28 rounded-full bg-accent pulse-line" />
          <h1 className="reveal reveal-delay-1 mt-6 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Impianti elettrici in Lomellina
          </h1>
          <p className="reveal reveal-delay-2 mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Installazione, verifiche e manutenzione. Assistenza per DiCo, DiRi e
            documentazione impiantistica.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(
                "Buongiorno Biotecma Energie, vorrei richiedere un sopralluogo.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Richiedi un sopralluogo
            </a>
            <Link href="/documenti" className="btn btn-ghost !border-white/35 !text-white">
              Documenti e richieste
            </Link>
          </div>
          <p className="reveal reveal-delay-3 mt-6 text-sm text-white/70">
            di {site.owner} · {site.area} · {site.phone}
          </p>
        </div>
      </section>

      <section className="site-shell py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          Presentazione
        </p>
        <h2 className="section-title mt-3 max-w-3xl">{presentation.title}</h2>
        <div className="prose-block mt-6 max-w-3xl space-y-4">
          <p>{presentation.body}</p>
        </div>
      </section>

      <section className="border-y border-line/70 bg-[color-mix(in_oklab,white_55%,var(--bg))]">
        <div className="site-shell grid gap-10 py-16 md:grid-cols-2 md:py-20">
          {homePillars.map((item) => (
            <article key={item.title} className="max-w-xl">
              <h3 className="display text-2xl text-brand md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <h2 className="section-title">A chi ci rivolgiamo</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
            {presentation.audience}
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-surface p-7 md:p-8">
          <h3 className="text-xl font-semibold text-ink">
            Come chiedere una prima valutazione
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            {presentation.howTo}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/documenti" className="btn btn-primary">
              Vai a Documenti e richieste
            </Link>
            <Link href="/richiesta" className="btn btn-ghost">
              Trova il tuo modulo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
