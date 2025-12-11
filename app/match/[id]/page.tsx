"use client";

import React from "react";
import { useParams } from "next/navigation";

const fakeMatches: any = {
  sofia: {
    name: "Sofia",
    role: "Consultante marketing",
    eventTitle: "Afterwork entrepreneurs",
    eventCity: "Barcelone",
    eventDate: "Jeudi 18:30",
    note: "Vous vous êtes rencontrés à l’afterwork entrepreneurs à Barcelone.",
  },
  alex: {
    name: "Alex",
    role: "Développeur SaaS",
    eventTitle: "Atelier solopreneurs",
    eventCity: "Lisbonne",
    eventDate: "Samedi 10:00",
    note: "Vous vous êtes rencontrés à l’atelier solopreneurs à Lisbonne.",
  },
};

const fakeSlots = [
  "Mardi 9:00 – Café",
  "Jeudi 18:30 – Afterwork",
  "Vendredi 12:30 – Déjeuner",
];

export default function MatchPage() {
  const { id } = useParams();
  const match = fakeMatches[id as string] ?? fakeMatches["sofia"]; // fallback

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* Header */}
      <header className="px-5 pt-8 pb-4 space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Confirmation de rencontre
        </p>
        <h1 className="text-xl font-semibold">
          Proposer un rendez-vous à {match.name}
        </h1>
        <p className="text-xs text-gray-500">{match.note}</p>
      </header>

      <section className="px-5 space-y-6 max-w-md">
        {/* Bloc personne */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">{match.name}</p>
            <p className="text-xs text-gray-500">{match.role}</p>
            <p className="mt-1 text-[11px] text-gray-400">
              {match.eventTitle} • {match.eventCity} • {match.eventDate}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs">
            {match.name[0]}
          </div>
        </div>

        {/* Choix */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-4 space-y-3">
          <h2 className="text-sm font-semibold">
            Est-ce que tu veux prolonger l’échange ?
          </h2>

          <p className="text-xs text-gray-500">
            Si vous confirmez tous les deux dans les prochains jours, un
            « match » sera créé et une messagerie privée s’ouvrira.
          </p>

          <div className="flex gap-2 text-xs">
            <button className="flex-1 rounded-full border border-gray-300 py-2">
              À voir plus tard
            </button>
            <button className="flex-1 rounded-full bg-blue-600 text-white py-2 font-medium">
              Oui, je veux le revoir
            </button>
          </div>

          <p className="text-[11px] text-gray-400">
            Vous avez quelques jours après l’événement pour confirmer ou non ce
            contact.
          </p>
        </div>

        {/* Créneaux */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-4 space-y-3">
          <h2 className="text-sm font-semibold">
            Proposer 2–3 créneaux de rendez-vous
          </h2>
          <p className="text-xs text-gray-500">
            {match.name} pourra en modifier un ou en proposer un autre.
          </p>

          <div className="space-y-2">
            {fakeSlots.map((slot) => (
              <button
                key={slot}
                className="w-full rounded-xl border border-gray-300 py-2 px-3 text-xs text-left hover:bg-gray-50"
              >
                {slot}
              </button>
            ))}
          </div>

          <button className="mt-3 w-full rounded-full bg-blue-600 text-white py-2.5 text-sm font-semibold hover:bg-blue-700">
            Envoyer la proposition de rendez-vous
          </button>
        </div>

        <p className="text-[11px] text-gray-400">
          Dans la version finale, ces créneaux seront synchronisés avec un vrai
          agenda et {match.name} recevra une notification pour accepter ou
          ajuster le rendez-vous.
        </p>
      </section>
    </main>
  );
}
