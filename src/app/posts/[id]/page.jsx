import Link from "next/link";

// ✅ Metadata ديناميك
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post = await res.json();

  return {
    title: post.title || "Post",
    description: post.content || "Post details",
  };
};

// ✅ Page (Arrow Function)
const PostPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  const post = await res.json();

  if (!post || post.message) {
    return <h2 className="title">Post not found</h2>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p className="content">{post.content}</p>

      <Link href="/" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default PostPage;