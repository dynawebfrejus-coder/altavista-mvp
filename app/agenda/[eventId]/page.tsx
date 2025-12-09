export default function EventDetailPage({ params }: { params: { eventId: string } }) {
  return <h1>Détail de l'événement : {params.eventId}</h1>;
}
