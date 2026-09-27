import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const categories = [
  ["Tech", "Fibre, réseaux, sécurité, domotique, IRVE et infrastructures."],
  ["Digital", "Sites, applications et outils numériques."],
  ["Communication", "Supports, contenus et présence digitale."],
  ["Événementiel", "Événements privés et professionnels."]
];

export default function RealizationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
            <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-[#d51b8a]">Réalisations</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Le projet comme preuve.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">Cette section est prête à accueillir les réalisations réelles de CherekaNet et de ses équipes.</p>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {categories.map(([title, text], i) => (
            <article key={title} className="group min-h-72 rounded-[2rem] bg-white p-7 ring-1 ring-black/5">
              <span className="text-xs font-black text-[#d51b8a]">0{i + 1}</span>
              <div className="flex h-full flex-col justify-end">
                <h2 className="text-3xl font-black">{title}</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-black/55">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Voir la catégorie <ArrowUpRight size={16}/></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
