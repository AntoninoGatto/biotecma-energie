import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RequestForm } from "@/components/RequestForm";
import { getRequestModule, requestModules } from "@/lib/content";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return requestModules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const module = getRequestModule(slug);
  if (!module) return { title: "Modulo richiesta" };
  return {
    title: `Modulo · ${module.title}`,
    description: `Compila e invia via WhatsApp la richiesta per ${module.title}.`,
  };
}

export default async function RichiestaModuloPage({ params }: Props) {
  const { slug } = await params;
  const module = getRequestModule(slug);
  if (!module) notFound();

  return (
    <div className="site-shell py-12 md:py-16">
      <Link
        href="/richiesta"
        className="text-sm font-semibold text-brand hover:underline"
      >
        ← Tutti i moduli
      </Link>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        Modulo compilabile
      </p>
      <h1 className="section-title mt-3 max-w-3xl">{module.title}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
        Compila e invia il modulo con le foto pertinenti via WhatsApp (
        {site.phone}). Se un dato manca, scrivi «non so».
      </p>

      <div className="mt-10">
        <RequestForm module={module} />
      </div>
    </div>
  );
}
