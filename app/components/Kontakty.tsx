import SectionHeading from "./SectionHeading";

export default function Kontakty() {
  return (
    <section
      id="kontakty"
      aria-labelledby="kontakty-heading"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
    >
      <SectionHeading id="kontakty-heading">Kontakty</SectionHeading>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <address className="space-y-6 text-base not-italic leading-relaxed sm:text-lg">
          <div>
            <p className="font-semibold text-slate-900">Adresa:</p>
            <p className="mt-1">
              Ing. Martin Šmíd
              <br />
              Přístav 552
              <br />
              Zlín 760 01
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:+420775986485"
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5 font-semibold text-slate-900 shadow-sm transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-accent"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
              </svg>
              +420 775 986 485
            </a>

            <a
              href="mailto:smid.geodet@seznam.cz"
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5 font-semibold text-slate-900 shadow-sm transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
              </svg>
              smid.geodet@seznam.cz
            </a>
          </div>

          <div>
            <p>IČ: 748 43 940</p>
            <p>DIČ: CZ830531438</p>
          </div>
        </address>

        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=P%C5%99%C3%ADstav%20552%2C%20Zl%C3%ADn%20760%2001&z=15&output=embed"
            title="Mapa – Přístav 552, Zlín"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 sm:h-full sm:min-h-96"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
