import Link from "next/link";

type SiteHeaderProps = {
  dark?: boolean;
};

export default function SiteHeader({ dark = false }: SiteHeaderProps) {
  const text = dark ? "text-white" : "text-ink";
  const muted = dark ? "text-white/75 hover:text-white" : "text-black/65 hover:text-black";
  const border = dark ? "border-white/10" : "border-black/10";
  const background = dark ? "bg-[#10111a]/85" : "bg-white/95";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b ${border} ${background} backdrop-blur-xl ${text}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="CherekaNet — Accueil" className="flex h-14 w-32 items-center rounded-xl bg-white px-2 py-1 shadow-sm">
          <img src="/cherekanet-logo.svg" alt="CherekaNet Services" className="h-full w-full object-contain" />
        </Link>

        <nav className={`hidden items-center gap-7 text-sm font-semibold md:flex ${muted}`}>
          <Link href="/solutions" className="transition hover:text-brand">Solutions</Link>
          <Link href="/#expertise" className="transition hover:text-brand">Expertise</Link>
          <Link href="/#methode" className="transition hover:text-brand">Notre méthode</Link>
          <Link href="/realizations" className="transition hover:text-brand">Réalisations</Link>
          <Link href="/about" className="transition hover:text-brand">À propos</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#e12696] sm:inline-flex">
            Parler de votre projet
          </Link>
          <details className="relative md:hidden">
            <summary className={`cursor-pointer list-none rounded-full border ${border} px-4 py-2 text-sm font-bold`}>Menu</summary>
            <div className="absolute right-0 top-12 w-60 rounded-2xl border border-white/10 bg-[#171925] p-2 text-sm font-semibold text-white shadow-2xl">
              <Link href="/solutions" className="block rounded-xl px-4 py-3 hover:bg-white/5">Solutions</Link>
              <Link href="/#expertise" className="block rounded-xl px-4 py-3 hover:bg-white/5">Expertise</Link>
              <Link href="/#methode" className="block rounded-xl px-4 py-3 hover:bg-white/5">Notre méthode</Link>
              <Link href="/realizations" className="block rounded-xl px-4 py-3 hover:bg-white/5">Réalisations</Link>
              <Link href="/about" className="block rounded-xl px-4 py-3 hover:bg-white/5">À propos</Link>
              <Link href="/contact" className="mt-1 block rounded-xl bg-brand px-4 py-3 text-white">Parler de votre projet</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
