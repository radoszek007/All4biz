import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "O nas", href: "#o-nas" },
  { label: "Obszary współpracy", href: "#obszary-wspolpracy" },
  { label: "Jak pracujemy", href: "#jak-pracujemy" },
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Kontakt", href: "#kontakt" },
];

const cooperationAreas = [
  {
    title: "IT i rozwiązania technologiczne",
    text: "Wspieramy projekty związane z technologiami, cyfryzacją, narzędziami IT oraz rozwiązaniami wspierającymi organizacje w codziennej pracy.",
  },
  {
    title: "Bezpieczeństwo osobiste",
    text: "Rozwijamy współpracę w obszarze szkoleń, profilaktyki, bezpieczeństwa pracowników oraz praktycznego przygotowania do sytuacji podwyższonego ryzyka.",
  },
  {
    title: "Edukacja i rozwój kompetencji",
    text: "Wspieramy projekty szkoleniowe, rozwojowe i edukacyjne dla firm, instytucji oraz organizacji publicznych i prywatnych.",
  },
  {
    title: "Wydarzenia kulturalne",
    text: "Pomagamy w tworzeniu i rozwijaniu projektów związanych z kulturą, wydarzeniami, współpracą artystyczną i organizacją inicjatyw dla określonych grup odbiorców.",
  },
];

const processSteps = [
  {
    title: "Rozpoznanie potrzeby",
    text: "Analizujemy, czego naprawdę dotyczy projekt, kto ma być odbiorcą i jaki rezultat ma zostać osiągnięty.",
  },
  {
    title: "Dobór kierunku współpracy",
    text: "Sprawdzamy możliwe modele działania, potencjalnych partnerów i realność biznesową projektu.",
  },
  {
    title: "Połączenie stron",
    text: "Wspieramy komunikację między partnerami, dostawcami, klientami lub instytucjami.",
  },
  {
    title: "Organizacja projektu",
    text: "Pomagamy przełożyć ustalenia na konkretny plan współpracy, ofertę, rozmowy handlowe lub dalsze działania.",
  },
  {
    title: "Rozwój relacji",
    text: "Tam, gdzie projekt ma potencjał, wspieramy dalszą współpracę i rozwój kolejnych możliwości.",
  },
];

const reasons = [
  {
    title: "Projektowe podejście",
    text: "Nie pracujemy według jednego szablonu. Każdą inicjatywę analizujemy pod kątem celu, partnerów, rynku i możliwego modelu współpracy.",
  },
  {
    title: "Szeroka perspektywa",
    text: "Łączymy doświadczenie z różnych obszarów — technologii, bezpieczeństwa, edukacji i kultury — dzięki czemu potrafimy dostrzegać możliwości tam, gdzie inni widzą oddzielne branże.",
  },
  {
    title: "Praktyczna realizacja",
    text: "Koncentrujemy się na tym, aby rozmowy, kontakty i pomysły prowadziły do konkretnych działań, a nie pozostawały na poziomie ogólnych deklaracji.",
  },
];

const audience = [
  "firm szukających nowych możliwości współpracy",
  "dostawców chcących wejść na nowy rynek",
  "organizacji rozwijających projekty edukacyjne lub szkoleniowe",
  "partnerów poszukujących kontaktów, struktury i wsparcia w rozmowach handlowych",
  "instytucji i firm planujących wydarzenia, szkolenia lub projekty rozwojowe",
];

const practicalWork = [
  "rozpoznajemy możliwości współpracy",
  "łączymy partnerów biznesowych",
  "wspieramy rozmowy handlowe",
  "pomagamy uporządkować model projektu",
  "rozwijamy relacje między firmami, instytucjami i dostawcami",
];

const contactDetails = [
  "E-mail: info@all4biz.pl",
  "Telefon: +48 608 376 200",
  "Adres: ul. Żyzna 58F, 42-200 Częstochowa",
  "NIP: 5732944482",
  "KRS: 0001043627",
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="All4biz - strona główna">
        <span className="brand-logo-tile" aria-hidden="true">
          <img
            className="brand-logo"
            src="/all4biz-logo.png"
            alt=""
            width="760"
            height="500"
          />
        </span>
      </a>
      <nav className="main-nav" aria-label="Główna nawigacja">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">Firma handlowa działająca projektowo</p>
          <h1 id="hero-title">
            All4biz — partner w rozwoju projektów handlowych
          </h1>
          <p className="hero-lead">
            Łączymy potrzeby rynku, właściwych partnerów i konkretne
            możliwości biznesowe. Pracujemy projektowo w obszarach IT,
            bezpieczeństwa osobistego, edukacji oraz wydarzeń kulturalnych.
          </p>
          <p className="hero-note">
            Nie jesteśmy katalogiem przypadkowych usług. Każdy projekt
            analizujemy osobno — od celu biznesowego, przez dobór partnerów,
            aż po model współpracy i praktyczną realizację.
          </p>
          <div className="hero-actions" aria-label="Główne działania">
            <a className="button button-primary" href="#obszary-wspolpracy">
              Obszary współpracy
            </a>
            <a className="button button-secondary" href="#kontakt">
              Kontakt
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/images/all4biz-architecture-v2.png"
            alt="Nowoczesna architektura biurowa z subtelnymi liniami połączeń"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 980px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="section section-shell two-column" id="o-nas">
        <SectionHeading eyebrow="O nas" title="Kim jesteśmy" />
        <div className="copy-stack">
          <p>
            All4biz to firma handlowa działająca projektowo. Wspieramy firmy,
            instytucje i partnerów w rozwijaniu konkretnych inicjatyw
            biznesowych — od rozpoznania możliwości, przez rozmowy handlowe, po
            organizację współpracy.
          </p>
          <p>
            Naszą rolą jest łączenie ludzi, potrzeb i rozwiązań w taki sposób,
            aby z pomysłu, zapytania lub kontaktu mogła powstać realna wartość
            biznesowa.
          </p>
          <p>
            Działamy tam, gdzie liczy się zaufanie, dobra orientacja w rynku,
            sprawna komunikacja i praktyczne podejście do realizacji.
          </p>
          <aside className="highlight-box" aria-label="Co robimy w praktyce">
            <h3>Co robimy w praktyce:</h3>
            <ul>
              {practicalWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <figure className="section-photo">
            <Image
              src="/images/all4biz-boardroom.png"
              alt="Pusta, elegancka sala konferencyjna przygotowana do rozmów biznesowych"
              width={1536}
              height={1024}
              sizes="(max-width: 980px) 100vw, 54vw"
            />
          </figure>
        </div>
      </section>

      <section className="section muted-section" id="obszary-wspolpracy">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Obszary współpracy"
            title="Obszary, w których działamy"
            text="Nie ograniczamy się do jednej branży. Pracujemy z projektami, które wymagają handlowego podejścia, zrozumienia potrzeb klienta i umiejętnego połączenia właściwych partnerów."
          />
          <div className="card-grid">
            {cooperationAreas.map((area, index) => (
              <article className="service-card" key={area.title}>
                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell" id="jak-pracujemy">
        <SectionHeading
          eyebrow="Metodyka"
          title="Jak pracujemy"
          text="Każdy projekt zaczyna się od zrozumienia celu. Dopiero później dobieramy właściwych partnerów, zakres działań i sposób realizacji."
        />
        <div className="process-list">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <div className="step-index">{String(index + 1)}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section image-band" aria-labelledby="why-title">
        <Image
          className="band-photo"
          src="/images/all4biz-venue-v2.png"
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          sizes="100vw"
        />
        <div className="section-shell">
          <SectionHeading
            eyebrow="Dlaczego All4biz"
            title="Dlaczego warto rozmawiać z All4biz"
            text="W projektach handlowych często największą wartość tworzy nie sam pomysł, ale właściwe połączenie ludzi, potrzeb, zaufania i dobrego momentu."
          />
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article className="reason-block" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell two-column" id="dla-kogo">
        <SectionHeading eyebrow="Dla kogo" title="Dla kogo pracujemy" />
        <div className="copy-stack">
          <p>
            Współpracujemy z firmami, instytucjami, organizacjami i partnerami,
            którzy szukają praktycznego wsparcia w rozwoju projektów
            handlowych.
          </p>
          <div className="audience-panel">
            <h3>All4biz może być partnerem dla:</h3>
            <ul>
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="final-cta section-shell" aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">Rozmowa o projekcie</p>
          <h2 id="cta-title">Masz projekt, pomysł albo możliwość współpracy?</h2>
          <p>
            Porozmawiajmy o tym, jak można przełożyć go na konkretny model
            działania, właściwych partnerów i realną ścieżkę współpracy.
          </p>
        </div>
        <a className="button button-primary" href="#kontakt">
          Kontakt
        </a>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="section-shell contact-layout">
          <SectionHeading
            eyebrow="Kontakt"
            title="Kontakt"
            text="Jeżeli masz projekt, zapytanie lub szukasz partnera do rozmowy o możliwościach biznesowych, skontaktuj się z nami."
          />
          <address className="contact-card">
            <strong>ALL4BIZ sp. z o.o.</strong>
            {contactDetails.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </address>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <img
              className="footer-logo"
              src="/all4biz-logo.png"
              alt="All4biz"
              width="760"
              height="500"
            />
            <p>Partner w rozwoju projektów handlowych.</p>
          </div>
          <nav aria-label="Nawigacja w stopce">
            <a href="#o-nas">O nas</a>
            <a href="#obszary-wspolpracy">Obszary współpracy</a>
            <a href="#jak-pracujemy">Jak pracujemy</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <div className="footer-contact">
            <span>ALL4BIZ sp. z o.o.</span>
            <span>ul. Żyzna 58F, 42-200 Częstochowa</span>
            <span>NIP: 5732944482</span>
            <span>KRS: 0001043627</span>
            <span>E-mail: info@all4biz.pl</span>
            <span>Telefon: +48 608 376 200</span>
          </div>
        </div>
        <nav className="section-shell legal-links" aria-label="Informacje prawne">
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/polityka-cookies">Polityka cookies</Link>
          <Link href="/regulamin-serwisu">Regulamin serwisu</Link>
          <Link href="/dane-spolki">Dane spółki</Link>
        </nav>
        <div className="section-shell copyright">
          © 2026 All4biz. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </main>
  );
}
