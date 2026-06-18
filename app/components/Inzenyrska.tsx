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
          <img
            src="/images/leica-road.webp"
            srcSet="/images/leica-road-960.webp 960w, /images/leica-road.webp 1920w"
            sizes="(min-width: 1024px) 576px, 100vw"
            width={1920}
            height={820}
            alt="Detail totální stanice Leica při měření komunikace"
            loading="lazy"
            className="order-2 w-full rounded-xl object-cover shadow-md lg:order-1"
          />

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
