import { db } from "@/utils/dbConn";
import Image from "next/image";

// I'm using the home page as the feed/posts page for the purposes of this demo
export default async function Home() {
  const posts =
    // We want the relevant user info to be associated with the post through a JOIN so that we can access it from the same object
    (
      await db.query(
        "SELECT posts.*, users.id, users.username FROM posts JOIN users ON posts.user_id = users.id"
      )
    ).rows;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="mb-5">
          <p>
            {post.username} | {post.created_at.toLocaleDateString("en-gb")}
          </p>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
