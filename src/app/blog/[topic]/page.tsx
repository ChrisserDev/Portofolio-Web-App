
export default function BlogTopicsPage({ params }: { params: { topic: string } }) {
  const title = decodeURIComponent(params.topic).replace(/-/g, ' ');
  return (
    <main className="blog-topic-page">
      <h1>Topic: {title}</h1>
      <p>Posts for &quot;{title}&quot; will appear here.</p>
    </main>
  );
}
