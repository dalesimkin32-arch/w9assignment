// /src/app/create-post/page.js

import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";

export default async function CreatePost() {
  const { userId } = await auth();
  //   If the foreign key is the SQL-generated id then we want to query the db to get that instead of the clerk id
  const activeId = await db.query(
    "SELECT user_id FROM m80_user_accounts WHERE clerk_id = $1",
    [userId]
  );

  const activeUName = await db.query(
    "SELECT username FROM m80_user_accounts WHERE clerk_id = $1",
    [userId]
  );

  async function handlePost(formData) {
    //...
  }

  return <form action={handlePost}>{/* standard input setup */}</form>;
}
