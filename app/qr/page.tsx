import Link from "next/link";

const fakeProfile = {
  name: "Samuel Deguin",
  role: "Dirigeant • Tethys Investments",
  city: "Barcelone",
  languages: "🇫🇷 🇬🇧",
  qrUrl: "https://altavista.app/pro/samuel", // URL représentée par le QR
};

export default function QrPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* Header */}
      <header className="px-5 pt-8 pb-4 space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Carte de visite Altavista
        </p>
        <h1 className="text-xl font-semibold">Votre QR code personnel</h1>
        <p className="text-xs text-gray-500">
          À faire scanner pendant une rencontre pour créer la connexion
          immédiatement, sans carte de visite.
        </p>
      </header>

      <section className="px-5 space-y-6 max-w-md">
        {/* Bloc profil résumé */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">{fakeProfile.name}</p>
            <p className="text-xs text-gray-500">{fakeProfile.role}</p>
            <p className="mt-1 text-[11px] text-gray-400">
              📍 {fakeProfile.city} • {fakeProfile.languages}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
            {fakeProfile.name[0]}
          </div>
        </div>

        {/* Zone QR code (maquette) */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-5 text-center space-y-4">
          <p className="text-sm font-semibold">
            À faire scanner par la personne en face de vous
          </p>

          {/* Ici plus tard : vrai composant QR code */}
          <div className="mx-auto w-52 h-52 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center">
            <span className="text-[11px] text-gray-500 px-6">
              Zone QR code  
              (dans la V1 : vrai QR généré automatiquement)
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">
              Quand quelqu’un scanne ce QR code :
            </p>
            <ul className="text-xs text-gray-500 space-y-1 text-left inline-block">
              <li>• On lui propose de télécharger l’app Altavista</li>
              <li>• Ton profil est pré-rempli via LinkedIn</li>
              <li>• La rencontre est enregistrée dans ton agenda Altavista</li>
            </ul>
          </div>
        </div>

        {/* Lien & actions */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-4 space-y-3 text-xs">
          <div>
            <p className="font-semibold text-sm">Lien de partage</p>
            <p className="mt-1 text-gray-500 break-all">
              {fakeProfile.qrUrl}
            </p>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 rounded-full bg-blue-600 text-white py-2 text-xs font-semibold hover:bg-blue-700">
              Copier le lien
            </button>
            <button className="flex-1 rounded-full border border-gray-300 py-2 text-xs hover:bg-gray-50">
              Télécharger le QR
            </button>
          </div>

          <p className="text-[11px] text-gray-400">
            Dans la version finale, le QR code et le lien seront uniques pour
            chaque membre et pourront être ajoutés à une signature mail ou une
            carte de visite.
          </p>
        </div>

        {/* Retour vers l’app */}
        <div className="text-center">
          <Link
            href="/agenda"
            className="text-xs text-blue-600 underline hover:text-blue-700"
          >
            ← Retour à l’agenda
          </Link>
        </div>
      </section>
    </main>
  );
}
