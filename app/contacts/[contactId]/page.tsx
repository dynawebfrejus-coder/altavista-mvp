export default function ContactDetailPage({ params }: { params: { contactId: string } }) {
  return <h1>Détail de la rencontre : {params.contactId}</h1>;
}
