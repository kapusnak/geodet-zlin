import SectionHeading from "./SectionHeading";
import CheckList from "./CheckList";

const planItems = [
  "vyznačení budovy",
  "změnu vnějšího obvodu budovy",
  "rozdělení pozemku",
  "změnu hranice pozemku",
  "zpřesnění geometrického a polohového určení hranice pozemku",
  "vyznačení věcného břemene",
];

export default function Katastr() {
  return (
    <section
      id="katastr"
      aria-labelledby="katastr-heading"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
    >
      <SectionHeading id="katastr-heading">Katastr nemovitostí</SectionHeading>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-base font-semibold sm:text-lg">
            Práce v katastru nemovitostí:
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900 sm:text-xl">
            Vyhotovení geometrických plánů pro:
          </h3>
          <div className="mt-4">
            <CheckList items={planItems} />
          </div>
          <p className="mt-6 flex items-start gap-3 text-base font-semibold leading-relaxed sm:text-lg">
            <svg
              viewBox="0 0 24 24"
              className="mt-1 h-5 w-5 shrink-0 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            Vytýčení vlastnické hranice pozemku
          </p>
        </div>

        <img
          src="/images/gs18i.webp"
          srcSet="/images/gs18i-480.webp 480w, /images/gs18i.webp 705w"
          sizes="(min-width: 1024px) 576px, 100vw"
          width={705}
          height={1280}
          alt="Přijímač Leica GS18 I na výtyčce s kontrolerem CS20"
          loading="lazy"
          className="w-full rounded-xl object-cover shadow-md"
        />
      </div>
    </section>
  );
}
