import Link from "next/link";
import { db } from "@/utils/dbConn";
import NavBar from "@/components/NavBar";

export default async function Users() {
  const res = await db.query("SELECT * FROM m80_user_accounts");
  const users = res.rows;

  console.log(users);

  return (
    <div className="w-screen h-screen bg-gray-800 opacity-80">
      <div className="container mx-auto p-4">
        <NavBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.user_id}
              className="bg-blue-800 border-4 border-white rounded-xl p-8"
            >
              <Link href={`/users/${user.user_id}`}>
                <h1 className="text-white text-3xl font-bold">
                  {user.username} | {user.bio}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
