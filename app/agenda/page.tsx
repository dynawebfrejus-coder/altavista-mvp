import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-5 pb-24">
      <header className="mb-5">
        <h1 className="text-2xl font-bold">Agenda des événements</h1>
        <p className="text-sm text-gray-500 mt-1">
          Rencontres locales, en petit comité, sans démarchage massif.
        </p>
      </header>

      <div className="space-y-4">
        {fakeEvents.map((event) => (
          <Link key={event.id} href={`/event/${event.id}`}>
            <article className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm cursor-pointer hover:shadow-md transition">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-semibold">{event.title}</h2>
                <span className="text-[11px] px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                  {event.type}
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                📅 {event.date} • 📍 {event.city}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                👥 Capacité : {event.capacity}
              </p>
              <p className="mt-2 text-xs text-gray-700">{event.languages}</p>

              <button className="mt-3 w-full rounded-full bg-blue-600 text-white py-2 text-xs font-semibold hover:bg-blue-700 transition-colors">
                Je participe
              </button>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
