import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#10111a] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-[#16a8d8]">404</p>
        <h1 className="mt-4 text-5xl font-black">Page introuvable.</h1>
        <p className="mt-5 text-white/60">Cette page n’existe pas ou a été déplacée.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#d51b8a] px-6 py-3 font-bold">Retour à l’accueil</Link>
      </div>
    </main>
  );
}
