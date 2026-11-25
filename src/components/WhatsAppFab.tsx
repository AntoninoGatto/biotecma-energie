import { site, whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1f9e5a] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(18,37,44,0.25)] transition hover:-translate-y-0.5 hover:bg-[#178a4c]"
      aria-label={`Contatta Biotecma Energie su WhatsApp al ${site.phone}`}
    >
      <span aria-hidden>WA</span>
      <span className="hidden sm:inline">{site.phone}</span>
    </a>
  );
}
