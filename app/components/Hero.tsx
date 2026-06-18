const offerItems = [
  "vyhotovení geometrických plánů",
  "vytýčení vlastnické hranice pozemku",
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="tel:+420775986485"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
            </svg>
            +420 775 986 485
          </a>
          <a
            href="mailto:smid.geodet@seznam.cz"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            smid.geodet@seznam.cz
          </a>
        </div>
      </div>
    </section>
  );
}
