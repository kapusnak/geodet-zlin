# Composer 2.5 prompt for geodet-zlin.cz

Copy everything inside the code block below and paste it as the first prompt for Composer 2.5.

```text
You are building a brand-new marketing website from scratch. Read this entire spec, then implement it fully.

GOAL
Build a fast, minimal, highly readable ONE-PAGE website for a Czech land-surveying business "Geodetické práce – Ing. Martin Šmíd" (geodet, Zlín). It replaces an old WordPress site. Content is CZECH ONLY. Design must be clean and professional: lots of whitespace, strong typography, NO design overbloat, NO marketing fluff, NO stock-photo clutter.

TECH STACK (use exactly this)
- Next.js (latest stable) with the App Router.
- React + TypeScript.
- Tailwind CSS for styling. No other UI/component libraries unless trivial.
- No CMS, no database, no backend.

HOSTING CONSTRAINT (critical)
The site will FIRST be deployed as fully static files via FTP, and LATER moved to a Node Next.js host. So:
- Configure static export: in next.config.js set `output: 'export'`, `images: { unoptimized: true }`, and `trailingSlash: true` (so folder/index.html routing works on plain FTP).
- `npm run build` must produce a complete static site in the `out/` folder that works when its contents are uploaded to the root of an FTP web host (open index.html directly, no server).
- Do NOT use any feature incompatible with static export (no server actions, no route handlers, no next/image optimization server, no dynamic SSR, no middleware).
- Use the native <img> tag OR next/image with `unoptimized`. Keep it simple.
- All asset paths must be relative-safe for a static host (use leading-slash paths that resolve from site root).
- Add a `.nojekyll` file in `public/` (harmless, helps some static hosts).

PROJECT SETUP
- Initialize a fresh Next.js TypeScript project in the current workspace root.
- Add scripts so `npm run build` performs the static export into `out/`.
- After building, confirm `out/index.html` exists and the page is self-contained.
- Add a concise README.md (in Czech or English) explaining: `npm install`, `npm run dev`, `npm run build`, then "upload the CONTENTS of the out/ folder to the FTP web root".

IMAGES (Leica hardware ONLY)
The workspace contains a `source-images/` folder with three Leica total-station photos. Copy them into `public/images/` and rename them cleanly:
- source-images/slide1.png  ->  public/images/leica-hero.png  (Leica total station with construction crane; use as HERO background)
- source-images/slide2.png  ->  public/images/leica-road.png  (Leica close-up on a road; use in the Inženýrská geodézie section)
- source-images/slide3.png  ->  public/images/leica-tripod.png  (Leica on a red tripod; use in the Katastr / About section)
Do NOT use any other images. Do NOT add random surveying/stock photos, paper plans, or icons-as-photos. Only these three Leica photos. Optimize layout so images never look stretched (use object-fit: cover).

PAGE STRUCTURE (single page with anchor sections)
A sticky top header/navbar with the brand on the left and anchor links that smooth-scroll to sections:
- "Úvod" (#uvod)
- "Katastr nemovitostí" (#katastr)
- "Inženýrská geodézie" (#inzenyrska-geodezie)
- "Kontakty" (#kontakty)
The header also shows phone and email as clickable links (tel: and mailto:). On mobile, collapse nav into a simple hamburger menu.

Brand/logo: a clean wordmark "Geodetické práce" with subline "Ing. Martin Šmíd", paired with a small inline SVG globe/grid icon (recreate simply; we have no logo file). Keep it tasteful and monochrome.

SECTION 1 — HERO (#uvod)
- Full-width hero using public/images/leica-hero.png as a background image with a dark overlay for text contrast.
- Headline: "Geodetické práce, geodet Zlín"
- Short intro paragraph(s):
  "Vážení zákazníci, vítáme Vás na internetových stránkách naší firmy."
  "Provádíme zejména geodetické práce v katastru nemovitostí, práce ve výstavbě a inženýrské geodézii a také provádíme poradenství v oblasti zeměměřictví a katastru nemovitostí."
  "Našimi zákazníky jsou zejména občané, obecní úřady, státní organizace, projektanti, tuzemské a zahraniční stavební firmy, kteří oceňují rychle a precizně zhotovenou práci."
- Two primary call-to-action buttons: "Zavolat: 775 986 485" (tel:+420775986485) and "Napsat e-mail" (mailto:smid.geodet@seznam.cz).
- A short "Nabízíme:" list: vyhotovení geometrických plánů; vytýčení vlastnické hranice pozemku; inženýrská geodézie; poradenství.

SECTION 2 — KATASTR NEMOVITOSTÍ (#katastr)
- Heading: "Katastr nemovitostí"
- Intro line: "Práce v katastru nemovitostí:"
- Subheading: "Vyhotovení geometrických plánů pro:" with bullet list:
  - vyznačení budovy
  - změnu vnějšího obvodu budovy
  - rozdělení pozemku
  - změnu hranice pozemku
  - zpřesnění geometrického a polohového určení hranice pozemku
  - vyznačení věcného břemene
- Then a standalone line/item: "Vytýčení vlastnické hranice pozemku"
- Include public/images/leica-tripod.png alongside this section (e.g. two-column layout on desktop, stacked on mobile).

SECTION 3 — INŽENÝRSKÁ GEODÉZIE (#inzenyrska-geodezie)
- Heading: "Inženýrská geodézie"
- Intro line: "Inženýrská geodézie:"
- Bullet list:
  - vyhotovení účelové mapy jako podklad pro projektování
  - vytýčení budov, komunikací a sítí dle projektu
  - zaměření skutečného provedení – budov, komunikací, inženýrských sítí (vodovod, kanalizace, telefonní a elektrorozvody apod.)
  - passporty budov
  - zaměření jeřábových drah
- Include public/images/leica-road.png alongside this section.

SECTION 4 — KONTAKTY (#kontakty)
- Heading: "Kontakty"
- Contact block (clickable where relevant). NO contact form.
  Adresa:
  Ing. Martin Šmíd
  Přístav 552
  Zlín 760 01
  tel.: 775 986 485            (clickable: tel:+420775986485)
  e-mail: smid.geodet@seznam.cz (clickable: mailto:smid.geodet@seznam.cz)
  IČ: 748 43 940
  DIČ: CZ830531438
- Embedded map: use a simple, key-free iframe map (Mapy.cz or Google Maps embed) centered on "Přístav 552, Zlín 760 01". Keep it lightweight and lazy-loaded. If unsure, use a Google Maps embed iframe with the address as the query. Make sure it works on a static host.

FOOTER
- Brand line + "© <current year> Geodetické práce – Ing. Martin Šmíd".
- Repeat clickable phone and email.
- Link "Zásady ochrany osobních údajů" pointing to an anchor or a tiny static privacy section/page (short generic Czech GDPR text is fine). Keep it minimal.

DESIGN SYSTEM
- Aesthetic: precise, professional, readable. Minimal. Think clean Swiss/utility design, not flashy.
- Color: neutral base (white / near-white background, dark slate text) with ONE professional accent color — a calm blue (around #1f6fb2 / #2563eb family). Use accent sparingly for links, buttons, section underlines.
- Typography: a clean, highly legible sans-serif (e.g. Inter or system UI stack via next/font with a self-hosted/Google font that still works in static export). Generous line-height, comfortable measure (max ~70ch for paragraphs).
- Spacing: generous vertical rhythm between sections; clear section separation.
- Buttons: solid accent primary + outline secondary; visible focus states.
- Lists: tidy custom bullets, good spacing.
- Strong, consistent heading hierarchy. Don't overuse uppercase; one accent style for section titles is enough.

RESPONSIVENESS & ACCESSIBILITY
- Fully responsive: looks great on mobile, tablet, desktop. Test breakpoints.
- Semantic HTML (header, nav, main, section, footer, h1/h2 hierarchy, ul/li).
- All images have descriptive Czech alt text mentioning Leica where relevant.
- Color contrast meets WCAG AA. Visible keyboard focus. Smooth-scroll respects prefers-reduced-motion.
- Anchor links must land with the sticky header offset accounted for (scroll-margin-top).

SEO & METADATA
- `<html lang="cs">`.
- Page <title>: "Geodetické práce – Ing. Martin Šmíd | Geodet Zlín".
- Meta description in Czech summarizing services (katastr nemovitostí, inženýrská geodézie, geometrické plány, Zlín).
- Open Graph + Twitter tags using public/images/leica-hero.png as the share image.
- Add a favicon (simple generated icon is fine), robots meta (index,follow), and a basic sitemap.xml + robots.txt in public/.
- Add JSON-LD structured data: LocalBusiness / ProfessionalService with name, address (Přístav 552, Zlín 760 01), telephone +420775986485, email, and IČ.

QUALITY BAR / ACCEPTANCE CRITERIA
- `npm run dev` runs with zero errors/warnings; `npm run build` succeeds and generates `out/` with a working static index.html.
- No TypeScript or ESLint errors.
- Only the three Leica images are used; no other photos.
- All four sections present with the EXACT Czech texts above (do not paraphrase the service lists).
- Phone, email links, and map work; no contact form exists.
- Lighthouse-style basics: fast, accessible, mobile-friendly.

DELIVERY
- Implement everything, then run the build to verify static export works.
- Summarize the file structure and give exact steps to upload `out/` to FTP.
```
