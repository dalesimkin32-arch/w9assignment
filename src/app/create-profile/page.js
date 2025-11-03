// /src/app/create-profile/page.js

import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function CreateProfile() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    // db query to insert values from form into the users table, also insert the clerk id that we get from auth/currentUser
    // We can use userId directly in the query or add it as an input with 'type="hidden"' to include it with the formData
    const newUser = await db.query(
      "INSERT INTO m80_user_accounts (clerk-id, username, bio) VALUES ($1, $2, $3)",
      [userId, formData.username, formData.bio]
    );
    const activeUser = await db.query(
      "SELECT user_id FROM m80_user_accounts WHERE clerk_id = $1",
      [userId]
    );
    revalidatePath("/profile");
    redirect(`/profile/${activeUser}`);
  }

  return (
    <div className="container mx-auto p-4 w-screen h-screen bg-gray-800 opacity-80">
      <form
        action={handleSubmit}
        className="bg-green-800 border-4 border-white rounded-xl p-8"
      >
        {/* standard labels and inputs for whatever data we want to include in the profile */}
        <input
          name="username"
          placeholder="Enter a Username here.."
          required
        ></input>
        <label for="bio">Please enter you Bio info here?:-</label>
        <textarea
          name="bio"
          placeholder="Enter a bio here..."
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-green-700 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
