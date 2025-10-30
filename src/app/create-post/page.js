// /src/app/create-post/page.js

import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";

export default async function CreatePost() {
  const { userId } = await auth();
  //   If the foreign key is the SQL-generated id then we want to query the db to get that instead of the clerk id
  const properId = await db.query("SELECT id FROM users WHERE clerk_id = $1", [
    userId,
  ]);

  async function handlePost(formData) {
    //...
  }

  return <form action={handlePost}>{/* standard input setup */}</form>;
}
