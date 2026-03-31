"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({ title, content }),
  });

  router.push("/");
  router.refresh(); 
};

  return (
    <div className="container">
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit" className="btn">
          ➕ Add Post
        </button>
      </form>

      <Link href="/" className="back-btn">
        ⬅ Back
      </Link>
    </div>
  );
}