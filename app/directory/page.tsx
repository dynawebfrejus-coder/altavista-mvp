const fakeMembers = [
  {
    id: "sofia",
    name: "Sofia",
    role: "Consultante marketing",
    city: "Barcelone",
    langs: "🇫🇷 🇬🇧",
    intentions: ["Partenaires", "Réseau local"],
  },
  {
    id: "alex",
    name: "Alex",
    role: "Développeur SaaS",
    city: "Lisbonne",
    langs: "🇬🇧 🇵🇹",
    intentions: ["Apprendre", "Visibilité"],
  },
  {
    id: "maria",
    name: "Maria",
    role: "Coach carrière",
    city: "Paris",
    langs: "🇫🇷 🇪🇸",
    intentions: ["Clients", "Réseau local"],
  },
];

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 px-4 pt-6 pb-20">
      <header className="mb-4">
        <h1 className="text-xl font-semibold">Annuaire local</h1>
        <p className="text-xs text-zinc-400">
          Des profils vérifiés, centrés sur l’échange humain, pas le spam.
        </p>
      </header>

      <div className="space-y-3">
        {fakeMembers.map((m) => (
          <article
            key={m.id}
            className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="font-medium">{m.name}</h2>
                <p className="text-xs text-zinc-400">
                  {m.role} • {m.city}
                </p>
              </div>
              <div className="text-right text-xs text-zinc-400">
                <p>Langues</p>
                <p>{m.langs}</p>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-1">
              {m.intentions.map((intent) => (
                <span
                  key={intent}
                  className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-300"
                >
                  {intent}
                </span>
              ))}
            </div>

            <button className="mt-3 w-full rounded-full border border-zinc-600 py-2 text-xs font-medium hover:bg-zinc-800 transition-colors">
              Demander une mise en relation
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
