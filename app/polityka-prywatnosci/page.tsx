import type { Metadata } from "next";
import { LegalFooter, LegalHeader } from "../legal-components";

export const metadata: Metadata = {
  title: "Polityka prywatności — All4biz",
  description:
    "Informacje o przetwarzaniu danych osobowych w ramach serwisu internetowego All4biz.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <LegalHeader
        title="Polityka prywatności"
        lead="Ten dokument opisuje, w jaki sposób All4biz przetwarza dane osobowe osób odwiedzających serwis oraz kontaktujących się z firmą."
      />

      <section>
        <h2>Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest All4biz. Dane identyfikacyjne,
          adresowe i rejestrowe zostaną uzupełnione po ich finalnym
          potwierdzeniu.
        </p>
        <ul>
          <li>E-mail: [do uzupełnienia]</li>
          <li>Adres: [do uzupełnienia]</li>
          <li>NIP / REGON / KRS: [do uzupełnienia]</li>
        </ul>
      </section>

      <section>
        <h2>Zakres przetwarzanych danych</h2>
        <p>
          Serwis ma charakter informacyjny i nie zawiera formularza
          kontaktowego. Dane osobowe mogą być przetwarzane wtedy, gdy użytkownik
          skontaktuje się z All4biz poza serwisem, na przykład mailowo lub
          telefonicznie.
        </p>
        <p>
          W takim przypadku przetwarzane mogą być dane podane dobrowolnie w
          treści kontaktu, w szczególności imię i nazwisko, adres e-mail, numer
          telefonu, nazwa firmy, stanowisko oraz informacje dotyczące projektu
          lub zapytania.
        </p>
      </section>

      <section>
        <h2>Cele i podstawy prawne</h2>
        <p>Dane mogą być przetwarzane w następujących celach:</p>
        <ul>
          <li>
            obsługa zapytań i prowadzenie korespondencji — na podstawie prawnie
            uzasadnionego interesu administratora,
          </li>
          <li>
            prowadzenie rozmów dotyczących możliwej współpracy — w celu podjęcia
            działań przed zawarciem umowy lub na podstawie prawnie uzasadnionego
            interesu,
          </li>
          <li>
            ustalenie, dochodzenie lub obrona roszczeń — na podstawie prawnie
            uzasadnionego interesu,
          </li>
          <li>
            realizacja obowiązków prawnych, jeżeli będą miały zastosowanie — na
            podstawie przepisów prawa.
          </li>
        </ul>
      </section>

      <section>
        <h2>Dane techniczne serwisu</h2>
        <p>
          Podczas korzystania z serwisu mogą powstawać standardowe dane
          techniczne, takie jak adres IP, typ przeglądarki, informacje o
          urządzeniu, data i godzina wizyty oraz dane o żądaniach kierowanych do
          serwera. Dane te służą zapewnieniu bezpieczeństwa, stabilności i
          prawidłowego działania serwisu.
        </p>
      </section>

      <section>
        <h2>Odbiorcy danych</h2>
        <p>
          Dane mogą być przekazywane podmiotom wspierającym All4biz w obsłudze
          technicznej, hostingu, poczty elektronicznej, usługach IT, księgowości
          lub obsłudze prawnej, wyłącznie w zakresie niezbędnym do realizacji
          tych usług.
        </p>
      </section>

      <section>
        <h2>Okres przechowywania danych</h2>
        <p>
          Dane przetwarzane w związku z korespondencją są przechowywane przez
          okres potrzebny do obsługi zapytania i dalszych rozmów, a następnie
          przez okres wymagany przepisami prawa lub potrzebny do zabezpieczenia
          ewentualnych roszczeń.
        </p>
      </section>

      <section>
        <h2>Prawa osób, których dane dotyczą</h2>
        <p>
          Osobie, której dane dotyczą, przysługuje prawo dostępu do danych, ich
          sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia
          danych, wniesienia sprzeciwu oraz złożenia skargi do Prezesa Urzędu
          Ochrony Danych Osobowych.
        </p>
      </section>

      <section>
        <h2>Dobrowolność podania danych</h2>
        <p>
          Podanie danych jest dobrowolne, ale może być niezbędne do udzielenia
          odpowiedzi, prowadzenia rozmów lub przygotowania propozycji
          współpracy.
        </p>
      </section>

      <section>
        <h2>Zautomatyzowane podejmowanie decyzji</h2>
        <p>
          Dane osobowe nie są wykorzystywane do zautomatyzowanego podejmowania
          decyzji, w tym profilowania wywołującego skutki prawne lub podobnie
          istotnie wpływającego na użytkownika.
        </p>
      </section>

      <LegalFooter />
    </main>
  );
}
