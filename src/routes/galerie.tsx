import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import hero from "@/assets/hero-interior.jpg";
import chair from "@/assets/about-chair.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Lookbook — Barber Room" },
      { name: "description", content: "Atmosféra, detaily a řemeslo Barber Room v obrazech." },
      { property: "og:title", content: "Lookbook — Barber Room" },
      { property: "og:description", content: "Atmosféra a řemeslo v obrazech." },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { img: g6, span: "md:col-span-2 md:row-span-2", alt: "Řada křesel" },
  { img: g1, span: "", alt: "Břitva a štětka" },
  { img: g2, span: "", alt: "Detail střihu" },
  { img: g3, span: "md:row-span-2", alt: "Whisky na pultě" },
  { img: chair, span: "", alt: "Křeslo zblízka" },
  { img: g4, span: "", alt: "Police s produkty" },
  { img: g5, span: "md:col-span-2", alt: "Horký ručník" },
  { img: hero, span: "md:col-span-2", alt: "Interiér" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="ornament">Lookbook</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl text-4xl text-cream md:text-6xl">
              Atmosféra v obrazech.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-0.5 md:auto-rows-[260px] md:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={i} delay={i * 60} className={`relative overflow-hidden ${it.span}`}>
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy/0 transition-colors duration-500 hover:bg-burgundy/30" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}