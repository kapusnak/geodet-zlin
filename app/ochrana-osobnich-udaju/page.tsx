import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů | Geodetické práce – Ing. Martin Šmíd",
  description:
    "Zásady ochrany osobních údajů – Geodetické práce, Ing. Martin Šmíd, Zlín.",
  robots: {
    index: false,
    follow: true,
  },
};

const linkClass = "font-semibold text-accent hover:underline";

export default function OchranaOsobnichUdaju() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Zásady ochrany osobních údajů
          <span className="mt-3 block h-1 w-16 rounded bg-accent" aria-hidden="true" />
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed sm:text-lg [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <p>
            Webová stránka{" "}
            <a href="https://www.geodet-zlin.cz" className={linkClass}>
              www.geodet-zlin.cz
            </a>{" "}
            (dále jen „<strong>Stránka</strong>“) je provozována především za
            účelem nabízení služeb (dále jen „<strong>služby</strong>“). To se
            sebou jako svou nutnou součást nese i práci s osobními údaji.
            Protože chceme, abyste byli co nejlépe informováni o tom, co s
            takto nashromážděnými osobními údaji děláme, sepsali jsme pro Vás
            tyto Zásady ochrany osobních údajů, a to v souladu s nařízením
            Evropského parlamentu a Rady (EU) č. 2016/679, o ochraně fyzických
            osob v souvislosti se zpracováním osobních údajů (dále jen „
            <strong>GDPR</strong>“).
          </p>

          <p>V zásadách ochrany osobních údajů se dozvíte zejména:</p>
          <ol>
            <li>Jaké informace shromažďujeme a z jakého důvodu.</li>
            <li>Jakým způsobem tyto informace využíváme.</li>
            <li>
              Jaké jsou Vaše práva ohledně námi využívaných soukromých
              informací a jakým způsobem je u nás uplatnit.
            </li>
          </ol>

          <h2>Informace, které o Vás shromažďujeme</h2>
          <p>
            V souvislosti s poskytováním služeb o Vás shromažďujeme Vaše jméno
            případně přezdívku, adresu, e-mailovou adresu, telefonní číslo.
            Bez shromažďování těchto osobních údajů bychom Vám nebyly schopni
            poskytnout veškeré poskytované služby na nejlepší úrovni, tak jak
            poskytujeme dnes.
          </p>

          <h2>Jakým způsobem informace využíváme</h2>
          <p>
            Osobní údaje, které shromažďujeme, využíváme především za účelem
            poskytování Služeb a k zajištění veškeré související dokumentace.
          </p>
          <p>
            Shromážděné údaje archivujeme po dobu nezbytně nutnou dle právních
            předpisů a v souvislosti se smluvním vztahem a případným sporem z
            něj vzniklým. S ohledem na to, že soudní spor může vzniknout v době
            3 let od ukončení smluvního vztahu, archivujeme nashromážděné
            údaje po dobu 4 let. Déle smluvní údaje shromažďujeme pouze v
            souvislosti s plněním zákonných povinností. K dřívějšímu výmazu
            shromážděných údajů může dojít na základě žádosti subjektu údajů,
            tak jak je uvedeno níže.
          </p>
          <p>
            Nashromážděné osobní údaje nejsou žádným způsobem bez řádného
            právního důvodu zpřístupňovány třetím osobám.
          </p>

          <h2>Jaká máte práva a jak jich využít</h2>

          <p>
            <strong>Právo na zpřístupnění informací a právo na jejich opravu</strong>
            <br />
            Kdykoliv v budoucnu budete chtít, můžete nás zasláním zprávy na
            e-mailovu adresu{" "}
            <a href="mailto:smid.geodet@seznam.cz" className={linkClass}>
              smid.geodet@seznam.cz
            </a>{" "}
            (dále jen „<strong>e-mailová adresa provozovatele</strong>“)
            požádat o zaslání potvrzení, zda jsou či nejsou Vaše osobní údaje
            zpracovávány. V případě, že Vaše údaje námi budou zpracovány,
            můžeme Vás na Vaši žádost nad rámec informací poskytnutých v
            těchto Zásadách ochrany osobních údajů informovat i o případných
            třetích osobách, kterým byly nebo budou Vaše osobní údaje
            zpřístupněny a pokud nezískáme osobní údaje od Vás, máte právo na
            veškeré nám dostupné informace o tom, odkud jsme Vaše osobní
            informace získali.
          </p>
          <p>
            Pokud o Vás budeme zpracovávat Vaše osobní údaje nepřesně, můžete
            nás na tuto skutečnost zasláním zprávy na e-mailovou adresu
            provozovatele upozornit, my pak bez zbytečného odkladu nepřesné
            osobní údaje opravíme.
          </p>

          <p>
            <strong>Právo vznést námitky proti zpracování osobních údajů</strong>
            <br />
            V případě, že budeme Vaše osobní údaje zpracovávat na základě námi
            oprávněného zájmu, máte právo proti takovému zpracování vznést
            námitky, a to zasláním zprávy na e-mailovou adresu provozovatele.
            Pokud takovou námitku podáte, nebudeme moci Vaše osobní údaje
            zpracovávat, dokud neprokážeme, jaký závažný oprávněný důvod pro
            zpracování máme, a že tento náš důvod převáží nad Vašimi zájmy,
            Vašimi právy a svobodami či nad výkonem nebo obhajobou právních
            nároků.
          </p>
          <p>
            Pokud bychom zpracovávali Vaše osobní údaje pro účely přímého
            marketingu (např. z důvodů zasílání obchodních sdělení), můžete
            vznést na výše uvedenou e-mailovou adresu námitky proti takovému
            zpracování, přičemž po vznesení takové námitky již nebudeme tyto
            údaje pro účely přímého marketingu zpracovávat.
          </p>

          <p>
            <strong>Právo na omezení práce s osobními údaji</strong>
            <br />
            Máte právo, abychom omezili jakékoliv zpracování Vašich osobních
            údajů včetně jejich vymazání:
          </p>
          <ol>
            <li>
              Pokud nám dáte vědět, že jsou námi shromážděné osobní údaje
              nepřesné, a to až do ověření jejich správnosti.
            </li>
            <li>
              Pokud bude zpracování Vašich osobních údajů protiprávní a Vy
              požádáte zasláním zprávy na e-mailovou adresu provozovatele
              namísto o vymazání o omezení jejich použití.
            </li>
            <li>
              Pokud Vaše osobní údaje již sice nebudeme potřebovat pro
              zajištění našich služeb, ale Vy je budete požadovat pro určení,
              výkon nebo obhajobu Vašich právních nároků.
            </li>
            <li>
              Pokud vznesete námitku proti zpracování dle odstavce výše, a to
              do doby, než ověříme, zda naše důvody zpracování převažují nad
              Vašimi zájmy.
            </li>
          </ol>

          <p>
            <strong>Právo být zapomenut (právo na vymazání osobních údajů)</strong>
            <br />
            V případě, že zjistíte, že zpracováváme Vaše osobní údaje:
          </p>
          <ol>
            <li>
              Přestože již není jejich zpracování potřebné pro účely, kvůli
              kterým jsme je získali.
            </li>
            <li>
              Odvoláte souhlas s jejich zpracováním a zároveň nebude existovat
              žádný další důvod pro jejich zpracování (samozřejmě jen v
              případech, kde zpracováváme Vaše osobní údaje na základě Vašeho
              souhlasu).
            </li>
            <li>
              Pokud vznesete námitku podle odstavce uvedeného výše a my Vám
              nebudeme schopni prokázat oprávněné důvody pro jejich
              zpracování, které převáží nad Vašimi zájmy, Vašimi právy a
              svobodami či nad výkonem nebo obhajobou právních nároků.
            </li>
            <li>Neoprávněně.</li>
          </ol>
          <p>
            Máte právo na to, abychom bez zbytečného odkladu od oznámení
            takovýchto skutečností zasláním zprávy na e-mailovou adresu
            provozovatele z takto zpracovávané osobní údaje vymazali. Údaje
            pak nemůžeme ani na Vaši žádost vymazat, pokud bude jejich
            zpracování nezbytné pro výkon práva na svobodu projevu a informace,
            pro splnění některé naší právní povinnosti nebo pro splnění úkolu
            prováděného ve veřejném zájmu, či pro určení, výkon nebo obhajobu
            našich právních nároků.
          </p>

          <p>
            <strong>Právo na poskytnutí údajů ve strojově čitelné formě</strong>
            <br />
            Pokud nás zasláním zprávy na e-mailovou adresu provozovatele
            požádáte, abychom Vám poskytli námi zpracovávané osobní údaje,
            zašleme Vám je ve strukturovaném běžně používaném a strojově
            čitelném formátu (např. formát *.pdf, nebo některý z tabulkových
            formátů), pokud takto údaje zpracováváme. Pokud nás požádáte,
            abychom Vaše osobní údaje zaslali jinému správci osobních údajů,
            máme povinnost tak učinit, ovšem opět jen v případě, že je takto
            již zpracováváme.
          </p>

          <p>
            <strong>
              Právo kdykoliv odvolat souhlas se zasíláním obchodních sdělení
            </strong>
            <br />
            V případě, že od nás již nebudete chtít dostávat obchodní sdělení,
            můžete odvolat souhlas s jejich zasíláním kdykoliv i bez udání
            důvodů buď kliknutím na označený odkaz, který bude součástí každého
            obchodního sdělení, popřípadě zasláním zprávy na e-mailovou adresu
            provozovatele.
          </p>

          <p>
            <strong>Právo podat stížnost u Úřadu na ochranu osobních údajů</strong>
            <br />
            V případě, že podle Vašeho názoru nenaplníme všechny naše právní
            povinnosti vzniklé v souvislosti se zpracováním Vašich osobních
            údajů, můžete se obrátit na Úřad pro ochranu osobních údajů, a to
            buď na adrese jejich sídla Pplk. Sochora 27, Praha 7, PSČ 170 00, na
            e-mailu{" "}
            <a href="mailto:posta@uoou.cz" className={linkClass}>
              posta@uoou.cz
            </a>
            , či jakoukoliv jinou cestou, kterou bude Úřad na ochranu osobních
            údajů akceptovat. Bližší informace o úřadu najdete na webových
            stránkách{" "}
            <a
              href="https://www.uoou.cz"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              www.uoou.cz
            </a>
            .
          </p>

          <h2>Cookies – politika</h2>
          <p>
            Na internetových stránkách{" "}
            <a href="https://www.geodet-zlin.cz" className={linkClass}>
              www.geodet-zlin.cz
            </a>{" "}
            (dále jen „<strong>Stránky</strong>“) užíváme tzv. soubory cookies.
            Tímto a Zásadami ochrany osobních údajů (viz výše) o tom plníme
            naši informační povinnost v souladu s nařízením Evropského
            parlamentu a Rady (EU) č. 2016/679, o ochraně fyzických osob v
            souvislosti se zpracováním osobních údajů (dále jen „
            <strong>GDPR</strong>“).
          </p>

          <p>
            <strong>Co je to cookies?</strong>
            <br />
            Cookies jsou malé textové soubory, které mohou být používány
            webovými stránkami, aby učinily uživatelský zážitek více efektivní.
            Cookies neznamenají žádné nebezpečí pro počítač jako takový.
            Přesto mají cookies význam pro ochranu soukromí. Navštívený web si
            totiž může ukládat do cookies informace, které o návštěvníkovi
            zjistí a může tak postupně zjišťovat zájmy konkrétního návštěvníka.
            Právní normy uvádí, že můžeme ukládat cookies na vašem zařízení,
            pokud jsou nezbytně nutné pro provoz této stránky. Pro všechny
            ostatní typy cookies potřebujeme váš souhlas. Stránky používají
            různé typy cookies. Některé cookies jsou umístěny službami třetích
            stran, které se na nich objevují.
          </p>

          <h3>Jak cookies používáme?</h3>

          <p>
            <strong>Nutné:</strong>
            <br />
            Nutné cookies pomáhají, aby byla webová stránka použitelná tak, že
            umožní fungování jejich základních vlastností jako navigace stránky
            a přístup k zabezpečeným sekcím webové stránky. Webová stránka nemůže
            bez těchto cookies správně fungovat.
          </p>

          <p>
            <strong>Statistické aj.:</strong>
            <br />
            Statistické cookies pomáhají majitelům webových stránek, aby
            porozuměli, jak návštěvníci používají webové stránky. Anonymně
            sbírají a sdělují informace. Jiné cookies pak mohou pomoci, aby si
            webová stránka zapamatovala informace, které mění, jak se webová
            stránka chová nebo jak vypadá či zobrazit sdělení, které je
            relevantní a zajímavé pro jednotlivého uživatele.
          </p>

          <p>
            <strong>Souhlas s ukládáním cookies</strong>
            <br />
            Většina prohlížečů cookies automaticky akceptuje, pokud není
            prohlížeč nastaven jinak.{" "}
            <strong>
              Svým nastavením prohlížeče a používáním Stránek výslovně
              souhlasíte s ukládáním nejen nutných souborů cookies.
            </strong>
          </p>

          <p>
            Použití takových cookies můžete kdykoliv omezit nebo zablokovat v
            nastavení svého webového prohlížeče dle Vaší libosti. Informace o
            nastavení konkrétního prohlížeče naleznete na těchto uvedených
            adresách:
          </p>
          <ul>
            <li>
              Chrome:{" "}
              <a
                href="https://support.google.com/chrome/?hl=cs"
                className={linkClass}
              >
                support.google.com
              </a>
            </li>
            <li>
              Opera:{" "}
              <a
                href="https://help.opera.com/cs/latest/"
                className={linkClass}
              >
                help.opera.com
              </a>
            </li>
            <li>
              Firefox:{" "}
              <a
                href="https://support.mozilla.org/cs/"
                className={linkClass}
              >
                support.mozilla.org
              </a>
            </li>
            <li>
              MSIE:{" "}
              <a
                href="https://support.microsoft.com/cs-cz/products/internet-explorer"
                className={linkClass}
              >
                support.microsoft.com
              </a>
            </li>
            <li>
              Edge:{" "}
              <a
                href="https://support.microsoft.com/cs-cz/products/microsoft-edge"
                className={linkClass}
              >
                support.microsoft.com
              </a>
            </li>
            <li>
              Safari:{" "}
              <a
                href="https://support.apple.com/cs-cz/safari"
                className={linkClass}
              >
                support.apple.com
              </a>
            </li>
          </ul>

          <p>
            Cookies budeme ze Stránek automaticky mazat nejpozději do 13 měsíců
            od jejich posledního využití.
          </p>
          <p>
            Obecné zásady ochrany osobních údajů a vaše konkrétní práva najdete
            viz výše.
          </p>
        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Zpět na úvodní stránku
        </a>
      </main>
      <Footer />
    </>
  );
}
