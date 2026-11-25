import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Informativa privacy essenziale di ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="site-shell max-w-3xl py-12 md:py-16">
      <h1 className="section-title">Informativa privacy</h1>
      <div className="prose-block mt-6 space-y-4">
        <p>
          I dati e i materiali che invii a {site.name} di {site.owner} tramite
          WhatsApp, telefono o moduli del sito sono trattati per rispondere alla
          tua richiesta, preparare una valutazione preliminare o un preventivo e
          concordare eventuali sopralluoghi.
        </p>
        <p>
          Invia solo i dati pertinenti. Prima di trasmettere copie integrali di
          documenti personali o di terzi, chiedi chiarimenti sul trattamento.
          Accesso all&apos;immobile, incarico e costi si concordano separatamente.
        </p>
        <p>
          Per esercitare i diritti previsti dal Regolamento UE 2016/679
          (accesso, rettifica, cancellazione, limitazione, opposizione) contatta
          Biotecma Energie al numero {site.phone}.
        </p>
      </div>
    </div>
  );
}
