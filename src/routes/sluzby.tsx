import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby & Ceník — Barber Room" },
      { name: "description", content: "Prémiové střihy, holení břitvou a kompletní péče. Kompletní ceník Barber Room." },
      { property: "og:title", content: "Služby & Ceník — Barber Room" },
      { property: "og:description", content: "Prémiové střihy a kompletní péče." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "The Classic Haircut",
    desc: "Konzultace, mytí, ruční střih, styling. Drink dle výběru v ceně.",
    duration: "45 min",
    price: "890",
  },
  {
    title: "Royal Beard Trim",
    desc: "Tvarování vousů břitvou, horký ručník, péče olejem, masáž obličeje.",
    duration: "30 min",
    price: "650",
  },
  {
    title: "Executive Package",
    desc: "Střih, holení břitvou, péče o vousy, masáž hlavy, manikúra, drink.",
    duration: "90 min",
    price: "1 890",
  },
  {
    title: "Hot Towel Shave",
    desc: "Klasické holení břitvou. Horký ručník, pěna, dvojí průchod, tonik.",
    duration: "40 min",
    price: "790",
  },
  {
    title: "Father & Son",
    desc: "Střih pro otce a syna ve dvou křeslech vedle sebe. Společný rituál.",
    duration: "60 min",
    price: "1 290",
  },
  {
    title: "Junior Cut (do 12 let)",
    desc: "Klidná atmosféra, vlastní limonáda, trpělivý barber.",
    duration: "30 min",
    price: "490",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="ornament">Služby & Ceník</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl text-4xl text-cream md:text-6xl">
              Vyberte si svůj rituál.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Ceny jsou orientační — finální cena závisí na délce vlasů a typu
              služby. Každá návštěva zahrnuje drink, espresso nebo whisky dle
              výběru.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32 lg:px-10">
        <ul className="border-t border-border/60">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} as="li">
              <article className="group relative grid grid-cols-[1fr_auto] items-baseline gap-x-8 gap-y-3 border-b border-border/60 py-10 transition-colors duration-300 hover:bg-card/60 md:grid-cols-[1fr_auto_auto] md:py-12">
                <h3 className="col-start-1 text-xl text-cream tracking-[0.08em] md:text-2xl">
                  {s.title}
                </h3>
                <span className="col-start-2 row-start-1 hidden text-xs tracking-[0.3em] text-chrome uppercase md:block">
                  {s.duration}
                </span>
                <div className="col-start-2 row-start-1 font-display text-2xl text-burgundy md:col-start-3 md:text-3xl">
                  {s.price} <span className="text-sm tracking-widest text-chrome">Kč</span>
                </div>
                <p className="col-span-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:col-span-3">
                  <span className="mr-3 text-burgundy md:hidden">{s.duration} ·</span>
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            Dárkový poukaz na jakoukoliv službu — ideální dárek pro muže.
          </p>
          <Link to="/kontakt" className="btn-luxury btn-luxury-solid">
            Rezervovat termín
          </Link>
        </div>
      </section>
    </>
  );
}