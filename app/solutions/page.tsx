import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { ArrowLeft, ArrowRight, Cable, Camera, CheckCircle2, Lightbulb, Network, Smartphone } from "lucide-react";

const groups = [
  {
    title: "Tech & Infrastructures",
    intro: "Des infrastructures et projets conçus pour être fiables, sécurisés et évolutifs.",
    items: [
      ["Fibre optique & réseaux", "Déploiement D1, D2, D3, FTTx et FTTh.", Cable],
      ["Sécurité / vidéosurveillance", "Caméras, détecteurs, alarmes et systèmes de sécurité.", Camera],
      ["Domotique", "Automatisation et pilotage intelligent des bâtiments.", Lightbulb],
      ["IRVE", "Solutions d’infrastructure de recharge pour véhicules électriques.", Smartphone],
      ["Construction & réhabilitation", "Travaux et intégration des lots techniques.", Network],
      ["Gestion de projet / AMOA", "Cadrage, coordination, suivi et accompagnement des projets.", CheckCircle2]
    ]
  },
  {
    title: "Solutions digitales",
    intro: "Des outils numériques pensés pour les usages réels de votre organisation.",
    items: [
      ["Sites internet", "Conception d’expériences web modernes et responsives.", Smartphone],
      ["Applications", "Conception et développement de solutions applicatives.", Network],
      ["Gestion de projet", "Cadrage, coordination et suivi de projets digitaux.", CheckCircle2]
    ]
  },
  {
    title: "Communication",
    intro: "Donner de la visibilité à vos activités et à vos projets.",
    items: [
      ["Réseaux sociaux", "Création et déclinaison de contenus.", CheckCircle2],
      ["Vidéos d’entreprise", "Contenus vidéo pour présenter vos activités.", CheckCircle2],
      ["Supports de communication", "Affiches, flyers et supports personnalisés.", CheckCircle2]
    ]
  },
  {
    title: "Événementiel",
    intro: "Des prestations coordonnées pour vos événements privés et professionnels.",
    items: [
      ["Traiteur", "Prestations culinaires pour vos événements.", CheckCircle2],
      ["Décoration & sonorisation", "Mise en scène et ambiance de vos événements.", CheckCircle2],
      ["Wedding planning", "Organisation et coordination de mariages.", CheckCircle2]
    ]
  },
  {
    title: "Conseil & Services",
    intro: "Des services complémentaires pour accompagner les organisations au quotidien.",
    items: [
      ["Audit & contrôle de gestion", "Analyse et accompagnement des activités.", CheckCircle2],
      ["Nettoyage & entretien", "Prestations pour bureaux, bâtiments, concessions et logements.", CheckCircle2],
      ["Fournitures & mobilier", "Mobilier, matériel informatique et fournitures.", CheckCircle2],
      ["Services aux entreprises", "Prestations complémentaires adaptées aux besoins.", CheckCircle2]
    ]
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <SiteHeader />
      <section className="bg-[#10111a] px-6 pb-24 pt-28 text-white lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">\n          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-white"><ArrowLeft size={16} /> Retour à l’accueil</Link>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#16a8d8]">Nos solutions</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Une offre structurée autour de vos projets.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Cinq univers complémentaires, avec un cœur d’expertise consacré aux technologies et infrastructures.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-6 px-6 py-16 lg:px-10 lg:py-24">
        {groups.map((group, index) => (
          <article key={group.title} className={`rounded-[2rem] p-7 sm:p-10 ${index === 0 ? "bg-white ring-1 ring-black/10" : "bg-[#ececea]"}`}>
            <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-[#d51b8a]">0{index + 1}</p>
                <Link href={`/solutions/${["tech","digital","communication","evenementiel","conseil-services"][index]}`} className="group inline-flex items-center gap-2"><h2 className="mt-4 text-3xl font-black">{group.title}</h2><ArrowRight size={18} className="mt-4 transition group-hover:translate-x-1"/></Link>
                <p className="mt-4 leading-7 text-black/55">{group.intro}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map(([title, text, Icon]) => {
                  const ServiceIcon = Icon as typeof CheckCircle2;
                  return <div key={title as string} className="rounded-2xl bg-white p-5">
                    <ServiceIcon size={21} className="text-[#d51b8a]" />
                    <h3 className="mt-7 font-black">{title as string}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">{text as string}</p>
                  </div>;
                })}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
