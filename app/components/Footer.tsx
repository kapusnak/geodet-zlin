export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6">
        <a
          href="/ochrana-osobnich-udaju/"
          className="text-sm text-slate-600 underline hover:text-accent"
        >
          Zásady ochrany osobních údajů
        </a>
        <p className="text-sm text-slate-500">
          © {year} Geodetické práce – Ing. Martin Šmíd
        </p>
      </div>
    </footer>
  );
}
