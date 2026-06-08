import type { Metadata } from "next";
import { LegalFooter, LegalHeader } from "../legal-components";

export const metadata: Metadata = {
  title: "Dane spółki — All4biz",
  description: "Dane identyfikacyjne i kontaktowe All4biz.",
};

export default function CompanyDataPage() {
  return (
    <main className="legal-page">
      <LegalHeader
        title="Dane spółki"
        lead="Podstawowe dane identyfikacyjne i kontaktowe ALL4BIZ spółka z ograniczoną odpowiedzialnością."
      />

      <section>
        <h2>ALL4BIZ sp. z o.o.</h2>
        <dl className="legal-data-list">
          <div>
            <dt>Pełna nazwa</dt>
            <dd>ALL4BIZ spółka z ograniczoną odpowiedzialnością</dd>
          </div>
          <div>
            <dt>E-mail</dt>
            <dd>info@all4biz.pl</dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>+48 608 376 200</dd>
          </div>
          <div>
            <dt>Adres</dt>
            <dd>ul. Żyzna 58F, 42-200 Częstochowa</dd>
          </div>
          <div>
            <dt>NIP</dt>
            <dd>5732944482</dd>
          </div>
          <div>
            <dt>KRS</dt>
            <dd>0001043627</dd>
          </div>
        </dl>
      </section>

      <LegalFooter />
    </main>
  );
}
