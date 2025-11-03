// /src/app/profile/page.js

import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default async function Profile() {
  const { userId } = await auth();
  //   If the foreign key is the SQL-generated id then we want to query the db to get that instead of the clerk id
  const activeId = await db.query(
    "SELECT user_id FROM m80_user_accounts WHERE clerk_id = $1",
    [userId]
  );

  const userInfo = await db.query(
    "SELECT * FROM m80_user_accounts WHERE user_id = $1",
    [activeID]
  );
  /* query to get all info on a specific user using either id or clerk_id*/

  const userPosts = await db.query(
    "SELECT * FROM m80_blog_posts WHERE user_id = $1",
    [activeID]
  );
  /* query to select all posts made by a specific user id */

  return (
    <div className="w-screen h-screen bg-gray-800 opacity-80">
      <NavBar />
      <div className="bg-blue-800 border-4 border-white rounded-xl p-4">
        <h2 className="text-white text-3xl font-bold m-4">
          User Profile for {userInfo.username}
        </h2>
        <p className="text-white text-3xl font-bold m-4">Bio: </p>
        <p className="text-white text-3xl font-bold m-4">{userInfo.bio}</p>
      </div>
      <div>
        <h4 className="bg-blue-800 border-4 border-white rounded-xl p-4 text-white text-3xl font-bold m-4">
          Your Posts
        </h4>
        <div className="container mx-auto p-4">
          <div className="bg-blue-800 border-4 border-white rounded-xl p-4">
            {/* // map through my posts. Each post will have a link to the route for that post to read more of it. */}
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="bg-blue-800 border-4 border-white rounded-xl p-8"
                >
                  <Link href={`/posts/${post.id}`}>
                    <h1 className="text-white text-3xl font-bold">
                      {post.title} <br />
                      ...By {post.username}
                    </h1>
                    <p className="text-white text-lg mt-2">{post.content}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
