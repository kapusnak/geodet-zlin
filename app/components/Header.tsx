"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/#katastr", label: "Katastr nemovitostí" },
  { href: "/#inzenyrska-geodezie", label: "Inženýrská geodézie" },
  { href: "/#kontakty", label: "Kontakty" },
];

const inquiryFields = [
  "Popis zakázky",
  "Adresa",
  "KÚ",
  "Číslo parcely",
  "Vaše jméno",
  "Váš telefon",
];

const inquiryMailto =
  "mailto:smid.geodet@seznam.cz" +
  "?subject=" +
  encodeURIComponent("Poptávka nové zakázky") +
  "&body=" +
  encodeURIComponent(
    "Stručný popis zakázky:\n\n" +
      "Adresa:\n" +
      "Katastrální území:\n" +
      "Číslo parcely:\n\n" +
      "Jméno:\n" +
      "Telefon:\n",
  );

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 shrink-0 text-accent"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <circle cx="32" cy="32" r="20" />
      <ellipse cx="32" cy="32" rx="9" ry="20" />
      <line x1="12" y1="32" x2="52" y2="32" />
      <path d="M15 21 Q32 29 49 21" />
      <path d="M15 43 Q32 35 49 43" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOverlayTop, setMenuOverlayTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !headerRef.current) return;

    const updateOverlayTop = () => {
      if (!headerRef.current) return;
      setMenuOverlayTop(headerRef.current.getBoundingClientRect().bottom);
    };

    updateOverlayTop();
    const observer = new ResizeObserver(updateOverlayTop);
    observer.observe(headerRef.current);
    window.addEventListener("resize", updateOverlayTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOverlayTop);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-slate-200 ${
        open ? "bg-white" : "bg-white/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <GlobeIcon />
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Geodetické práce
            </span>
            <span className="block text-xs text-slate-600 sm:text-sm">
              Ing. Martin Šmíd
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hlavní navigace">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+420775986485"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
            </svg>
            +420 775 986 485
          </a>
        </nav>

        {/* Mobile: call button + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+420775986485"
            aria-label="Zavolat na číslo 775 986 485"
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobilni-menu"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-700"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Inquiry strip – integrated into the header */}
      <div className="border-t border-accent/15 bg-[#e9f2fb]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2 sm:px-6">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-accent"
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
          <p className="text-xs font-semibold text-slate-900 sm:text-sm">
            <span className="sm:hidden">Poptávka e-mailem</span>
            <span className="hidden sm:inline">
              Novou zakázku poptávejte e-mailem – uveďte:
            </span>
          </p>
          <ul className="hidden flex-wrap items-center gap-1.5 sm:flex">
            {inquiryFields.map((f) => (
              <li
                key={f}
                className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-accent ring-1 ring-accent/20"
              >
                {f}
              </li>
            ))}
          </ul>
          <a
            href={inquiryMailto}
            className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 shrink-0"
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

      {/* Mobile menu – large, simple tap targets */}
      {open && (
        <>
          <nav
            id="mobilni-menu"
            aria-label="Mobilní navigace"
            className="border-t border-slate-200 bg-white shadow-lg lg:hidden"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-slate-100 last:border-b-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-lg font-medium text-slate-800 active:bg-slate-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="p-4">
                <a
                  href="tel:+420775986485"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-accent bg-white px-6 py-3.5 text-lg font-semibold text-accent active:bg-slate-50"
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
                  href={inquiryMailto}
                  onClick={() => setOpen(false)}
                  className="mt-3 block rounded-lg bg-accent px-6 py-3.5 text-center text-lg font-semibold text-white active:bg-accent-dark"
                >
                  Napsat e-mail
                </a>
                <p className="mt-3 text-center text-xs font-medium text-slate-600">
                  Uveďte v e-mailu:
                </p>
                <ul className="mt-2 flex flex-wrap justify-center gap-1.5">
                  {inquiryFields.map((field) => (
                    <li
                      key={field}
                      className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200"
                    >
                      {field}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            aria-label="Zavřít menu"
            className="fixed inset-x-0 bottom-0 z-40 bg-slate-900/35 backdrop-blur-md lg:hidden"
            style={{ top: menuOverlayTop }}
            onClick={() => setOpen(false)}
          />
        </>
      )}
    </header>
  );
}
