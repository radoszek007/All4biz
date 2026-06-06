import type { Metadata } from "next";
import { LegalFooter, LegalHeader } from "../legal-components";

export const metadata: Metadata = {
  title: "Polityka cookies — All4biz",
  description:
    "Informacje o plikach cookies i podobnych technologiach w serwisie All4biz.",
};

export default function CookiesPolicyPage() {
  return (
    <main className="legal-page">
      <LegalHeader
        title="Polityka cookies"
        lead="Ten dokument wyjaśnia, czy i w jaki sposób serwis All4biz korzysta z plików cookies oraz podobnych technologii."
      />

      <section>
        <h2>Czym są pliki cookies</h2>
        <p>
          Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu
          użytkownika. Mogą być wykorzystywane między innymi do zapewnienia
          działania strony, zapamiętywania ustawień, analityki lub działań
          marketingowych.
        </p>
      </section>

      <section>
        <h2>Cookies w serwisie All4biz</h2>
        <p>
          Na dzień publikacji serwis ma charakter statycznej strony
          informacyjnej i nie wykorzystuje cookies analitycznych,
          marketingowych ani reklamowych. Serwis nie zawiera narzędzi
          śledzących użytkowników ani formularza kontaktowego.
        </p>
        <p>
          Jeżeli w przyszłości zostaną wdrożone narzędzia analityczne,
          marketingowe, mapy, osadzone materiały zewnętrzne lub inne technologie
          wymagające zgody, serwis zostanie uzupełniony o odpowiedni mechanizm
          zarządzania zgodami.
        </p>
      </section>

      <section>
        <h2>Niezbędne dane techniczne</h2>
        <p>
          Dostawca hostingu lub infrastruktury może przetwarzać standardowe dane
          techniczne niezbędne do wyświetlenia strony, zapewnienia
          bezpieczeństwa i diagnozowania błędów. Nie są one wykorzystywane do
          prowadzenia działań marketingowych przez All4biz.
        </p>
      </section>

      <section>
        <h2>Zarządzanie cookies w przeglądarce</h2>
        <p>
          Użytkownik może samodzielnie zarządzać obsługą cookies w ustawieniach
          swojej przeglądarki internetowej, w tym blokować lub usuwać pliki
          cookies. Ograniczenie cookies może wpływać na działanie niektórych
          stron internetowych.
        </p>
      </section>

      <LegalFooter />
    </main>
  );
}
