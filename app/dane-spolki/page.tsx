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
        lead="Podstawowe dane identyfikacyjne i kontaktowe All4biz zostaną uzupełnione po ich finalnym potwierdzeniu."
      />

      <section>
        <h2>All4biz</h2>
        <dl className="legal-data-list">
          <div>
            <dt>E-mail</dt>
            <dd>[do uzupełnienia]</dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>[do uzupełnienia]</dd>
          </div>
          <div>
            <dt>Adres</dt>
            <dd>[do uzupełnienia]</dd>
          </div>
          <div>
            <dt>NIP / REGON / KRS</dt>
            <dd>[do uzupełnienia]</dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>[do uzupełnienia]</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2>Uwagi</h2>
        <p>
          Dane w tej sekcji należy uzupełnić przed publicznym uruchomieniem
          serwisu, zgodnie z rzeczywistą formą prawną, wpisem rejestrowym oraz
          sposobem prowadzenia działalności.
        </p>
      </section>

      <LegalFooter />
    </main>
  );
}
