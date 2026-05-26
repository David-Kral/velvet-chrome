import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-[color-mix(in_oklab,var(--background)_80%,black)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div>
          <div className="font-display text-cream text-2xl tracking-[0.3em]">
            BARBER<span className="text-burgundy">·</span>ROOM
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Prémiový střih, holení a péče v srdci Prahy. Místo, kde se řemeslo
            mění v rituál.
          </p>
          <div className="mt-8 flex gap-5 text-xs tracking-[0.3em] text-chrome uppercase">
            <a href="#" className="hover:text-cream transition-colors">Instagram</a>
            <a href="#" className="hover:text-cream transition-colors">Facebook</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs text-chrome">Otevírací doba</h4>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between gap-8"><span>Pondělí – Pátek</span><span className="text-cream">09:00 — 20:00</span></li>
            <li className="flex justify-between gap-8"><span>Sobota</span><span className="text-cream">10:00 — 18:00</span></li>
            <li className="flex justify-between gap-8"><span>Neděle</span><span className="text-burgundy">Zavřeno</span></li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Parkování pro klienty zajištěno přímo před salonem.
          </p>
        </div>

        <div>
          <h4 className="text-xs text-chrome">Kontakt</h4>
          <ul className="mt-6 space-y-3 text-sm text-cream">
            <li>Národní 28</li>
            <li>110 00 Praha 1</li>
            <li className="pt-2"><a href="tel:+420777123456" className="hover:text-burgundy transition-colors">+420 777 123 456</a></li>
            <li><a href="mailto:rezervace@barberroom.cz" className="hover:text-burgundy transition-colors">rezervace@barberroom.cz</a></li>
          </ul>
          <Link to="/kontakt" className="btn-luxury mt-8 inline-flex">Rezervovat termín</Link>
        </div>
      </div>

      <div className="hairline" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs tracking-[0.3em] text-muted-foreground uppercase lg:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} Barber Room</span>
        <span>Established · MMXXV</span>
      </div>
    </footer>
  );
}