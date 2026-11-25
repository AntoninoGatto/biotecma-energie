"use client";

import { useMemo, useState } from "react";
import type { RequestModule } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

type Props = {
  module: RequestModule;
};

export function RequestForm({ module }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [authorized, setAuthorized] = useState(false);

  const message = useMemo(() => {
    const lines = [
      `Buongiorno Biotecma Energie,`,
      `vorrei una prima valutazione per: ${module.title}.`,
      "",
    ];

    for (const field of module.fields) {
      const value = values[field.name]?.trim() || "non so";
      lines.push(`${field.label}: ${value}`);
    }

    lines.push("");
    lines.push(
      authorized
        ? "Autorizzazione: dichiaro di poter condividere i materiali pertinenti per la valutazione preliminare. Accesso, incarico e costi si concordano a parte."
        : "Nota: autorizzazione valutazione preliminare non ancora confermata nel modulo.",
    );
    lines.push("");
    lines.push(
      "Allego (o allego a breve) la scheda compilata e le foto disponibili.",
    );

    return lines.join("\n");
  }, [authorized, module, values]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
        }}
      >
        <p className="text-sm text-muted">
          Compila i campi. Se un dato manca, lascia vuoto: verrà inviato come
          «non so». Poi apri WhatsApp e allega le foto.
        </p>

        {module.fields.map((field) => (
          <label key={field.name} className="block">
            <span className="field-label">{field.label}</span>
            {field.multiline ? (
              <textarea
                className="field min-h-28"
                name={field.name}
                value={values[field.name] ?? ""}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
              />
            ) : (
              <input
                className="field"
                name={field.name}
                value={values[field.name] ?? ""}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
              />
            )}
          </label>
        ))}

        <label className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-1"
            checked={authorized}
            onChange={(e) => setAuthorized(e.target.checked)}
            required
          />
          <span>
            Autorizzazione alla valutazione preliminare. Dichiaro di poter
            condividere i materiali pertinenti e chiedo che Biotecma Energie li
            esamini per rispondere alla mia richiesta. Accesso, incarico e costi
            si concordano a parte.
          </span>
        </label>

        <button type="submit" className="btn btn-accent">
          Apri WhatsApp con la richiesta
        </button>
      </form>

      <aside className="space-y-5">
        <div className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-lg font-semibold text-ink">Allegati utili</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {module.allegati}
          </p>
          <p className="mt-3 text-sm text-muted">
            Fotografa solo da punti accessibili e autorizzati. Lascia chiusi
            quadri e pannelli. Oscura i dati non pertinenti.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-[color-mix(in_oklab,var(--brand)_8%,white)] p-5">
          <h2 className="text-lg font-semibold text-ink">Anteprima messaggio</h2>
          <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-relaxed text-ink-soft">
            {message}
          </pre>
        </div>
      </aside>
    </div>
  );
}
