import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-zinc-50 px-6">
      <div className="max-w-sm w-full space-y-10">
        {/* Logo / titre */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Altavista
          </h1>
          <p className="text-sm text-zinc-400">
            Des rencontres pro, locales, choisies.  
            Sans démarchage agressif.
          </p>
        </div>

        {/* Bouton LinkedIn (mock) */}
        <div className="space-y-3">
          <button
            className="w-full flex items-center justify-center gap-2 rounded-full bg-sky-600 hover:bg-sky-500 transition-colors py-3 text-sm font-medium"
          >
            <span className="text-lg">in</span>
            <span>Se connecter avec LinkedIn</span>
          </button>
          <p className="text-xs text-zinc-500 text-center">
            La connexion via LinkedIn permet de garantir des profils réels et de qualité.
          </p>
        </div>

        {/* Lien temporaire pour la démo */}
        <div className="text-center">
          <Link
            href="/agenda"
            className="text-xs text-zinc-500 underline hover:text-zinc-300"
          >
            Continuer la démo sans LinkedIn → Agenda
          </Link>
        </div>
      </div>
    </div>
  );
}
