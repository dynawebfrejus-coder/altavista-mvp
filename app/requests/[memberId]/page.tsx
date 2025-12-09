export default function RequestPage({ params }: { params: { memberId: string } }) {
  return <h1>Demande de mise en relation avec : {params.memberId}</h1>;
}
