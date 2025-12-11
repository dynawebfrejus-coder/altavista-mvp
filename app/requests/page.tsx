"use client";

import React from "react";

export default function RequestsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* Header */}
      <header className="px-5 pt-10 pb-4">
        <h1 className="text-2xl font-bold">
          Demandes de mise en relation
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Altavista filtre automatiquement les demandes pour éviter le démarchage agressif.
          Vous choisissez qui peut vous contacter.
        </p>
      </header>

      {/* Liste des demandes */}
      <section className="px-5 space-y-4">
        {/* Demande 1 */}
        <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-900">Thomas • CEO SaaS</p>
              <p className="text-xs text-gray-500">
                Paris • Français / Anglais
              </p>
            </div>
            <span className="text-xs text-gray-400">Il y a 2 h</span>
          </div>

          <div className="mt-2 text-xs text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Raison :</span>{" "}
              Partenariat potentiel.
            </p>
            <p>
              <span className="font-semibold">Il propose :</span>{" "}
              Échanger sur vos marchés respectifs.
            </p>
            <p>
              <span className="font-semibold">Il recherche :</span>{" "}
              Partenaires en Europe du Sud.
            </p>
          </div>

          <div className="mt-3 flex gap-2 text-sm">
            <button className="flex-1 rounded-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition">
              Accepter
            </button>
            <button className="flex-1 rounded-full border border-gray-300 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition">
              Refuser
            </button>
          </div>
        </div>

        {/* Demande 2 */}
        <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-900">Elena • Consultante</p>
              <p className="text-xs text-gray-500">
                Barcelone • Espagnol / Anglais
              </p>
            </div>
            <span className="text-xs text-gray-400">Hier</span>
          </div>

          <div className="mt-2 text-xs text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Raison :</span>{" "}
              Networking local.
            </p>
            <p>
              <span className="font-semibold">Elle propose :</span>{" "}
              Partager son réseau sur Barcelone.
            </p>
            <p>
              <span className="font-semibold">Elle recherche :</span>{" "}
              Contacts francophones installés sur place.
            </p>
          </div>

          <div className="mt-3 flex gap-2 text-sm">
            <button className="flex-1 rounded-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition">
              Accepter
            </button>
            <button className="flex-1 rounded-full border border-gray-300 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition">
              Refuser
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Dans la version finale, une couche <strong>“IA protectrice”</strong> pourra
          filtrer les demandes répétitives ou trop commerciales
          et les mettre en attente avant affichage.
        </p>
      </section>
    </main>
  );
}
