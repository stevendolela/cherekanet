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

export default function Home() {
  return (
    <main>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="text-xl font-black tracking-tight">CHEREKA<span className="text-brand">NET</span></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="/solutions" className="hover:text-brand">Solutions</a>
            <a href="#expertise" className="hover:text-brand">Expertise</a>
            <a href="#methode" className="hover:text-brand">Notre méthode</a>
            <a href="/realizations" className="hover:text-brand">Réalisations</a>
            <a href="/about" className="hover:text-brand">À propos</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/contact" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-brand sm:inline-flex">Parler de votre projet</a>
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-black/10 px-4 py-2 text-sm font-bold">Menu</summary>
              <div className="absolute right-0 top-12 w-56 rounded-2xl border border-black/10 bg-white p-2 text-sm font-semibold shadow-xl">
                <a href="/solutions" className="block rounded-xl px-4 py-3 hover:bg-black/5">Solutions</a>
                <a href="#expertise" className="block rounded-xl px-4 py-3 hover:bg-black/5">Expertise</a>
                <a href="#methode" className="block rounded-xl px-4 py-3 hover:bg-black/5">Notre méthode</a>
                <a href="/realizations" className="block rounded-xl px-4 py-3 hover:bg-black/5">Réalisations</a>
                <a href="/about" className="block rounded-xl px-4 py-3 hover:bg-black/5">À propos</a>
                <a href="/contact" className="mt-1 block rounded-xl bg-ink px-4 py-3 text-white">Parler de votre projet</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink px-6 pb-24 pt-40 text-white lg:px-10 lg:pb-32">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[.28em] text-white/60">France · RDC</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-6xl lg:text-8xl">Des solutions<br /><span className="text-brand">pour vos projets.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">Technologies, infrastructures, digital, communication et services. Une expertise opérationnelle pour transformer vos projets en réalisations.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-4 font-bold">Parler de votre projet <ArrowRight size={18} className="transition group-hover:translate-x-1" /></a>
              <a href="/solutions" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 font-bold text-white/80 hover:bg-white/10">Découvrir nos solutions</a>
            </div>
          </div>
          <div className="relative min-h-64 rounded-[2rem] border border-white/10 bg-white/[.04] p-8">
            <div className="absolute right-7 top-7 h-3 w-3 rounded-full bg-electric" />
            <p className="text-xs font-bold uppercase tracking-[.22em] text-white/40">Notre cœur d’expertise</p>
            <div className="mt-12 grid grid-cols-2 gap-3">{["Électricité", "Fibre", "Sécurité", "Domotique", "IRVE", "Construction"].map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-white/[.05] p-4 text-sm font-semibold">{x}</div>)}</div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-brand">Nos solutions</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Une expertise.<br />Plusieurs solutions.</h2>
            <p className="mt-6 text-lg leading-8 text-black/60">Un groupe structuré autour de cinq univers complémentaires, avec une priorité donnée aux métiers techniques et aux infrastructures.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => <a href="/solutions" key={pillar.number} className={`group rounded-[2rem] p-6 transition hover:-translate-y-1 ${pillar.featured ? "bg-ink text-white lg:col-span-2" : "bg-white"}`}>
              <span className={`text-xs font-black ${pillar.featured ? "text-electric" : "text-brand"}`}>{pillar.number}</span>
              <h3 className="mt-12 text-2xl font-black">{pillar.title}</h3>
              <p className={`mt-4 text-sm leading-6 ${pillar.featured ? "text-white/60" : "text-black/60"}`}>{pillar.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">Explorer <ChevronRight size={16} /></span>
            </a>)}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-brand">Tech & Infrastructures</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Construire.<br />Connecter.<br />Sécuriser.</h2>
              <p className="mt-6 max-w-md leading-7 text-black/60">Notre expertise technique couvre les infrastructures électriques et numériques, la sécurité, la domotique et les nouveaux usages énergétiques.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-black/10 sm:grid-cols-2">{technicalServices.map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-7"><Icon size={25} className="text-brand" /><h3 className="mt-10 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{text}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section id="methode" className="bg-[#ececea] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-brand">Notre méthode</p>
          <div className="mt-4 grid gap-12 lg:grid-cols-2"><h2 className="text-4xl font-black tracking-tight sm:text-5xl">De l’idée à la réalisation.</h2><p className="text-lg leading-8 text-black/60">Étude, planification, coordination, suivi de chantier, contrôle qualité et réception : nous structurons chaque étape du projet.</p></div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["01", "Étudier", "Comprendre le besoin et définir la solution."],["02", "Planifier", "Organiser les ressources, les équipes et les étapes."],["03", "Réaliser", "Piloter l’exécution avec les équipes terrain."],["04", "Contrôler", "Suivre la qualité et accompagner la réception."]].map(([n, title, text]) => <article key={n} className="rounded-[1.5rem] bg-white p-6"><span className="text-sm font-black text-brand">{n}</span><h3 className="mt-10 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="implantation" className="bg-ink px-6 py-24 text-white lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-bold uppercase tracking-[.22em] text-electric">France · RDC</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Deux territoires.<br />Une même exigence.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">{[["France", "Viry-Châtillon", "Présence et développement de nos activités en France."],["RDC", "Kinshasa", "Ancrage opérationnel et expertise terrain en République démocratique du Congo."]].map(([country, city, text]) => <article key={country} className="rounded-[1.5rem] border border-white/10 p-6"><MapPin size={20} className="text-electric" /><h3 className="mt-8 text-2xl font-black">{country}</h3><p className="mt-1 font-semibold text-white/70">{city}</p><p className="mt-4 text-sm leading-6 text-white/50">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-brand p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[.22em] text-white/60">Votre projet</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Vous avez un projet ? Parlons-en.</h2></div><a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-bold">Nous contacter <ArrowRight size={18} /></a></div>
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
