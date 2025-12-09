const fakeContacts = [
  {
    id: "sofia",
    name: "Sofia",
    role: "Consultante marketing",
    context: "Afterwork entrepreneurs – Barcelone",
    date: "12/01/2026",
    tags: ["Partenaire potentiel", "À revoir"],
  },
  {
    id: "alex",
    name: "Alex",
    role: "Développeur SaaS",
    context: "Atelier solopreneurs – Lisbonne",
    date: "05/01/2026",
    tags: ["Tech", "Réseau"],
  },
];

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 px-4 pt-6 pb-20">
      <header className="mb-4">
        <h1 className="text-xl font-semibold">Mes rencontres</h1>
        <p className="text-xs text-zinc-400">
          Votre carnet relationnel : uniquement des personnes rencontrées
          physiquement ou validées.
        </p>
      </header>

      <div className="space-y-3">
        {fakeContacts.map((c) => (
          <article
            key={c.id}
            className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="font-medium">{c.name}</h2>
                <p className="text-xs text-zinc-400">{c.role}</p>
              </div>
              <p className="text-[11px] text-zinc-500 text-right">
                Rencontré le {c.date}
                <br />
                <span className="text-zinc-400">{c.context}</span>
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-1">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-full border border-zinc-600 py-2 text-xs font-medium hover:bg-zinc-800">
                Ouvrir la fiche
              </button>
              <button className="flex-1 rounded-full bg-zinc-100 py-2 text-xs font-medium text-black hover:bg-white">
                Envoyer un message
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
