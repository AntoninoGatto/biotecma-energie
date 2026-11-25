export const site = {
  name: "Biotecma Energie",
  owner: "Antonino Gatto",
  area: "Vigevano e Lomellina",
  phone: "347 229 5125",
  phoneTel: "+393472295125",
  whatsapp: "393472295125",
  email: "",
  tagline: "Impianti, manutenzione e documenti",
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsappTemplate =
  "Buongiorno Biotecma Energie, vorrei una prima valutazione per [tipo di richiesta]. L'immobile si trova a [Comune e indirizzo]. La scadenza è [data]. Allego la scheda e le foto disponibili. Il mio recapito è [telefono].";
