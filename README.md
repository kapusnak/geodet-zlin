# Geodetické práce – Ing. Martin Šmíd (geodet-zlin.cz)

Jednostránkový web geodetických služeb postavený na Next.js + React + TypeScript + Tailwind CSS, nakonfigurovaný pro statický export (vhodný pro běžný FTP hosting).

## Požadavky

- Node.js 18+ a npm

## Příkazy

```bash
npm install     # instalace závislostí (stačí jednou)
npm run dev     # vývojový server na http://localhost:3000
npm run build   # produkční build + statický export do složky out/
```

## Nasazení na FTP hosting

1. Spusťte `npm run build`.
2. Nahrajte **obsah** složky `out/` (ne složku samotnou) do kořenového adresáře webu na FTP.
3. Hotovo – web je čistě statický, nepotřebuje žádný server ani databázi.

Při pozdějším přechodu na Node.js hosting (Vercel apod.) stačí ze souboru `next.config.ts` odstranit řádek `output: "export"`.

## Struktura

- `app/page.tsx` – hlavní jednostránkový web (Úvod, Katastr nemovitostí, Inženýrská geodézie, Kontakty)
- `app/components/` – jednotlivé sekce a hlavička s mobilním menu
- `app/ochrana-osobnich-udaju/` – stránka se zásadami ochrany osobních údajů
- `public/images/` – fotografie přístrojů Leica
- `source-images/` – zdrojové fotografie (do buildu se nedostávají)
