const offerItems = [
  "vyhotovení geometrických plánů",
  "vytyčení vlastnické hranice pozemku",
  "inženýrská geodézie",
  "poradenství",
];

export default function Hero() {
  return (
    <section id="uvod" aria-labelledby="uvod-heading" className="relative">
      <div className="absolute inset-0">
        <img
          src="/images/leica-hero.webp"
          srcSet="/images/leica-hero-960.webp 960w, /images/leica-hero.webp 1920w"
          sizes="100vw"
          alt="Totální stanice Leica s ovládacím panelem na staveništi"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1
            id="uvod-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Geodetické práce
          </h1>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Geodet Zlín
          </h2>
        </div>

        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-slate-100 sm:text-lg">
          <p>
            Provádíme zejména geodetické práce v katastru nemovitostí, práce ve
            výstavbě a inženýrské geodézii a také provádíme poradenství v
            oblasti zeměměřictví a katastru nemovitostí.
          </p>
          <p>
            Našimi zákazníky jsou zejména občané, obecní úřady, státní
            organizace, projektanti, tuzemské a zahraniční stavební firmy,
            kteří oceňují rychle a precizně zhotovenou práci.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Nabízíme:
          </h2>
          <ul className="mt-4 grid max-w-2xl gap-3 sm:grid-cols-2">
            {offerItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3 text-slate-50"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
