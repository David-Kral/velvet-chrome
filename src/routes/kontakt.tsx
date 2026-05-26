import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Rezervace — Barber Room" },
      { name: "description", content: "Národní 28, Praha 1. Rezervujte si svůj termín online nebo telefonicky." },
      { property: "og:title", content: "Kontakt & Rezervace — Barber Room" },
      { property: "og:description", content: "Národní 28, Praha 1. Rezervujte si svůj termín." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="ornament">Rezervace & Kontakt</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl text-4xl text-cream md:text-6xl">
              Zarezervujte si křeslo.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-0 border border-border/60 lg:grid-cols-2">
          {/* Left: details */}
          <div className="space-y-10 border-b border-border/60 p-10 lg:border-b-0 lg:border-r lg:p-14">
            <Reveal>
              <div>
                <h2 className="text-xs tracking-[0.4em] text-chrome uppercase">Adresa</h2>
                <p className="mt-4 text-xl text-cream">Národní 28</p>
                <p className="text-muted-foreground">110 00 Praha 1 — Nové Město</p>
              </div>
            </Reveal>

            <div className="hairline" />

            <Reveal>
              <div>
                <h2 className="text-xs tracking-[0.4em] text-chrome uppercase">Rezervace</h2>
                <a href="tel:+420777123456" className="mt-4 block text-2xl text-cream hover:text-burgundy transition-colors">
                  +420 777 123 456
                </a>
                <a href="mailto:rezervace@barberroom.cz" className="text-muted-foreground hover:text-cream transition-colors">
                  rezervace@barberroom.cz
                </a>
              </div>
            </Reveal>

            <div className="hairline" />

            <Reveal>
              <div>
                <h2 className="text-xs tracking-[0.4em] text-chrome uppercase">Otevírací doba</h2>
                <ul className="mt-4 space-y-2 text-cream">
                  <li className="flex justify-between gap-4"><span className="text-muted-foreground">Po – Pá</span><span>09:00 — 20:00</span></li>
                  <li className="flex justify-between gap-4"><span className="text-muted-foreground">Sobota</span><span>10:00 — 18:00</span></li>
                  <li className="flex justify-between gap-4"><span className="text-muted-foreground">Neděle</span><span className="text-burgundy">Zavřeno</span></li>
                </ul>
              </div>
            </Reveal>

            <div className="hairline" />

            <Reveal>
              <p className="text-sm text-muted-foreground">
                <span className="text-chrome">Parkování</span> pro klienty zajištěno
                přímo před salonem (3 vyhrazená stání).
              </p>
            </Reveal>

            <Reveal>
              <a
                href="https://reservio.com"
                target="_blank"
                rel="noreferrer"
                className="btn-luxury btn-luxury-solid"
              >
                Online rezervace
              </a>
            </Reveal>
          </div>

          {/* Right: map */}
          <div className="relative min-h-[480px] bg-card lg:min-h-full">
            <iframe
              title="Mapa Barber Room"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.418%2C50.080%2C14.426%2C50.085&layer=mapnik&marker=50.0825%2C14.422"
              className="absolute inset-0 h-full w-full grayscale contrast-125 invert-[0.92] hue-rotate-180"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-burgundy/5 mix-blend-multiply" />
          </div>
        </div>
      </section>
    </>
  );
}