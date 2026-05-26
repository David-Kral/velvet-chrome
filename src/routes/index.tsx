import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-interior.jpg";
import galleryRoom from "@/assets/gallery-6.jpg";
import galleryRazor from "@/assets/gallery-1.jpg";
import galleryWhisky from "@/assets/gallery-3.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barber Room — Prémiový barbershop v Praze" },
      { name: "description", content: "Když se řemeslo stává rituálem. Prémiový střih a péče v srdci Prahy." },
      { property: "og:title", content: "Barber Room — Prémiový barbershop v Praze" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interiér Barber Room"
          className="ken-burns absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_90%)] opacity-70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="ornament">Praha · Estd. MMXXV</span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-10 max-w-4xl text-4xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
              Když se řemeslo<br />stává rituálem.
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Prémiový střih, holení břitvou a péče v srdci Prahy. Místo, kde
              čas zpomalí a každý detail má svou váhu.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <Link to="/kontakt" className="btn-luxury btn-luxury-solid">
                Rezervovat termín
              </Link>
              <Link to="/sluzby" className="btn-luxury">
                Naše služby
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.4em] text-chrome uppercase">
          ↓ Scroll
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative border-y border-border/60 bg-[color-mix(in_oklab,var(--background)_85%,black)] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 text-center md:grid-cols-3 lg:px-10">
          {[
            { k: "12+", l: "Let řemesla" },
            { k: "4", l: "Mistři barbeři" },
            { k: "∞", l: "Pozornost detailu" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="font-display text-5xl text-burgundy">{s.k}</div>
              <div className="mt-3 text-xs tracking-[0.4em] text-chrome uppercase">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THE RITUAL — three-card preview */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <Reveal className="text-center">
          <span className="ornament">Rituál</span>
          <h2 className="mt-8 text-3xl text-cream md:text-5xl">Tři kroky k dokonalosti</h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            { img: galleryRazor, title: "Konzultace", text: "Posadíme se, nasloucháme. Než se dotkneme nůžek, rozumíme tomu, kdo jste." },
            { img: galleryRoom, title: "Řemeslo", text: "Ruční střih, horký ručník, břitva. Žádné kompromisy, žádné spěchání." },
            { img: galleryWhisky, title: "Odchod", text: "Sklenka, drobný rozhovor, závěrečné vylepšení. Pak vyjdete jako nový." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group relative overflow-hidden border border-border/70">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                </div>
                <div className="bg-card p-8">
                  <div className="text-xs tracking-[0.4em] text-burgundy uppercase">0{i + 1}</div>
                  <h3 className="mt-3 text-xl text-cream">{c.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-burgundy py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,var(--cream),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl text-cream md:text-5xl">Připraveni na svůj rituál?</h2>
          <p className="mt-6 max-w-xl text-sm text-cream/80">
            Termíny se plní rychle. Zarezervujte si svůj online — během chvíle.
          </p>
          <Link to="/kontakt" className="btn-luxury mt-10 border-cream text-cream">
            Rezervovat termín
          </Link>
        </div>
      </section>
    </>
  );
}
