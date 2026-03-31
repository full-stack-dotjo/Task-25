# Full Blog Project with Next.js

## Project Explanation
This project is a full blog application built with **Next.js 16 (App Router)** using **Server-Side Rendering (SSR)**.  
It features dynamic routing, custom API routes, and a create post page.  
The blog allows users to:
- View all posts on the home page.
- Click "Read More" to see full post content.
- Navigate back to home from any post.
- (Bonus) Add new posts through a client-side form.

The data is stored in an **in-memory array**, so it resets when the server restarts.

---

## Screenshot
![Blog Screenshot](/images/Blog_Website.png)

---

## Features Implemented
- **Home Page (`/`)**: Displays all blog posts with title and short description using SSR.
- **Dynamic Post Page (`/posts/[id]`)**: Fetches a single post by ID and displays full content.
- **Create Post Page (`/create`)**: Client Component form to add new posts (bonus feature).
- **API Routes (`/api/posts`)**: 
  - `GET /api/posts` → returns all posts
  - `GET /api/posts/[id]` → returns single post
- **Styling**: Clean layout with cards and buttons, global CSS used.
- **Navigation**: Read More links and Back to Home buttons.

---

## Deployment Link
The project is deployed on Vercel:  
[🔗 Live Demo](https://your-vercel-link.vercel.app)
