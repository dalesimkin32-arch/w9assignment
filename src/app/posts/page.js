// /src/app/posts/page.js

import pg from "pg"; // import pg */
import Link from "next/link";
import { db } from "@/utils/dbConn.js"; // import db connection
import NavBar from "@/components/NavBar";

export default async function Posts({ searchParams }) {
  // This page should display all blog posts
  // async function
  // below done in /utils/utilities.js and imported above.
  // set up connection const db = new pg.Pool({connectionString: process.env.DB_CON})

  // fetch my posts
  const blogs = (await db.query("SELECT * FROM m80_blog_posts")).rows;

  let posts = blogs;

  console.log(posts);

  // ---- SORTING ---
  // my Posts() component will need to read the searchParams
  // read the search params by doing await searchParams()
  const pageSearchParams = await searchParams;
  // tell if sortBy is asc or desc
  // if sortBy is set to something:
  // sort array of posts using sort() + reverse() on the array.
  if (pageSearchParams.sortBy == "asc") {
    posts = blogs.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    ); //sort ascending text (may fail with numbers in string)
  }

  if (pageSearchParams.sortBy == "desc") {
    posts = blogs
      .sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))
      .reverse(); //sort descending (may fail with numbers in string)
  }

  return (
    <div className="w-screen h-screen bg-gray-800 opacity-80">
      <NavBar />
      <div className="bg-blue-800 border-4 border-white rounded-xl p-4">
        <h2 className="text-white text-3xl font-bold m-4">
          Current Posts and 1 for the Road
        </h2>
        <p className="text-white text-3xl font-bold m-4">
          Click on a post to see more details and all posted comments
        </p>
      </div>
      {/* <p>Click on title to toggle sort by title ascending / descending</p>  may not achieve*/}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}
