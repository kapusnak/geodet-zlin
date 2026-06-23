import SectionHeading from "./SectionHeading";
import CheckList from "./CheckList";

const items = [
  "vyhotovení účelové mapy jako podklad pro projektování",
  "vytýčení budov, komunikací a sítí dle projektu",
  "zaměření skutečného provedení – budov, komunikací, inženýrských sítí (vodovod, kanalizace, telefonní a elektrorozvody apod.)",
  "passporty budov",
  "zaměření jeřábových drah",
];

export default function Inzenyrska() {
  return (
    <section
      id="inzenyrska-geodezie"
      aria-labelledby="inzenyrska-heading"
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="group relative isolate order-2 overflow-hidden rounded-xl shadow-md ring-1 ring-slate-900/5 lg:order-1">
            <img
              src="/images/leica-road.webp"
              srcSet="/images/leica-road-960.webp 960w, /images/leica-road.webp 1920w"
              sizes="(min-width: 1024px) 576px, 100vw"
              width={1920}
              height={820}
              alt="Detail totální stanice Leica při měření komunikace"
              loading="lazy"
              className="w-full scale-[1.01] object-cover grayscale brightness-110 contrast-95 transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
            />
            <span className="pointer-events-none absolute inset-0 bg-accent/55 mix-blend-color transition-opacity duration-700 ease-out group-hover:opacity-0" />
            <span className="pointer-events-none absolute inset-0 bg-white/35 transition-opacity duration-700 ease-out group-hover:opacity-0" />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading id="inzenyrska-heading">
              Inženýrská geodézie
            </SectionHeading>
            <div className="mt-8">
              <CheckList items={items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
