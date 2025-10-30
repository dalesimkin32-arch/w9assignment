// /src/app/profile/page.js

import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";

export default async function Profile() {
  const { userId } = await auth();
  //   If the foreign key is the SQL-generated id then we want to query the db to get that instead of the clerk id
  const properId = await db.query("SELECT id FROM users WHERE clerk_id = $1", [
    userId,
  ]);

  const userInfo = await db.query({
    /* query to get all info on a specific user using either id or clerk_id*/
  });
  const userPost = await db.query({
    /* query to select all posts made by a specific user id */
  });
}
