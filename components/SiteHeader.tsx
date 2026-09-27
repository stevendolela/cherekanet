import Link from "next/link";

type SiteHeaderProps = {
  dark?: boolean;
};

export default function SiteHeader({ dark = false }: SiteHeaderProps) {
  const border = dark ? "border-white/10" : "border-black/10";
  const background = dark ? "bg-[#10111a]/80" : "bg-white/95";
  const text = dark ? "text-white" : "text-black";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b ${border} ${background} ${text} backdrop-blur-xl`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6 lg:px-10">
        <Link href="/" className="shrink-0 text-xl font-black tracking-tight">
          CHEREKA<span className="text-brand">NET</span>
        </Link>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-5 overflow-x-auto text-sm font-semibold sm:gap-7">
          <Link href="/solutions" className="shrink-0 transition hover:text-brand">Solutions</Link>
          <Link href="/#expertise" className="shrink-0 transition hover:text-brand">Expertise</Link>
          <Link href="/#methode" className="shrink-0 transition hover:text-brand">Notre méthode</Link>
          <Link href="/realizations" className="shrink-0 transition hover:text-brand">Réalisations</Link>
          <Link href="/about" className="shrink-0 transition hover:text-brand">À propos</Link>
        </nav>

        <Link href="/contact" className="hidden shrink-0 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#e12696] sm:inline-flex">
          Parler de votre projet
        </Link>
      </div>
    </header>
  );
}
