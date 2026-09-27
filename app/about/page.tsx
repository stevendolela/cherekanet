import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#10111a] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white"><ArrowLeft size={16}/> Retour</Link>
        <div className="mt-20 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#16a8d8]">À propos</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">Un groupe. Plusieurs expertises.</h1>
          <p className="mt-8 text-xl leading-9 text-white/60">CherekaNet Services développe des solutions de services et d’infrastructures en France et en RDC, avec une expertise technique renforcée par son partenariat avec KingTech Energies.</p>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {["Une présence France · RDC", "Des expertises complémentaires", "Une approche orientée projet", "Un accompagnement de l’étude à la réalisation"].map((x) => (
            <div key={x} className="flex gap-4 rounded-2xl border border-white/10 p-6"><CheckCircle2 className="shrink-0 text-[#16a8d8]"/><span className="font-bold">{x}</span></div>
          ))}
        </div>
      </div>
    </main>
  );
}
