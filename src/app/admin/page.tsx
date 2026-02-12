import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const response = await clerkClient();
  const user = await response.users.getUser(userId!);

  console.log(user);

  const metadata = user.publicMetadata;
  const isAdmin = metadata?.isAdmin;

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div>
      Admin
    </div>
  );
}