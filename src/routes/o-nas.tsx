import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-chair.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "Koncept — Barber Room" },
      { name: "description", content: "Příběh místa, kde se řemeslo mění v rituál." },
      { property: "og:title", content: "Koncept — Barber Room" },
      { property: "og:description", content: "Příběh místa, kde se řemeslo mění v rituál." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 -z-10 bg-[color-mix(in_oklab,var(--olive)_18%,var(--background))]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="ornament">Náš koncept</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl text-4xl text-cream md:text-6xl">
              Salón. Útočiště.<br />Privátní klubovna.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Klasické křeslo Barber Room"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-chrome/40 md:block" />
            </div>
          </Reveal>

          <div className="space-y-10 lg:col-span-7">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-cream md:text-xl">
                Barber Room není barbershop. Je to malé, pečlivě zařízené
                místo, kam přijdete unavení a odejdete s pocitem, že vám někdo
                konečně věnoval čas.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="leading-relaxed text-muted-foreground">
                Inspirovali jsme se starými gentlemen's cluby — tlumené světlo,
                tmavé dřevo, kůže, jemný kouř whisky v pozadí. K tomu řemeslo
                barberů, kteří svou profesi berou jako poslání, ne jako práci
                od deseti do šesti.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="leading-relaxed text-muted-foreground">
                Pracujeme s evropskými klasickými značkami péče, břitvami z
                Solingenu a italským textilem. Žádné kompromisy, žádné spěchání,
                žádný stres. Když odejdete, budete cítit, že každá minuta měla svou váhu.
              </p>
            </Reveal>

            <div className="hairline" />

            <Reveal delay={400}>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { k: "Solingen", l: "Břitvy & nůžky" },
                  { k: "Proraso", l: "Italská péče" },
                  { k: "Auböck", l: "Mosazné doplňky" },
                  { k: "Glencairn", l: "Sklo k drinku" },
                ].map((b) => (
                  <div key={b.k}>
                    <div className="font-display text-lg text-burgundy">{b.k}</div>
                    <div className="mt-1 text-xs tracking-[0.3em] text-chrome uppercase">{b.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}