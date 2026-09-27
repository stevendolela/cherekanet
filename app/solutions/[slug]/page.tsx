import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const services = {
  tech: {
    label: "01",
    title: "Tech & Infrastructures",
    intro: "Des infrastructures conçues pour être fiables, sécurisées et évolutives.",
    items: [
      ["Électricité", "Installation, mise en œuvre, maintenance et suivi technique."],
      ["Fibre optique & réseaux", "Déploiement et accompagnement sur les infrastructures D1, D2, D3, FTTx et FTTh."],
      ["Sécurité / vidéosurveillance", "Caméras, détecteurs, alarmes et systèmes de protection."],
      ["Domotique", "Automatisation et pilotage intelligent des bâtiments."],
      ["IRVE", "Infrastructures de recharge pour véhicules électriques."],
      ["Construction & réhabilitation", "Travaux et intégration des lots techniques dans les projets."]
    ]
  },
  digital: {
    label: "02",
    title: "Solutions digitales",
    intro: "Des outils numériques pensés pour les usages réels de votre organisation.",
    items: [
      ["Sites internet", "Conception d'expériences web modernes et responsives."],
      ["Applications", "Conception et développement de solutions applicatives."],
      ["Gestion de projet", "Cadrage, coordination et suivi de projets digitaux."]
    ]
  },
  communication: {
    label: "03",
    title: "Communication",
    intro: "Donner de la visibilité à vos activités et à vos projets.",
    items: [
      ["Réseaux sociaux", "Création et déclinaison de contenus."],
      ["Vidéos d'entreprise", "Contenus vidéo pour présenter vos activités."],
      ["Affiches & flyers", "Création de supports de communication."],
      ["Objets personnalisés", "Supports et objets personnalisés pour vos actions de communication."]
    ]
  },
  evenementiel: {
    label: "04",
    title: "Événementiel",
    intro: "Des prestations coordonnées pour vos événements privés et professionnels.",
    items: [
      ["Traiteur", "Prestations culinaires pour vos événements."],
      ["Décoration", "Mise en scène et décoration de vos événements."],
      ["Sonorisation", "Solutions de sonorisation adaptées à vos événements."],
      ["Wedding planning", "Organisation et coordination de mariages."]
    ]
  },
  "conseil-services": {
    label: "05",
    title: "Conseil & Services",
    intro: "Des services complémentaires pour accompagner les organisations au quotidien.",
    items: [
      ["Audit & contrôle de gestion", "Analyse et accompagnement des activités."],
      ["Nettoyage & entretien", "Prestations pour bureaux, bâtiments, concessions et logements."],
      ["Fournitures & mobilier", "Mobilier, matériel informatique et fournitures."],
      ["Services aux entreprises", "Prestations complémentaires adaptées aux besoins."]
    ]
  }
} as const;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#10111a] px-6 text-white">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#16a8d8]">404</p>
          <h1 className="mt-4 text-4xl font-black">Solution introuvable.</h1>
          <Link href="/solutions" className="mt-8 inline-flex rounded-full bg-[#d51b8a] px-6 py-3 font-bold">Retour aux solutions</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16}/> Toutes les solutions</Link>
          <Link href="/" className="text-xl font-black tracking-tight">CHEREKA<span className="text-[#d51b8a]">NET</span></Link>
        </div>
      </header>

      <section className="bg-[#10111a] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#16a8d8]">{service.label}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">{service.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          {service.items.map(([title, text]) => (
            <article key={title} className="rounded-[2rem] bg-white p-7 ring-1 ring-black/5 sm:p-9">
              <CheckCircle2 className="text-[#d51b8a]" size={24}/>
              <h2 className="mt-8 text-2xl font-black">{title}</h2>
              <p className="mt-3 max-w-xl leading-7 text-black/55">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#d51b8a] p-8 text-white sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-white/60">Votre projet</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Vous souhaitez en parler ?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">Présentez-nous votre besoin et nous vous orienterons vers la solution adaptée.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#10111a] px-6 py-4 font-bold">Parler de votre projet <ArrowRight size={18}/></Link>
        </div>
      </section>
    </main>
  );
}
