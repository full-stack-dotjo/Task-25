import { NextResponse } from "next/server";

export let posts = [
 {
    id: 1,
    title: "About Me",
    content: "My name is Rahaf Hashim. I am passionate about coding and exploring new technologies."
  },
  {
    id: 2,
    title: "Education",
    content: "I graduated from Software Engineering, ranking first in my specialization with an Excellent grade."
  },
  {
    id: 3,
    title: "Hobbies",
    content: "I enjoy reading books, listening to music, and traveling to new places."
  },
  {
    id: 4,
    title: "Skills",
    content: "I have hands-on experience in web development using Next.js, React, and JavaScript."
  },
  {
    id: 5,
    title: "Future Goals",
    content: "I aim to become a full-stack developer and work on exciting and challenging projects."
  },
];

// ✅ GET
export const GET = async () => {
  return NextResponse.json(posts);
};

// ✅ POST
export const POST = async (req) => {
  const body = await req.json();

  if (!body.title || !body.content) {
    return NextResponse.json(
      { message: "Title and content are required" },
      { status: 400 }
    );
  }

  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
  };

  posts.push(newPost);

  return NextResponse.json(newPost, { status: 201 });
};