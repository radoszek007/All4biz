import Link from "next/link";

export const lastUpdated = "6 czerwca 2026 r.";

export function LegalHeader({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <header className="legal-header">
      <Link className="legal-back" href="/">
        ← Wróć na stronę główną
      </Link>
      <p className="eyebrow">All4biz</p>
      <h1>{title}</h1>
      <p>{lead}</p>
      <span>Ostatnia aktualizacja: {lastUpdated}</span>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="legal-page-footer">
      <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
      <Link href="/polityka-cookies">Polityka cookies</Link>
      <Link href="/regulamin-serwisu">Regulamin serwisu</Link>
      <Link href="/dane-spolki">Dane spółki</Link>
    </footer>
  );
}
