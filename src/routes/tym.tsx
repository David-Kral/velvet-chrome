import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import b1 from "@/assets/barber-1.jpg";
import b2 from "@/assets/barber-2.jpg";
import b3 from "@/assets/barber-3.jpg";

export const Route = createFileRoute("/tym")({
  head: () => ({
    meta: [
      { title: "Barbeři — Barber Room" },
      { name: "description", content: "Poznejte mistry řemesla, kteří se vám budou věnovat." },
      { property: "og:title", content: "Barbeři — Barber Room" },
      { property: "og:description", content: "Poznejte mistry řemesla Barber Room." },
    ],
  }),
  component: TeamPage,
});

const TEAM = [
  { img: b1, name: "Tomáš Vlček", role: "Senior Barber", spec: "Klasické střihy · Fade · Konzultace stylu", years: 9 },
  { img: b2, name: "Marek Doležal", role: "Master Barber", spec: "Tetovaní gentlemani · Pompadour · Britská škola", years: 12 },
  { img: b3, name: "Pan Vilém", role: "Founder · Master", spec: "Holení břitvou · Péče o vousy · Italská škola", years: 28 },
];

function TeamPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="ornament">Tým</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl text-4xl text-cream md:text-6xl">
              Mistři řemesla.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Tři barbeři, tři školy, jeden standard. Vyberte si svého — nebo
              nechte na nás.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[0.65rem] tracking-[0.4em] text-burgundy uppercase">
                      {p.role}
                    </div>
                    <h3 className="mt-2 text-2xl text-cream">{p.name}</h3>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-muted-foreground">{p.spec}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.3em] text-chrome uppercase">
                      {p.years} let praxe
                    </span>
                    <Link to="/kontakt" className="text-xs tracking-[0.3em] text-cream uppercase hover:text-burgundy transition-colors">
                      Rezervovat →
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}