import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#10111a] px-6 pb-10 pt-32 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white"><ArrowLeft size={16}/> Retour</Link>
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-[#16a8d8]">Contact</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">Parlons de votre projet.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Présentez-nous votre besoin. Nous vous orienterons vers la solution et l’équipe adaptées.</p>
          </div>
          <div className="space-y-4">
            <ContactForm />
            <a href="mailto:info@cherekane.net" className="flex items-center gap-5 rounded-2xl border border-white/10 p-6 hover:bg-white/5"><Mail className="text-[#16a8d8]"/><div><p className="text-xs uppercase tracking-widest text-white/40">Email</p><p className="mt-1 font-bold">info@cherekane.net</p></div></a>
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 p-6"><MapPin className="text-[#16a8d8]"/><div><p className="text-xs uppercase tracking-widest text-white/40">France</p><p className="mt-1 font-bold">Viry-Châtillon</p></div></div>
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 p-6"><MapPin className="text-[#16a8d8]"/><div><p className="text-xs uppercase tracking-widest text-white/40">RDC</p><p className="mt-1 font-bold">Kinshasa</p></div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
