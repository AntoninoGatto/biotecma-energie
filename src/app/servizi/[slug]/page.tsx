import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getImpiantoService, impiantoServices } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return impiantoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getImpiantoService(slug);
  if (!service) return { title: "Servizio" };
  return {
    title: service.title,
    description: service.aiuto.slice(0, 150),
  };
}

export default async function ServizioPage({ params }: Props) {
  const { slug } = await params;
  const service = getImpiantoService(slug);
  if (!service) notFound();

  return (
    <div className="site-shell py-12 md:py-16">
      <Link
        href="/servizi"
        className="text-sm font-semibold text-brand hover:underline"
      >
        ← Tutti i servizi
      </Link>
      <h1 className="section-title mt-4 max-w-3xl">{service.title}</h1>

      <div className="mt-10 grid max-w-4xl gap-8">
        <section>
          <h2 className="text-xl font-semibold text-ink">
            Come possiamo aiutarti
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{service.aiuto}</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">
            Cosa valutiamo insieme
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            {service.valutiamo}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">
            Foto e documenti preliminari
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{service.foto}</p>
        </section>
        {service.linkExtra ? (
          <a
            href={service.linkExtra.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline-offset-4 hover:underline"
          >
            {service.linkExtra.label}
          </a>
        ) : null}
        <Link href={`/richiesta/${service.slug}`} className="btn btn-primary w-fit">
          Apri il modulo di richiesta per questo servizio
        </Link>
      </div>
    </div>
  );
}
