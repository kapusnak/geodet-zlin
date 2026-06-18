const MAILTO =
  "mailto:smid.geodet@seznam.cz" +
  "?subject=" +
  encodeURIComponent("Poptávka nové zakázky") +
  "&body=" +
  encodeURIComponent(
    "Stručný popis zakázky:\n\n" +
      "Katastrální území:\n" +
      "Číslo parcely:\n\n" +
      "Jméno:\n" +
      "Telefon:\n",
  );

const fields = [
  "Popis zakázky",
  "Katastrální území",
  "Číslo parcely",
  "Jméno",
  "Telefon",
];

export default function OrderNotice() {
  return (
    <aside className="sticky top-16 z-40 border-b border-accent/20 bg-[#e9f2fb]/95 backdrop-blur sm:top-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
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
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 sm:text-base">
              Poptáváte novou zakázku? Napište nám e-mail a uveďte:
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-1.5">
              {fields.map((f) => (
                <li
                  key={f}
                  className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-accent/20"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={MAILTO}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:w-auto"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
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
          Napsat e-mail
        </a>
      </div>
    </aside>
  );
}
