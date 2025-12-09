"use client";

import React from "react";

export default function RequestsPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <header className="px-4 pt-10 pb-4">
        <h1 className="text-2xl font-semibold">Demandes de mise en relation</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Altavista filtre automatiquement les demandes pour éviter le
          démarchage agressif. Vous choisissez qui peut vous contacter.
        </p>
      </header>

      <section className="px-4 space-y-4">
        {/* Demande 1 */}
        <div className="rounded-2xl bg-zinc-900 p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Thomas • CEO SaaS</p>
              <p className="text-xs text-zinc-400">Paris • Français / Anglais</p>
            </div>
            <span className="text-xs text-zinc-500">Il y a 2 h</span>
          </div>

          <div className="mt-2 text-xs text-zinc-300 space-y-1">
            <p>
              <span className="font-semibold">Raison :</span> Partenariat
              potentiel.
            </p>
            <p>
              <span className="font-semibold">Il propose :</span> Échanger sur
              vos marchés respectifs.
            </p>
            <p>
              <span className="font-semibold">Il recherche :</span> Partenaires
              en Europe du Sud.
            </p>
          </div>

          <div className="mt-3 flex gap-2 text-sm">
            <button className="flex-1 rounded-full bg-white text-black py-2">
              Accepter
            </button>
            <button className="flex-1 rounded-full border border-zinc-600 py-2">
              Refuser
            </button>
          </div>
        </div>

        {/* Demande 2 */}
        <div className="rounded-2xl bg-zinc-900 p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Elena • Consultante</p>
              <p className="text-xs text-zinc-400">
                Barcelone • Espagnol / Anglais
              </p>
            </div>
            <span className="text-xs text-zinc-500">Hier</span>
          </div>

          <div className="mt-2 text-xs text-zinc-300 space-y-1">
            <p>
              <span className="font-semibold">Raison :</span> Networking local.
            </p>
            <p>
              <span className="font-semibold">Elle propose :</span> Partager son
              réseau sur Barcelone.
            </p>
            <p>
              <span className="font-semibold">Elle recherche :</span> Contacts
              francophones installés sur place.
            </p>
          </div>

          <div className="mt-3 flex gap-2 text-sm">
            <button className="flex-1 rounded-full bg-white text-black py-2">
              Accepter
            </button>
            <button className="flex-1 rounded-full border border-zinc-600 py-2">
              Refuser
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Dans la version finale, une couche &quot;IA protectrice&quot; pourra
          filtrer les demandes répétitives ou commerciales et les mettre en
          attente avant affichage.
        </p>
      </section>
    </main>
  );
}
