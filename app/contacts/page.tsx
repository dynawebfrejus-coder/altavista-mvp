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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-5 pb-24">
      <header className="mb-5">
        <h1 className="text-2xl font-bold">Mes rencontres</h1>
        <p className="text-sm text-gray-500">
          Votre carnet relationnel : uniquement des personnes rencontrées
          physiquement ou validées.
        </p>
      </header>

      <div className="space-y-4">
        {fakeContacts.map((c) => (
          <article
            key={c.id}
            className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-semibold text-gray-800">{c.name}</h2>
                <p className="text-xs text-gray-600">{c.role}</p>
              </div>

              <p className="text-[11px] text-gray-500 text-right leading-tight">
                Rencontré le {c.date}
                <br />
                <span className="text-gray-400">{c.context}</span>
              </p>
            </div>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-full border border-gray-300 py-2 text-xs font-semibold hover:bg-gray-100">
                Ouvrir la fiche
              </button>

              <button className="flex-1 rounded-full bg-blue-600 text-white py-2 text-xs font-semibold hover:bg-blue-700">
                Envoyer un message
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
