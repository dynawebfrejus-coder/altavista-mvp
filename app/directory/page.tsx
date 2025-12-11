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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-5 pb-24">
      <header className="mb-5">
        <h1 className="text-2xl font-bold">Annuaire local</h1>
        <p className="text-sm text-gray-500">
          Des profils vérifiés, centrés sur l’échange humain — pas le spam.
        </p>
      </header>

      <div className="space-y-4">
        {fakeMembers.map((m) => (
          <article
            key={m.id}
            className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm"
          >
            {/* Nom + Rôle */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold text-gray-800">{m.name}</h2>
                <p className="text-xs text-gray-600">
                  {m.role} • {m.city}
                </p>
              </div>

              {/* Langues */}
              <div className="text-right text-xs text-gray-500">
                <p className="font-medium text-gray-600">Langues</p>
                <p className="text-base">{m.langs}</p>
              </div>
            </div>

            {/* Intentions */}
            <div className="mt-3 flex flex-wrap gap-1">
              {m.intentions.map((intent) => (
                <span
                  key={intent}
                  className="rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[11px]"
                >
                  {intent}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="mt-4 w-full rounded-full bg-blue-600 text-white py-2 text-xs font-semibold hover:bg-blue-700 transition-colors">
              Demander une mise en relation
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
