import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-6 font-sans pb-24">
      <div className="max-w-sm w-full space-y-10">
        
        {/* Logo / titre */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600">
            Altavista
          </h1>
          <p className="text-sm text-gray-600">
            Des rencontres professionnelles, locales et choisies.<br />
            Sans démarchage agressif.
          </p>
        </div>

        {/* Bouton LinkedIn */}
        <div className="space-y-3">
          <button
            className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors py-3 text-sm font-semibold text-white shadow-sm"
          >
            <span className="text-lg font-bold">in</span>
            <span>Se connecter avec LinkedIn</span>
          </button>

          <p className="text-xs text-gray-500 text-center">
            La connexion LinkedIn garantit des profils authentiques et de qualité.
          </p>
        </div>

        {/* Lien temporaire pour la démo */}
        <div className="text-center">
          <Link
            href="/agenda"
            className="text-xs text-gray-500 underline hover:text-gray-700 transition-colors"
          >
            Continuer la démo sans LinkedIn → Agenda
          </Link>
        </div>
      </div>
    </div>
  );
}
