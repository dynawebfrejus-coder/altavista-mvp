export default function MemberProfilePage({ params }: { params: { memberId: string } }) {
  return <h1>Profil membre : {params.memberId}</h1>;
}
