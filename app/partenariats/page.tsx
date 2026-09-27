import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { ArrowRight, Handshake, Network } from "lucide-react";

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10 lg:pb-28">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-[#d51b8a]">Partenariats</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Des expertises complémentaires.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
          CherekaNet s’appuie sur des partenariats et des expertises complémentaires pour accompagner ses clients sur des projets qui nécessitent plusieurs compétences.
        </p>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-ink p-8 text-white lg:p-10">
            <Handshake size={28} className="text-electric" />
            <p className="mt-12 text-xs font-black uppercase tracking-[.2em] text-white/40">Partenaire technique</p>
            <h2 className="mt-3 text-3xl font-black">KingTech Energies</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              Un partenariat présenté par CherekaNet pour renforcer son expertise sur les infrastructures techniques, notamment la fibre optique, les systèmes de sécurité, la domotique et les projets d’infrastructure.
            </p>
          </article>

          <article className="rounded-[2rem] bg-white p-8 ring-1 ring-black/5 lg:p-10">
            <Network size={28} className="text-[#16a8d8]" />
            <p className="mt-12 text-xs font-black uppercase tracking-[.2em] text-black/35">Partenaire conseil & digital</p>
            <h2 className="mt-3 text-3xl font-black">Taaji Consulting</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/55">
              Un partenaire stratégique pour accompagner CherekaNet dans ses projets de transformation digitale, de conseil et de développement de solutions numériques.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#ececea] p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#d51b8a]">Vous souhaitez collaborer ?</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl">Parlons de votre projet ou de votre partenariat.</h2>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-bold text-white transition hover:scale-[1.02]">
            Nous contacter <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
