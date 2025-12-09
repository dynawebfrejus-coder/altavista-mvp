const fakeEvents = [
  {
    id: "afterwork-bcn",
    title: "Afterwork entrepreneurs",
    date: "Jeudi 18:30",
    city: "Barcelone",
    type: "Afterwork",
    capacity: "12 / 20",
    languages: "Principalement en 🇫🇷, anglais accepté 🇬🇧",
  },
  {
    id: "dej-paris",
    title: "Déjeuner business",
    date: "Mardi 12:30",
    city: "Paris",
    type: "Déjeuner",
    capacity: "6 / 8",
    languages: "Bilingue 🇫🇷 / 🇬🇧",
  },
  {
    id: "atelier-lisbonne",
    title: "Atelier solopreneurs",
    date: "Samedi 10:00",
    city: "Lisbonne",
    type: "Atelier",
    capacity: "8 / 12",
    languages: "Principalement en 🇬🇧",
  },
];

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 px-4 pt-6 pb-20">
      <header className="mb-4">
        <h1 className="text-xl font-semibold">Agenda des événements</h1>
        <p className="text-xs text-zinc-400">
          Rencontres locales, en petit comité, sans démarchage massif.
        </p>
      </header>

      <div className="space-y-3">
        {fakeEvents.map((event) => (
          <article
            key={event.id}
            className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="font-medium">{event.title}</h2>
              <span className="text-[11px] text-zinc-400">{event.type}</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {event.date} • {event.city}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Capacité : {event.capacity}
            </p>
            <p className="mt-2 text-xs text-zinc-300">{event.languages}</p>

            <button className="mt-3 w-full rounded-full bg-zinc-100 text-black py-2 text-xs font-medium hover:bg-white transition-colors">
              Je participe
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
