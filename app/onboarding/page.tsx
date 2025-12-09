export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 px-4 pt-10 pb-20">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">Votre profil Altavista</h1>
        <p className="mt-1 text-xs text-zinc-400">
          Quelques informations légères pour vous proposer des rencontres
          vraiment utiles.
        </p>
      </header>

      <div className="space-y-6 max-w-md">
        {/* Ville actuelle */}
        <div className="space-y-2">
          <label className="text-xs text-zinc-300">Ville actuelle</label>
          <input
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
            placeholder="Ex : Barcelone, Paris, Lisbonne…"
          />
        </div>

        {/* Pays d'origine */}
        <div className="space-y-2">
          <label className="text-xs text-zinc-300">Pays d’origine</label>
          <input
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
            placeholder="Ex : France, Maroc, Brésil…"
          />
        </div>

        {/* Langues */}
        <div className="space-y-2">
          <label className="text-xs text-zinc-300">Langues parlées</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {["🇫🇷", "🇬🇧", "🇪🇸", "🇵🇹", "🇩🇪"].map((lng) => (
              <button
                key={lng}
                className="rounded-full border border-zinc-600 px-3 py-1 hover:bg-zinc-800"
              >
                {lng}
              </button>
            ))}
          </div>
        </div>

        {/* Intentions */}
        <div className="space-y-2">
          <label className="text-xs text-zinc-300">
            Vos intentions sur Altavista
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Trouver des partenaires",
              "Trouver des clients",
              "Apprendre / s’inspirer",
              "Réseau local",
              "Visibilité",
              "Intégration",
            ].map((intent) => (
              <button
                key={intent}
                className="rounded-full bg-zinc-900 border border-zinc-600 px-3 py-1 hover:bg-zinc-800 text-left"
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-4 w-full rounded-full bg-zinc-100 py-2 text-sm font-medium text-black hover:bg-white">
          Enregistrer et accéder à Altavista
        </button>

        <p className="text-[11px] text-zinc-500">
          Profil volontairement léger : pas de CV détaillé, pas de pitch
          agressif. Juste ce qu’il faut pour faciliter les rencontres utiles.
        </p>
      </div>
    </div>
  );
}
