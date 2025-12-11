export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-5 pt-10 pb-24 font-sans">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Votre profil Altavista</h1>
        <p className="mt-1 text-sm text-gray-600">
          Quelques informations légères pour vous proposer des rencontres vraiment utiles.
        </p>
      </header>

      <div className="space-y-6 max-w-md">
        {/* Ville actuelle */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">Ville actuelle</label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            placeholder="Ex : Barcelone, Paris, Lisbonne…"
          />
        </div>

        {/* Pays d'origine */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">Pays d’origine</label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            placeholder="Ex : France, Maroc, Brésil…"
          />
        </div>

        {/* Langues parlées */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">Langues parlées</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {["🇫🇷", "🇬🇧", "🇪🇸", "🇵🇹", "🇩🇪"].map((lng) => (
              <button
                key={lng}
                className="rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-100 transition"
              >
                {lng}
              </button>
            ))}
          </div>
        </div>

        {/* Intentions */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">
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
                className="rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-100 transition text-left"
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton validation */}
        <button className="mt-4 w-full rounded-full bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700 transition shadow-sm">
          Enregistrer et accéder à Altavista
        </button>

        <p className="text-[11px] text-gray-500 leading-relaxed">
          Profil volontairement léger : pas de CV complet, pas de pitch agressif.  
          Juste l’essentiel pour faciliter les rencontres professionnelles utiles.
        </p>
      </div>
    </div>
  );
}
