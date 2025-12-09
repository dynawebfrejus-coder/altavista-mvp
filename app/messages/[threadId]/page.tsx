export default function MessageThreadPage({ params }: { params: { threadId: string } }) {
  return <h1>Conversation : {params.threadId}</h1>;
}
