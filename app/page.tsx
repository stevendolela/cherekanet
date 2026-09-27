import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Camera,
  ChevronRight,
  Lightbulb,
  MapPin,
  Network,
  ShieldCheck,
  Smartphone,
  Zap
} from "lucide-react";

const pillars = [
  { number: "01", title: "Tech & Infrastructures", text: "Électricité, fibre & réseaux, sécurité, domotique, IRVE, construction et pilotage de projets techniques.", featured: true },
  { number: "02", title: "Solutions digitales", text: "Sites internet, applications et gestion de projets digitaux." },
  { number: "03", title: "Communication", text: "Réseaux sociaux, vidéos, supports et objets de communication." },
  { number: "04", title: "Événementiel", text: "Traiteur, décoration, sonorisation et organisation d’événements." },
  { number: "05", title: "Conseil & Services", text: "Audit, services aux entreprises, nettoyage, entretien, fournitures et mobilier." }
];

const technicalServices = [
  { icon: Zap, title: "Électricité", text: "Installation, mise en œuvre, maintenance et suivi." },
  { icon: Cable, title: "Fibre & réseaux", text: "D1, D2, D3, FTTx, FTTh et infrastructures réseau." },
  { icon: Camera, title: "Sécurité", text: "Caméras, détecteurs, alarmes et systèmes de protection." },
  { icon: Lightbulb, title: "Domotique", text: "Des bâtiments plus intelligents, connectés et maîtrisés." },
  { icon: Smartphone, title: "IRVE", text: "Infrastructures de recharge pour véhicules électriques." },
  { icon: Network, title: "Construction & réhabilitation", text: "Des projets intégrant les lots techniques dès la conception." }
];

const steps = [
  ["01", "Étudier", "Comprendre le besoin et définir la solution."],
  ["02", "Planifier", "Organiser les ressources, les équipes et les étapes."],
  ["03", "Réaliser", "Piloter l’exécution avec les équipes terrain."],
  ["04", "Contrôler", "Suivre la qualité et accompagner la réception."]
];

export default function Home() {
  return (
    <main>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#10111a]/80 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="text-xl font-black tracking-tight">CHEREKA<span className="text-brand">NET</span></Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <Link href="/solutions" className="transition hover:text-brand">Solutions</Link>
            <Link href="#expertise" className="transition hover:text-brand">Expertise</Link>
            <Link href="#methode" className="transition hover:text-brand">Notre méthode</Link>
            <Link href="/realizations" className="transition hover:text-brand">Réalisations</Link>
            <Link href="/about" className="transition hover:text-brand">À propos</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#e12696] sm:inline-flex">Parler de votre projet</Link>
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-white/15 px-4 py-2 text-sm font-bold">Menu</summary>
              <div className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-[#171925] p-2 text-sm font-semibold shadow-2xl">
                <Link href="/solutions" className="block rounded-xl px-4 py-3 hover:bg-white/5">Solutions</Link>
                <Link href="#expertise" className="block rounded-xl px-4 py-3 hover:bg-white/5">Expertise</Link>
                <Link href="#methode" className="block rounded-xl px-4 py-3 hover:bg-white/5">Notre méthode</Link>
                <Link href="/realizations" className="block rounded-xl px-4 py-3 hover:bg-white/5">Réalisations</Link>
                <Link href="/about" className="block rounded-xl px-4 py-3 hover:bg-white/5">À propos</Link>
                <Link href="/contact" className="mt-1 block rounded-xl bg-brand px-4 py-3 text-white">Parler de votre projet</Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="noise relative min-h-[760px] overflow-hidden bg-ink px-6 pb-24 pt-36 text-white lg:min-h-[850px] lg:px-10 lg:pb-32 lg:pt-44">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -bottom-48 left-[35%] h-[520px] w-[520px] rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute right-[12%] top-[28%] hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
        <div className="absolute right-[17%] top-[34%] hidden h-44 w-44 rounded-full border border-white/10 lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="reveal">
            <div className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[.25em] text-white/50">
              <span className="h-px w-10 bg-brand" />
              France · RDC
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-[6.2rem]">
              Des solutions
              <br />
              <span className="text-brand">pour vos projets.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Technologies, infrastructures, digital, communication et services. Une expertise opérationnelle pour transformer vos projets en réalisations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-4 font-bold transition hover:scale-[1.02] hover:bg-[#e12696]">
                Parler de votre projet
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 font-bold text-white/80 transition hover:border-white/30 hover:bg-white/5">
                Découvrir nos solutions
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="relative ml-auto max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[.045] p-6 shadow-2xl shadow-black/30 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[.22em] text-white/40">Cœur d’expertise</span>
                <span className="flex h-3 w-3 rounded-full bg-electric shadow-[0_0_24px_rgba(22,168,216,.8)]" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {technicalServices.map(({ title, icon: Icon }, index) => (
                  <div key={title} className={`group rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:bg-white/[.08] ${index === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
                    <Icon size={22} className="text-electric transition group-hover:scale-110" />
                    <p className="mt-8 font-bold">{title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-brand/20 bg-brand/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">Approche projet</p>
                <p className="mt-2 text-sm leading-6 text-white/55">Étude · Planification · Réalisation · Contrôle</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-white/30 lg:flex">
          <span className="h-8 w-px bg-white/20" /> Explorer
        </div>
      </section>

      <section id="solutions" className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-brand">Nos solutions</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-.03em] sm:text-5xl">Une expertise.<br />Plusieurs solutions.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/55">
              Un groupe structuré autour de cinq univers complémentaires, avec une priorité donnée aux métiers techniques et aux infrastructures.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {pillars.map((pillar, index) => (
              <Link
                href="/solutions"
                key={pillar.number}
                className={`group relative overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${pillar.featured ? "bg-ink text-white lg:col-span-5 lg:row-span-2 lg:p-9" : "bg-white ring-1 ring-black/5 lg:col-span-7"}`}
              >
                <span className={`text-xs font-black ${pillar.featured ? "text-electric" : "text-brand"}`}>{pillar.number}</span>
                <div className={pillar.featured ? "lg:min-h-[360px]" : "lg:flex lg:items-end lg:justify-between lg:gap-8"}>
                  <div>
                    <h3 className={`mt-10 text-2xl font-black tracking-tight ${pillar.featured ? "sm:text-3xl" : ""}`}>{pillar.title}</h3>
                    <p className={`mt-4 max-w-xl text-sm leading-6 ${pillar.featured ? "text-white/55" : "text-black/55"}`}>{pillar.text}</p>
                  </div>
                  <span className={`mt-8 inline-flex items-center gap-2 text-sm font-bold ${pillar.featured ? "text-white" : "text-black"}`}>
                    Explorer <ChevronRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
                {pillar.featured && <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full border border-white/10" />}
                {index === 1 && <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-brand/10" />}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-brand">Tech & Infrastructures</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-.03em] sm:text-5xl">Construire.<br />Connecter.<br />Sécuriser.</h2>
              <p className="mt-6 max-w-md leading-7 text-black/55">
                Notre expertise technique couvre les infrastructures électriques et numériques, la sécurité, la domotique et les nouveaux usages énergétiques.
              </p>
              <Link href="/solutions/tech" className="mt-8 inline-flex items-center gap-2 font-bold text-brand">
                Voir toute l’expertise <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-black/10 sm:grid-cols-2">
              {technicalServices.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className={`group bg-white p-7 transition hover:bg-[#f7f7f5] ${index === 0 ? "sm:rounded-tl-[2rem]" : ""}`}>
                  <Icon size={25} className="text-brand transition group-hover:scale-110" />
                  <h3 className="mt-10 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="methode" className="bg-[#ececea] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-brand">Notre méthode</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-.03em] sm:text-5xl">De l’idée à la réalisation.</h2>
            </div>
            <p className="text-lg leading-8 text-black/55">
              Étude, planification, coordination, suivi de chantier, contrôle qualité et réception : nous structurons chaque étape du projet.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <article key={number} className="group rounded-[1.75rem] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-black text-brand">{number}</span>
                <div className="mt-16">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="implantation" className="relative overflow-hidden bg-ink px-6 py-24 text-white lg:px-10 lg:py-28">
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-electric">France · RDC</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.03em] sm:text-5xl">Deux territoires.<br />Une même exigence.</h2>
            <p className="mt-6 max-w-lg leading-7 text-white/50">Une implantation entre la France et la République démocratique du Congo pour accompagner les projets dans les deux territoires.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["France", "Viry-Châtillon", "Présence et développement de nos activités en France."],
              ["RDC", "Kinshasa", "Ancrage opérationnel et expertise terrain en République démocratique du Congo."]
            ].map(([country, city, text]) => (
              <article key={country} className="rounded-[1.75rem] border border-white/10 bg-white/[.03] p-7 transition hover:-translate-y-1 hover:bg-white/[.06]">
                <MapPin size={20} className="text-electric" />
                <h3 className="mt-10 text-2xl font-black">{country}</h3>
                <p className="mt-1 font-semibold text-white/70">{city}</p>
                <p className="mt-4 text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-brand p-8 text-white shadow-2xl shadow-brand/20 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-white/60">Votre projet</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.03em] sm:text-6xl">Vous avez un projet ? Parlons-en.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-bold transition hover:scale-[1.02]">
              Nous contacter <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-black/50 md:flex-row md:items-center md:justify-between">
          <div><strong className="text-black">CHEREKA<span className="text-brand">NET</span></strong> · Services & Infrastructures</div>
          <div className="flex items-center gap-3"><ShieldCheck size={16} /> France · RDC</div>
          <div>© {new Date().getFullYear()} CherekaNet</div>
        </div>
      </footer>
    </main>
  );
}
