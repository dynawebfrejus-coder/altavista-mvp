import Image from "next/image";

const fakeEvent = {
  id: "afterwork-bcn",
  title: "Afterwork entrepreneurs",
  date: "Jeudi 18:30",
  city: "Barcelone",
  type: "Afterwork",
  capacity: "12 / 20",
  languages: "🇫🇷 🇬🇧",
  cover:
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200",
  description:
    "Un moment convivial entre entrepreneurs, freelances et créateurs. L’objectif : échanger librement, faire connaissance et identifier des opportunités de collaboration.",
  participants: ["Sofia", "Alex", "Maria", "Thomas", "Elena"],
};

export default function EventPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* IMAGE BANNIÈRE */}
      <div className="relative w-full h-56">
        <Image
          src={fakeEvent.cover}
          alt={fakeEvent.title}
          fill
          className="object-cover"
        />
      </div>

      <section className="px-5 space-y-6 max-w-md mx-auto mt-4">
        {/* EN-TÊTE */}
        <header className="space-y-1">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-[11px]">
            {fakeEvent.type}
          </span>
          <h1 className="text-2xl font-bold">{fakeEvent.title}</h1>

          <p className="text-sm text-gray-600">
            📅 {fakeEvent.date}  
            <br />
            📍 {fakeEvent.city}
          </p>

          <p className="text-xs text-gray-500">
            👥 Capacité : {fakeEvent.capacity}
            <br />
            🗣️ Langues : {fakeEvent.languages}
          </p>
        </header>

        {/* DESCRIPTION */}
        <section className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm space-y-2">
          <h2 className="text-sm font-semibold">À propos de cet événement</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {fakeEvent.description}
          </p>
        </section>

        {/* PARTICIPANTS */}
        <section className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-2">Participants ({fakeEvent.participants.length})</h2>

          <div className="flex flex-wrap gap-2">
            {fakeEvent.participants.map((name) => (
              <span
                key={name}
                className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs"
              >
                {name}
              </span>
            ))}
          </div>

          <p className="text-[11px] text-gray-500 mt-2">
            Dans la V1 : liste réelle des inscrits, avec photo & intentions.
          </p>
        </section>

        {/* BOUTON PARTICIPER */}
        <button className="w-full rounded-full bg-blue-600 text-white py-3 text-sm font-semibold hover:bg-blue-700 shadow-sm">
          Je participe
        </button>

        {/* LIEN MATCH (futur) */}
        <p className="text-center text-xs text-gray-500 mt-2">
          Dans la V1 : proposition automatique de rencontres pertinentes via IA.
        </p>
      </section>
    </main>
  );
}
