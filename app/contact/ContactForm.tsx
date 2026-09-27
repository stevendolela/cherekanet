"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Projet CherekaNet — ${data.get("type") || "Demande"}`;
    const body = [
      `Nom : ${data.get("name") || ""}`,
      `Entreprise : ${data.get("company") || ""}`,
      `Email : ${data.get("email") || ""}`,
      `Téléphone : ${data.get("phone") || ""}`,
      `Type de projet : ${data.get("type") || ""}`,
      "",
      "Message :",
      data.get("message") || ""
    ].join("\n");

    window.location.href = `mailto:info@cherekane.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-black shadow-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Nom *<input required name="name" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#d51b8a]" /></label>
        <label className="text-sm font-semibold">Entreprise<input name="company" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#d51b8a]" /></label>
        <label className="text-sm font-semibold">Email *<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#d51b8a]" /></label>
        <label className="text-sm font-semibold">Téléphone<input name="phone" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#d51b8a]" /></label>
      </div>
      <label className="mt-5 block text-sm font-semibold">Type de projet
        <select name="type" defaultValue="" className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#d51b8a]">
          <option value="">Sélectionner</option>
          <option>Tech & Infrastructures</option>
          <option>Solutions digitales</option>
          <option>Communication</option>
          <option>Événementiel</option>
          <option>Conseil & Services</option>
        </select>
      </label>
      <label className="mt-5 block text-sm font-semibold">Votre besoin *
        <textarea required name="message" rows={6} className="mt-2 w-full resize-y rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#d51b8a]" />
      </label>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#10111a] px-6 py-4 font-bold text-white transition hover:bg-[#d51b8a]">Préparer mon message</button>
      {sent && <p className="mt-4 text-sm text-black/55">Votre messagerie va s’ouvrir avec le message prérempli. Vous pourrez vérifier puis envoyer la demande.</p>}
    </form>
  );
}
