"use client";

import React from "react";

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* Header */}
      <header className="px-5 pt-10 pb-4">
        <h1 className="text-2xl font-bold">Messagerie</h1>
        <p className="mt-1 text-sm text-gray-600">
          Messages uniquement entre contacts validés, après rencontre ou mise en relation acceptée.
        </p>
      </header>

      {/* Liste des conversations */}
      <section className="px-5 space-y-3">
        <div className="rounded-2xl bg-white border border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
          <div>
            <p className="font-semibold text-gray-800">Sofia</p>
            <p className="text-xs text-gray-500">
              Afterwork entrepreneurs – Barcelone
            </p>
          </div>
          <span className="text-xs text-gray-400">Hier</span>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
          <div>
            <p className="font-semibold text-gray-800">Alex</p>
            <p className="text-xs text-gray-500">
              Atelier solopreneurs – Lisbonne
            </p>
          </div>
          <span className="text-xs text-gray-400">Il y a 3 jours</span>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Dans le MVP, la messagerie est limitée aux contacts rencontrés ou validés.
          Aucun message froid n&apos;est possible.
        </p>
      </section>
    </main>
  );
}
