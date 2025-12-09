export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 px-4 pt-6 pb-20">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">Mon profil Altavista</h1>
        <p className="text-xs text-zinc-400">
          Ces informations restent légères et modifiables à tout moment.
        </p>
      </header>

      <div className="max-w-md space-y-6">
        {/* Bloc identité */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm">
          <h2 className="text-sm font-medium mb-2">Identité</h2>
          <p className="text-sm">Samuel Deguin</p>
          <p className="text-xs text-zinc-400">Dirigeant • Tethys Investments</p>
          <p className="mt-2 text-xs text-zinc-400">
            Ville actuelle : Barcelone
            <br />
            Pays d’origine : France
          </p>
        </section>

        {/* Langues & intentions */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm">
          <h2 className="text-sm font-medium mb-2">Langues & intentions</h2>
          <p className="text-xs text-zinc-400 mb-1">Langues parlées</p>
          <div className="flex flex-wrap gap-2 text-xs mb-3">
            <span className="rounded-full bg-zinc-800 px-3 py-1">🇫🇷</span>
            <span className="rounded-full bg-zinc-800 px-3 py-1">🇬🇧</span>
          </div>

          <p className="text-xs text-zinc-400 mb-1">Intentions principales</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Trouver des partenaires",
              "Apprendre / s’inspirer",
              "Réseau local",
            ].map((i) => (
              <span
                key={i}
                className="rounded-full bg-zinc-800 px-3 py-1 text-[11px]"
              >
                {i}
              </span>
            ))}
          </div>
        </section>

        {/* Préférences de contact */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm space-y-2">
          <h2 className="text-sm font-medium">Préférences de contact</h2>
          <p className="text-xs text-zinc-400">
            Altavista bloque automatiquement le démarchage massif. Vous pouvez
            choisir le niveau d’ouverture de votre profil.
          </p>
          <ul className="text-xs text-zinc-300 list-disc ml-4 space-y-1">
            <li>Pas de messages froids</li>
            <li>Uniquement après rencontre ou demande acceptée</li>
            <li>Signalement possible en un clic</li>
          </ul>
        </section>

        {/* RGPD */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-xs space-y-2">
          <h2 className="text-sm font-medium">Données & confidentialité</h2>
          <p className="text-zinc-400">
            Hébergement en Europe, aucune revente de données, droit à l’oubli à
            tout moment.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <button className="rounded-full border border-zinc-600 py-2 text-xs hover:bg-zinc-800">
              Télécharger mes données
            </button>
            <button className="rounded-full border border-red-600 py-2 text-xs text-red-400 hover:bg-red-900/40">
              Supprimer mon compte
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
