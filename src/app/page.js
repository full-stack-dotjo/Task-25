import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className="container">
      <h1 className="title">📚 Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 80)}...</p>

          <Link href={`/posts/${post.id}`} className="btn">
            Read More →
          </Link>
        </div>
      ))}

      <Link href="/create" className="btn">
        ➕ Create Post
      </Link>
    </div>
  );
};

export default HomePage;
