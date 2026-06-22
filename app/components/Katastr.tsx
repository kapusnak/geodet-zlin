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
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading id="katastr-heading">
            Katastr nemovitostí
          </SectionHeading>
          <p className="mt-8 flex items-start gap-3 text-lg font-semibold text-slate-900 sm:text-xl">
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
          <h3 className="mt-8 flex items-start gap-3 text-lg font-semibold text-slate-900 sm:text-xl">
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
            Vyhotovení geometrických plánů pro:
          </h3>
          <div className="mt-4">
            <CheckList items={planItems} marker="dot" className="pl-8" />
          </div>
        </div>

        <div className="flex justify-center">
          <figure className="group relative w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-900/5 lg:w-auto">
            <img
              src="/images/leica-gs18.webp"
              srcSet="/images/leica-gs18-560.webp 560w, /images/leica-gs18.webp 1120w"
              sizes="(min-width: 1024px) 280px, 100vw"
              width={1534}
              height={2605}
              alt="Přijímač Leica GS18 I na výtyčce s kontrolerem CS20"
              loading="lazy"
              className="h-56 w-full object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-105 sm:h-72 lg:h-auto lg:max-h-[30rem] lg:w-auto lg:object-center"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent px-4 py-3 text-sm font-medium text-white">
              Leica GS18 I + CS20 v terénu
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
