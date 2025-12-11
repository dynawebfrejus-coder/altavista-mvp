import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-5 pt-10 pb-24 font-sans">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Mon profil Altavista</h1>
        <p className="text-sm text-gray-600">
          Ces informations restent légères et modifiables à tout moment.
        </p>
      </header>

      <div className="max-w-md space-y-6">

        {/* Bloc identité */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold mb-2 text-gray-800">Identité</h2>
          <p className="text-sm text-gray-900">Samuel Deguin</p>
          <p className="text-xs text-gray-600">
            Dirigeant • Tethys Investments
          </p>
          <p className="mt-2 text-xs text-gray-600 leading-relaxed">
            Ville actuelle : Barcelone
            <br />
            Pays d’origine : France
          </p>
        </section>

        {/* BOUTON QR CODE */}
        <Link href="/qr">
          <button
            className="w-full rounded-full bg-blue-600 text-white py-2 text-sm font-semibold hover:bg-blue-700 transition"
          >
            Afficher mon QR code
          </button>
        </Link>

        {/* Langues & intentions */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
          <h2 className="text-sm font-semibold mb-2 text-gray-800">
            Langues & intentions
          </h2>

          <p className="text-xs text-gray-600 mb-1">Langues parlées</p>
          <div className="flex flex-wrap gap-2 text-xs mb-3">
            <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1">🇫🇷</span>
            <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1">🇬🇧</span>
          </div>

          <p className="text-xs text-gray-600 mb-1">Intentions principales</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Trouver des partenaires", "Apprendre / s’inspirer", "Réseau local"].map((i) => (
              <span
                key={i}
                className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px]"
              >
                {i}
              </span>
            ))}
          </div>
        </section>

        {/* Préférences de contact */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm space-y-2">
          <h2 className="text-sm font-semibold text-gray-800">
            Préférences de contact
          </h2>
          <p className="text-xs text-gray-600">
            Altavista bloque automatiquement le démarchage massif. Vous pouvez
            choisir le niveau d’ouverture de votre profil.
          </p>
          <ul className="text-xs text-gray-700 list-disc ml-4 space-y-1">
            <li>Pas de messages froids</li>
            <li>Uniquement après rencontre ou demande acceptée</li>
            <li>Signalement possible en un clic</li>
          </ul>
        </section>

        {/* RGPD */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 text-xs shadow-sm space-y-2">
          <h2 className="text-sm font-semibold text-gray-800">
            Données & confidentialité
          </h2>
          <p className="text-gray-600">
            Hébergement en Europe, aucune revente de données, droit à l’oubli à
            tout moment.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <button className="rounded-full border border-gray-300 py-2 text-xs font-medium text-gray-800 hover:bg-gray-100 transition">
              Télécharger mes données
            </button>
            <button className="rounded-full border border-red-500 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition">
              Supprimer mon compte
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
