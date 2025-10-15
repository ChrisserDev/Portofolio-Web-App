type PostPageProps = {
  params: {
    topic: string;
    topicTitle: string;
  };
};

export default function BlogPostsPage({ params }: PostPageProps) {
  const topicName = decodeURIComponent(params.topic).replace(/-/g, ' ');
  const postTitle = decodeURIComponent(params.topicTitle).replace(/-/g, ' ');

  return (
    <article className="blog-post-page">
      <header>
        <p className="blog-breadcrumb">{topicName} / {postTitle}</p>
        <h1>{postTitle}</h1>
      </header>
      <p>This is a placeholder for the post content under &quot;{topicName}&quot;.</p>
    </article>
  );
}
