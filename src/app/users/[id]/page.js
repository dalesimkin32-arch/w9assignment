import { db } from "@/utils/dbConn";
import NavBar from "@/components/NavBar";

export default async function eachUser({ params }) {
  const { id } = await params;

  const response = await db.query(
    "SELECT * FROM m80_user_accounts WHERE user_id = $1",
    [id]
  );
  const user = response.rows[0];

  return (
    <div className="w-screen h-screen bg-gray-800 opacity-80">
      <NavBar />
      <div className="bg-blue-800 border-4 border-white rounded-xl p-8">
        <h1 className="text-white text-3xl font-bold">
          {user.username} | {user.bio}
        </h1>
      </div>
    </div>
  );
}
