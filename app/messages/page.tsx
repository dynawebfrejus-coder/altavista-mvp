"use client";

import React from "react";

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <header className="px-4 pt-10 pb-4">
        <h1 className="text-2xl font-semibold">Messagerie</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Messages uniquement entre contacts validés, après rencontre ou
          mise en relation acceptée.
        </p>
      </header>

      <section className="px-4 space-y-3">
        <div className="rounded-2xl bg-zinc-900 px-4 py-3 flex justify-between items-center">
          <div>
            <p className="font-medium">Sofia</p>
            <p className="text-xs text-zinc-400">
              Afterwork entrepreneurs – Barcelone
            </p>
          </div>
          <span className="text-xs text-zinc-500">Hier</span>
        </div>

        <div className="rounded-2xl bg-zinc-900 px-4 py-3 flex justify-between items-center">
          <div>
            <p className="font-medium">Alex</p>
            <p className="text-xs text-zinc-400">
              Atelier solopreneurs – Lisbonne
            </p>
          </div>
          <span className="text-xs text-zinc-500">Il y a 3 jours</span>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          Dans le MVP, la messagerie est limitée aux contacts rencontrés ou
          validés. Aucun message froid n&apos;est possible.
        </p>
      </section>
    </main>
  );
}
