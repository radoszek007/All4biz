import type { Metadata } from "next";
import { LegalFooter, LegalHeader } from "../legal-components";

export const metadata: Metadata = {
  title: "Regulamin serwisu — All4biz",
  description:
    "Podstawowe zasady korzystania z informacyjnego serwisu internetowego All4biz.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <LegalHeader
        title="Regulamin serwisu"
        lead="Serwis All4biz ma charakter informacyjny i prezentacyjny. Nie służy do składania zamówień ani zawierania umów online."
      />

      <section>
        <h2>Charakter serwisu</h2>
        <p>
          Serwis przedstawia informacje o All4biz, obszarach współpracy,
          sposobie pracy oraz danych kontaktowych. Treści publikowane w serwisie
          nie stanowią oferty w rozumieniu przepisów prawa cywilnego, chyba że
          wyraźnie wskazano inaczej.
        </p>
      </section>

      <section>
        <h2>Brak sprzedaży online</h2>
        <p>
          Serwis nie jest sklepem internetowym, platformą transakcyjną ani
          systemem umożliwiającym zawieranie umów przez stronę internetową. W
          związku z tym nie zawiera mechanizmu składania zamówień, płatności,
          kont użytkowników ani formularza kontaktowego.
        </p>
      </section>

      <section>
        <h2>Korzystanie z serwisu</h2>
        <p>
          Użytkownik powinien korzystać z serwisu zgodnie z prawem, dobrymi
          obyczajami oraz w sposób nienaruszający praw All4biz ani osób
          trzecich. Zabronione jest podejmowanie działań mogących zakłócić
          działanie serwisu lub naruszyć jego bezpieczeństwo.
        </p>
      </section>

      <section>
        <h2>Prawa autorskie i materiały</h2>
        <p>
          Treści, układ, grafiki, fotografie, znaki oraz inne elementy serwisu
          mogą podlegać ochronie prawnej. Kopiowanie, rozpowszechnianie lub
          wykorzystywanie materiałów z serwisu bez zgody uprawnionego jest
          zabronione, z wyjątkiem dozwolonego użytku przewidzianego przepisami
          prawa.
        </p>
      </section>

      <section>
        <h2>Aktualność informacji</h2>
        <p>
          All4biz dokłada starań, aby informacje w serwisie były aktualne i
          rzetelne. Ze względu na projektowy charakter działalności zakres
          współpracy, obszary działań oraz dane kontaktowe mogą być aktualizowane
          wraz z rozwojem firmy.
        </p>
      </section>

      <section>
        <h2>Kontakt w sprawach serwisu</h2>
        <p>
          W sprawach dotyczących działania serwisu, treści lub kwestii prawnych
          można skontaktować się z ALL4BIZ sp. z o.o., ul. Żyzna 58F, 42-200
          Częstochowa, KRS: 0001043627, NIP: 5732944482, e-mail:
          info@all4biz.pl.
        </p>
      </section>

      <LegalFooter />
    </main>
  );
}
